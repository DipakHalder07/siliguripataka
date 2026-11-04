"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { toast } from "sonner";
import { Copy, ExternalLink, MapPin, Navigation } from "lucide-react";
import { googleDirectionsUrl, googleMapsUrl } from "@/lib/deliveryLocation";

// The customer's map pin on an order or abandoned checkout, with the links the delivery person needs.
export default function DeliveryPinCard({ latitude, longitude }: { latitude: number; longitude: number }) {
  const mapEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapEl.current) return;
    const map = L.map(mapEl.current, {
      center: [latitude, longitude],
      zoom: 16,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      keyboard: false,
      attributionControl: false,
    });
    L.control.attribution({ prefix: false }).addTo(map);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
    }).addTo(map);
    const frame = requestAnimationFrame(() => map.invalidateSize());
    return () => {
      cancelAnimationFrame(frame);
      map.remove();
    };
  }, [latitude, longitude]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(googleMapsUrl(latitude, longitude));
      toast.success("Map link copied");
    } catch {
      toast.error("Could not copy. Use Open in Google Maps instead.");
    }
  };

  const linkClass =
    "inline-flex items-center gap-1 font-semibold text-[12.5px] text-[#b3261e] hover:underline cursor-pointer";

  return (
    <div className="mt-2 space-y-2" data-testid="delivery-pin-card">
      <span className="text-[11px] font-bold text-[#747576] uppercase tracking-wider block">Customer&apos;s map location</span>
      <div className="relative h-[150px] rounded-xl overflow-hidden border border-[#f0dfc6] bg-[#fff9ef]">
        <div ref={mapEl} className="absolute inset-0 isolate" />
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full pointer-events-none">
          <MapPin size={32} strokeWidth={1.75} className="text-[#4a0e14] fill-[#f9a825] drop-shadow-md" />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <a href={googleMapsUrl(latitude, longitude)} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <ExternalLink size={13} /> Open in Google Maps
        </a>
        <a href={googleDirectionsUrl(latitude, longitude)} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Navigation size={13} /> Directions
        </a>
        <button type="button" onClick={copyLink} className={linkClass}>
          <Copy size={13} /> Copy link for delivery person
        </button>
      </div>
    </div>
  );
}
