import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, faqJsonLd, pageMeta } from "@/lib/seo";
import { HOME_FAQS } from "@/lib/seoContent";

export const metadata: Metadata = pageMeta({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      <HomePage />
    </>
  );
}
