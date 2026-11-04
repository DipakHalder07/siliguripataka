import type { Metadata } from "next";
import type { Product } from "@/data/products";
import type { BlogPost } from "@/lib/blog";
import { DELIVERY_AREAS, LEGAL } from "@/lib/legal";
import { productVariants } from "@/lib/productVariants";

// Everything search engines read: page titles and descriptions, canonical addresses and structured
// data. Set NEXT_PUBLIC_APP_URL to the live domain so that all of these point to the right place.

export const SITE_NAME = "Siliguri Pataka";
export const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://siliguripataka.shop").replace(/\/+$/, "");
export const DEFAULT_TITLE = "Buy Diwali Crackers Online in Siliguri | Siliguri Pataka";
export const DEFAULT_DESCRIPTION =
  "Order Diwali crackers, gift hampers, lights and diyas online in Siliguri. Same-day or next-day delivery, 1 lighter free, ₹2,000 minimum order.";
export const DEFAULT_IMAGE = "/assets/og-siliguri-pataka.jpg";

export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/** Title, description, canonical address and social preview for one indexable page. */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  // Google cuts titles off at about 60 characters, so a long title loses the brand first.
  const suffix = ` | ${SITE_NAME}`;
  if (title.length > 60 && title.endsWith(suffix)) title = title.slice(0, -suffix.length);
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "en-IN": path },
      types: { "application/rss+xml": [{ url: "/feed.xml", title: `${SITE_NAME} Diwali Guides` }] },
    },
    openGraph: { title, description, url: path, siteName: SITE_NAME, locale: "en_IN", type, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** For private pages (cart, checkout, account, order): usable by customers, hidden from search. */
export function privatePageMeta(title: string): Metadata {
  return { title: `${title} | ${SITE_NAME}`, robots: { index: false, follow: false } };
}

const SILIGURI = {
  "@type": "City",
  name: "Siliguri",
  containedInPlace: { "@type": "State", name: "West Bengal" },
};
const STORE_ID = `${SITE_URL}/#store`;
const isFilledIn = (value: string) => value.length > 0 && !value.includes("[");

export function storeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": STORE_ID,
    name: SITE_NAME,
    alternateName: ["Siliguri Pataka Online", "Pataka Siliguri"],
    url: SITE_URL,
    logo: absoluteUrl("/assets/siliguri-logo.jpg"),
    image: absoluteUrl(DEFAULT_IMAGE),
    description: DEFAULT_DESCRIPTION,
    email: LEGAL.supportEmail,
    ...(isFilledIn(LEGAL.supportPhone) ? { telephone: LEGAL.supportPhone } : {}),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Cash on Delivery",
    address: {
      "@type": "PostalAddress",
      ...(isFilledIn(LEGAL.streetAddress) ? { streetAddress: LEGAL.streetAddress } : {}),
      addressLocality: "Siliguri",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 26.7271, longitude: 88.3953 },
    areaServed: [SILIGURI, ...DELIVERY_AREAS.map((area) => ({ "@type": "Place", name: `${area}, Siliguri` }))],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: LEGAL.supportEmail,
      ...(isFilledIn(LEGAL.supportPhone) ? { telephone: LEGAL.supportPhone } : {}),
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
    ...([LEGAL.facebookUrl, LEGAL.instagramUrl].some(Boolean)
      ? { sameAs: [LEGAL.facebookUrl, LEGAL.instagramUrl].filter(Boolean) }
      : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": STORE_ID },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/products/${product.handle || product.id}`);
  const variants = productVariants(product);
  const availability = product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
  const common = {
    priceCurrency: "INR",
    availability,
    itemCondition: "https://schema.org/NewCondition",
    url,
    areaServed: SILIGURI,
    seller: { "@id": STORE_ID },
    priceValidUntil: "2026-12-31",
    // Free delivery, the same day or the next day, within Siliguri only.
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "INR" },
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN", addressRegion: "WB" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
      },
    },
    // No change-of-mind returns (see /refund-policy); damaged or wrong items are replaced or refunded.
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "IN",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    },
  };
  // No ratings here on purpose: search engines only allow them for reviews shown on the page.
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description || product.subtitle,
    image: Array.from(new Set([product.image, ...(product.galleryImages || [])])).map(absoluteUrl),
    ...(product.sku ? { sku: product.sku } : {}),
    brand: { "@type": "Brand", name: SITE_NAME },
    ...(product.category ? { category: product.category } : {}),
    offers: variants.map((variant) => ({
      "@type": "Offer",
      ...common,
      name: variant.name,
      ...(variant.sku ? { sku: variant.sku } : {}),
      price: variant.price,
    })),
  };
}

export function collectionJsonLd(name: string, description: string, path: string, products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: absoluteUrl(`/products/${p.handle || p.id}`),
      })),
    },
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-IN",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.keywords.join(", "),
    author: { "@id": STORE_ID },
    publisher: { "@id": STORE_ID },
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
