"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import ShippingBar from "@/components/ShippingBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchDrawer from "@/components/LazySearchDrawer";
import ProductDetailPage from "@/components/ProductDetailPage";
import { Product } from "@/data/products";
const PackFinderModal = dynamic(() => import("@/components/PackFinderModal"), { ssr: false });

export default function ProductDetailLayoutWrapper({ product, related }: { product: Product; related?: Product[] }) {
  const [packFinderOpen, setPackFinderOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Announcement Bars */}
      <TopBar />
      <ShippingBar />
      <Header onOpenPackFinder={() => setPackFinderOpen(true)} />

      {/* 2. Main Product Content */}
      <main className="flex-1">
        <ProductDetailPage product={product} related={related} />
      </main>

      {/* 3. Luxury Dark Footer */}
      <Footer />

      {/* 4. Drawers & Modals */}
      <CartDrawer />
      <SearchDrawer />
      {packFinderOpen && <PackFinderModal isOpen onClose={() => setPackFinderOpen(false)} />}
    </div>
  );
}
