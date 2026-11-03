import type { Metadata } from "next";
import { privatePageMeta } from "@/lib/seo";

export const metadata: Metadata = privatePageMeta("Your Order");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
