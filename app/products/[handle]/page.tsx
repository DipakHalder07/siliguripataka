import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductDetailLayoutWrapper from "@/components/ProductDetailLayoutWrapper";
import { getStoreProduct, getStoreProducts } from "@/lib/catalog";
import { COLLECTIONS } from "@/data/products";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMeta, productJsonLd, SITE_NAME } from "@/lib/seo";
import { productFaqs, productSeoDescription, productSeoTitle } from "@/lib/seoContent";

interface PageProps {
  params: Promise<{ handle: string }>;
}

// Products added later in the admin are rendered on their first visit.
export async function generateStaticParams() {
  return (await getStoreProducts()).map((p) => ({
    handle: p.handle || p.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getStoreProduct(handle);

  if (!product) {
    return { title: `Product Not Found | ${SITE_NAME}`, robots: { index: false, follow: false } };
  }

  return pageMeta({
    title: productSeoTitle(product),
    description: productSeoDescription(product),
    path: `/products/${product.handle || product.id}`,
    image: product.image,
  });
}

async function ProductContent({ params }: PageProps) {
  const { handle } = await params;
  const products = await getStoreProducts();
  const product = products.find((p) => p.handle === handle || p.id === handle);

  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const col = COLLECTIONS.find((c) => c.id === product.category);
  return (
    <>
      <JsonLd
        data={[
          productJsonLd(product),
          faqJsonLd(productFaqs(product)),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            ...(col ? [{ name: col.name, path: `/collections/${col.id}` }] : []),
            { name: product.title, path: `/products/${product.handle || product.id}` },
          ]),
        ]}
      />
      <ProductDetailLayoutWrapper product={product} related={related} />
    </>
  );
}

export default function ProductPage(props: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductContent {...props} />
    </Suspense>
  );
}
