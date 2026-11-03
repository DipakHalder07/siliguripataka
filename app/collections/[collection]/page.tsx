import type { Metadata } from "next";
import { Suspense } from "react";
import CollectionLayoutWrapper from "@/components/CollectionLayoutWrapper";
import { COLLECTIONS } from "@/data/products";
import { getStoreProducts } from "@/lib/catalog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, collectionJsonLd, pageMeta, SITE_NAME } from "@/lib/seo";

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
  const col = COLLECTIONS.find((c) => c.id === collection) || COLLECTIONS[0];
  return pageMeta({
    title: `${col.seoTitle} | ${SITE_NAME}`,
    description: col.description,
    path: `/collections/${col.id}`,
  });
}

async function CollectionContent({ params }: PageProps) {
  const [{ collection }, products] = await Promise.all([params, getStoreProducts()]);
  const col = COLLECTIONS.find((c) => c.id === collection) || COLLECTIONS[0];
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
