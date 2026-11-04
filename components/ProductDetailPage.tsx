"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { isDecorCategory, productFaqs } from "@/lib/seoContent";
import {
  Star,
  ShieldCheck,
  MapPin,
  Flame,
  Sparkles,
  Check,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  X,
} from "lucide-react";
import { Product } from "@/data/products";
import { findVariant, productVariants } from "@/lib/productVariants";
import { useCart } from "./context/CartContext";
import { FREE_GIFT } from "@/lib/orderRules";
import { findMegaPack, packWorth } from "@/lib/megaPacks";
import ProductCard from "./ProductCard";
import ProductReviews from "./ProductReviews";

export default function ProductDetailPage({ product, related = [] }: { product: Product; related?: Product[] }) {
  const { addToCart } = useCart();

  // Variant selector
  const [selectedWeight, setSelectedWeight] = useState(() => {
    const names = productVariants(product).map((v) => v.name);
    return product.weight && names.includes(product.weight) ? product.weight : names[0];
  });
  const [quantity, setQuantity] = useState(1);

  // Gallery images
  const galleryImages =
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.image, product.secondaryImage, product.image].filter(Boolean);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Smooth Custom Cursor & Hover Navigation (120fps requestAnimationFrame, 0 React re-renders on mousemove)
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const cursorArrowRef = useRef<SVGSVGElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Mutable animation state (no React re-renders on mousemove)
  const mouseTargetRef = useRef({ x: 0, y: 0, visible: false, isLeft: false });
  const mouseCurrentRef = useRef({ x: 0, y: 0, scale: 0, opacity: 0 });
  const animFrameId = useRef<number | null>(null);

  // Setup silky smooth requestAnimationFrame loop for cursor
  useEffect(() => {
    const loop = () => {
      const target = mouseTargetRef.current;
      const current = mouseCurrentRef.current;
      const el = cursorFollowerRef.current;
      const arrow = cursorArrowRef.current;

      if (el) {
        // High-precision smooth lerp
        current.x += (target.x - current.x) * 0.24;
        current.y += (target.y - current.y) * 0.24;
        current.opacity += ((target.visible ? 1 : 0) - current.opacity) * 0.22;
        current.scale += ((target.visible ? 1 : 0.4) - current.scale) * 0.22;

        el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${current.scale})`;
        el.style.opacity = `${current.opacity}`;

        if (arrow) {
          arrow.style.transform = target.isLeft ? "rotate(180deg)" : "rotate(0deg)";
        }
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isLeft = x < rect.width / 2;
    mouseTargetRef.current = { x, y, visible: true, isLeft };
    mouseCurrentRef.current.x = x;
    mouseCurrentRef.current.y = y;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isLeft = x < rect.width / 2;
    mouseTargetRef.current = { x, y, visible: true, isLeft };
  };

  const handleMouseLeave = () => {
    mouseTargetRef.current.visible = false;
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (mouseTargetRef.current.isLeft) {
      setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
    } else {
      setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  // Auto-scroll thumbnails when active image changes
  useEffect(() => {
    if (!thumbnailContainerRef.current) return;
    const container = thumbnailContainerRef.current;
    const activeThumb = container.children[activeImageIndex] as HTMLElement;
    if (activeThumb) {
      const containerWidth = container.offsetWidth;
      const thumbOffsetLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const scrollPos = thumbOffsetLeft - containerWidth / 2 + thumbWidth / 2;
      container.scrollTo({ left: Math.max(0, scrollPos), behavior: "smooth" });
    }
  }, [activeImageIndex]);

  // Keyboard navigation for image gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => Math.min(galleryImages.length - 1, prev + 1));
      } else if (e.key === "Escape") {
        setIsZoomOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryImages.length]);

  // The copy below depends on what kind of product this is
  const isDecor = isDecorCategory(product.category);
  const megaPack = findMegaPack(product.id);

  // Each size has its own price (Admin → Products → Variants); the checkout uses the same prices
  const getCalculatedPrice = (weight: string) => findVariant(product, weight).price;
  const getCalculatedOriginalPrice = (weight: string) => {
    const v = findVariant(product, weight);
    return v.compareAtPrice && v.compareAtPrice > v.price ? v.compareAtPrice : v.price;
  };

  const currentPrice = getCalculatedPrice(selectedWeight);
  const currentOriginalPrice = getCalculatedOriginalPrice(selectedWeight);

  const handleSelectWeight = (w: string) => {
    setSelectedWeight(w);
  };

  // Pack size options
  const variants =
    product.weights && product.weights.length > 1
      ? product.weights.map((w, idx, arr) => {
          const price = getCalculatedPrice(w);
          const originalPrice = getCalculatedOriginalPrice(w);
          let badge: string | undefined = undefined;
          if (idx === 1 && arr.length >= 3) {
            badge = "MOST POPULAR";
          } else if (idx === arr.length - 1 && arr.length >= 3) {
            badge = "BEST VALUE";
          } else if (originalPrice > price) {
            const savings = Math.round(((originalPrice - price) / originalPrice) * 100);
            if (savings >= 10) badge = `SAVE ${savings}%`;
          }
          return {
            weight: w,
            price,
            originalPrice,
            badge,
          };
        })
      : [
          {
            weight: product.weight || "Standard Pack",
            price: product.price,
            originalPrice: product.originalPrice || Math.round(product.price * 1.2),
            badge: undefined,
          },
        ];

  const soldOut = !product.inStock;
  // Tracked products can't be added beyond what is left in stock.
  const maxQuantity = product.trackInventory ? Math.max(1, product.stockQuantity ?? 1) : Infinity;

  const handleAddToCart = () => {
    if (soldOut) return;
    addToCart(
      {
        id: `${product.id}-${selectedWeight}`,
        title: product.title,
        weight: selectedWeight,
        price: currentPrice,
        image: product.image,
      },
      quantity
    );
  };

  // Related products (guaranteed unique by id)
  const relatedProducts = related.slice(0, 4);

  // A description written in Admin → Products wins over the short subtitle
  const productDescription = product.description && product.description !== product.subtitle
    ? product.description
    : product.subtitle;

  const featureBadges = [
    {
      icon: Flame,
      title: product.caffeine || "Festive",
      subtitle: isDecor ? "style" : "effect",
    },
    {
      icon: Sparkles,
      title: product.format || "Diwali Special",
      subtitle: "product type",
    },
    {
      icon: MapPin,
      title: "Siliguri only",
      subtitle: "home delivery",
    },
    {
      icon: ShieldCheck,
      title: isDecor ? "Ready to use" : "Adult supervision",
      subtitle: isDecor ? "for Diwali & puja" : "read the pack first",
    },
  ];

  const faqs = productFaqs(product);

  return (
    <div className="w-full bg-white">
      {/* 1. Main Product Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-8">
        {/* 2-Column Product Layout: Gallery on Left, Details & Breadcrumbs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left Column: Image Gallery (Pixel-perfect to Live Site) */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Main Stage Image with dynamic cursor-following hover navigation */}
            <div
              ref={imageContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleContainerClick}
              className="group relative aspect-square w-full bg-[#fcfbf9] border border-[#f0dfc6] rounded-[16px] sm:rounded-[20px] overflow-hidden select-none lg:cursor-none"
            >
              {soldOut && (
                <span className="absolute bottom-0 right-0 z-10 bg-[#3f0c12] text-white text-[11px] font-bold tracking-[1px] uppercase px-3 py-1.5 rounded-tl-[4px]">
                  SOLD OUT
                </span>
              )}

              {/* Dynamic custom cursor circle following the mouse pointer (120fps lerp, silky smooth) */}
              <div
                ref={cursorFollowerRef}
                className="hidden lg:flex pointer-events-none absolute z-30 w-12 h-12 rounded-full bg-white text-[#2b1215] shadow-[0_4px_16px_rgba(0,0,0,0.18)] border border-[#f0dfc6] items-center justify-center select-none will-change-transform"
                style={{
                  top: 0,
                  left: 0,
                  opacity: 0,
                  transform: "translate3d(-100px, -100px, 0)",
                }}
              >
                <svg
                  ref={cursorArrowRef}
                  role="presentation"
                  focusable="false"
                  width="11"
                  height="15"
                  viewBox="0 0 7 10"
                  className="transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[#4a0e14]"
                >
                  <path
                    d="m1 9 4-4-4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Silky-Smooth Sliding Image Track */}
              <div className="w-full h-full overflow-hidden relative">
                <div
                  className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
                >
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-full h-full shrink-0 flex items-center justify-center"
                    >
                      <Image
                        src={img}
                        alt={`${product.title} - view ${idx + 1}`}
                        fill
                        loading={idx === 0 ? "eager" : "lazy"}
                        priority={idx === 0}
                        className="object-contain select-none pointer-events-none transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Zoom Trigger Button at Top Right */}
              <button
                type="button"
                onMouseEnter={() => {
                  mouseTargetRef.current.visible = false;
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomOpen(true);
                }}
                aria-label="Zoom image"
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#2b1215] shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#f0dfc6] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
              >
                <Search size={17} className="stroke-[2.2]" />
              </button>

              {/* Mobile/Touch Fallback Navigation Arrows */}
              <div className="lg:hidden pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  className="pointer-events-auto absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 text-[#2b1215] shadow flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next image"
                  className="pointer-events-auto absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 text-[#2b1215] shadow flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Thumbnail Row with smooth hover & auto-scroll */}
            {galleryImages.length > 1 && (
              <div
                ref={thumbnailContainerRef}
                className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
              >
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setActiveImageIndex(idx)}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-[10px] overflow-hidden bg-[#fff9ef] shrink-0 transition-all duration-200 cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-2 border-[#3f0c12] shadow-xs scale-[1.03]"
                        : "border border-[#f0dfc6] hover:border-[#3f0c12]/60 opacity-75 hover:opacity-100 hover:scale-[1.02]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="68px"
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Breadcrumb & Details & Purchasing (Safe Sticky) */}
          <div className="flex flex-col gap-4 sm:gap-5 text-[#2b1215] lg:sticky lg:top-[90px] self-start">
            {/* 1. Breadcrumb, directly above the product title */}
            <nav aria-label="Breadcrumb" className="product-info__tb-breadcrumb text-[14px] sm:text-[15px] text-[#5c5a52]">
              <ol className="flex items-center flex-wrap gap-0 leading-normal">
                <li>
                  <Link
                    href="/"
                    className="av-hover-underline text-[#5c5a52] hover:text-[#2b1215] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="mx-1 text-[#5c5a52] select-none text-[15px] font-normal" aria-hidden="true">
                  ›
                </li>
                <li>
                  <Link
                    href="/collections/all"
                    className="av-hover-underline text-[#5c5a52] hover:text-[#2b1215] transition-colors"
                  >
                    All Collection
                  </Link>
                </li>
                <li className="mx-1 text-[#5c5a52] select-none text-[15px] font-normal" aria-hidden="true">
                  ›
                </li>
                <li className="text-[#5c5a52] font-normal truncate max-w-[240px] sm:max-w-none" aria-current="page">
                  {product.title}
                </li>
              </ol>
            </nav>

            {/* 2. Product Title & Reviews */}
            <div>
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#2b1215] leading-[1.18] tracking-[-0.4px]">
                {product.title}
              </h1>

              {/* Rating, linking to the reviews section: only once the product has ratings */}
              {product.reviewsCount > 0 && (
              <a
                href="#judgeme_product_reviews"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("judgeme_product_reviews")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 mt-2 group cursor-pointer"
              >
                <div className="flex items-center text-[#4a0e14]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-[#4a0e14] text-[#4a0e14]"
                    />
                  ))}
                </div>
                <span className="text-[14px] font-bold text-[#2b1215]">
                  {product.rating}
                </span>
                <span className="text-[14px] text-[#747576]">·</span>
                <span className="text-[14px] text-[#4a0e14] group-hover:underline font-medium">
                  {product.reviewsCount} reviews
                </span>
              </a>
              )}
            </div>

            {/* 3. Description matching live site */}
            <p className="text-[15px] sm:text-[16px] text-[#463230] leading-[1.55]">
              {productDescription}
            </p>

            {/* 4. Key Feature Badges 2x2 Grid (Exact Live Site Icons) */}
            <div className="grid grid-cols-2 gap-3.5 py-3 border-y border-[#f0dfc6]">
              {featureBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[#2b1215]">
                    <div className="w-6 h-6 shrink-0 flex items-center justify-center text-[#b3261e] mt-0.5">
                      <Icon size={18} />
                    </div>
                    <span className="text-[13.5px] leading-tight">
                      <b>{badge.title}</b><br />{badge.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 5. Pack size selection */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#5c5a52]">
                Pack Size:
              </span>
              <div className="flex flex-col gap-2">
                {variants.map((v) => {
                  const isSelected = selectedWeight === v.weight;
                  return (
                    <div
                      key={v.weight}
                      onClick={() => handleSelectWeight(v.weight)}
                      className={`relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#4a0e14] bg-[#fff9ef]"
                          : "border-[#f0dfc6] hover:border-[#4a0e14]/60 bg-white"
                      }`}
                    >
                      {v.badge && (
                        <span
                          className={`absolute -top-2.5 right-3 text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-[4px] uppercase tracking-wide ${
                            v.badge === "BEST VALUE" || v.badge === "MOST POPULAR"
                              ? "bg-[#3f0c12]"
                              : "bg-[#5c5a52]"
                          }`}
                        >
                          {v.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-[1.5px] border-[#f0dfc6] flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[5.5px] border-[#4a0e14] bg-white" : "bg-white"
                          }`}
                        />
                        <div className="flex items-baseline gap-2">
                          <span className="text-[15px] font-bold text-[#2b1215] uppercase tracking-[0.5px]">
                            {v.weight}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-baseline gap-2">
                        {v.originalPrice > v.price && (
                          <span className="text-[14px] text-[#747576] line-through font-normal">
                            ₹{v.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                        <span className="text-[17px] sm:text-[18px] font-bold text-[#2b1215]">
                          ₹{v.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 6. Quantity Stepper & Add to Cart Button */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center border border-[#f0dfc6] rounded-lg p-1 bg-[#fff9ef] shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center text-[#2b1215] hover:text-[#b3261e] transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-bold text-[15px] text-[#2b1215]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                  disabled={soldOut}
                  className="w-9 h-9 flex items-center justify-center text-[#2b1215] hover:text-[#b3261e] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={soldOut}
                className="flex-1 disabled:bg-[#e5e0d6] disabled:hover:bg-[#e5e0d6] disabled:text-[#6f6a5f] disabled:cursor-not-allowed bg-[#f9a825] hover:bg-[#f9a825]/90 text-[#4a0e14] font-bold text-[17px] sm:text-[18px] h-14 rounded-[6px] tracking-[0.4px] uppercase transition-all shadow-sm active:scale-98 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{soldOut ? "Sold Out" : `Add to cart — ₹${(currentPrice * quantity).toLocaleString("en-IN")}`}</span>
                {!soldOut && currentOriginalPrice > currentPrice && (
                  <s className="text-[#4a0e14]/65 text-[15px] font-normal line-through">
                    ₹{(currentOriginalPrice * quantity).toLocaleString("en-IN")}
                  </s>
                )}
              </button>
            </div>

            {/* 7. Delivery Promise Box matching live site */}
            <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-[8px] py-2.5 px-4 text-[13.5px] text-[#2b1215] flex items-center justify-center gap-2 mt-1">
              <span className="text-[10px]">🟠</span>
              <span><b>SAME-DAY</b> OR <b>NEXT-DAY</b> DELIVERY</span>
              <span className="text-[#b5b4af]">|</span>
              <span>📍 <b>SILIGURI ONLY</b></span>
            </div>
            <div className="text-center text-[13.5px] font-semibold text-[#b3261e] -mt-2">
              🎁 {FREE_GIFT} FREE with every order
            </div>
          </div>
        </div>
      </div>

      {/* 2. Safety and delivery banner */}
      <div className="w-full bg-[#fff9ef] border-y border-[#f0dfc6] py-8 sm:py-12 px-4 sm:px-8 mt-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-b md:border-b-0 md:border-r border-[#f0dfc6] pb-6 md:pb-0 md:pr-8">
            <div className="w-16 h-16 rounded-full bg-white border border-[#f0dfc6] flex items-center justify-center shrink-0 text-[#b3261e]">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-bold text-[17px] text-[#2b1215]">
                {isDecor ? "Ready For Your Home" : "Read The Pack, Light With Care"}
              </h4>
              <p className="text-[13.5px] text-[#5c5a52] mt-1 leading-normal">
                {isDecor
                  ? "Everything you need to get your home ready for Diwali and Kali Puja."
                  : "Follow the instructions on every pack. Use crackers only in open spaces, and keep children with an adult."}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-full bg-white border border-[#f0dfc6] flex items-center justify-center shrink-0 text-[#b3261e]">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="font-bold text-[17px] text-[#2b1215]">
                Delivered Only In Siliguri
              </h4>
              <p className="text-[13.5px] text-[#5c5a52] mt-1 leading-normal">
                Same-day or next-day delivery to your door anywhere in Siliguri, with a free lighter. Minimum order ₹2,000. Pay by UPI or cash on delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. What you get */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#fcfbf9] border border-[#f0dfc6] rounded-2xl p-6 sm:p-8">
          <h3 className="font-stencil text-[22px] sm:text-[26px] font-bold text-[#2b1215] mb-4">
            What You Get
          </h3>
          <p className="text-[15px] text-[#5c5a52] leading-relaxed mb-4">
            {product.subtitle}. {"Exact contents can vary a little from batch to batch."}
          </p>
          {megaPack && (
            <div className="mb-4 text-[14px]">
              <div className="divide-y divide-[#f0dfc6] border-y border-[#f0dfc6]">
                {megaPack.items.map((item) => (
                  <div key={item.label} className="flex justify-between gap-3 py-1.5 text-[#3d3b36]">
                    <span>{item.label}</span>
                    <span>₹{item.value.toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-3 pt-2 text-[#5c5a52]">
                <span>If bought separately</span>
                <s>₹{packWorth(megaPack).toLocaleString("en-IN")}</s>
              </div>
              <div className="flex justify-between gap-3 pt-1 font-bold text-[#2b1215]">
                <span>This pack</span>
                <span>₹{product.price.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between gap-3 pt-1 font-bold text-[#b3261e]">
                <span>You save</span>
                <span>₹{(packWorth(megaPack) - product.price).toLocaleString("en-IN")}</span>
              </div>
              <p className="pt-2 text-[#4a0e14] font-medium">{megaPack.nudge}</p>
            </div>
          )}
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[#b3261e]">
            <Check size={18} />
            <span>Diwali 2026 · Delivered in Siliguri</span>
          </div>
        </div>

        <div className="bg-[#fcfbf9] border border-[#f0dfc6] rounded-2xl p-6 sm:p-8">
          <h3 className="font-stencil text-[22px] sm:text-[26px] font-bold text-[#2b1215] mb-4">
            Why You&apos;ll Love It
          </h3>
          <ul className="space-y-2.5 text-[14.5px] text-[#5c5a52]">
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#f9a825]" />
              <span>
                <b>One order:</b> Mix crackers, hampers and decor in the same cart.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#f9a825]" />
              <span>
                <b>Fast local delivery:</b> The same day or the next day, only within Siliguri.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#f9a825]" />
              <span>
                <b>Free lighter:</b> Comes with every order. Pay by UPI or cash on delivery.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. How to use */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16">
        <h2 className="font-stencil text-[26px] sm:text-[34px] font-bold text-center text-[#2b1215] mb-8">
          {isDecor ? "How To Set Up?" : "How To Use Safely?"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#f0dfc6] flex items-center justify-center font-bold text-[18px] text-[#b3261e] mb-3">
              1
            </div>
            <h4 className="font-bold text-[16px] text-[#2b1215] mb-1">
              {isDecor ? "Pick Your Spot" : "Find An Open Space"}
            </h4>
            <p className="text-[13.5px] text-[#5c5a52]">
              {isDecor
                ? "Choose a clean, dry spot such as your doorway, balcony or puja corner, away from curtains."
                : "Go outdoors, away from vehicles, dry leaves and anything that can catch fire. Keep water or sand ready."}
            </p>
          </div>

          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#f0dfc6] flex items-center justify-center font-bold text-[18px] text-[#b3261e] mb-3">
              2
            </div>
            <h4 className="font-bold text-[16px] text-[#2b1215] mb-1">
              {isDecor ? "Decorate" : "Light With Care"}
            </h4>
            <p className="text-[13.5px] text-[#5c5a52]">
              {isDecor
                ? "Set up your diyas, lights, rangoli or toran the evening before Diwali."
                : "Read the pack, light one item at a time at arm's length, and step back straight away."}
            </p>
          </div>

          <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#f0dfc6] flex items-center justify-center font-bold text-[18px] text-[#b3261e] mb-3">
              3
            </div>
            <h4 className="font-bold text-[16px] text-[#2b1215] mb-1">
              {isDecor ? "Stay Safe" : "Never Relight"}
            </h4>
            <p className="text-[13.5px] text-[#5c5a52]">
              {isDecor
                ? "Never leave a lit diya unattended, and keep flames away from curtains and children."
                : "If something doesn't light, leave it alone and pour water on it. Keep children with an adult."}
            </p>
          </div>
        </div>
      </div>

      {/* 5. YOU ASKED, WE ANSWERED (Accordion FAQs) */}
      <div className="w-full bg-[#fcfbf9] border-t border-[#f0dfc6] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-stencil text-[24px] sm:text-[30px] font-bold text-center text-[#2b1215] mb-8">
            YOU ASKED, WE ANSWERED
          </h2>

          <div className="divide-y divide-[#f0dfc6] border-y border-[#f0dfc6]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-[16px] text-[#2b1215] hover:text-[#b3261e] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#747576] transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? "rotate-180 text-[#b3261e]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-[14.5px] text-[#5c5a52] leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. Customer reviews */}
      <ProductReviews
        productTitle={product.title}
        rating={product.rating}
        reviewsCount={product.reviewsCount}
      />

      {/* 7. Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="w-full bg-[#fff9ef] border-t border-[#f0dfc6] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-stencil text-[22px] sm:text-[28px] font-bold text-[#2b1215]">
                You May Also Like
              </h3>
              <Link
                href="/collections/all"
                className="text-[14px] font-bold text-[#4a0e14] hover:underline"
              >
                View All Products →
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 8. Fullscreen High-Resolution Lightbox Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close fullscreen view"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-colors z-50 cursor-pointer"
          >
            <X size={28} />
          </button>

          {/* Previous in lightbox */}
          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next in lightbox */}
          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Centered High-Res Image */}
          <div
            className="relative max-w-[85vw] max-h-[75vh] w-[750px] h-[750px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeImageIndex] || product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Bottom Thumbnails Strip in Lightbox */}
          {galleryImages.length > 1 && (
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 overflow-x-auto max-w-[90vw] px-4 py-2 bg-black/60 rounded-full border border-white/20 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-[#f9a825] scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumb ${idx + 1}`} fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
