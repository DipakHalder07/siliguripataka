"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoSplit({ onOpenPackFinder }: { onOpenPackFinder?: () => void }) {
  return (
    <section id="promo-split" className="w-full bg-[#fff9ef] px-4 pt-4 pb-0 lg:px-16 lg:pt-0 lg:pb-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-6 items-stretch">
        {/* Card 1: Gift hampers */}
        <div className="group relative bg-white border border-[#f0dfc6] rounded-[10px] overflow-hidden flex flex-col lg:grid lg:grid-cols-2">
          {/* Media with Link */}
          <Link
            href="/collections/gift-hampers"
            className="block relative w-full aspect-[752/480] lg:aspect-auto lg:h-full bg-[#fff9ef] overflow-hidden cursor-pointer"
          >
            <span className="absolute top-[10px] left-[10px] z-20 bg-[#f9a825] text-[#4a0e14] text-[11px] font-bold tracking-[1px] uppercase px-[10px] py-[5px] rounded-[4px] pointer-events-none">
              READY TO GIFT
            </span>
            <Image
              src="/assets/hamper-family.webp"
              alt="Diwali gift boxes wrapped in festive colours"
              fill
              className="object-cover"
              sizes="(max-width: 999px) 100vw, 40vw"
            />
          </Link>

          {/* Body */}
          <div className="p-[16px_18px_20px] lg:p-[26px_28px] flex flex-col gap-2 justify-center text-center lg:text-left">
            <Link href="/collections/gift-hampers" className="hover:text-[#b3261e] transition-colors cursor-pointer">
              <h3 className="text-[17px] lg:text-[18px] font-bold text-[#2b1215] leading-[1.2] m-0">
                DIWALI GIFT HAMPERS, DELIVERED IN SILIGURI
              </h3>
            </Link>
            <p className="text-[14px] text-[#5c5a52] leading-[1.5] m-0">
              Family, puja and office hampers, plus crackers with diyas, ready to give.
            </p>
            <Link
              href="/collections/gift-hampers"
              className="w-full lg:w-auto lg:self-start mt-1 py-[13px] px-5 text-[14px] font-bold bg-[#f9a825] text-[#4a0e14] rounded-[6px] tracking-[0.5px] text-center inline-block hover:brightness-105 transition-all cursor-pointer shadow-none"
            >
              SHOP GIFT HAMPERS →
            </Link>
          </div>
        </div>

        {/* Card 2: Help me choose quiz */}
        <div className="bg-[#ffeccb] text-[#2b1215] rounded-[10px] p-[20px_18px] lg:p-7 flex flex-col justify-center items-center text-center gap-1 lg:gap-[10px] border border-transparent hover:border-[#2b1215] transition-colors duration-150">
          <h3 className="text-[17px] lg:text-[18px] font-bold text-[#2b1215] leading-snug m-0">
            NOT SURE WHAT TO BUY?
          </h3>
          <p className="text-[14px] text-[#3d3b36] mt-1 leading-[1.4] max-w-[360px] m-0">
            Tell us who is celebrating and we&apos;ll suggest the right box for your Diwali.
          </p>
          <button
            type="button"
            onClick={onOpenPackFinder}
            className="w-full lg:w-fit lg:mx-auto mt-3 lg:mt-2 py-[13px] lg:py-3.5 px-5 lg:px-6 text-[14px] font-bold bg-[#f9a825] text-[#4a0e14] rounded-[6px] tracking-[0.5px] text-center cursor-pointer hover:brightness-105 transition-all shadow-sm"
          >
            HELP ME CHOOSE →
          </button>
        </div>
      </div>
    </section>
  );
}
