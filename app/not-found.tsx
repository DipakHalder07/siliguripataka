import type { Metadata } from "next";
import Link from "next/link";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";

export const metadata: Metadata = {
  title: "Page Not Found | Siliguri Pataka",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteLayoutWrapper>
      <div className="min-h-[60vh] bg-[#fff9ef] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-[460px] space-y-4">
          <div className="font-stencil text-[64px] font-bold text-[#b3261e] leading-none">404</div>
          <h1 className="text-[24px] font-bold text-[#4a0e14]">This page fizzled out</h1>
          <p className="text-[14.5px] text-[#5c5a52]">
            We couldn&apos;t find the page you were looking for. It may have moved, or the link may be wrong.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/collections/all"
              className="bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[14px] px-6 py-3 rounded-lg transition-colors"
            >
              Shop crackers
            </Link>
            <Link
              href="/blog"
              className="border border-[#d6d3cb] hover:border-[#4a0e14] text-[#4a0e14] font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors"
            >
              Read the blog
            </Link>
            <Link
              href="/contact"
              className="border border-[#d6d3cb] hover:border-[#4a0e14] text-[#4a0e14] font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </SiteLayoutWrapper>
  );
}
