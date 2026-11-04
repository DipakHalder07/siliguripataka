"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cleanIndianPhone } from "@/lib/validations/checkout";
import {
  Check,
  Plus,
  Minus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";
import { LEGAL } from "@/lib/legal";
import "./corporate-gifting.css";

interface ProductItem {
  id: string;
  title: string;
  image: string;
  bullets: string[];
  badge?: string;
  discount?: string;
}

export default function CorporateGiftingPage() {
  const [activeTab, setActiveTab] = useState<"gifts" | "trial" | "decor">("gifts");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [clientIndex, setClientIndex] = useState(0);

  // Carousel ref for products
  const productScrollRef = useRef<HTMLDivElement>(null);

  // RFQ Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("50 - 200 units");
  const [budget, setBudget] = useState("Under INR 3,000");
  const [selectedGift, setSelectedGift] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Clean phone input
  useEffect(() => {
    if (phone) {
      const cleaned = cleanIndianPhone(phone);
      if (cleaned !== phone) {
        setPhone(cleaned);
      }
    }
  }, [phone]);

  const handleSelectGift = (giftTitle: string) => {
    setSelectedGift(giftTitle);
    const formElem = document.getElementById("inquiry");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBudgetClick = (budgetText: string) => {
    setBudget(budgetText);
    const formElem = document.getElementById("inquiry");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollProducts = (direction: "left" | "right") => {
    if (productScrollRef.current) {
      const scrollAmount = 320;
      productScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = cleanIndianPhone(phone);
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      alert("Please enter a valid work email.");
      return;
    }
    if (!cleanPhone || cleanPhone.length < 10) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }
    setFormSubmitted(true);
  };

  // 1. Stats
  const stats = [
    { icon: "/assets/icons/box.svg", num: "35+", label: "Diwali Products" },
    { icon: "/assets/icons/rupee.svg", num: "₹2,000", label: "Minimum Order Value" },
    { icon: "/assets/icons/pin.svg", num: "1 City", label: "Delivery Only in Siliguri" },
  ];

  // 2. Budget tiers
  const budgetTiers = [
    { budget: "Under INR 1,000", image: "/assets/hamper-puja.webp" },
    { budget: "Under INR 3,000", image: "/assets/hamper-festive.webp" },
    { budget: "Under INR 5,000", image: "/assets/mega-family.webp" },
    { budget: "Above INR 10,000", image: "/assets/mega-grand.webp" },
  ];

  // 3. Who we gift for
  const clientLogos = Array.from({ length: 10 }, (_, i) => `/assets/gift-group-${i + 1}.svg`);

  // Auto-advance client logos slider every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clientLogos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [clientLogos.length]);

  const prevClientSlide = () => {
    setClientIndex((prev) => (prev === 0 ? clientLogos.length - 1 : prev - 1));
  };

  const nextClientSlide = () => {
    setClientIndex((prev) => (prev + 1) % clientLogos.length);
  };

  // 4. Why Siliguri Pataka
  const whySiliguriPataka = [
    {
      icon: "/assets/icons/calendar.svg",
      title: "FOR ALL OCCASIONS",
      desc: "Diwali, Kali Puja, staff gifts, club events and client thank-yous.",
    },
    {
      icon: "/assets/icons/wallet.svg",
      title: "FOR EVERY BUDGET",
      desc: "From small kids' packs to grand show boxes. Tell us your budget per gift.",
    },
    {
      icon: "/assets/icons/pen.svg",
      title: "CUSTOMIZE & PERSONALIZE",
      desc: "Greeting cards and your company name on request. Ask us what is possible.",
    },
    {
      icon: "/assets/icons/sparkle.svg",
      title: "35+ DIWALI PRODUCTS",
      desc: "Crackers, hampers, diyas and decor, all from one shop in Siliguri.",
    },
    {
      icon: "/assets/icons/chat.svg",
      title: "CUSTOMER SUPPORT",
      desc: "Talk to us on WhatsApp to plan your order and delivery across Siliguri.",
    },
  ];

  // 5. Products
  const diwaliGifts: ProductItem[] = [
    { id: "mega-starter-pack", title: "Mega Starter Pack", image: "/assets/mega-starter.webp", badge: "DIWALI 2026", bullets: ["₹2,499 per pack", "Sparklers to sky shots", "For a small group"] },
    { id: "pataka-diya-diwali-hamper", title: "Pataka + Diya Diwali Hamper", image: "/assets/combo-pataka-diyas.webp", badge: "DIWALI 2026", bullets: ["Assorted crackers box", "12 clay diyas", "Ready to gift"] },
    { id: "kids-fun-fiesta-green-pack", title: "Kids Fun Fiesta Box", image: "/assets/ck-kids-box.webp", badge: "DIWALI 2026", bullets: ["25 items for children", "Pop pops & magic snakes", "Use with an adult nearby"] },
    { id: "mega-family-pack", title: "Mega Family Pack", image: "/assets/mega-family.webp", badge: "BEST VALUE", bullets: ["₹4,999 per pack", "7 types of crackers", "Save ₹2,324"] },
    { id: "mega-grand-show-pack", title: "Mega Grand Show Pack", image: "/assets/mega-grand.webp", badge: "DIWALI 2026", bullets: ["₹9,999 per pack", "120-shot grand finale", "For clubs and societies"] },
  ];

  const trialPacks: ProductItem[] = [
    { id: "sky-king-30-aerial-shots", title: "Sky King 30 Aerial Shots", image: "/assets/ck-cake-30.webp", bullets: ["30 shots", "5 vibrant colours", "For open terraces"] },
    { id: "imperial-120-shots-mega-cake", title: "Imperial 120 Shots Mega Cake", image: "/assets/ck-cake-120.webp", bullets: ["120 shots", "A grand finale", "For open grounds"] },
    { id: "royal-electric-sparklers-30cm", title: "Royal Electric Sparklers 30cm", image: "/assets/ck-sparkler-gold.webp", bullets: ["Pack of 50 sticks", "Golden sparks", "Easy to share"] },
    { id: "deluxe-tri-color-flower-pots", title: "Deluxe Tri-Color Flower Pots", image: "/assets/ck-anar-tricolor.webp", bullets: ["Pack of 10", "Gold, crimson & silver", "Tall anar fountain"] },
    { id: "super-sonic-whistling-sky-rockets", title: "Super Sonic Whistling Rockets", image: "/assets/ck-rockets.webp", bullets: ["Pack of 10", "Whistling ascent", "Colour burst"] },
  ];

  const decorItems: ProductItem[] = [
    { id: "hand-painted-clay-diyas", title: "Hand-Painted Clay Diyas", image: "/assets/decor-clay-diyas.webp", bullets: ["Pack of 12 or 24", "Traditional terracotta", "Reusable"] },
    { id: "office-diwali-gift-hamper", title: "Office Diwali Gift Hamper", image: "/assets/hamper-office.webp", bullets: ["Pack of 5 or 10", "Neat gift boxes", "For staff and clients"] },
    { id: "festive-sweets-diya-gift-hamper", title: "Festive Diya Hamper", image: "/assets/hamper-festive.webp", bullets: ["Diyas in a gift box", "Ready to gift", "Finished with flowers"] },
    { id: "diwali-puja-thali-set", title: "Diwali Puja Thali Set", image: "/assets/decor-puja-thali.webp", bullets: ["Thali and diya", "Kumkum, haldi and rice", "Ready for puja"] },
  ];

  // 6. Customization
  const customizationCards = [
    { image: "/assets/icons/tag.svg", title: "YOUR COMPANY NAME", desc: "Your company or group name on a sticker or card on each box, on request." },
    { image: "/assets/icons/card.svg", title: "GREETING CARDS", desc: "Add a short Diwali message for your team, clients or members." },
    { image: "/assets/icons/mix.svg", title: "MIX YOUR BOX", desc: "Combine crackers, decor and diyas to build a box that fits your budget." },
    { image: "/assets/icons/ribbon.svg", title: "GIFT WRAPPING", desc: "Simple festive wrapping so that each box is ready to hand over." },
  ];

  // 7. How bulk orders work
  const testimonials = [
    { name: "Share What You Need", badge: "Takes a minute", quote: "Tell us the number of gifts, your budget per gift and your delivery date, using the form or on WhatsApp." },
    { name: "Pick Your Boxes", badge: "We suggest options", quote: "We suggest boxes that fit your budget. Mix crackers, decor and diyas the way you like." },
    { name: "Confirm The Price", badge: "Before you pay", quote: "You get a clear price for the full order before anything is finalised." },
    { name: "We Deliver In Siliguri", badge: "To your door", quote: "We deliver to your office, club or society within Siliguri. Different addresses in the city can be arranged." },
  ];

  // 8. FAQs
  const faqs = [
    {
      q: "1. What is the minimum order for bulk gifting?",
      a: "Every order on Siliguri Pataka has a minimum value of ₹2,000. For bulk gifting, share the number of gifts you need and we will tailor a quote for you, from 10 gifts to hundreds.",
    },
    {
      q: "2. Can I add our company name or a message?",
      a: "Yes, on request. We can add a sticker or card with your company or group name, and a short Diwali message. Tell us what you need when you send your inquiry.",
    },
    {
      q: "3. What occasions do you cater to?",
      a: "Diwali and Kali Puja gifting for staff, clients, club members and housing societies, along with festive events in Siliguri.",
    },
    {
      q: "4. What is the price range for gift boxes?",
      a: "We have options across budgets, from small kids' packs to grand show boxes. Let us know your budget per gift and the number of gifts, and we'll recommend the best fit.",
    },
    {
      q: "5. How do I place a bulk order?",
      a: "Fill in the 'Request a Custom Quote' form above, or reach out by email or WhatsApp. We will get back to you with options and pricing.",
    },
    {
      q: "6. Do you deliver outside Siliguri?",
      a: "No. We deliver only within Siliguri. Delivery to more than one office or address inside Siliguri can be arranged.",
    },
    {
      q: "7. How early should I order?",
      a: "As early as you can, especially for bigger orders. Stock and delivery slots fill up quickly in the last days before Diwali.",
    },
    {
      q: "8. What payment methods are accepted?",
      a: "You can pay by UPI or bank transfer. For bigger orders, talk to us about what suits your organisation.",
    },
  ];

  const currentProducts =
    activeTab === "gifts" ? diwaliGifts : activeTab === "trial" ? trialPacks : decorItems;

  return (
    <SiteLayoutWrapper>
      <div className="w-full bg-white text-[#2b1215] font-sans antialiased">
        
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (1st Section - Pixel-Perfect Live Site Match)             */}
        {/* ========================================================================= */}
        <section className="w-full relative flex flex-col items-center">
          {/* Full-width Responsive Banner with Live Animated Moving Dotted Frame */}
          <div className="w-full relative">
            <picture
              data-dw-frame=""
              tabIndex={0}
              role="link"
              className="w-full block relative cursor-pointer"
            >
              <source
                srcSet="/assets/bulk-gifting-banner-mobile.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="/assets/bulk-gifting-banner.webp"
                media="(min-width: 641px) and (max-width: 1024px)"
              />
              <source
                srcSet="/assets/bulk-gifting-banner.webp"
                media="(min-width: 1025px) and (max-width: 2400px)"
              />
              <img
                src="/assets/bulk-gifting-banner.webp"
                alt="Diwali gift hampers for corporate and bulk gifting in Siliguri"
                className="w-full h-auto object-cover block"
                loading="eager"
              />
            </picture>
          </div>

          {/* Under-Banner Content Box with Live Centered Seal Disc */}
          <div className="w-full relative z-[3] flex flex-col items-center justify-center text-center pt-[84px] max-sm:pt-[64px] pb-[48px] max-sm:pb-[24px] px-4">
            {/* Centered Circular Seal Badge */}
            <div className="absolute -top-[60px] max-sm:-top-[50px] left-1/2 -translate-x-1/2 w-[120px] max-sm:w-[100px] h-[120px] max-sm:h-[100px] bg-white rounded-full p-[10px] max-sm:p-[6px] shadow-sm z-10 flex items-center justify-center overflow-hidden">
              <picture className="w-full h-full flex items-center justify-center rounded-full overflow-hidden animate-float-subtle">
                <source
                  srcSet="/assets/siliguri-emblem.png"
                  media="(max-width: 640px)"
                />
                <source
                  srcSet="/assets/siliguri-emblem.png"
                  media="(min-width: 641px) and (max-width: 1024px)"
                />
                <img
                  src="/assets/siliguri-emblem.png"
                  alt="Siliguri Pataka emblem"
                  className="w-full h-full object-cover block rounded-full"
                  loading="eager"
                />
              </picture>
            </div>

            {/* Title, Subtitle and CTA Container */}
            <div className="flex flex-col items-center justify-center gap-3 max-w-[800px] text-center">
              {/* Headline */}
              <h1 className="font-stencil-reg text-[#2b1215] text-[42px] max-sm:text-[20px] leading-[44px] max-sm:leading-[24px] tracking-[1px] font-normal capitalize text-center">
                GIFTS WORTH TALKING ABOUT
              </h1>

              {/* Subtitle: Poppins 300, 20px desktop, 14px mobile */}
              <p className="text-[#5F5F5F] font-light text-[20px] max-sm:text-[14px] leading-[26px] max-sm:leading-[130%] text-center">
                Crackers, decor and diyas in one box. For offices, clubs, housing societies and families across Siliguri, this Diwali.
              </p>

              {/* CTA Button with Live Sheen Animation */}
              <a
                href="#collection"
                tabIndex={0}
                className="alchemy-rte inline-flex items-center justify-center bg-[#E96951] hover:bg-[#d85841] text-white px-16 py-3 rounded-[4px] transition-colors cursor-pointer mt-3"
              >
                <span className="text-white text-[20px] leading-[20px] font-normal tracking-[0px]">
                  EXPLORE GIFTS
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. STATS TICKER STRIP (Infinite Marquee Animation Gliding Seamlessly)      */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#FAF6EE] py-3 border-y border-[#EDE6DB] overflow-hidden">
          <div className="relative w-full overflow-hidden flex">
            {/* Animated Marquee Double Track (40s linear matching live site) */}
            <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-20 whitespace-nowrap">
              {[...stats, ...stats, ...stats, ...stats].map((s, idx) => (
                <div key={idx} className="flex items-center gap-3.5 flex-shrink-0">
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={28}
                    height={28}
                    unoptimized
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  />
                  <span className="text-[15px] sm:text-[16px] font-light text-[#2b1215] leading-[24px]">
                    {s.num} {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. GIFTS FOR EVERY BUDGET (With Rotating Golden Dotted Ring Animation!)    */}
        {/* ========================================================================= */}
        <section className="py-12 px-4 sm:px-6 max-w-[1200px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-8 sm:mb-10">
            <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
              GIFTS FOR EVERY BUDGET
            </h2>
            <p className="text-[18px] sm:text-[20px] font-light leading-[24px] sm:leading-[26px] text-[#5F5F5F] text-center mt-2">
              Pick a budget per gift and we will suggest the right box
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {budgetTiers.map((tier, idx) => (
              <div
                key={idx}
                onClick={() => handleBudgetClick(tier.budget)}
                className="group flex flex-col items-center cursor-pointer text-center"
              >
                {/* Rotating Dotted Gold Ring around Circular Image Container */}
                <div className="relative flex items-center justify-center w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[185px] lg:h-[185px]">
                  {/* The Live Continuous Spinning Gold Dotted Ring */}
                  <div
                    className="budget-ring-spinner animate-ring-spin"
                    aria-hidden="true"
                  />

                  {/* Inner Solid Circle */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 bg-white z-[2]">
                    <Image
                      src={tier.image}
                      alt={tier.budget}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="mt-6 pb-1 border-b border-[#360b10]/50 group-hover:border-[#360b10] transition-colors">
                  <h3 className="text-[#360b10] text-[13px] font-normal tracking-[1.82px] uppercase">
                    {tier.budget}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. Who we gift for (carousel)                                            */}
        {/* ========================================================================= */}
        <section className="py-12 bg-[#FAF6EE] border-t border-[#EBE3D7] relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-6 text-center">
            <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
              WE GIFT FOR EVERY KIND OF GROUP
            </h2>
            <div className="text-[12px] text-[#8C8476] tracking-wider uppercase font-medium mt-2">
              Slide {clientIndex + 1} of {clientLogos.length}
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative flex items-center">
            {/* Previous Slider Button */}
            <button
              onClick={prevClientSlide}
              aria-label="Previous slide"
              className="absolute left-2 sm:left-4 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md border border-[#E3DACD] hover:bg-[#FAF6EE] text-[#2b1215] flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Logo Carousel Viewport */}
            <div className="w-full overflow-hidden px-10 sm:px-14">
              <div
                className="flex items-center transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(clientIndex * 100) / (typeof window !== "undefined" && window.innerWidth >= 1024 ? 5 : typeof window !== "undefined" && window.innerWidth >= 640 ? 3 : 2)}%)`,
                }}
              >
                {clientLogos.concat(clientLogos).map((logoUrl, i) => (
                  <div
                    key={i}
                    className="w-1/2 sm:w-1/3 lg:w-1/5 flex-shrink-0 flex items-center justify-center p-3 sm:p-4"
                  >
                    <div className="w-[120px] sm:w-[140px] h-[50px] sm:h-[60px] flex items-center justify-center">
                      <Image
                        src={logoUrl}
                        alt={`Gifting group ${(i % clientLogos.length) + 1}`}
                        width={140}
                        height={60}
                        unoptimized
                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Slider Button */}
            <button
              onClick={nextClientSlide}
              aria-label="Next slide"
              className="absolute right-2 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md border border-[#E3DACD] hover:bg-[#FAF6EE] text-[#2b1215] flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. WHY SILIGURI PATAKA? (5 Feature Pillars)                                        */}
        {/* ========================================================================= */}
        <section className="py-12 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#EBE3D7]">
          <div className="text-center max-w-[760px] mx-auto mb-8 sm:mb-10">
            <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
              WHY SILIGURI PATAKA?
            </h2>
            <p className="text-[18px] sm:text-[20px] font-light leading-[24px] sm:leading-[26px] text-[#5F5F5F] text-center mt-2">
              Your local Diwali shop for gifts that everyone can enjoy, delivered across Siliguri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {whySiliguriPataka.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#EBE3D7] hover:border-[#2b1215]/30 hover:shadow-sm transition-all duration-200 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF6EE] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={34}
                    height={34}
                    unoptimized
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-[#2b1215] tracking-wider uppercase mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#5F5F5F] font-light leading-[19px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. OUR COLLECTION OF GIFTS (Horizontal Carousel Slider with Chevrons)     */}
        {/* ========================================================================= */}
        <section id="collection" className="py-12 bg-[#FAF6EE] border-t border-[#EBE3D7] relative">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-[760px] mx-auto mb-6">
              <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
                OUR COLLECTION OF GIFTS
              </h2>
            </div>

            {/* Underlined Tab List (Matching Live Replo Design) */}
            <div className="flex items-center justify-center gap-8 sm:gap-14 border-b border-[#DBDBDB] mb-8 sm:mb-10">
              <button
                onClick={() => {
                  setActiveTab("gifts");
                  if (productScrollRef.current) productScrollRef.current.scrollLeft = 0;
                }}
                className={`text-[14px] uppercase tracking-wide pb-2 transition-all duration-200 cursor-pointer ${
                  activeTab === "gifts"
                    ? "text-[#2b1215] font-medium border-b-2 border-[#2b1215]"
                    : "text-[#5F5F5F] font-light border-b-2 border-transparent hover:text-[#2b1215]"
                }`}
              >
                Gifts
              </button>
              <button
                onClick={() => {
                  setActiveTab("trial");
                  if (productScrollRef.current) productScrollRef.current.scrollLeft = 0;
                }}
                className={`text-[14px] uppercase tracking-wide pb-2 transition-all duration-200 cursor-pointer ${
                  activeTab === "trial"
                    ? "text-[#2b1215] font-medium border-b-2 border-[#2b1215]"
                    : "text-[#5F5F5F] font-light border-b-2 border-transparent hover:text-[#2b1215]"
                }`}
              >
                Crackers
              </button>
              <button
                onClick={() => {
                  setActiveTab("decor");
                  if (productScrollRef.current) productScrollRef.current.scrollLeft = 0;
                }}
                className={`text-[14px] uppercase tracking-wide pb-2 transition-all duration-200 cursor-pointer ${
                  activeTab === "decor"
                    ? "text-[#2b1215] font-medium border-b-2 border-[#2b1215]"
                    : "text-[#5F5F5F] font-light border-b-2 border-transparent hover:text-[#2b1215]"
                }`}
              >
                GIFTS &amp; DECOR
              </button>
            </div>

            {/* Product Slider Container with Left & Right Arrow Buttons */}
            <div className="relative">
              {/* Left Arrow Button */}
              <button
                onClick={() => scrollProducts("left")}
                aria-label="Previous products"
                className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-[#E3DACD] hover:bg-[#FAF6EE] text-[#2b1215] items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Horizontal Scroll Track */}
              <div
                ref={productScrollRef}
                className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 pt-1 px-1"
              >
                {currentProducts.map((p) => (
                  <div
                    key={p.id}
                    className="w-[280px] sm:w-[300px] lg:w-[285px] flex-shrink-0 snap-start bg-white rounded-[4px] border border-[#E8E1D5] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Square Image Box */}
                    <div className="relative w-full aspect-square bg-[#FAF7F2] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Authentic Coral DIWALI EDITION Ribbon */}
                      {p.badge ? (
                        <div className="absolute top-2.5 left-0 z-10 bg-[#E96951] text-white text-[11px] font-bold tracking-[1px] uppercase px-2.5 py-1 shadow-sm">
                          {p.badge}
                        </div>
                      ) : null}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-[#2b1215] text-[15px] sm:text-[16px] font-medium uppercase leading-[140%] mb-3">
                          {p.title}
                        </h3>
                        <ul className="space-y-1.5 mb-6">
                          {p.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-[13px] sm:text-[14px] text-[#5F5F5F] font-light leading-[22px] flex items-start gap-1.5"
                            >
                              <span className="text-[#8C8476] mt-0.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Accent Terracotta Button with Sheen */}
                      <button
                        onClick={() => handleSelectGift(p.title)}
                        className="alchemy-rte w-full py-2.5 px-6 rounded-[4px] bg-[#E96951] hover:bg-[#d85841] text-white text-[14px] font-normal tracking-wide uppercase transition-colors duration-200 active:scale-98 text-center cursor-pointer shadow-none"
                      >
                        Get a quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() => scrollProducts("right")}
                aria-label="Next products"
                className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-[#E3DACD] hover:bg-[#FAF6EE] text-[#2b1215] items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. OUR BOXES, YOUR WAY (4 Customization Features)                        */}
        {/* ========================================================================= */}
        <section className="py-12 px-4 sm:px-6 max-w-[1200px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-8 sm:mb-10">
            <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
              OUR BOXES, YOUR WAY
            </h2>
            <p className="text-[18px] sm:text-[20px] font-light leading-[24px] sm:leading-[26px] text-[#5F5F5F] text-center mt-2">
              From a card with your message to the mix of crackers and decor, tell us what you would like.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {customizationCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#EBE3D7] hover:border-[#2b1215]/30 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAF6EE] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={44}
                    height={44}
                    unoptimized
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-[#2b1215] tracking-wider uppercase mb-2">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#5F5F5F] font-light leading-[19px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. How bulk orders work                                                   */}
        {/* ========================================================================= */}
        <section className="py-12 bg-[#FAF6EE] border-y border-[#360b10]/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-[760px] mx-auto mb-8 sm:mb-10">
              <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
                HOW BULK ORDERS WORK
              </h2>
              <p className="text-[18px] sm:text-[20px] font-light leading-[24px] sm:leading-[26px] text-[#5F5F5F] text-center mt-2">
                Four simple steps, from your first message to delivery in Siliguri.
              </p>
            </div>

            {/* 2-Column Responsive Card Grid matching live site */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[11px] border border-[#E5DFD4] p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="text-[12px] font-bold tracking-wider uppercase text-[#E96951] mb-3">
                      Step {idx + 1}
                    </div>

                    <p className="text-[14px] text-[#5F5F5F] leading-[22px] font-normal mb-5">
                      {t.quote}
                    </p>
                  </div>

                  {/* Step title */}
                  <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                    <div className="text-[14px] font-medium text-black">
                      {t.name}
                    </div>
                    <div className="text-[12px] font-normal text-[#5F5F5F] flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-[#f9a825]" />
                      <span>{t.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. BEGIN YOUR GIFTING JOURNEY (Split Section & RFQ Form)                  */}
        {/* ========================================================================= */}
        <section id="inquiry" className="py-12 px-4 sm:px-6 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="font-stencil-reg text-[36px] sm:text-[42px] leading-[40px] sm:leading-[46px] text-[#2b1215] uppercase mb-3">
                  BEGIN YOUR <br />
                  <span>GIFTING JOURNEY</span>
                </h2>
                <p className="text-[#5F5F5F] font-light text-[17px] sm:text-[18px] leading-[26px] mb-6">
                  Want to know more about our bulk gifting?
                </p>

                {/* Contact details */}
                <div className="space-y-3 text-[15px] sm:text-[16px] text-[#5F5F5F] font-light">
                  <p>
                    <span>Give us a call: </span>
                    <a href="tel:+918617513004" className="text-[#2b1215] font-medium hover:text-[#E96951] transition-colors">
                      +91 86175 13004
                    </a>
                  </p>
                  <p>
                    <span>Email us at: </span>
                    <a
                      href={`mailto:${LEGAL.supportEmail}`}
                      className="text-[#2b1215] font-medium underline hover:text-[#E96951] transition-colors"
                    >
                      {LEGAL.supportEmail}
                    </a>
                  </p>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-6">
                  <a
                    href="https://wa.me/918617513004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alchemy-rte inline-flex items-center gap-2.5 bg-[#E96951] hover:bg-[#d85841] text-white py-2.5 px-6 rounded-[4px] text-[14px] uppercase tracking-wide transition-all shadow-none cursor-pointer"
                  >
                    <Image
                      src="/assets/icons/whatsapp.svg"
                      alt="WhatsApp"
                      width={18}
                      height={18}
                      unoptimized
                      className="w-4 h-4 object-contain brightness-0 invert"
                    />
                    <span>ENQUIRE ON WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quote Request Form */}
            <div className="lg:col-span-7 bg-[#FAF6EE] p-6 sm:p-8 rounded-xl border border-[#E5DFD4]">
              <h3 className="font-stencil-reg text-[22px] sm:text-[24px] text-[#2b1215] uppercase mb-1.5">
                Request a Custom Quote
              </h3>
              <p className="text-[14px] text-[#5F5F5F] font-light mb-5">
                Tell us about your occasion, headcount, and budget. Our gifting team will respond quickly.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-white border border-[#f5d9a8] text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#E96951] text-white mx-auto flex items-center justify-center mb-3">
                    <Check size={24} />
                  </div>
                  <h4 className="font-stencil-reg text-[19px] text-[#2b1215] mb-2 uppercase">
                    Inquiry Received!
                  </h4>
                  <p className="text-[14px] text-[#5F5F5F] max-w-[420px] mx-auto mb-5">
                    Thank you, <strong className="text-[#2b1215]">{name}</strong>. Our corporate gifting specialist will get in touch with you at <strong className="text-[#2b1215]">{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="px-6 py-2 rounded-[4px] bg-[#2b1215] text-white text-[13px] uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vikram@company.com"
                        className="w-full px-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-[#787268] font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                          placeholder="9876543210"
                          className="w-full pl-11 pr-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                        Estimated Quantity
                      </label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                      >
                        <option>10 - 50 units</option>
                        <option>50 - 200 units</option>
                        <option>200 - 500 units</option>
                        <option>500 - 1,000 units</option>
                        <option>1,000+ units</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                        Budget per Gift
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                      >
                        <option>Under INR 1,000</option>
                        <option>Under INR 3,000</option>
                        <option>Under INR 5,000</option>
                        <option>Above INR 10,000</option>
                        <option>Flexible / Need Recommendation</option>
                      </select>
                    </div>
                  </div>

                  {selectedGift && (
                    <div className="p-2.5 rounded-[4px] bg-white border border-[#E0D8CB] flex items-center justify-between">
                      <div className="text-[13px] text-[#423E38]">
                        Selected Gift: <strong className="text-[#E96951]">{selectedGift}</strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedGift("")}
                        className="text-[12px] text-[#91897C] hover:text-[#2b1215] underline cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  <div>
                    <label className="block text-[12px] font-bold text-[#4A453F] uppercase tracking-wider mb-1">
                      Specific Requirements / Customization Needs
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you need: number of gifts, delivery date and your area in Siliguri..."
                      className="w-full px-3.5 py-2 rounded-[4px] border border-[#D5CDBD] text-[14px] focus:outline-none focus:border-[#E96951] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="alchemy-rte w-full py-3 rounded-[4px] bg-[#E96951] hover:bg-[#d85841] text-white font-normal text-[15px] tracking-wider uppercase transition-all shadow-none cursor-pointer"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. Full-width WhatsApp banner                                            */}
        {/* ========================================================================= */}
        <section
          className="w-full py-12 px-4 bg-cover bg-center relative flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url("/assets/touch-bg.webp")`,
          }}
        >
          <div className="max-w-[560px] mx-auto flex flex-col items-center">
            <h2 className="font-stencil-reg text-[28px] sm:text-[36px] text-white uppercase tracking-[1px] mb-2">
              WANT TO GET IN TOUCH?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-white/85 font-light leading-[24px] mb-5">
              Have a question or need help? Reach out to us on WhatsApp. Our team is happy to help with your queries
            </p>
            <a
              href="https://wa.me/918617513004"
              target="_blank"
              rel="noopener noreferrer"
              className="alchemy-rte inline-flex items-center gap-2 bg-[#E96951] hover:bg-[#d85841] text-white py-2.5 px-8 rounded-[4px] text-[15px] font-normal uppercase tracking-wide transition-all shadow-none cursor-pointer"
            >
              <Image
                src="/assets/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                unoptimized
                className="w-4 h-4 object-contain brightness-0 invert"
              />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. YOU ASKED, WE ANSWERED (8 FAQs Matching Live Site)                    */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white border-t border-[#EBE3D7]">
          <div className="max-w-[840px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="font-stencil-reg text-[38px] sm:text-[42px] leading-[42px] sm:leading-[44px] text-[#2b1215] tracking-[1px] font-normal uppercase text-center">
                YOU ASKED, WE ANSWERED
              </h2>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-[#DBDBDB] transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer"
                    >
                      <span className="text-[16px] sm:text-[17px] font-medium text-[#2b1215]">
                        {faq.q}
                      </span>
                      <span className="text-[#5F5F5F] flex-shrink-0">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 text-[14px] sm:text-[15px] text-[#5F5F5F] font-light leading-[24px]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </SiteLayoutWrapper>
  );
}
