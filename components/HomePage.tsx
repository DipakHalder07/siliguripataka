"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import ShippingBar from "@/components/ShippingBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import TrialPacks from "@/components/TrialPacks";
import WhyTeabox from "@/components/WhyTeabox";
import PromoSplit from "@/components/PromoSplit";
import JustArrived from "@/components/JustArrived";
import HomeSeoSection from "@/components/HomeSeoSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchDrawer from "@/components/LazySearchDrawer";
const TeaFinderModal = dynamic(() => import("@/components/TeaFinderModal"), { ssr: false });

export default function HomePage() {
  const [teaFinderOpen, setTeaFinderOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header announcement bars */}
      <TopBar />
      <ShippingBar />

      {/* 2. Main sticky navigation header */}
      <Header onOpenTeaFinder={() => setTeaFinderOpen(true)} />

      {/* 3. Main content sections */}
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <TrialPacks />
        <WhyTeabox />
        <PromoSplit onOpenTeaFinder={() => setTeaFinderOpen(true)} />
        <JustArrived />
        <HomeSeoSection />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Modals and Slide-Out Drawers */}
      <CartDrawer />
      <SearchDrawer />
      {teaFinderOpen && <TeaFinderModal isOpen onClose={() => setTeaFinderOpen(false)} />}
    </div>
  );
}
