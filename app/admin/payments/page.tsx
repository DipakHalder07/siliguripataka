"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  CreditCard,
  CheckCircle2,
  Clock,
  Search,
  RefreshCw,
  QrCode,
  ShieldCheck,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";
import { istDateTime } from "@/lib/istTime";

interface PaymentLogItem {
  id: string;
  orderId: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  amount: number;
  gateway: string;
  method: "upi" | "cod";
  vpa: string | null;
  utr: string | null;
  status: "PAID" | "PENDING" | "FAILED";
  createdAt: string;
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<PaymentLogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [copiedVpa, setCopiedVpa] = useState(false);
  const [merchantVpa, setMerchantVpa] = useState("");
  const [whatsappOtp, setWhatsappOtp] = useState(false);
  const [togglingOtp, setTogglingOtp] = useState(false);

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/payments");
      const data = await res.json();
      if (data?.payments) {
        setPayments(data.payments);
      }
      if (data?.merchantVpa) setMerchantVpa(data.merchantVpa);
      if (typeof data?.whatsappOtp === "boolean") setWhatsappOtp(data.whatsappOtp);
    } catch (err) {
      console.error("Failed to load payments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleWhatsappOtp = async () => {
    const next = !whatsappOtp;
    setTogglingOtp(true);
    try {
      const res = await fetch("/api/admin/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggle-whatsapp-otp", enabled: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to update setting");
      setWhatsappOtp(next);
      toast.success(next ? "WhatsApp Checkout OTP is now ON" : "WhatsApp Checkout OTP is now OFF", {
        description: next
          ? "Customers must verify mobile via WhatsApp code before paying"
          : "Customers proceed straight to payment QR with no OTP",
      });
    } catch (err: any) {
      toast.error(err.message || "Failed to update setting");
    } finally {
      setTogglingOtp(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleCopyVpa = () => {
    if (!merchantVpa) return;
    navigator.clipboard.writeText(merchantVpa);
    setCopiedVpa(true);
    toast.success("Merchant UPI ID copied", {
      description: merchantVpa,
    });
    setTimeout(() => setCopiedVpa(false), 2000);
  };

  const filteredPayments = payments.filter(
    (p) =>
      p.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      p.customerName.toLowerCase().includes(search.toLowerCase()) ||
      p.customerPhone.includes(search) ||
      (p.utr && p.utr.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-bold text-[#4a0e14]">
            UPI &amp; Payment Transactions
          </h1>
          <p className="text-[13.5px] text-[#5c5a52]">
            Audit logs for direct-to-bank UPI transfers and Cash on Delivery orders.
          </p>
        </div>

        <button
          onClick={fetchPayments}
          className="px-4 py-2 bg-white border border-[#f0dfc6] hover:border-[#4a0e14] rounded-xl text-[13px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs self-start sm:self-auto"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Gateway Info & Control Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#f0dfc6] rounded-2xl p-4 shadow-2xs">
          <span className="text-[12px] font-bold text-[#747576] uppercase tracking-wider block mb-1">
            Merchant UPI ID (VPA)
          </span>
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-[15px] text-[#4a0e14] truncate mr-2">
              {merchantVpa || "Not configured"}
            </span>
            <button
              onClick={handleCopyVpa}
              className="p-1.5 rounded-lg border border-[#f0dfc6] hover:bg-[#fff9ef] text-[#2b1215] transition-colors cursor-pointer shrink-0"
              title="Copy UPI VPA"
            >
              {copiedVpa ? <Check size={14} className="text-[#e65100]" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* WhatsApp Checkout OTP On/Off Switch */}
        <div className="bg-white border border-[#f0dfc6] rounded-2xl p-4 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[12px] font-bold text-[#747576] uppercase tracking-wider block">
              Checkout WhatsApp OTP
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                whatsappOtp
                  ? "bg-[#15803d]/15 text-[#15803d]"
                  : "bg-[#747576]/15 text-[#5c5a52]"
              }`}
            >
              {whatsappOtp ? "ON" : "OFF"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2 mt-1">
            <div className="flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2b1215]">
              <MessageCircle size={16} className={whatsappOtp ? "text-[#15803d]" : "text-[#747576]"} />
              <span>{whatsappOtp ? "OTP Required" : "No OTP (Direct)"}</span>
            </div>
            <button
              type="button"
              disabled={togglingOtp}
              onClick={handleToggleWhatsappOtp}
              role="switch"
              aria-checked={whatsappOtp}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                whatsappOtp ? "bg-[#15803d]" : "bg-[#c4c0b6]"
              } ${togglingOtp ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  whatsappOtp ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white border border-[#f0dfc6] rounded-2xl p-4 shadow-2xs">
          <span className="text-[12px] font-bold text-[#747576] uppercase tracking-wider block mb-1">
            Gateway Engine
          </span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[15px] text-[#2b1215]">Direct UPI (built in)</span>
            <span className="bg-[#16a34a]/20 text-[#15803d] text-[10px] font-bold px-2 py-0.5 rounded">
              Active
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#f0dfc6] rounded-2xl p-4 shadow-2xs">
          <span className="text-[12px] font-bold text-[#747576] uppercase tracking-wider block mb-1">
            Verification Protocol
          </span>
          <div className="flex items-center gap-1.5 text-[14px] font-semibold text-[#4a0e14]">
            <ShieldCheck size={16} className="text-[#b3261e]" />
            <span>12-Digit NPCI UTR &amp; Observer</span>
          </div>
        </div>
      </div>

      {/* Search & Audit Table */}
      <div className="bg-white border border-[#f0dfc6] rounded-2xl shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-[#f0dfc6]">
          <div className="flex items-center bg-[#fff9ef] border border-[#f0dfc6] focus-within:border-[#f9a825] rounded-xl px-3.5 py-2 max-w-md transition-colors">
            <Search size={16} className="text-[#747576] shrink-0 mr-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions by Order ID, UTR, Name..."
              className="w-full bg-transparent text-[13px] outline-none text-[#2b1215]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13.5px]">
            <thead className="bg-[#fff9ef] border-b border-[#f0dfc6] text-[#5c5a52] text-[12px] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Txn ID</th>
                <th className="py-3 px-4">Order</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Method / VPA</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">UPI UTR Ref</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0dfc6]">
              {filteredPayments.map((p) => (
                <tr key={p.id} className="hover:bg-[#fff9ef]/80 transition-colors">
                  <td className="py-3 px-4 font-mono text-[12px] text-[#747576]">{p.id}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#4a0e14]">
                    {p.orderNumber}
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-[#2b1215] block">{p.customerName}</span>
                    <span className="text-[11.5px] text-[#747576] block">{p.customerPhone}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-[12px] text-[#2b1215] block">
                      {p.method === "upi" ? "UPI (Direct)" : "COD"}
                    </span>
                    {p.vpa && (
                      <span className="font-mono text-[11px] text-[#5c5a52] block">{p.vpa}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-bold text-[#4a0e14]">
                    ₹{p.amount.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 px-4">
                    {p.utr ? (
                      <span className="font-mono font-bold text-[#b3261e] bg-[#f9a825]/15 px-2 py-0.5 rounded text-[12px]">
                        {p.utr}
                      </span>
                    ) : (
                      <span className="text-[#a09e99] text-[12px]">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded ${
                        p.status === "PAID"
                          ? "bg-[#16a34a]/20 text-[#15803d]"
                          : "bg-[#fff3cd] text-[#856404]"
                      }`}
                    >
                      {p.status === "PAID" ? (
                        <>
                          <CheckCircle2 size={12} />
                          <span>PAID</span>
                        </>
                      ) : (
                        <>
                          <Clock size={12} />
                          <span>PENDING</span>
                        </>
                      )}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-[12px] text-[#747576] whitespace-nowrap">
                    {istDateTime(p.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
