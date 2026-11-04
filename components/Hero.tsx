"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white border-b border-[#f0dfc6]/60 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Media on Mobile appears on top, on Desktop appears on right */}
        <div className="order-1 lg:order-2 relative w-full h-[240px] sm:h-[360px] lg:h-full min-h-[380px] lg:min-h-[520px] bg-[#f2ece2]">
          <Image
            src="/assets/hero-diwali.webp"
            alt="Assorted Diwali crackers laid out on a table with diyas and marigolds at dusk"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="order-2 lg:order-1 px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16 flex flex-col justify-center gap-4 sm:gap-5">
          {/* Badge */}
          <div className="self-start inline-flex items-center gap-2 bg-[#fff9ef] border border-[#f0dfc6] text-[#2b1215] rounded px-3 py-1.5 text-[12px] sm:text-[13px] font-bold tracking-[1px] uppercase">
            <span className="text-[#b3261e] tracking-tight text-[14px]">✦✦✦</span>
            <span>DIWALI 2026 · DELIVERY ONLY IN SILIGURI</span>
          </div>

          {/* Heading in the stencil font */}
          <h1 className="font-stencil text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-[#2b1215] leading-[1.1] tracking-[-0.5px]">
            BUY DIWALI CRACKERS &amp; GIFT HAMPERS ONLINE IN SILIGURI
          </h1>

          {/* Subheading */}
          <p className="text-[15px] sm:text-[17px] text-[#3d3b36] leading-[1.55] max-w-[500px]">
            Crackers, mega packs, gift hampers, lights, diyas and puja essentials for Diwali and Kali Puja. Order online and get it the same day or the next day, only within Siliguri.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Link
              href="#combo-boxes"
              className="av-btn av-btn-fill px-7 py-3.5 sm:py-4 text-[15px] sm:text-[16px] text-center"
            >
              SHOP MEGA PACKS
            </Link>
            <Link
              href="#best-sellers"
              className="av-btn av-btn-outline px-7 py-3.5 sm:py-4 text-[15px] sm:text-[16px] text-center"
            >
              SHOP BEST SELLERS
            </Link>
          </div>

          {/* Guarantee */}
          <div className="text-[14px] text-[#5c5a52] text-center sm:text-left pt-1">
            1 lighter FREE with every order · Free delivery · Minimum order ₹2,000 · COD available
          </div>
        </div>
      </div>
    </section>
  );
}
