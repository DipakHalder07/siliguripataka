import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Track Your Diwali Order in Siliguri | Siliguri Pataka",
  description: "Track your Siliguri Pataka order with your order number or mobile number. Same-day or next-day delivery within Siliguri.",
  path: "/track",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
