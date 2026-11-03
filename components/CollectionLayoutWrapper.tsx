"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import ShippingBar from "@/components/ShippingBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchDrawer from "@/components/LazySearchDrawer";
import ProductListingPage from "@/components/ProductListingPage";
import type { Product } from "@/data/products";
const TeaFinderModal = dynamic(() => import("@/components/TeaFinderModal"), { ssr: false });

export default function CollectionLayoutWrapper({ collection, products }: { collection: string; products: Product[] }) {
  const [teaFinderOpen, setTeaFinderOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Announcement Bars */}
      <TopBar />
      <ShippingBar />
      <Header onOpenTeaFinder={() => setTeaFinderOpen(true)} />

      {/* 2. Main Product Listing Content */}
      <main className="flex-1">
        <ProductListingPage initialCollectionId={collection} products={products} />
      </main>

      {/* 3. Luxury Dark Footer */}
      <Footer />

      {/* 4. Drawers & Modals */}
      <CartDrawer />
      <SearchDrawer />
      {teaFinderOpen && <TeaFinderModal isOpen onClose={() => setTeaFinderOpen(false)} />}
    </div>
  );
}
