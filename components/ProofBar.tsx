"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProofBar() {
  return (
    <aside className="w-full bg-[#ffeccb] text-[#2b1215] border-b border-[#f3d9a8] py-4 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[14px] sm:text-[15px] font-medium">
        {/* Who we serve */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/siliguri-emblem.png"
            alt="Siliguri Pataka emblem"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover border border-[#e8c98f] flex-shrink-0"
          />
          <span>
            Your Diwali shop in{" "}
            <Link
              href="/pages/why-siliguri-pataka"
              className="text-[#4a0e14] font-bold underline decoration-[#f9a825] underline-offset-4 hover:text-[#b3261e] transition-colors"
            >
              Siliguri
            </Link>{" "}
            →
          </span>
        </div>

        {/* Separator */}
        <span className="hidden md:inline text-[#747576] select-none">|</span>

        {/* Delivery areas */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[#5c5a52]">
          <span className="font-semibold text-[#3d3b36]">Delivering across</span>

          <div className="flex items-center gap-4 sm:gap-6 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/assets/area-sevoke-road.svg"
              alt="Sevoke Road"
              width={92}
              height={22}
              className="h-4 sm:h-5 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/assets/area-hakimpara.svg"
              alt="Hakimpara"
              width={78}
              height={20}
              className="h-3.5 sm:h-4 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/assets/area-pradhan-nagar.svg"
              alt="Pradhan Nagar"
              width={108}
              height={20}
              className="h-3.5 sm:h-4.5 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/assets/area-champasari.svg"
              alt="Champasari"
              width={84}
              height={20}
              className="h-3.5 sm:h-4.5 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>

          <Link
            href="/shipping-returns"
            className="text-[#4a0e14] font-bold underline decoration-[#f9a825] underline-offset-4 hover:text-[#b3261e] transition-colors text-[13px] sm:text-[14px]"
          >
            Delivery details →
          </Link>
        </div>
      </div>
    </aside>
  );
}
