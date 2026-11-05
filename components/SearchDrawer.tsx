"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "./context/CartContext";
import { Search, X, ArrowRight } from "lucide-react";

const searchableItems = [
  { id: "mega-family-pack", title: "Mega Family Pack", category: "Mega Packs Combo", price: 4999, weight: "1 Pack", image: "/assets/mega-family.webp", description: "Best value · Save ₹2,324" },
  { id: "mega-starter-pack", title: "Mega Starter Pack", category: "Mega Packs Combo", price: 2499, weight: "1 Pack", image: "/assets/mega-starter.webp", description: "A mix for one family evening" },
  { id: "mega-grand-show-pack", title: "Mega Grand Show Pack", category: "Mega Packs Combo", price: 9999, weight: "1 Pack", image: "/assets/mega-grand.webp", description: "With the 120-shot grand finale" },
  { id: "pataka-diya-diwali-hamper", title: "Pataka + Diya Diwali Hamper", category: "Gift Hampers Combo", price: 1849, weight: "1 Combo", image: "/assets/combo-pataka-diyas.webp", description: "Crackers & clay diyas" },
  { id: "royal-electric-sparklers-30cm", title: "Royal Electric Sparklers 30cm", category: "Sparklers Phuljhari", price: 349, weight: "Pack of 50 Sticks", image: "/assets/ck-sparkler-gold.webp", description: "Golden sparks · Long burn" },
  { id: "deluxe-tri-color-flower-pots", title: "Deluxe Tri-Color Flower Pots", category: "Flower Pots Anar Tubri", price: 499, weight: "Pack of 10", image: "/assets/ck-anar-tricolor.webp", description: "Gold, crimson & silver sparks" },
  { id: "deluxe-special-spinning-chakkar", title: "Deluxe Ground Chakkar", category: "Ground Chakkars Chorki", price: 399, weight: "Pack of 20 Pcs", image: "/assets/ck-chakkar.webp", description: "High-speed spinning rings" },
  { id: "super-sonic-whistling-sky-rockets", title: "Super Sonic Whistling Sky Rockets", category: "Rockets Hawai", price: 599, weight: "Pack of 10 Rockets", image: "/assets/ck-rockets.webp", description: "Whistling ascent · Colour burst" },
  { id: "sky-king-30-aerial-shots", title: "Sky King 30 Aerial Shots", category: "Aerial Shots Sky Cakes", price: 1299, weight: "1 Cake (30 Shots)", image: "/assets/ck-cake-30.webp", description: "30 shots · 5 vibrant colours" },
  { id: "kids-fun-fiesta-green-pack", title: "Kids Fun Fiesta Box", category: "Kids Special", price: 899, weight: "1 Kids Hamper", image: "/assets/ck-kids-box.webp", description: "Pop pops, snakes & colour smoke" },
  { id: "hand-painted-clay-diyas", title: "Clay Diyas", category: "Diyas Decor", price: 149, weight: "Pack of 12", image: "/assets/decor-clay-diyas.webp", description: "Traditional terracotta diyas" },
  { id: "warm-led-string-lights", title: "Warm LED String Lights", category: "Home Decor Lights", price: 349, weight: "1 String", image: "/assets/hd-string-lights.webp", description: "Fairy lights for balcony and windows" },
  { id: "hanging-paper-lantern-kandil", title: "Hanging Paper Lantern (Kandil)", category: "Home Decor Lantern", price: 299, weight: "1 Lantern", image: "/assets/hd-lantern-orange.webp", description: "Traditional festive lantern" },
  { id: "brass-flower-bowl-urli", title: "Brass Floating Diya Bowl (Urli)", category: "Home Decor Diya", price: 799, weight: "1 Bowl", image: "/assets/hd-flower-bowl.webp", description: "For floating flowers and diyas" },
  { id: "festive-sweets-diya-gift-hamper", title: "Festive Diya Gift Hamper", category: "Gift Hampers", price: 1499, weight: "1 Hamper", image: "/assets/hamper-festive.webp", description: "Diyas and festive touches in a gift box" },
  { id: "family-diwali-gift-hamper", title: "Family Diwali Gift Hamper", category: "Gift Hampers", price: 2499, weight: "1 Hamper", image: "/assets/hamper-family.webp", description: "Treats for the whole family" },
  { id: "rangoli-colour-set", title: "Rangoli Colour Set", category: "Decor Rangoli", price: 199, weight: "1 Set", image: "/assets/decor-rangoli-set.webp", description: "Bright rangoli colours" },
  { id: "diwali-puja-thali-set", title: "Diwali Puja Thali Set", category: "Puja Decor", price: 399, weight: "1 Set", image: "/assets/decor-puja-thali.webp", description: "Thali, diya, kumkum, haldi & more" },
];

export default function SearchDrawer() {
  const { isSearchOpen, closeSearch, addToCart } = useCart();
  const [query, setQuery] = useState("");

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isSearchOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSearchOpen, closeSearch]);

  const popularKeywords = [
    "Sparklers",
    "Flower Pots",
    "Mega Pack",
    "Hamper",
    "Rockets",
    "Diyas",
  ];

  const filteredItems = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeSearch();
            }}
            aria-label="Close search backdrop"
          />

          {/* Drawer Container */}
          <div
            className="fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.preventDefault();
                e.stopPropagation();
                closeSearch();
              }
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="w-screen max-w-[460px] bg-white shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#f0dfc6] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
          {/* Search Header */}
          <div className="p-4 sm:p-5 border-b border-[#f0dfc6] flex items-center gap-3 bg-white">
            <Search size={22} className="text-[#5c5a52] flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search crackers, hampers, diyas..."
              className="flex-1 text-[16px] text-[#2b1215] placeholder-[#747576] outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-[13px] text-[#747576] hover:text-[#2b1215] font-medium px-1.5 py-1"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeSearch();
              }}
              className="w-11 h-11 -mr-2.5 flex items-center justify-center text-[#5c5a52] hover:text-[#2b1215] active:text-[#b3261e] rounded-full hover:bg-[#f0f0f0] active:bg-[#e8e8e8] active:scale-95 transition-all cursor-pointer touch-manipulation select-none"
              aria-label="Close search"
            >
              <X size={22} strokeWidth={2.2} />
            </button>
          </div>

          {/* Search Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {query.trim() === "" ? (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-[13px] font-bold tracking-wider uppercase text-[#747576] mb-3">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {popularKeywords.map((kw) => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => setQuery(kw)}
                        className="px-3.5 py-1.5 rounded-full bg-[#fff9ef] hover:bg-[#f9a825]/15 text-[#4a0e14] text-[13px] font-medium border border-[#f0dfc6] transition-colors"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold tracking-wider uppercase text-[#747576] mb-3">
                    Trending This Diwali
                  </h4>
                  <div className="flex flex-col gap-3">
                    {searchableItems.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          closeSearch();
                          addToCart({
                            id: item.id,
                            title: item.title,
                            price: item.price,
                            image: item.image,
                            weight: item.weight,
                          });
                        }}
                        className="p-2.5 rounded-lg border border-[#f0dfc6] hover:border-[#f9a825] flex items-center justify-between cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded bg-[#fff9ef] overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-[#2b1215] group-hover:text-[#b3261e]">
                              {item.title}
                            </div>
                            <div className="text-[12px] text-[#5c5a52]">
                              ₹{item.price} · {item.weight}
                            </div>
                          </div>
                        </div>
                        <span className="text-[12px] font-bold text-[#b3261e] group-hover:translate-x-0.5 transition-transform">
                          Add +
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="py-12 text-center text-[#5c5a52]">
                <p className="text-[16px] font-bold text-[#2b1215] mb-1">
                  No matching products found
                </p>
                <p className="text-[14px]">
                  Try searching for &quot;Sparklers&quot;, &quot;Gift Box&quot;, or &quot;Diyas&quot;
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="text-[13px] text-[#747576] font-medium mb-1">
                  {filteredItems.length} results found
                </div>
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-lg border border-[#f0dfc6] hover:border-[#f9a825] flex items-center justify-between transition-colors bg-white shadow-2xs group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-14 h-14 rounded-lg bg-[#fff9ef] overflow-hidden flex-shrink-0 border border-[#f0dfc6]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[14px] font-bold text-[#2b1215] group-hover:text-[#b3261e] truncate">
                          {item.title}
                        </div>
                        <div className="text-[12px] text-[#5c5a52] truncate">
                          {item.description}
                        </div>
                        <div className="text-[13px] font-bold text-[#4a0e14] mt-0.5">
                          ₹{item.price} ({item.weight})
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        closeSearch();
                        addToCart({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          image: item.image,
                          weight: item.weight,
                        });
                      }}
                      className="px-3 py-1.5 bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] text-[12px] font-bold rounded uppercase whitespace-nowrap transition-colors"
                    >
                      Add +
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 border-t border-[#f0dfc6] bg-[#fff9ef] text-center text-[12px] text-[#5c5a52]">
            Same-day or next-day in Siliguri · 1 lighter free · Min ₹2,000
          </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
