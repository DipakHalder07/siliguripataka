"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "./context/CartContext";
import { findVariant } from "@/lib/productVariants";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const productUrl = product.url || `/products/${product.handle || product.id}`;
  const [isHovered, setIsHovered] = useState(false);
  // The size this button adds, at that size's price (not the product's headline price).
  const variant = findVariant(product, product.weight);
  const weight = product.weight ? variant.name : "";

  // On mobile screens, show a shorter, punchy description (before separators like ·, •, or capped at 32 chars)
  const shortDescription = React.useMemo(() => {
    const raw = product.subtitle || product.description || "";
    if (!raw) return "";
    const firstClause = raw.split(/\s*[·•|]\s*/)[0].trim();
    if (firstClause.length > 34) {
      return firstClause.slice(0, 32).trim() + "…";
    }
    return firstClause;
  }, [product.subtitle, product.description]);

  const soldOut = !product.inStock;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (soldOut) return;
    addToCart({
      id: `${product.id}-${weight || "default"}`,
      title: product.title,
      weight,
      price: variant.price,
      image: product.image,
    });
  };

  const hasMultipleSizes = product.weights && product.weights.length > 1;

  // e.g. "ADD 500G — ₹649". Long pack names ("Pack of 50 Sticks") don't fit the button: "ADD — ₹349"
  const buttonLabel = weight && weight.length <= 8
    ? `ADD ${weight.toUpperCase()} — ₹${variant.price.toLocaleString("en-IN")}`
    : `ADD — ₹${variant.price.toLocaleString("en-IN")}`;

  return (
    <div
      className="group relative bg-white border border-[#f0dfc6] rounded-[12px] overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Figure with 1:1 Aspect Ratio and Smooth Cross-Fade Hover */}
      <div className="relative w-full aspect-square bg-[#fff9ef] overflow-hidden rounded-t-[12px]">
        {/* Badge: Bottom-right, flush with edge, matching live site */}
        {(soldOut || product.badge) && (
          <span className="absolute bottom-0 right-0 z-10 bg-[#3f0c12] text-white text-[10.5px] sm:text-[11px] font-bold tracking-[1px] uppercase px-2 sm:px-2.5 py-1 rounded-tl-[4px] pointer-events-none">
            {soldOut ? "SOLD OUT" : product.badge}
          </span>
        )}

        <Link href={productUrl} className="block w-full h-full relative">
          {/* Primary Image */}
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-contain transition-opacity duration-200 ${
              product.secondaryImage && product.secondaryImage !== product.image
                ? "group-hover:opacity-0"
                : ""
            }`}
            sizes="(max-width: 699px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Secondary Image on Hover (No zoom, pure cross-fade) */}
          {product.secondaryImage && product.secondaryImage !== product.image && (
            <Image
              src={product.secondaryImage}
              alt={`${product.title} secondary`}
              fill
              className="object-contain transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              sizes="(max-width: 699px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          )}
        </Link>
      </div>

      {/* 2. Card info body */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-3 sp-product-card__info">
        {/* Title & Description with exact live 2px gap (gap-0.5) */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-[2px] w-full">
            <span className="product-card__title block">
              <Link
                href={productUrl}
                className="font-bold text-[16px] sm:text-[17px] text-[#2b1215] hover:text-[#b3261e] transition-colors leading-[1.35] line-clamp-2 block"
              >
                {product.title}
              </Link>
            </span>
            <p className="product-card__pointers text-[12px] sm:text-[14px] text-[#5c5a52] hover:text-[#2b1215] line-clamp-1 leading-normal m-0 block font-normal">
              <span className="sm:hidden">{shortDescription}</span>
              <span className="hidden sm:inline">{product.subtitle}</span>
            </p>
          </div>

          {/* Stars: only once the product has ratings */}
          {product.reviewsCount > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-[#e5a524]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13.5}
                  className="fill-[#e5a524] text-[#e5a524]"
                />
              ))}
            </div>
            <span className="text-[12.5px] sm:text-[13px] text-[#5c5a52] font-medium">
              ({product.reviewsCount})
            </span>
          </div>
          )}
        </div>

        {/* 3. Bottom CTA & More Sizes Link */}
        <div className="pt-2 flex flex-col">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={soldOut}
            className="w-full disabled:bg-[#e5e0d6] disabled:hover:bg-[#e5e0d6] disabled:text-[#6f6a5f] disabled:cursor-not-allowed bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[13px] sm:text-[14px] h-[42px] py-2 px-3 rounded-[6px] tracking-[0.3px] uppercase transition-colors shadow-none cursor-pointer flex items-center justify-center text-center active:brightness-95"
          >
            {soldOut ? "SOLD OUT" : buttonLabel}
          </button>

          {hasMultipleSizes ? (
            <Link
              href={productUrl}
              className="more-sizes-btn text-[13px] sm:text-[13.5px] font-medium text-[#4a0e14] hover:text-[#b3261e] text-center transition-colors underline decoration-[#f9a825] underline-offset-4 mt-[7px] block"
            >
              More Sizes ➝
            </Link>
          ) : (
            <div className="h-[27px] mt-[7px]" />
          )}
        </div>
      </div>
    </div>
  );
}
