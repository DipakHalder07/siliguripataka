import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Corporate & Bulk Diwali Gifting in Siliguri | Siliguri Pataka",
  description:
    "Bulk Diwali gift boxes for offices, clubs, housing societies and puja committees in Siliguri. Crackers, decor and diyas, delivered within the city.",
  path: "/pages/corporate-gifting-2026",
  image: "/assets/bulk-gifting-banner.webp",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Corporate Gifting", path: "/pages/corporate-gifting-2026" },
        ])}
      />
      {children}
    </>
  );
}
