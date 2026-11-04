"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CheckCircle2, Loader2, MapPin } from "lucide-react";
import { DeliveryLocation } from "@/lib/deliveryLocation";

const LocationPicker = dynamic(() => import("./LocationPicker"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
      <Loader2 size={28} className="animate-spin text-white" aria-label="Opening the map" />
    </div>
  ),
});

interface DeliveryLocationFieldProps {
  value: DeliveryLocation | null;
  onChange: (location: DeliveryLocation | null) => void;
}

// The checkout's map pin: optional, so a customer whose map or GPS fails can still order.
export default function DeliveryLocationField({ value, onChange }: DeliveryLocationFieldProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {value ? (
        <div className="border border-[#f9a825] bg-[#fff9ef] rounded-lg p-3 text-[13px]" data-testid="location-chosen">
          <p className="flex items-start gap-2 font-semibold text-[#2b1215]">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#4a0e14]" />
            <span>Delivery location set{value.address?.summary ? `: ${value.address.summary}` : ""}</span>
          </p>
          <p className="text-[12px] text-[#5c5a52] mt-1 pl-6">Please check the details below and add your house or flat number.</p>
          <div className="flex gap-4 mt-1.5 pl-6">
            <button type="button" onClick={() => setOpen(true)} className="font-bold text-[12.5px] text-[#b3261e] underline cursor-pointer">
              Change
            </button>
            <button type="button" onClick={() => onChange(null)} className="font-bold text-[12.5px] text-[#5c5a52] underline cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full flex items-center gap-2.5 px-3.5 py-3 border border-dashed border-[#f9a825] bg-[#fff9ef] hover:bg-[#fff6e6] rounded-lg text-left cursor-pointer transition"
        >
          <MapPin size={18} className="shrink-0 text-[#b3261e]" />
          <span>
            <span className="block text-[13.5px] font-bold text-[#4a0e14]">Choose your delivery location on the map</span>
            <span className="block text-[12px] text-[#5c5a52]">Optional. Helps our delivery person find your door.</span>
          </span>
        </button>
      )}
      {open && (
        <LocationPicker
          initial={value}
          onClose={() => setOpen(false)}
          onConfirm={(location) => {
            onChange(location);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
