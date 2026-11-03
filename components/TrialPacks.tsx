"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "./context/CartContext";
import Link from "next/link";
import { Check } from "lucide-react";
import { MEGA_PACKS, MegaPack, packWorth } from "@/lib/megaPacks";

type TrialPack = MegaPack;

export default function TrialPacks() {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleAddToCart = (e: React.MouseEvent, pack: TrialPack) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingId(pack.id);
    setTimeout(() => {
      addToCart({
        id: pack.id,
        title: pack.title,
        price: pack.price,
        image: pack.image,
        weight: pack.weight,
      });
      setLoadingId(null);
    }, 250);
  };

  return (
    <section id="combo-boxes" className="w-full bg-[#fff9ef] border-t border-[#f0dfc6] py-10 sm:py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h2 className="font-stencil text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#2b1215] tracking-[-0.2px]">
              OUR 3 MEGA PACKS
            </h2>
          </div>
          <div className="self-start sm:self-auto flex items-center gap-3">
            <span className="inline-block text-[#5c5a52] text-[13px] sm:text-[14px] font-medium border-[1.5px] border-[#f9a825] rounded px-3 py-1 bg-white">
              Save up to ₹3,601 compared to buying separately. Diwali is on 8 Nov.
            </span>
            <Link
              href="/collections/mega-packs"
              className="hidden sm:inline-block text-[14px] font-bold text-[#4a0e14] hover:text-[#b3261e] transition-colors"
            >
              View mega packs →
            </Link>
          </div>
        </div>

        {/* 3-Column Pack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {MEGA_PACKS.map((pack) => {
            const worth = packWorth(pack);
            const saving = worth - pack.price;
            const productHref = `/products/${pack.id}`;
            return (
              <div
                key={pack.id}
                className={`group relative bg-white rounded-[10px] overflow-hidden flex flex-col justify-between ${
                  pack.badge === "BEST VALUE" ? "border-2 border-[#f9a825] shadow-xl lg:-my-3" : "border border-[#f0dfc6]"
                }`}
              >
                {/* Media Image with Link */}
                <Link
                  href={productHref}
                  className="block relative aspect-square w-full bg-[#f7d9a6]/30 overflow-hidden cursor-pointer"
                >
                  {pack.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-[#4a0e14] text-white text-[11px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded">
                      {pack.badge}
                    </span>
                  )}
                  <Image
                    src={pack.image}
                    alt={pack.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                {/* Body Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    {/* Accent tag */}
                    <div
                      className="text-[13px] font-bold tracking-[0.8px] uppercase"
                      style={{ color: "#8a5a18" }}
                    >
                      {pack.accent}
                    </div>

                    {/* Title with Link */}
                    <Link
                      href={productHref}
                      className="hover:text-[#b3261e] transition-colors cursor-pointer"
                    >
                      <h3 className="text-[17px] sm:text-[19px] font-bold text-[#2b1215] leading-snug">
                        {pack.title}
                      </h3>
                    </Link>

                    {/* Price and real saving, compared with buying the same items separately */}
                    <div className="rounded-lg bg-[#fff6e6] border border-[#f7d9a6] px-3 py-2.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[26px] font-bold text-[#2b1215] leading-none">₹{pack.price.toLocaleString("en-IN")}</span>
                        <s className="text-[14px] text-[#5c5a52]">₹{worth.toLocaleString("en-IN")}</s>
                      </div>
                      <div className="text-[13px] font-bold text-[#b3261e] mt-1">
                        You save ₹{saving.toLocaleString("en-IN")} ({Math.round((saving / worth) * 100)}%) vs buying separately
                      </div>
                    </div>

                    {/* Bullet features */}
                    <ul className="flex flex-col gap-1 text-[14px] text-[#3d3b36] pt-1">
                      {pack.items.map((item) => (
                        <li key={item.label} className="flex items-center gap-1.5">
                          <Check size={14} className="text-[#e65100] stroke-[2.5] shrink-0" />
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[13px] text-[#4a0e14] font-semibold pt-1">{pack.nudge}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#f0ece4]">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, pack)}
                      disabled={loadingId === pack.id}
                      className="w-full bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[14px] sm:text-[15px] py-3.5 px-4 rounded-[6px] tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-none active:brightness-95"
                    >
                      {loadingId === pack.id ? (
                        <span className="inline-block w-4 h-4 border-2 border-[#4a0e14] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span>ADD PACK — ₹{pack.price.toLocaleString("en-IN")}</span>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#5c5a52] px-1">
                      <span>Same-day or next-day · Siliguri only</span>
                      <Link
                        href={productHref}
                        className="text-[#4a0e14] hover:text-[#b3261e] font-semibold transition-colors underline decoration-[#f9a825] underline-offset-2"
                      >
                        Details ➝
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
