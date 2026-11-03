import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

export default function Home() {
  return <HomePage />;
}
