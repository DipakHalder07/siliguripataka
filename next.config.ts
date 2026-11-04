import type { NextConfig } from "next";
import { IMAGE_HOSTS } from "./lib/productImages";

// Sent with every page and API response (locally and on Vercel).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; form-action 'self'",
  },
];

const privateHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Plain redirects live here instead of in redirect-only pages, so no page has to render first.
  async redirects() {
    return [
      { source: "/collections", destination: "/collections/all", permanent: false },
      { source: "/order", destination: "/track", permanent: false },
      // Sweets are no longer sold: old links go to the closest page instead of a dead end.
      { source: "/collections/sweets", destination: "/collections/gift-hampers", permanent: true },
      { source: "/blog/local-mithai-siliguri-diwali", destination: "/blog/diwali-gift-hampers-siliguri", permanent: true },
      { source: "/products/pataka-mithai-diwali-combo", destination: "/products/pataka-diya-diwali-hamper", permanent: true },
      { source: "/products/festive-sweets-diya-gift-hamper", destination: "/products/festive-diya-gift-hamper", permanent: true },
      ...["kaju-katli-box", "motichoor-laddu-box", "besan-laddu-box", "bengali-rosogolla-box", "bengali-sandesh-box", "gulab-jamun-box", "kesar-peda-box", "kesar-pista-barfi-box", "soan-papdi-festive-box", "assorted-diwali-mithai-box", "premium-mithai-gift-box"].map((id) => ({
        source: `/products/${id}`,
        destination: "/collections/gift-hampers",
        permanent: true,
      })),
      // One address for search engines: www and the Vercel address both go to the main domain.
      ...["www.siliguripataka.shop", "siliguripataka.vercel.app"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://siliguripataka.shop/:path*",
        permanent: true,
      })),
      { source: "/collections/gift-boxes", destination: "/collections/mega-packs", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Admin may use the camera (product photos); the rest of the site may not
      {
        source: "/admin/:path*",
        headers: [
          ...privateHeaders,
          { key: "Permissions-Policy", value: "camera=(self), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
      { source: "/pay-review/:path*", headers: [...privateHeaders, { key: "Referrer-Policy", value: "no-referrer" }] },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
      { source: "/api/admin/:path*", headers: [{ key: "Cache-Control", value: "no-store" }] },
    ];
  },
  images: {
    // Product images: these hosts, local files and photos uploaded in the admin (lib/productImages.ts)
    remotePatterns: IMAGE_HOSTS.map((hostname) => ({ protocol: "https" as const, hostname })),
    minimumCacheTTL: 60 * 60 * 24 * 31,
    formats: ["image/webp"],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
