"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

/** Pop-up messages for the shop. The admin area mounts its own, so it is skipped here. */
export default function StoreToaster() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <Toaster position="top-center" richColors closeButton />;
}
