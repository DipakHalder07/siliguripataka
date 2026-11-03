"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./context/CartContext";
import { Star } from "lucide-react";

interface Product {
  id: string;
  title: string;
  primaryImage: string;
  secondaryImage: string;
  pointers: string;
  rating?: number;
  reviewCount?: number;
  weight: string;
  price: number;
}

const productsData: Product[] = [
  {
    id: "royal-electric-sparklers-30cm",
    title: "Royal Electric Sparklers 30cm",
    primaryImage: "/assets/action-sparkler.webp",
    secondaryImage: "/assets/siliguri-sparklers.jpg",
    pointers: "Pack of 50 · Golden sparks",
    weight: "Pack of 50 Sticks",
    price: 349,
  },
  {
    id: "deluxe-tri-color-flower-pots",
    title: "Deluxe Tri-Color Flower Pots",
    primaryImage: "/assets/action-anar.webp",
    secondaryImage: "/assets/siliguri-flower-pots.jpg",
    pointers: "Pack of 10 · Tall anar fountain",
    weight: "Pack of 10",
    price: 499,
  },
  {
    id: "deluxe-special-spinning-chakkar",
    title: "Deluxe Ground Chakkar",
    primaryImage: "/assets/action-chakkar.webp",
    secondaryImage: "/assets/siliguri-chakkars.jpg",
    pointers: "Pack of 20 · Spinning rings",
    weight: "Pack of 20 Pcs",
    price: 399,
  },
  {
    id: "sky-king-30-aerial-shots",
    title: "Sky King 30 Aerial Shots",
    primaryImage: "/assets/action-sky.webp",
    secondaryImage: "/assets/siliguri-sky-shots.jpg",
    pointers: "30 shots · 5 vibrant colours",
    weight: "1 Cake (30 Shots)",
    price: 1299,
  },
];

export default function JustArrived() {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleAddProduct = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingId(product.id);
    setTimeout(() => {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.primaryImage,
        weight: product.weight,
      });
      setLoadingId(null);
    }, 250);
  };

  return (
    <section
      id="best-sellers"
      className="w-full bg-[#fff9ef] py-[26px] lg:py-0 lg:pb-[56px] lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header: px-4 on mobile, px-0 on desktop */}
        <div className="px-4 lg:px-0 mb-3 lg:mb-[18px] flex items-baseline justify-between">
          <div>
            <h2 className="font-stencil text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#2b1215] tracking-[-0.2px] m-0">
              BEST SELLERS
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#5c5a52] m-0">
              Our most-loved crackers for Diwali and Kali Puja in Siliguri
            </p>
          </div>
          {/* Top link visible only on desktop (lg: >= 1000px) */}
          <Link
            href="/collections/all"
            className="hidden lg:block text-[15px] font-bold text-[#4a0e14] av-hover-underline ml-auto hover:text-[#b3261e] transition-colors"
          >
            View all products →
          </Link>
        </div>

        {/* Product Cards Container */}
        <div className="flex lg:grid lg:grid-cols-4 gap-3 lg:gap-5 overflow-x-auto lg:overflow-visible px-4 lg:px-0 pb-1.5 lg:pb-0 no-scrollbar scroll-smooth">
          {productsData.map((product) => {
            const productHref = `/products/${product.id}`;
            return (
              <div
                key={product.id}
                className="min-w-[190px] max-w-[75vw] sm:min-w-[240px] lg:min-w-0 flex-none lg:flex-initial group bg-white border border-[#f0dfc6] rounded-[12px] overflow-hidden flex flex-col justify-between"
              >
                {/* Product Media with Secondary Image Hover Transition + Link */}
                <Link
                  href={productHref}
                  className="block relative aspect-square w-full bg-[#fff9ef] overflow-hidden cursor-pointer rounded-t-[12px]"
                >
                  <Image
                    src={product.primaryImage}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 25vw"
                  />
                  <Image
                    src={product.secondaryImage}
                    alt={`${product.title} lifestyle view`}
                    fill
                    unoptimized
                    className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 25vw"
                  />
                </Link>

                {/* Product info */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 gap-3 tb-product-card__info">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-[2px] w-full">
                      <span className="product-card__title block">
                        <Link
                          href={productHref}
                          className="font-bold text-[16px] sm:text-[17px] text-[#2b1215] hover:text-[#b3261e] transition-colors leading-[1.35] line-clamp-2 block"
                        >
                          {product.title}
                        </Link>
                      </span>
                      <p className="product-card__pointers text-[13.5px] sm:text-[14px] text-[#5c5a52] hover:text-[#2b1215] line-clamp-1 leading-normal m-0 block font-normal">
                        {product.pointers}
                      </p>
                    </div>

                    {/* Star Reviews matching live site */}
                    {product.reviewCount ? (
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
                          ({product.reviewCount})
                        </span>
                      </div>
                    ) : null}
                  </div>

                  {/* Add to Cart Button & More Sizes */}
                  <div className="pt-2 flex flex-col">
                    <button
                      type="button"
                      onClick={(e) => handleAddProduct(e, product)}
                      disabled={loadingId === product.id}
                      className="w-full bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[13px] sm:text-[14px] h-[42px] py-2 px-3 rounded-[6px] tracking-[0.3px] uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-none active:brightness-95"
                    >
                      {loadingId === product.id ? (
                        <span className="inline-block w-4 h-4 border-2 border-[#4a0e14] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span>
                          ADD — ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      )}
                    </button>

                    <Link
                      href={productHref}
                      className="more-sizes-btn text-[13px] sm:text-[13.5px] font-medium text-[#4a0e14] hover:text-[#b3261e] text-center transition-colors underline decoration-[#f9a825] underline-offset-4 mt-[7px] block"
                    >
                      More Sizes ➝
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Footer: view all link below carousel */}
        <div className="block lg:hidden px-4 pt-2.5">
          <Link
            href="/collections/all"
            className="text-[15px] font-bold text-[#4a0e14] av-hover-underline hover:text-[#b3261e] transition-colors"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
}
