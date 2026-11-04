// The map pin a customer can add to an order, so the delivery person finds the exact door.
// Safe to import on the server: the browser-only functions touch `navigator` and `fetch` only
// when they are called.

export interface DeliveryPin {
  latitude: number;
  longitude: number;
}

export interface PinAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
  summary: string;
}

export interface DeliveryLocation extends DeliveryPin {
  address: PinAddress | null;
}

export interface PlaceResult extends DeliveryPin {
  id: number;
  label: string;
}

export const SILIGURI_CENTER: DeliveryPin = { latitude: 26.7271, longitude: 88.3953 };

// The shop delivers only in and around Siliguri. The map cannot be moved outside this box.
export const DELIVERY_BOUNDS = { south: 26.58, west: 88.24, north: 26.88, east: 88.52 };

export function isInDeliveryArea(latitude: number, longitude: number) {
  return (
    latitude >= DELIVERY_BOUNDS.south &&
    latitude <= DELIVERY_BOUNDS.north &&
    longitude >= DELIVERY_BOUNDS.west &&
    longitude <= DELIVERY_BOUNDS.east
  );
}

/** For the server: keeps a pin only if it is a real place in the delivery area. Never fails an order. */
export function cleanDeliveryPin(latitude: unknown, longitude: unknown) {
  if (typeof latitude !== "number" || typeof longitude !== "number" || !isInDeliveryArea(latitude, longitude)) {
    return { latitude: null, longitude: null };
  }
  return { latitude: Number(latitude.toFixed(6)), longitude: Number(longitude.toFixed(6)) };
}

export function googleMapsUrl(latitude: number, longitude: number) {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

export function googleDirectionsUrl(latitude: number, longitude: number) {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

export interface PositionResult extends DeliveryPin {
  accuracy: number;
}

function requestPosition(options: PositionOptions) {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

/** The phone's current position. Precise GPS first, then the network position if GPS cannot get a fix. */
export async function getCurrentPosition(): Promise<PositionResult> {
  if (typeof navigator === "undefined" || !navigator.geolocation) {
    throw new Error("This browser cannot share your location. Move the map to your address instead.");
  }
  try {
    let pos: GeolocationPosition;
    try {
      pos = await requestPosition({ enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
    } catch (err) {
      if ((err as GeolocationPositionError).code === 1) throw err;
      pos = await requestPosition({ enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
    }
    return { latitude: pos.coords.latitude, longitude: pos.coords.longitude, accuracy: pos.coords.accuracy };
  } catch (err) {
    throw new Error(
      (err as GeolocationPositionError).code === 1
        ? "Location is blocked for this site. Allow it in your browser settings, or move the map to your address."
        : "We could not find your location. Check that location is on, or move the map to your address."
    );
  }
}

interface NominatimAddress {
  road?: string;
  neighbourhood?: string;
  residential?: string;
  suburb?: string;
  village?: string;
  city?: string;
  town?: string;
  municipality?: string;
  state?: string;
  postcode?: string;
}

/** Turns a map lookup into form fields. A PIN is used only if the map really has one, never guessed. */
export function toPinAddress(addr: NominatimAddress): PinAddress {
  const locality = addr.neighbourhood || addr.residential || addr.suburb || addr.village || "";
  const street = [addr.road, locality].filter(Boolean).join(", ");
  const city = addr.city || addr.town || addr.municipality || "Siliguri";
  const state = addr.state || "West Bengal";
  const digits = (addr.postcode || "").replace(/\D/g, "");
  const pincode = digits.length === 6 ? digits : "";
  return { street, city, state, pincode, summary: [street, city, pincode].filter(Boolean).join(", ") };
}

/** The address at a point, or null if the lookup fails: the pin itself is still good. */
export async function reverseGeocode(pin: DeliveryPin, signal?: AbortSignal): Promise<PinAddress | null> {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${pin.latitude}&lon=${pin.longitude}&format=jsonv2&addressdetails=1&accept-language=en`;
    const res = await fetch(url, { signal: signal ?? AbortSignal.timeout(6000) });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.address ? toPinAddress(data.address) : null;
  } catch {
    return null;
  }
}

/** Places in the delivery area that match what the customer typed. Called on submit, not per keystroke. */
export async function searchPlaces(query: string): Promise<PlaceResult[] | null> {
  const { west, north, east, south } = DELIVERY_BOUNDS;
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=jsonv2&limit=5&countrycodes=in&bounded=1&viewbox=${west},${north},${east},${south}&accept-language=en`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const rows: Array<{ place_id: number; display_name: string; lat: string; lon: string }> = await res.json();
    return rows.map((r) => ({
      id: r.place_id,
      label: r.display_name.replace(/, (West Bengal|India).*$/, ""),
      latitude: Number(r.lat),
      longitude: Number(r.lon),
    }));
  } catch {
    return null;
  }
}

export type AddressFields = Pick<PinAddress, "city" | "state" | "pincode"> & { address: string };

/**
 * What a new pin should fill in. PIN, city and state always follow the pin. The street box is filled
 * only if it is empty or still holds what the last pin filled, so a typed house number is never lost.
 */
export function pinFieldUpdates(current: AddressFields, lastFilled: Partial<AddressFields>, next: PinAddress) {
  const updates: Partial<AddressFields> = {};
  if (next.pincode) updates.pincode = next.pincode;
  if (next.city) updates.city = next.city;
  if (next.state) updates.state = next.state;
  if (next.street && (!current.address.trim() || current.address === lastFilled.address)) updates.address = next.street;
  return updates;
}
