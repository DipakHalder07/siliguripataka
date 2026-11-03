import { Suspense } from "react";
import AdminShell from "@/components/admin/AdminShell";

// The admin frame reads the current URL (to highlight the menu), which is only known when the
// page is opened. Suspense lets pages with an id in the URL (e.g. /admin/products/[id]) stream
// in behind a placeholder instead of blocking.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex bg-[#fff9ef]">
          <div className="hidden md:block w-64 shrink-0 bg-[#4a0e14]" />
          <div className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 border-3 border-[#f9a825] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      }
    >
      <AdminShell>{children}</AdminShell>
    </Suspense>
  );
}
