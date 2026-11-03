import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import CollectionLayoutWrapper from "@/components/CollectionLayoutWrapper";
import { COLLECTIONS } from "@/data/products";
import { getStoreProducts } from "@/lib/catalog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, collectionJsonLd, faqJsonLd, pageMeta, SITE_NAME } from "@/lib/seo";
import { collectionFaqs } from "@/lib/seoContent";

interface PageProps {
  params: Promise<{ collection: string }>;
}

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({
    collection: c.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { collection } = await params;
  const col = COLLECTIONS.find((c) => c.id === collection);
  if (!col) return { title: `Page Not Found | ${SITE_NAME}`, robots: { index: false, follow: false } };
  return pageMeta({
    title: `${col.seoTitle} | ${SITE_NAME}`,
    description: col.description,
    path: `/collections/${col.id}`,
  });
}

async function CollectionContent({ params }: PageProps) {
  const [{ collection }, products] = await Promise.all([params, getStoreProducts()]);
  const col = COLLECTIONS.find((c) => c.id === collection);
  if (!col) notFound();
  const path = `/collections/${col.id}`;
  const listed = products.filter((p) => col.id === "all" || p.category === col.id);
  return (
    <>
      <JsonLd
        data={[
          collectionJsonLd(col.name, col.description, path, listed),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Shop", path: "/collections/all" },
            { name: col.name, path },
          ]),
          faqJsonLd(collectionFaqs(col.id, col.name, listed)),
        ]}
      />
      <CollectionLayoutWrapper collection={collection} products={products} />
    </>
  );
}

export default function CollectionPage(props: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CollectionContent {...props} />
    </Suspense>
  );
}
