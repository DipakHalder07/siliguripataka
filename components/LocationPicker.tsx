"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { AlertCircle, Loader2, LocateFixed, MapPin, Search, X } from "lucide-react";
import {
  DELIVERY_BOUNDS,
  DeliveryLocation,
  DeliveryPin,
  getCurrentPosition,
  isInDeliveryArea,
  PinAddress,
  PlaceResult,
  reverseGeocode,
  searchPlaces,
  SILIGURI_CENTER,
} from "@/lib/deliveryLocation";

interface LocationPickerProps {
  initial: DeliveryLocation | null;
  onClose: () => void;
  onConfirm: (location: DeliveryLocation) => void;
}

type Lookup = "idle" | "loading" | "done";

// The pin stays in the middle and the customer moves the map under it, which is far easier on a
// phone than dragging a small marker. Loaded only when opened: the map code is not small.
export default function LocationPicker({ initial, onClose, onConfirm }: LocationPickerProps) {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const lookupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lookupAbort = useRef<AbortController | null>(null);
  // Until the customer points at somewhere, the map centre is just our default: never save that as their home.
  const pinChosen = useRef(Boolean(initial));
  const lookedUp = useRef<DeliveryPin | null>(initial);

  const [chosen, setChosen] = useState(Boolean(initial));
  const [address, setAddress] = useState<PinAddress | null>(initial?.address ?? null);
  const [lookup, setLookup] = useState<Lookup>(initial ? "done" : "idle");
  const [locating, setLocating] = useState(false);
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<PlaceResult[] | null>(null);
  const [searchFailed, setSearchFailed] = useState(false);

  const choosePin = useCallback(() => {
    pinChosen.current = true;
    setChosen(true);
  }, []);

  const moveTo = useCallback(
    (pin: DeliveryPin) => {
      choosePin();
      mapRef.current?.setView([pin.latitude, pin.longitude], 17);
    },
    [choosePin]
  );

  const locate = useCallback(async () => {
    setLocating(true);
    setNotice("");
    try {
      const pos = await getCurrentPosition();
      if (!isInDeliveryArea(pos.latitude, pos.longitude)) {
        setNotice("You seem to be outside our Siliguri delivery area. Move the map to the delivery address.");
      } else {
        moveTo(pos);
        if (pos.accuracy > 150) {
          setNotice(`Your location is approximate (about ${Math.round(pos.accuracy)} m). Move the map so the pin is on your home.`);
        }
      }
    } catch (err) {
      setNotice((err as Error).message);
    } finally {
      setLocating(false);
    }
  }, [moveTo]);

  useEffect(() => {
    if (!mapEl.current) return;
    const { south, west, north, east } = DELIVERY_BOUNDS;
    const start = initial ?? SILIGURI_CENTER;
    const map = L.map(mapEl.current, {
      center: [start.latitude, start.longitude],
      zoom: initial ? 17 : 13,
      minZoom: 12,
      maxBounds: [
        [south, west],
        [north, east],
      ],
      maxBoundsViscosity: 1,
      attributionControl: false,
    });
    mapRef.current = map;
    L.control.attribution({ prefix: false }).addTo(map);

    let loaded = 0;
    let failed = 0;
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
    })
      .on("tileload", () => {
        loaded++;
      })
      .on("tileerror", () => {
        failed++;
        if (failed === 4 && loaded === 0) {
          setNotice("The map could not load. You can use your current location, or skip this and type your address.");
        }
      })
      .addTo(map);

    map.on("dragstart", choosePin);
    map.on("click", (e: L.LeafletMouseEvent) => {
      choosePin();
      map.panTo(e.latlng);
    });
    const container = mapEl.current;
    container.addEventListener("keydown", (e) => {
      if (e.key.startsWith("Arrow") && e.target === container) choosePin();
    });

    // Look the address up once the map stops moving, not during the move.
    map.on("movestart", () => {
      if (lookupTimer.current) clearTimeout(lookupTimer.current);
      lookupAbort.current?.abort();
      lookupAbort.current = null;
      if (pinChosen.current) setLookup("loading");
    });
    map.on("moveend", () => {
      if (!pinChosen.current) return;
      const center = map.getCenter();
      // A phone's address bar hiding also fires this: the pin has not moved, so keep the address.
      const last = lookedUp.current;
      if (last && Math.abs(last.latitude - center.lat) < 0.00002 && Math.abs(last.longitude - center.lng) < 0.00002) {
        setLookup("done");
        return;
      }
      setLookup("loading");
      if (lookupTimer.current) clearTimeout(lookupTimer.current);
      lookupTimer.current = setTimeout(async () => {
        const controller = new AbortController();
        lookupAbort.current = controller;
        const timeout = setTimeout(() => controller.abort(), 6000);
        const found = await reverseGeocode({ latitude: center.lat, longitude: center.lng }, controller.signal);
        clearTimeout(timeout);
        // Skip the answer if the map moved again or closed in the meantime.
        if (lookupAbort.current === controller) {
          lookedUp.current = { latitude: center.lat, longitude: center.lng };
          setAddress(found);
          setLookup("done");
        }
      }, 800);
    });

    // The sheet may still be sizing itself on the first frame.
    const frame = requestAnimationFrame(() => map.invalidateSize());

    return () => {
      cancelAnimationFrame(frame);
      if (lookupTimer.current) clearTimeout(lookupTimer.current);
      lookupAbort.current?.abort();
      lookupAbort.current = null;
      map.remove();
      mapRef.current = null;
    };
    // The map is created once; `initial` is only its starting point.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosePin]);

  // The customer pressed the button that opened this, so asking for their location now is expected.
  useEffect(() => {
    if (initial) return;
    const timer = setTimeout(locate, 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey, true);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey, true);
    };
  }, [onClose]);

  const runSearch = async () => {
    const q = query.trim();
    if (q.length < 3 || searching) return;
    setSearching(true);
    setSearchFailed(false);
    setResults(null);
    const found = await searchPlaces(q);
    setSearching(false);
    if (found === null) setSearchFailed(true);
    else setResults(found);
  };

  const confirm = () => {
    const center = mapRef.current?.getCenter();
    if (!center || !chosen || lookup !== "done") return;
    onConfirm({ latitude: Number(center.lat.toFixed(6)), longitude: Number(center.lng.toFixed(6)), address });
  };

  const addressLine =
    !chosen
      ? "Move the map, tap your street, or use your current location."
      : lookup !== "done"
        ? "Finding the address…"
        : address?.summary || "Pin set. Please type your address on the form.";

  return createPortal(
    // Clicks must not travel on to the checkout behind this sheet (React sends them through portals).
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 sm:p-5"
      onClick={(e) => e.stopPropagation()}
      data-testid="location-picker"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Choose your delivery location"
        className="relative flex flex-col w-full h-[100dvh] sm:h-[min(680px,92vh)] sm:max-w-[640px] bg-white sm:rounded-2xl sm:border border-[#f0dfc6] shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#f0dfc6]">
          <h2 className="text-[15px] font-bold text-[#4a0e14]">Choose your delivery location</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close map"
            className="w-9 h-9 -mr-1.5 rounded-full flex items-center justify-center text-[#5c5a52] hover:bg-[#fff9ef] cursor-pointer"
          >
            <X size={19} />
          </button>
        </div>

        <div className="relative px-4 py-2.5 border-b border-[#f0dfc6]">
          <div className="flex gap-2">
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setResults(null);
                setSearchFailed(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void runSearch();
                }
              }}
              placeholder="Search your area or road"
              aria-label="Search your area or road"
              className="min-w-0 flex-1 px-3.5 py-2 border border-[#f0dfc6] rounded-lg text-[16px] sm:text-[14px] outline-none focus:border-[#f9a825]"
            />
            <button
              type="button"
              onClick={runSearch}
              disabled={searching || query.trim().length < 3}
              aria-label="Search"
              className="shrink-0 w-11 rounded-lg bg-[#4a0e14] text-white flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              {searching ? <Loader2 size={17} className="animate-spin" /> : <Search size={17} />}
            </button>
          </div>
          {(results || searchFailed) && (
            <div className="absolute left-4 right-4 top-full z-20 mt-1 bg-white border border-[#f0dfc6] rounded-lg shadow-lg max-h-[230px] overflow-y-auto">
              {searchFailed && <p className="p-3 text-[13px] text-[#5c5a52]">Search is not available right now. Please move the map to your address.</p>}
              {results?.length === 0 && <p className="p-3 text-[13px] text-[#5c5a52]">No match in our delivery area. Please move the map to your street.</p>}
              {results?.map((place) => (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => {
                    setResults(null);
                    setNotice("");
                    moveTo(place);
                  }}
                  className="w-full text-left px-3 py-2.5 text-[13px] text-[#2b1215] border-b last:border-b-0 border-[#f0dfc6] hover:bg-[#fff9ef] cursor-pointer"
                >
                  {place.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative flex-1 min-h-0 bg-[#fff9ef]">
          <div
            ref={mapEl}
            className="absolute inset-0 isolate"
            role="application"
            aria-label="Map. Move it so the pin is on your delivery address."
            data-testid="location-map"
          />
          {/* The pin's tip marks the centre of the map */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full pointer-events-none">
            <MapPin size={40} strokeWidth={1.75} className="text-[#4a0e14] fill-[#f9a825] drop-shadow-md" />
          </div>
          <button
            type="button"
            onClick={locate}
            disabled={locating}
            className="absolute right-3 bottom-8 z-10 flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-white border border-[#f0dfc6] shadow-md text-[13px] font-bold text-[#4a0e14] cursor-pointer disabled:opacity-70"
          >
            {locating ? <Loader2 size={15} className="animate-spin text-[#f9a825]" /> : <LocateFixed size={15} className="text-[#b3261e]" />}
            {locating ? "Finding you…" : "Use my current location"}
          </button>
        </div>

        <div className="px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] border-t border-[#f0dfc6] space-y-2.5">
          {notice && (
            <p role="alert" className="flex items-start gap-1.5 text-[12.5px] text-[#b3261e]">
              <AlertCircle size={14} className="shrink-0 mt-0.5" />
              <span>{notice}</span>
            </p>
          )}
          <p aria-live="polite" className="flex items-start gap-1.5 text-[13px] text-[#2b1215] min-h-[20px]">
            <MapPin size={15} className="shrink-0 mt-0.5 text-[#b3261e]" />
            <span>{addressLine}</span>
          </p>
          <button
            type="button"
            onClick={confirm}
            disabled={!chosen || lookup !== "done"}
            className="w-full bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] py-3 rounded-xl font-bold text-[14px] uppercase tracking-wider cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm this location
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
