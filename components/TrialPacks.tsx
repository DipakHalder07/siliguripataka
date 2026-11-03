"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "./context/CartContext";
import Link from "next/link";
import { Check, Star } from "lucide-react";

interface TrialPack {
  id: string;
  title: string;
  accent: string;
  accentColor: string;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  price: number;
  buttonLabel: string;
  weight: string;
}

const trialPacksData: TrialPack[] = [
  {
    id: "royal-diwali-mega-gift-box",
    title: "Royal Diwali Mega Gift Box",
    accent: "Family box · 45 assorted items",
    accentColor: "#8a5a18",
    image: "/assets/combo-royal-mega.webp",
    rating: 0,
    reviewCount: 0,
    features: [
      "Sparklers, flower pots & chakkars",
      "Rockets & an aerial shot cake",
      "Enough for a full family evening",
    ],
    price: 2499,
    buttonLabel: "ADD GIFT BOX — ₹2,499",
    weight: "1 Deluxe Box",
  },
  {
    id: "pataka-mithai-diwali-combo",
    title: "Pataka + Mithai Diwali Combo",
    accent: "Crackers · sweets · diyas",
    accentColor: "#2b1215",
    image: "/assets/combo-pataka-mithai.webp",
    rating: 0,
    reviewCount: 0,
    features: [
      "Assorted crackers box",
      "500G mithai in a gift pack",
      "12 clay diyas for your home",
    ],
    price: 2299,
    buttonLabel: "ADD COMBO — ₹2,299",
    weight: "1 Combo",
  },
  {
    id: "siliguri-super-bumper-family-hamper",
    title: "Siliguri Super Bumper Family Hamper",
    accent: "Grand family pack · 65 items",
    accentColor: "#5c4a1b",
    image: "/assets/combo-super-bumper.webp",
    rating: 0,
    reviewCount: 0,
    features: [
      "2 sky shot cakes & 20 rockets",
      "20 jumbo anars & 30 chakkars",
      "100 sparklers for everyone",
    ],
    price: 4999,
    buttonLabel: "ADD BUMPER BOX — ₹4,999",
    weight: "1 Jumbo Hamper (65 Pcs)",
  },
];

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
              OUR 3 MEGA COMBOS
            </h2>
          </div>
          <div className="self-start sm:self-auto flex items-center gap-3">
            <span className="inline-block text-[#5c5a52] text-[13px] sm:text-[14px] font-medium border-[1.5px] border-[#f9a825] rounded px-3 py-1 bg-white">
              1 lighter FREE with every order. Minimum order ₹2,000.
            </span>
            <Link
              href="/collections/gift-boxes"
              className="hidden sm:inline-block text-[14px] font-bold text-[#4a0e14] hover:text-[#b3261e] transition-colors"
            >
              View all combos →
            </Link>
          </div>
        </div>

        {/* 3-Column Pack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {trialPacksData.map((pack) => {
            const productHref = `/products/${pack.id}`;
            return (
              <div
                key={pack.id}
                className="group relative bg-white border border-[#f0dfc6] rounded-[10px] overflow-hidden flex flex-col justify-between"
              >
                {/* Media Image with Link */}
                <Link
                  href={productHref}
                  className="block relative aspect-square w-full bg-[#f7d9a6]/30 overflow-hidden cursor-pointer"
                >
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
                      style={{ color: pack.accentColor }}
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

                    {/* Rating Stars: only once there are real ratings */}
                    {pack.reviewCount > 0 && (
                    <div className="flex items-center gap-1.5 text-[13px] text-[#2b1215]">
                      <div className="flex text-[#e8770f]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#e8770f] text-[#e8770f]"
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{pack.rating}</span>
                      <span className="text-[#5c5a52]">({pack.reviewCount})</span>
                    </div>
                    )}

                    {/* Bullet features */}
                    <ul className="flex flex-col gap-1 text-[14px] text-[#3d3b36] pt-1">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check size={14} className="text-[#e65100] stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                        <span>{pack.buttonLabel}</span>
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
