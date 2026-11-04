"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import ShippingBar from "@/components/ShippingBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchDrawer from "@/components/LazySearchDrawer";
const PackFinderModal = dynamic(() => import("@/components/PackFinderModal"), { ssr: false });

export default function SiteLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [packFinderOpen, setPackFinderOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Announcement Bars */}
      <TopBar />
      <ShippingBar />
      <Header onOpenPackFinder={() => setPackFinderOpen(true)} />

      {/* 2. Main Page Content */}
      <main className="flex-1">{children}</main>

      {/* 3. Luxury Dark Footer */}
      <Footer />

      {/* 4. Global Drawers & Modals */}
      <CartDrawer />
      <SearchDrawer />
      {packFinderOpen && <PackFinderModal isOpen onClose={() => setPackFinderOpen(false)} />}
    </div>
  );
}
