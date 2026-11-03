"use client";

import React from "react";

export default function ShippingBar() {
  return (
    <aside className="w-full bg-[#2b1215] text-white py-[9px] sm:py-[10px] px-3 sm:px-6 text-center text-[13px] sm:text-[15px] lg:text-[16px] font-semibold leading-normal">
      <div className="max-w-[1440px] mx-auto">
        <span className="hidden sm:inline">
          Same-day or next-day delivery in Siliguri · 1 lighter FREE with every order · Minimum order ₹2,000
        </span>
        <span className="sm:hidden inline">
          Same/next-day delivery · Free lighter · Min ₹2,000
        </span>
      </div>
    </aside>
  );
}
