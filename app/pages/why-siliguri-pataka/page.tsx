"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";

export default function WhySiliguriPatakaPage() {
  return (
    <SiteLayoutWrapper>
      <div className="w-full bg-white text-[#2b1215]">
        {/* Hero */}
        <section className="relative w-full bg-[#4a0e14] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-[840px] mx-auto space-y-5">
            <span className="text-[#f9a825] font-bold text-[13px] tracking-[2.5px] uppercase">
              DIWALI 2026 IN SILIGURI
            </span>
            <h1 className="font-stencil text-[36px] sm:text-[50px] font-bold leading-tight">
              YOUR DIWALI SHOP, ONLY FOR SILIGURI
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#f1dccb] leading-relaxed">
              Crackers, local mithai, gift hampers, rangoli and diyas in one place. Order online and we deliver the same day or the next day, anywhere in Siliguri.
            </p>
          </div>
        </section>

        {/* 2-column story */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="text-center mb-14">
            <h2 className="font-stencil text-[30px] sm:text-[40px] font-bold text-[#2b1215] mb-3">
              A SIMPLER WAY TO SHOP FOR DIWALI
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#5c5a52] max-w-[600px] mx-auto">
              Compare the usual last-minute market rush with ordering from Siliguri Pataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-2xl p-7 sm:p-9 space-y-5">
              <div className="flex items-center justify-between border-b border-[#f0dfc6] pb-4">
                <h3 className="font-bold text-[18px] text-[#8e8d8a] uppercase tracking-wide">
                  The Usual Diwali Rush
                </h3>
                <span className="bg-[#f0dfc6] text-[#5c5a52] text-[12px] font-bold px-2.5 py-1 rounded">
                  Time-Consuming
                </span>
              </div>
              <ul className="space-y-4 text-[14px] text-[#5c5a52]">
                <li className="flex items-start gap-3">
                  <span className="text-[#d93838] font-bold text-[16px]">✕</span>
                  <span>Crowded stalls and markets in the last days before Diwali.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d93838] font-bold text-[16px]">✕</span>
                  <span>Carrying heavy boxes home through festival traffic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d93838] font-bold text-[16px]">✕</span>
                  <span>Buying crackers, sweets and decor from different shops.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d93838] font-bold text-[16px]">✕</span>
                  <span>Prices and stock you can only check by going there.</span>
                </li>
              </ul>
            </div>

            {/* The Siliguri Pataka way */}
            <div className="bg-[#fff6e6] border-2 border-[#f9a825] rounded-2xl p-7 sm:p-9 space-y-5 relative shadow-md">
              <span className="absolute -top-3 right-6 bg-[#f9a825] text-[#4a0e14] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                Made For Siliguri
              </span>
              <div className="flex items-center justify-between border-b border-[#f9a825]/30 pb-4">
                <h3 className="font-bold text-[18px] text-[#4a0e14] uppercase tracking-wide">
                  The Siliguri Pataka Way
                </h3>
                <span className="bg-[#16a34a]/20 text-[#15803d] text-[12px] font-bold px-2.5 py-1 rounded">
                  Today or Tomorrow
                </span>
              </div>
              <ul className="space-y-4 text-[14px] text-[#4a0e14]">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#e65100] shrink-0 mt-0.5" />
                  <span>Browse crackers, sweets and decor in one place, from your phone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#e65100] shrink-0 mt-0.5" />
                  <span>See prices and what is in stock before you order.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#e65100] shrink-0 mt-0.5" />
                  <span>Pay by UPI or cash on delivery, whichever suits you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#e65100] shrink-0 mt-0.5" />
                  <span>Delivered the same day or the next day, only within Siliguri, with 1 lighter free. Minimum order ₹2,000.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Delivery areas */}
        <section className="w-full bg-[#fff9ef] border-y border-[#f0dfc6] py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-stencil text-[28px] sm:text-[36px] font-bold text-[#2b1215] mb-3">
              WHERE WE DELIVER IN SILIGURI
            </h2>
            <p className="text-[15px] text-[#5c5a52] max-w-[620px] mx-auto mb-12">
              We deliver only within Siliguri. These are some of the areas we cover. Not sure about yours? Contact us before you order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  region: "Central Siliguri",
                  alt: "Hill Cart Road · Sevoke Road",
                  desc: "Homes, shops and offices around Hill Cart Road, Sevoke Road and the city centre.",
                },
                {
                  region: "Pradhan Nagar & Hakimpara",
                  alt: "Town neighbourhoods",
                  desc: "Family homes and housing societies in Pradhan Nagar, Hakimpara and nearby wards.",
                },
                {
                  region: "Champasari & Matigara",
                  alt: "Northern side of town",
                  desc: "Homes and apartment complexes around Champasari and Matigara.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#f0dfc6] rounded-xl p-6 text-left shadow-xs">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#b3261e] block mb-1">
                    {item.alt}
                  </span>
                  <h4 className="font-stencil text-[22px] font-bold text-[#2b1215] mb-2">
                    {item.region}
                  </h4>
                  <p className="text-[13.5px] text-[#5c5a52] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our promise */}
        <section id="our-promise" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white scroll-mt-20">
          <div className="max-w-[1000px] mx-auto bg-[#faf8f5] border border-[#f0dfc6] rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#4a0e14]/10 border-4 border-[#f9a825] shrink-0 relative">
                <Image
                  src="/assets/siliguri-emblem.png"
                  alt="Siliguri Pataka emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 text-center md:text-left flex-1">
                <span className="text-[12px] font-bold text-[#b3261e] tracking-[2px] uppercase bg-[#f9a825]/20 px-3 py-1 rounded-full inline-block">
                  OUR PROMISE
                </span>
                <h3 className="font-stencil text-[26px] sm:text-[32px] font-bold text-[#2b1215]">
                  A Local Shop For Siliguri&apos;s Diwali
                </h3>
                <blockquote className="text-[16px] italic text-[#4a0e14] font-medium leading-relaxed">
                  &ldquo;Order from home, pay the way you like, and spend the festival with the people you love.&rdquo;
                </blockquote>
                <p className="text-[14px] text-[#5c5a52] leading-relaxed">
                  Siliguri Pataka is made only for Siliguri. We focus on one city so that we can get your crackers, sweets and decor to you quickly, and answer your questions when you need us. If something in your order is wrong or damaged, tell us within 48 hours and we will sort it out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-12 bg-[#fff9ef] border-y border-[#f0dfc6] scroll-mt-20">
          <div className="max-w-[1200px] mx-auto text-center space-y-10">
            <div>
              <span className="text-[12px] font-bold text-[#5c5a52] tracking-[2px] uppercase">
                HOW IT WORKS
              </span>
              <h2 className="font-stencil text-[28px] sm:text-[38px] font-bold text-[#2b1215] mt-1">
                FOUR EASY STEPS
              </h2>
              <p className="text-[14.5px] text-[#5c5a52] max-w-[500px] mx-auto mt-2">
                From choosing your crackers to lighting the first diya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  outlet: "Choose",
                  quote: "Pick crackers, sweets, diyas and gift boxes. Your cart needs to reach at least ₹2,000.",
                  tag: "Step 1",
                },
                {
                  outlet: "Share Your Address",
                  quote: "Enter your delivery address in Siliguri and a phone number we can reach.",
                  tag: "Step 2",
                },
                {
                  outlet: "Pay Your Way",
                  quote: "Pay by UPI, or choose cash on delivery where it is available.",
                  tag: "Step 3",
                },
                {
                  outlet: "Celebrate",
                  quote: "We deliver to your door. Read the safety guide, and have a happy Diwali.",
                  tag: "Step 4",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#f0dfc6] rounded-2xl p-6 text-left flex flex-col justify-between hover:border-[#f9a825] transition-colors shadow-xs"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold text-[#b3261e] uppercase tracking-wider bg-[#f9a825]/10 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                    <h4 className="font-stencil text-[20px] font-bold text-[#2b1215]">
                      {item.outlet}
                    </h4>
                    <p className="text-[13.5px] text-[#5c5a52] leading-relaxed">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 text-center px-4">
          <div className="max-w-[600px] mx-auto space-y-4">
            <h3 className="font-stencil text-[28px] font-bold text-[#2b1215]">
              Ready For Diwali?
            </h3>
            <p className="text-[14px] text-[#5c5a52]">
              Start with a gift box, or build your own order from 40+ crackers, sweets, hampers and decor items.
            </p>
            <div className="pt-2">
              <Link
                href="/collections/all"
                className="inline-flex items-center gap-2 bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[15px] px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Shop All Products</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayoutWrapper>
  );
}
