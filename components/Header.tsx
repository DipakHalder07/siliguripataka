"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useCart } from "./context/CartContext";
import { Search, User, ShoppingBag, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const MEGA_COLUMNS = [
  {
    title: "Crackers",
    links: [
      { label: "Sparklers", href: "/collections/sparklers" },
      { label: "Flower Pots", href: "/collections/flower-pots" },
      { label: "Ground Chakkars", href: "/collections/ground-chakkars" },
      { label: "Rockets", href: "/collections/rockets" },
      { label: "Sky Shots", href: "/collections/aerial-shots" },
      { label: "Sound Crackers", href: "/collections/sound-crackers" },
      { label: "Kids Special", href: "/collections/kids-special" },
      { label: "Mega Packs", href: "/collections/mega-packs" },
    ],
  },
  {
    title: "Sweets",
    links: [
      { label: "All Mithai", href: "/collections/sweets" },
      { label: "Kaju Katli", href: "/products/kaju-katli-box" },
      { label: "Motichoor Laddu", href: "/products/motichoor-laddu-box" },
      { label: "Bengali Rosogolla", href: "/products/bengali-rosogolla-box" },
      { label: "Bengali Sandesh", href: "/products/bengali-sandesh-box" },
      { label: "Assorted Mithai Box", href: "/products/assorted-diwali-mithai-box" },
    ],
  },
  {
    title: "Diyas & Decor",
    links: [
      { label: "All Decor", href: "/collections/diyas-decor" },
      { label: "Clay Diyas", href: "/products/hand-painted-clay-diyas" },
      { label: "Rangoli Colours", href: "/products/rangoli-colour-set" },
      { label: "Marigold Toran", href: "/products/marigold-door-toran" },
      { label: "Puja Thali", href: "/products/diwali-puja-thali-set" },
    ],
  },
  {
    title: "Gifts & Combos",
    links: [
      { label: "Mega Packs", href: "/collections/mega-packs" },
      { label: "Gift Hampers", href: "/collections/gift-hampers" },
      { label: "Pataka + Mithai Combo", href: "/products/pataka-mithai-diwali-combo" },
      { label: "Office Gift Hamper", href: "/products/office-diwali-gift-hamper" },
      { label: "Corporate Gifting", href: "/pages/corporate-gifting-2026" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Delivery Areas", href: "/delivery-areas" },
      { label: "Firecracker Mela Guide", href: "/blog/siliguri-firecracker-mela-guide" },
      { label: "Track Your Order", href: "/track" },
      { label: "Cracker Safety Guide", href: "/blog/diwali-cracker-safety-guide" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Header({ onOpenTeaFinder }: { onOpenTeaFinder?: () => void }) {
  const pathname = usePathname();
  const { openCart, openSearch, totalCount } = useCart();
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const [headerBottom, setHeaderBottom] = useState(68);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenus = () => {
    setActiveMega(null);
    setActiveDropdown(null);
  };

  // Close menus when route changes
  useEffect(() => {
    closeMenus();
  }, [pathname]);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenus();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dynamically calculate header bottom so drawer is ALWAYS perfectly flush with header
  useEffect(() => {
    const updatePosition = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setHeaderBottom(Math.round(rect.bottom));
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        ref={navRef}
        onMouseLeave={closeMenus}
        className="sticky top-0 z-40 w-full bg-white border-b border-[#f0dfc6] transition-shadow duration-200"
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-12 h-[68px] lg:h-[72px] flex items-center justify-between gap-4 relative">
          {/* Mobile Hamburger Toggle (hidden on desktop) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2b1215] hover:text-[#b3261e] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Centered Brand Logo: Clean text format */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center">
            <Link href="/" onClick={closeMenus} className="inline-block relative py-1">
              <span className="font-stencil text-[16px] min-[400px]:text-[18px] sm:text-[22px] font-bold tracking-wider whitespace-nowrap text-[#b3261e] hover:opacity-90 transition-opacity">
                SILIGURI PATAKA
              </span>
            </Link>
          </div>

          {/* Desktop Left Group: Brand Logo on Far Left + Navigation Items */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 min-[1400px]:gap-9">
            {/* Desktop Brand Logo: Clean text format */}
            <Link
              href="/"
              onMouseEnter={closeMenus}
              onClick={closeMenus}
              className="inline-block relative py-1 shrink-0"
            >
              <span className="font-stencil text-[18px] xl:text-[21px] min-[1400px]:text-[24px] font-bold tracking-wider whitespace-nowrap text-[#b3261e] hover:opacity-90 transition-opacity">
                SILIGURI PATAKA
              </span>
            </Link>

            {/* Desktop navigation links */}
            <nav className="flex items-center gap-2.5 xl:gap-5 min-[1400px]:gap-7">
              {/* Shop with mega menu */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveMega("shop");
                  setActiveDropdown(null);
                }}
              >
                <Link
                  href="/collections/all"
                  onClick={closeMenus}
                  className={`py-5 flex items-center gap-1.5 whitespace-nowrap text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] transition-colors ${
                    activeMega === "shop" || pathname === "/collections/all" || (pathname?.startsWith("/collections") && pathname !== "/collections/mega-packs" && pathname !== "/collections/sparklers" && pathname !== "/collections/sweets" && pathname !== "/collections/aerial-shots")
                      ? "text-[#b3261e]"
                      : "text-[#2b1215] hover:text-[#b3261e]"
                  }`}
                >
                  <span>Shop Crackers</span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2.2}
                    className={`transition-transform duration-200 ${
                      activeMega === "shop" ? "rotate-180 text-[#b3261e]" : "text-[#747576]"
                    }`}
                  />
                </Link>
              </div>

              {/* Direct links */}
              <Link
                href="/collections/trial-packs"
                onMouseEnter={closeMenus}
                onClick={closeMenus}
                className={`py-5 text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] transition-colors whitespace-nowrap ${
                  pathname === "/collections/mega-packs"
                    ? "text-[#b3261e]"
                    : "text-[#2b1215] hover:text-[#b3261e]"
                }`}
              >
                Mega Packs
              </Link>
              <Link
                href="/collections/sparklers"
                onMouseEnter={closeMenus}
                onClick={closeMenus}
                className={`py-5 text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] transition-colors whitespace-nowrap ${
                  pathname === "/collections/sparklers"
                    ? "text-[#b3261e]"
                    : "text-[#2b1215] hover:text-[#b3261e]"
                }`}
              >
                Sparklers
              </Link>
              <Link
                href="/collections/sweets"
                onMouseEnter={closeMenus}
                onClick={closeMenus}
                className={`py-5 text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] transition-colors whitespace-nowrap ${
                  pathname === "/collections/sweets"
                    ? "text-[#b3261e]"
                    : "text-[#2b1215] hover:text-[#b3261e]"
                }`}
              >
                Sweets
              </Link>
              <Link
                href="/collections/aerial-shots"
                onMouseEnter={closeMenus}
                onClick={closeMenus}
                className="py-5 text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] text-[#c87a1d] hover:opacity-85 transition-opacity whitespace-nowrap"
              >
                Sky Shots
              </Link>

              {/* Gifts Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown("gifts");
                  setActiveMega(null);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`py-5 flex items-center gap-1.5 text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] transition-colors cursor-pointer ${
                    activeDropdown === "gifts" || activeDropdown === "gifts"
                      ? "text-[#b3261e]"
                      : "text-[#2b1215] hover:text-[#b3261e]"
                  }`}
                >
                  <span>Gifts</span>
                  <ChevronDown
                    size={12}
                    strokeWidth={2.2}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "gifts" ? "rotate-180 text-[#b3261e]" : "text-[#747576]"
                    }`}
                  />
                </button>

                {/* Gifts Dropdown Content */}
                {activeDropdown === "gifts" && (
                  <div className="absolute top-[calc(100%-4px)] left-0 min-w-[250px] bg-white border border-[#f0dfc6] rounded-lg shadow-xl py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <ul className="flex flex-col text-[15px] text-[#4a0e14]">
                      <li>
                        <Link
                          href="/collections/mega-packs"
                          onClick={closeMenus}
                          className="block px-5 py-2.5 hover:bg-[#fff9ef] hover:text-[#b3261e] transition-colors"
                        >
                          Mega Packs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/gift-hampers"
                          onClick={closeMenus}
                          className="block px-5 py-2.5 hover:bg-[#fff9ef] hover:text-[#b3261e] transition-colors"
                        >
                          Gift Hampers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/diyas-decor"
                          onClick={closeMenus}
                          className="block px-5 py-2.5 hover:bg-[#fff9ef] hover:text-[#b3261e] transition-colors"
                        >
                          Rangoli, Diyas &amp; Decor
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pages/corporate-gifting-2026"
                          onClick={closeMenus}
                          className="block px-5 py-2.5 hover:bg-[#fff9ef] hover:text-[#b3261e] transition-colors font-medium border-t border-[#f0dfc6]/60 mt-1"
                        >
                          Corporate Gifting
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Why us */}
              <Link
                href="/pages/why-siliguri-pataka"
                onMouseEnter={closeMenus}
                onClick={closeMenus}
                className={`py-5 text-[14px] xl:text-[16px] min-[1400px]:text-[18px] font-semibold tracking-[-0.2px] transition-colors whitespace-nowrap ${
                  pathname === "/pages/why-siliguri-pataka"
                    ? "text-[#b3261e]"
                    : "text-[#2b1215] hover:text-[#b3261e]"
                }`}
              >
                Why Us
              </Link>
            </nav>
          </div>

          {/* Right Group: Action Icons & Search */}
          <div
            onMouseEnter={closeMenus}
            className="flex items-center gap-2.5 sm:gap-4 ml-auto"
          >
            {/* Desktop search bar */}
            <button
              type="button"
              onClick={openSearch}
              className="hidden md:flex items-center gap-2.5 px-3.5 w-[130px] xl:w-[150px] min-[1400px]:w-[190px] h-[44px] text-[15px] xl:text-[16px] text-[#7a7468] bg-white hover:border-[#4a0e14] border-[1.5px] border-[#5c5a52] rounded-[8px] transition-colors text-left group cursor-pointer"
            >
              <Search size={18} strokeWidth={1.8} className="text-[#2b1215] group-hover:text-[#b3261e] transition-colors shrink-0" />
              <span className="truncate">Search...</span>
            </button>

            {/* Mobile Search Icon */}
            <button
              type="button"
              onClick={openSearch}
              className="md:hidden p-2 text-[#2b1215] hover:text-[#b3261e] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={22} strokeWidth={1.8} />
            </button>

            {/* Account Icon */}
            <Link
              href="/account/login"
              className="hidden sm:inline-flex p-2 text-[#2b1215] hover:text-[#b3261e] transition-colors cursor-pointer"
              aria-label="Account"
            >
              <User size={22} strokeWidth={1.8} />
            </Link>

            {/* Cart Icon & Count */}
            <button
              type="button"
              onClick={openCart}
              suppressHydrationWarning
              className="relative p-2 text-[#2b1215] hover:text-[#b3261e] transition-colors flex items-center justify-center cursor-pointer"
              aria-label={`Cart with ${mounted ? totalCount : 0} items`}
            >
              <ShoppingBag size={22} strokeWidth={1.8} />
              {mounted && totalCount > 0 && (
                <motion.span
                  key={totalCount}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="absolute -top-1 -right-1 bg-[#f9a825] text-[#4a0e14] text-[11px] font-bold w-[19px] h-[19px] rounded-full flex items-center justify-center shadow-sm"
                >
                  {totalCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        {activeMega === "shop" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-[#f0dfc6] shadow-2xl z-50 animate-in fade-in duration-200"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-8 pb-8">
                {/* Columns 1-5: shop links */}
                {MEGA_COLUMNS.map((col) => (
                  <div key={col.title}>
                    <h4 className="text-[14px] font-bold tracking-[1.5px] uppercase text-[#5c5a52] mb-4">
                      {col.title}
                    </h4>
                    <ul className="flex flex-col gap-2.5 text-[16px] text-[#4a0e14]">
                      {col.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMega(null)}
                            className="hover:text-[#b3261e] transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Column 6: Featured Teaser Card */}
                <div className="col-span-2 md:col-span-1">
                  <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-xl overflow-hidden hover:border-[#f9a825] transition-all group">
                    <div className="relative aspect-[4/3] w-full bg-[#f0ede6]">
                      <span className="absolute top-2.5 left-2.5 z-10 bg-[#f9a825] text-[#4a0e14] text-[11px] font-bold tracking-wider px-2 py-0.5 rounded">
                        DIWALI 2026
                      </span>
                      <Image
                        src="/assets/mega-family.webp"
                        alt="Mega Family Pack of assorted Diwali crackers"
                        fill
                        sizes="260px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3.5 flex flex-col gap-1.5">
                      <p className="text-[15px] font-bold text-[#2b1215] leading-snug">
                        Mega Family Pack
                      </p>
                      <p className="text-[13px] text-[#5c5a52]">
                        Our best value pack. Save ₹2,324 at ₹4,999.
                      </p>
                      <Link
                        href="/products/mega-family-pack"
                        onClick={() => setActiveMega(null)}
                        className="text-[14px] font-bold text-[#4a0e14] underline decoration-[#f9a825] underline-offset-4 mt-1 flex items-center gap-1"
                      >
                        See the Pack <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Mega Bar */}
              <div className="pt-4 border-t border-[#f0dfc6] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6 text-[15px] font-semibold text-[#4a0e14]">
                  <Link href="/collections/all" onClick={() => setActiveMega(null)} className="hover:text-[#b3261e]">
                    All Products
                  </Link>
                  <Link href="/collections/mega-packs" onClick={() => setActiveMega(null)} className="hover:text-[#b3261e]">
                    Mega Packs
                  </Link>
                  <Link href="/collections/sweets" onClick={() => setActiveMega(null)} className="hover:text-[#b3261e]">
                    Diwali Sweets
                  </Link>
                  <Link href="/pages/why-siliguri-pataka" onClick={() => setActiveMega(null)} className="hover:text-[#b3261e]">
                    Why Siliguri Pataka
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveMega(null);
                    onOpenTeaFinder?.();
                  }}
                  className="bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] px-5 py-2.5 rounded-md font-bold text-[14px] tracking-wider uppercase transition-colors"
                >
                  Help Me Choose →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed left-0 right-0 bottom-0 bg-black/50 z-50 animate-in fade-in duration-200"
            style={{ top: `${headerBottom}px` }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-[85%] max-w-[340px] h-full bg-white flex flex-col justify-between overflow-y-auto p-5 border-r border-[#f0dfc6] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                <div className="border-b border-[#f0dfc6] pb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedSection(
                        mobileExpandedSection === "shop" ? null : "shop"
                      )
                    }
                    className="w-full flex items-center justify-between text-[18px] font-bold text-[#2b1215] py-2"
                  >
                    <span>Shop Crackers</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileExpandedSection === "shop" ? "rotate-180 text-[#e65100]" : ""
                      }`}
                    />
                  </button>

                  {mobileExpandedSection === "shop" && (
                    <div className="pl-3 py-2 flex flex-col gap-2 text-[15px] text-[#5c5a52]">
                      <Link
                        href="/collections/mega-packs"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-1 hover:text-[#b3261e]"
                      >
                        Mega Packs
                      </Link>
                      <Link
                        href="/collections/sparklers"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-1 hover:text-[#b3261e]"
                      >
                        Sparklers (Phuljhari)
                      </Link>
                      <Link
                        href="/collections/flower-pots"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-1 hover:text-[#b3261e]"
                      >
                        Flower Pots (Anar)
                      </Link>
                      <Link
                        href="/collections/all"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-1 hover:text-[#b3261e]"
                      >
                        All Products
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/collections/mega-packs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-bold text-[#2b1215] py-2 border-b border-[#f0dfc6]"
                >
                  Mega Packs
                </Link>

                <Link
                  href="/collections/sweets"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-bold text-[#2b1215] py-2 border-b border-[#f0dfc6]"
                >
                  Diwali Sweets
                </Link>

                <Link
                  href="/collections/aerial-shots"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-bold text-[#f89028] py-2 border-b border-[#f0dfc6]"
                >
                  Sky Shots
                </Link>

                <Link
                  href="/pages/why-siliguri-pataka"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-bold text-[#2b1215] py-2 border-b border-[#f0dfc6]"
                >
                  Why Us
                </Link>

                <Link
                  href="/pages/corporate-gifting-2026"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-semibold text-[#4a0e14] py-2 border-b border-[#f0dfc6]"
                >
                  Corporate Gifting
                </Link>

                <Link
                  href="/account/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-bold text-[#b3261e] py-2.5 flex items-center gap-2"
                >
                  <User size={18} />
                  <span>Quick Login / Account</span>
                </Link>
              </div>

              {/* Mobile Drawer Bottom */}
              <div className="pt-6 border-t border-[#f0dfc6] flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTeaFinder?.();
                  }}
                  className="w-full bg-[#f9a825] text-[#4a0e14] py-3 rounded-lg font-bold text-center tracking-wider uppercase text-[14px]"
                >
                  Help Me Choose
                </button>
                <div className="text-center text-[13px] text-[#5c5a52]">
                  Same-day or next-day in Siliguri · 1 lighter free
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
