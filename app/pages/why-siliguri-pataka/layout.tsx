import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Why Shop With Siliguri Pataka | Your Diwali Shop in Siliguri",
  description:
    "Siliguri Pataka is a Diwali shop made only for Siliguri. Order crackers, diyas and gift boxes online and get them delivered to your door across the city.",
  path: "/pages/why-siliguri-pataka",
  image: "/assets/why-siliguri.webp",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Why Siliguri Pataka", path: "/pages/why-siliguri-pataka" },
        ])}
      />
      {children}
    </>
  );
}
