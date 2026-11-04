import { NextRequest, NextResponse } from "next/server";
import { getAllOrders } from "@/lib/ordersDb";
import { verifyAdminRequest } from "@/lib/auth";
import { getUpiConfig } from "@/lib/gateway/config";
import { getToggles, setToggle } from "@/lib/gateway/toggles";
import { isOtpRequired } from "@/lib/gateway/whatsapp";

export async function GET(req: NextRequest) {
  try {
    const admin = await verifyAdminRequest(req);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [orders, toggles, otpActive] = await Promise.all([
      getAllOrders(),
      getToggles(),
      isOtpRequired(),
    ]);

    const { upiId: merchantVpa } = getUpiConfig();
    const payments = orders.map((o) => ({
      id: `TXN-${o.orderNumber.replace("TBX-", "")}`,
      orderId: o.id,
      orderNumber: o.orderNumber,
      customerName: o.customerName,
      customerPhone: o.customerPhone,
      amount: o.totalAmount,
      gateway: o.paymentMethod === "upi" ? "Direct UPI" : "Cash on Delivery",
      method: o.paymentMethod,
      vpa: o.paymentMethod === "upi" ? merchantVpa || null : null,
      utr: o.utrNumber || null,
      status: o.paymentStatus,
      createdAt: o.createdAt,
    }));

    return NextResponse.json({
      status: "success",
      count: payments.length,
      merchantVpa: merchantVpa || null,
      whatsappOtp: Boolean(toggles.whatsapp),
      otpRequired: Boolean(otpActive),
      payments,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch payments" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const admin = await verifyAdminRequest(req);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    if (body.action === "toggle-whatsapp-otp") {
      const enabled = Boolean(body.enabled);
      await setToggle("whatsapp", enabled);
      const otpActive = await isOtpRequired();
      return NextResponse.json({
        success: true,
        whatsappOtp: enabled,
        otpRequired: otpActive,
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update payment setting" },
      { status: 500 }
    );
  }
}
