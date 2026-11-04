"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, MapPin, X } from "lucide-react";

export default function WhySiliguriPataka() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="why-siliguri-pataka" className="w-full bg-white">
      {/* ============================================================== */}
      {/* MOBILE VIEW (< 1000px): Exact live site cards layout          */}
      {/* ============================================================== */}
      <div className="lg:hidden px-4 pt-4 pb-6">
        <h2 className="font-stencil text-[22px] sm:text-[24px] font-bold text-center tracking-[1.5px] uppercase mb-4 text-[#4a0e14]">
          WHY SILIGURI PATAKA
        </h2>

        <div className="flex flex-col gap-2">
          {/* Card 1: Photo / Video Card */}
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[10px] overflow-hidden transition-colors hover:border-[#4a0e14]">
            <div className="relative w-full aspect-[16/9] bg-[#1f070a] overflow-hidden">
              {isPlaying ? (
                <div className="relative w-full h-full">
                  <video
                    src="/assets/siliguri-diwali-night.mp4"
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-2 right-2 z-30 bg-black/70 hover:bg-black text-white rounded-full p-1.5 transition-colors cursor-pointer"
                    aria-label="Close video"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <Image
                    src="/assets/why-siliguri.webp"
                    alt="Diwali fireworks over a town at night"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 999px) 100vw, 400px"
                  />
                  <span className="absolute top-2 left-2 z-20 bg-[rgba(42,10,14,0.85)] rounded-[4px] px-[9px] py-[5px] text-[11px] font-bold text-white flex items-center gap-1.5 pointer-events-none">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f9a825"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21.5 5 15a7.5 7.5 0 1 1 14 0Z"></path>
                      <path d="M12 13.5V7.5"></path>
                    </svg>
                    We are in Siliguri
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[rgba(42,10,14,0.85)] flex items-center justify-center text-white cursor-pointer transition-transform active:scale-95 shadow-md"
                    aria-label="Play video"
                  >
                    <Play size={20} className="fill-white translate-x-0.5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-3 sm:p-4">
              <p className="text-[16px] font-bold text-[#2b1215] mb-0.5 leading-snug">
                Your Diwali shop, right here in Siliguri
              </p>
              <p className="text-[13.5px] text-[#5c5a52] leading-relaxed">
                We deliver only within Siliguri, so your crackers and gifts reach you the same day or the next day.
              </p>
            </div>
          </div>

          {/* Card 2: Everything in one order */}
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[10px] p-[14px_16px] flex items-center gap-3 transition-colors hover:border-[#b3261e]">
            <span className="w-10 h-10 rounded-lg bg-[#fff9ef] flex items-center justify-center shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b3261e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2.5 14.6 8l5.9.7-4.3 4.1 1.1 5.9L12 15.9 6.7 18.7l1.1-5.9L3.5 8.7 9.4 8Z"></path>
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#2b1215] leading-tight">
                Everything in one order
              </p>
              <p className="text-[13.5px] text-[#5c5a52] leading-tight mt-0.5">
                Crackers, hampers, lights and rangoli.
              </p>
            </div>
          </div>

          {/* Card 3: Delivered to your door */}
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[10px] p-[14px_16px] flex items-center gap-3 transition-colors hover:border-[#b3261e]">
            <span className="w-10 h-10 rounded-lg bg-[#fff9ef] flex items-center justify-center shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b3261e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5Z"></path>
                <path d="M3.5 7.5 12 12l8.5-4.5"></path>
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#2b1215] leading-tight">
                Delivered to your door
              </p>
              <p className="text-[13.5px] text-[#5c5a52] leading-tight mt-0.5">
                Same or next day · UPI or COD
              </p>
            </div>
          </div>

          {/* Card 4: Minimum order */}
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[10px] p-[14px_16px] flex items-center gap-3 transition-colors hover:border-[#b3261e]">
            <span className="w-10 h-10 rounded-lg bg-[#fff9ef] flex items-center justify-center shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b3261e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 12a8.5 8.5 0 1 1-2.9-6.4"></path>
                <path d="M20.5 3.5V9H15"></path>
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#2b1215] leading-tight">
                Minimum order ₹2,000
              </p>
              <p className="text-[13.5px] text-[#5c5a52] leading-tight mt-0.5">
                Free delivery + 1 free lighter.
              </p>
            </div>
          </div>

          {/* Card 5: Safety guide */}
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[10px] p-[14px_16px] flex items-center gap-3 transition-colors hover:border-[#b3261e]">
            <span className="w-10 h-10 rounded-lg bg-[#fff9ef] flex items-center justify-center shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b3261e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4.5h13v15H5.5A1.5 1.5 0 0 1 4 18Z"></path>
                <path d="M17 9h3v9a1.5 1.5 0 0 1-3 0Z"></path>
                <path d="M7.5 9h6"></path>
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-bold leading-tight">
                <Link
                  href="/blog/diwali-cracker-safety-guide"
                  className="text-[#4a0e14] font-bold underline decoration-[#f9a825] underline-offset-4 hover:text-[#b3261e] transition-colors"
                >
                  Read our safety guide →
                </Link>
              </p>
              <p className="text-[13.5px] text-[#5c5a52] leading-tight mt-0.5">
                Simple tips for a safe Diwali.
              </p>
            </div>
          </div>

          {/* Card 6: Bulk orders */}
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[10px] p-[14px_16px] flex items-center gap-3 transition-colors hover:border-[#b3261e]">
            <span className="w-10 h-10 rounded-lg bg-[#fff9ef] flex items-center justify-center shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b3261e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"></path>
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-bold leading-tight">
                <Link
                  href="/pages/corporate-gifting-2026"
                  className="text-[#4a0e14] font-bold underline decoration-[#f9a825] underline-offset-4 hover:text-[#b3261e] transition-colors"
                >
                  Bulk orders welcome →
                </Link>
              </p>
              <p className="text-[13.5px] text-[#5c5a52] leading-tight mt-0.5">
                For offices, clubs and societies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP VIEW (>= 1000px): Exact desktop layout                */}
      {/* ============================================================== */}
      <div className="hidden lg:block px-16 py-7 lg:py-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-11 items-center">
          {/* Left Column: Story */}
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-bold tracking-[2.5px] uppercase text-[#2b1215]">
              WHY SILIGURI PATAKA
            </span>

            <blockquote className="font-stencil text-[36px] font-bold text-[#2b1215] leading-[1.18] tracking-[-0.3px]">
              “Your Diwali, from your own city. Order online. We bring it home.”
            </blockquote>

            <p className="text-[15px] text-[#5c5a52] leading-[1.5] max-w-[560px]">
              Siliguri Pataka is built only for Siliguri. Pick your crackers, diyas and gift boxes online, pay by UPI or cash on delivery, and we deliver to your door across the city the same day or the next day, with 1 lighter free.
            </p>

            {/* Store emblem & story link */}
            <div className="flex items-center gap-3 pt-1">
              <Image
                src="/assets/siliguri-emblem.png"
                alt="Siliguri Pataka emblem"
                width={44}
                height={44}
                unoptimized
                className="w-11 h-11 rounded-full object-cover border-2 border-[#f0dfc6] flex-shrink-0"
              />
              <div className="text-[15px] text-[#2b1215]">
                <span className="font-bold">Siliguri Pataka</span>, Siliguri ·{" "}
                <Link
                  href="/pages/why-siliguri-pataka"
                  className="font-bold text-[#4a0e14] underline decoration-[#f9a825] underline-offset-4 hover:text-[#b3261e] transition-colors"
                >
                  Why shop with us →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: picture & video */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#f0dfc6] bg-[#1f070a]">
            {isPlaying ? (
              <div className="relative w-full h-full">
                <video
                  src="/assets/siliguri-diwali-night.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 z-30 bg-black/75 hover:bg-black text-white rounded-full p-2 transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <>
                <Image
                  src="/assets/why-siliguri.webp"
                  alt="Diwali fireworks over a town at night"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="45vw"
                />

                {/* Play Button Overlay */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[rgba(42,10,14,0.85)] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="Play Diwali fireworks video"
                >
                  <Play size={24} className="fill-white translate-x-0.5" />
                </button>

                {/* Location Pin */}
                <div className="absolute left-3 bottom-3 bg-[rgba(42,10,14,0.85)] rounded-md px-3 py-2 text-[12px] font-bold text-white flex items-center gap-2 pointer-events-none">
                  <MapPin size={16} className="text-[#f9a825]" />
                  <span>We are here — in Siliguri, West Bengal</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom 4-Stat Metric Row */}
        <div className="grid grid-cols-4 border-t border-[#f0dfc6] mt-6 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-bold text-[#2b1215] font-stencil leading-none">
              ₹2,000
            </span>
            <span className="text-[14px] text-[#5c5a52]">
              minimum order
            </span>
          </div>

          <div className="flex items-baseline gap-2 border-l border-[#f0dfc6] pl-6">
            <span className="text-[36px] font-bold text-[#2b1215] font-stencil leading-none">
              Today
            </span>
            <span className="text-[14px] text-[#5c5a52]">
              or tomorrow delivery
            </span>
          </div>

          <div className="flex items-baseline gap-2 border-l border-[#f0dfc6] pl-6">
            <span className="text-[36px] font-bold text-[#2b1215] font-stencil leading-none">
              COD
            </span>
            <span className="text-[14px] text-[#5c5a52]">
              or UPI, your choice
            </span>
          </div>

          <div className="flex items-baseline gap-2 border-l border-[#f0dfc6] pl-6">
            <span className="text-[36px] font-bold text-[#2b1215] font-stencil leading-none">
              35+
            </span>
            <span className="text-[14px] text-[#5c5a52]">
              crackers, lights &amp; gifts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
