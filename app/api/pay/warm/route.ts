import { NextResponse } from "next/server";
import { getStoreProducts } from "@/lib/catalog";
import { isDatabaseConnected } from "@/lib/prisma";

// Called when the checkout page opens. The database sleeps when idle and takes a few seconds to
// wake, so waking it here means the customer doesn't wait for it when they ask for the QR.
// The connection check is rate-limited internally, so repeat calls don't reach the database.
export async function GET() {
  await Promise.all([isDatabaseConnected(), getStoreProducts()]).catch(() => {});
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
