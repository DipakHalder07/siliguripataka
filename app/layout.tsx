import { Suspense } from "react";
import StoreToaster from "@/components/StoreToaster";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/context/CartContext";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_TITLE, SITE_NAME, SITE_URL, storeJsonLd, websiteJsonLd } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  // Paste the codes from Google Search Console and Bing Webmaster Tools into these env vars.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Diwali crackers Siliguri",
    "buy crackers online Siliguri",
    "pataka Siliguri",
    "Kali Puja crackers Siliguri",
    "phuljhari Siliguri",
    "Diwali gift hamper Siliguri",
    "same day delivery crackers Siliguri",
    "firecracker mela Siliguri",
    "rangoli colours Siliguri",
    "Diwali home decor Siliguri",
    "crackers price list Siliguri",
  ],
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: DEFAULT_IMAGE }],
  },
  twitter: { card: "summary_large_image", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, images: [DEFAULT_IMAGE] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: { "geo.region": "IN-WB", "geo.placename": "Siliguri", "geo.position": "26.7271;88.3953", ICBM: "26.7271, 88.3953" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" dir="ltr" className={`${poppins.variable}`}>
      <body className="min-h-screen bg-white text-[#2b1215] antialiased selection:bg-[#f9a825] selection:text-[#4a0e14]">
        <JsonLd data={[storeJsonLd(), websiteJsonLd()]} />
        <CartProvider>
          {children}
          <Suspense fallback={null}>
            <StoreToaster />
          </Suspense>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
