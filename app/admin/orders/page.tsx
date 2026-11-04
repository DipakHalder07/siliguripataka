"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Truck,
  ExternalLink,
  RefreshCw,
  X,
  CreditCard,
  MapPin,
  Phone,
  User,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { StoredOrderData } from "@/lib/ordersDb";
import { istDateTime } from "@/lib/istTime";
import { googleMapsUrl } from "@/lib/deliveryLocation";

const DeliveryPinCard = dynamic(() => import("@/components/admin/DeliveryPinCard"), { ssr: false });

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<StoredOrderData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [activeOrder, setActiveOrder] = useState<StoredOrderData | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/orders");
      const data = await res.json();
      if (data?.orders) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error("Failed to load orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm(`Are you sure you want to delete order ${orderId}? This cannot be undone.`)) {
      return;
    }
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setOrders((prev) => prev.filter((o) => o.id !== orderId));
        setActiveOrder(null);
        toast.success(`Order ${orderId} deleted successfully`);
      } else {
        toast.error(data?.error || "Failed to delete order");
      }
    } catch {
      toast.error("Network error while deleting order");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdateStatus = async (
    orderId: string,
    newStatus: "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED",
    additionalData: Record<string, any> = {}
  ) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderStatus: newStatus,
          ...additionalData,
        }),
      });

      const data = await res.json();
      if (data?.order) {
        // Update local state
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, ...data.order } : o))
        );
        if (activeOrder?.id === orderId) {
          setActiveOrder((prev) => (prev ? { ...prev, ...data.order } : null));
        }
        toast.success(`Order ${orderId} updated to ${newStatus}`);
      }
    } catch (err) {
      console.error("Status update error:", err);
      toast.error("Failed to update order status");
    } finally {
      setIsUpdating(false);
    }
  };

  // Filter orders
  const filteredOrders = orders.filter((o) => {
    const matchesStatus =
      selectedStatus === "ALL" ||
      o.orderStatus === selectedStatus ||
      o.paymentStatus === selectedStatus;

    const matchesSearch =
      !search ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.customerPhone.includes(search) ||
      (o.utrNumber && o.utrNumber.toLowerCase().includes(search.toLowerCase())) ||
      o.city.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-bold text-[#4a0e14]">
            Order Management &amp; Fulfillment
          </h1>
          <p className="text-[13.5px] text-[#5c5a52]">
            Review customer orders in Siliguri, arrange deliveries, and verify UPI UTR numbers.
          </p>
        </div>

        <button
          onClick={fetchOrders}
          className="px-4 py-2 bg-white border border-[#f0dfc6] hover:border-[#4a0e14] rounded-xl text-[13px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs self-start sm:self-auto"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          <span>Sync Orders</span>
        </button>
      </div>

      {/* Sub-Tabs: Orders vs Abandoned Checkouts (Shopify style) */}
      <div className="flex items-center gap-3 border-b border-[#f0dfc6] pb-1">
        <Link
          href="/admin/orders"
          className="px-4 py-2 text-[13.5px] font-bold text-[#4a0e14] border-b-2 border-[#f9a825] -mb-[5px] flex items-center gap-2"
        >
          <ShoppingBag size={15} />
          <span>Orders ({orders.length})</span>
        </Link>
        <Link
          href="/admin/abandoned-checkouts"
          className="px-4 py-2 text-[13.5px] font-medium text-[#5c5a52] hover:text-[#4a0e14] transition-colors flex items-center gap-2"
        >
          <Clock size={15} />
          <span>Abandoned Checkouts</span>
        </Link>
      </div>

      {/* Controls Bar: Search & Status Filters */}
      <div className="bg-white border border-[#f0dfc6] rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-2xs">
        {/* Search */}
        <div className="flex items-center bg-[#fff9ef] border border-[#f0dfc6] focus-within:border-[#f9a825] rounded-xl px-3.5 py-2.5 flex-1 max-w-md transition-colors">
          <Search size={17} className="text-[#747576] shrink-0 mr-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Order ID, Name, Phone, UTR, City..."
            className="w-full bg-transparent text-[13.5px] outline-none text-[#2b1215]"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-[12.5px] font-bold">
          {["ALL", "PROCESSING", "SHIPPED", "DELIVERED", "PAID"].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
                selectedStatus === st
                  ? "bg-[#4a0e14] text-white"
                  : "bg-[#fff9ef] text-[#5c5a52] hover:bg-[#f0dfc6]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-[#f0dfc6] rounded-2xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13.5px]">
            <thead className="bg-[#fff9ef] border-b border-[#f0dfc6] text-[#5c5a52] text-[12px] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Payment</th>
                <th className="py-3 px-4">Fulfillment</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0dfc6]">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-[#747576]">
                    No orders found matching the filter criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-[#fff9ef]/80 transition-colors cursor-pointer"
                    onClick={() => setActiveOrder(order)}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-[#4a0e14]">
                      {order.orderNumber}
                    </td>
                    <td className="py-3.5 px-4 text-[#747576] text-[12.5px] whitespace-nowrap">
                      {istDateTime(order.createdAt)}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-[#2b1215] block">
                        {order.customerName}
                      </span>
                      <span className="text-[12px] text-[#747576] block">
                        {order.customerPhone}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#5c5a52]">
                      {order.city}, {order.state}
                      {order.latitude != null && order.longitude != null && (
                        <a
                          href={googleMapsUrl(order.latitude, order.longitude)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-[12px] font-semibold text-[#b3261e] hover:underline"
                        >
                          <MapPin size={12} /> Map location
                        </a>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[11.5px] font-bold px-2 py-0.5 rounded ${
                          order.paymentMethod === "upi"
                            ? "bg-[#16a34a]/20 text-[#15803d]"
                            : "bg-[#fff9ef] border border-[#f0dfc6] text-[#5c5a52]"
                        }`}
                      >
                        {order.paymentMethod === "upi" ? "UPI" : "COD"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#4a0e14]">
                      ₹{order.totalAmount.toLocaleString("en-IN")}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded ${
                          order.paymentStatus === "PAID"
                            ? "bg-[#16a34a]/20 text-[#15803d]"
                            : "bg-[#fff3cd] text-[#856404]"
                        }`}
                      >
                        {order.paymentStatus === "PAID" ? (
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
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded ${
                          order.orderStatus === "DELIVERED"
                            ? "bg-[#16a34a]/20 text-[#15803d]"
                            : order.orderStatus === "SHIPPED"
                            ? "bg-[#d1ecf1] text-[#0c5460]"
                            : "bg-[#f8f9fa] text-[#495057] border border-[#f0dfc6]"
                        }`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveOrder(order);
                        }}
                        className="px-2.5 py-1 bg-[#4a0e14] hover:bg-[#b3261e] text-white text-[12px] font-bold rounded-lg transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal / Drawer */}
      {activeOrder && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveOrder(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#f0dfc6] shadow-2xl p-6 sm:p-7 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#f0dfc6] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[20px] font-bold text-[#4a0e14]">
                    Order {activeOrder.orderNumber}
                  </h2>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      activeOrder.orderStatus === "DELIVERED"
                        ? "bg-[#16a34a]/20 text-[#15803d]"
                        : activeOrder.orderStatus === "SHIPPED"
                        ? "bg-[#d1ecf1] text-[#0c5460]"
                        : "bg-[#f8f9fa] text-[#495057] border border-[#f0dfc6]"
                    }`}
                  >
                    {activeOrder.orderStatus}
                  </span>
                </div>
                <span className="text-[12px] text-[#747576]">
                  Placed on {istDateTime(activeOrder.createdAt)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveOrder(null)}
                className="p-1.5 rounded-full hover:bg-[#fff9ef] text-[#747576] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Customer & Shipping Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#fff9ef] border border-[#f0dfc6] rounded-2xl p-4 text-[13px]">
              <div>
                <span className="text-[11px] font-bold text-[#747576] uppercase tracking-wider block mb-1">
                  Customer
                </span>
                <span className="font-bold text-[#2b1215] block text-[14px]">
                  {activeOrder.customerName}
                </span>
                <span className="text-[#5c5a52] block flex items-center gap-1.5 mt-0.5">
                  <Phone size={13} className="text-[#b3261e]" />
                  {activeOrder.customerPhone}
                </span>
                {activeOrder.customerEmail && (
                  <span className="text-[#5c5a52] block text-[12px]">
                    {activeOrder.customerEmail}
                  </span>
                )}
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#747576] uppercase tracking-wider block mb-1">
                  Delivery Address
                </span>
                <span className="text-[#2b1215] block">
                  {activeOrder.address}
                </span>
                <span className="font-semibold text-[#4a0e14] block">
                  {activeOrder.city}, {activeOrder.state} - {activeOrder.pincode}
                </span>
                {activeOrder.landmark && (
                  <span className="text-[12px] text-[#747576] block">
                    Landmark: {activeOrder.landmark}
                  </span>
                )}
                {activeOrder.latitude != null && activeOrder.longitude != null ? (
                  <DeliveryPinCard latitude={activeOrder.latitude} longitude={activeOrder.longitude} />
                ) : (
                  <span className="text-[12px] text-[#747576] block mt-1">No map location shared by the customer.</span>
                )}
              </div>
            </div>

            {/* Payment & UTR Card */}
            <div className="bg-[#fff6e6] border border-[#f7d9a6] rounded-2xl p-4 text-[13px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#4a0e14]">Payment Information</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    activeOrder.paymentStatus === "PAID"
                      ? "bg-[#f9a825]/30 text-[#b3261e]"
                      : "bg-[#fff3cd] text-[#856404]"
                  }`}
                >
                  {activeOrder.paymentStatus}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12.5px]">
                <div>
                  <span className="text-[#5c5a52] block text-[11px]">Method</span>
                  <span className="font-bold text-[#2b1215] uppercase">
                    {activeOrder.paymentMethod === "upi" ? "UPI (Direct)" : "Cash on Delivery"}
                  </span>
                </div>
                {activeOrder.utrNumber && (
                  <div>
                    <span className="text-[#5c5a52] block text-[11px]">12-Digit UTR Number</span>
                    <span className="font-mono font-bold text-[#b3261e]">
                      {activeOrder.utrNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Order Items List */}
            <div>
              <h3 className="font-bold text-[14px] text-[#2b1215] uppercase tracking-wider mb-2.5">
                🎁 Pack 1 free lighter · Ordered Items ({activeOrder.items?.length || 0})
              </h3>
              <div className="divide-y divide-[#f0dfc6] border border-[#f0dfc6] rounded-2xl overflow-hidden">
                {activeOrder.items?.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-12 h-12 object-contain bg-[#fff9ef] rounded-lg border border-[#f0dfc6]"
                        />
                      )}
                      <div>
                        <span className="font-semibold text-[#2b1215] block">
                          {item.title}
                        </span>
                        <span className="text-[12px] text-[#747576]">
                          {item.weight || "100G"} × {item.quantity}
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-[#4a0e14]">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Calculation */}
            <div className="bg-[#fff9ef] border border-[#f0dfc6] rounded-xl p-3.5 space-y-1.5 text-[13px]">
              <div className="flex justify-between text-[#5c5a52]">
                <span>Subtotal</span>
                <span>₹{activeOrder.subtotal.toLocaleString("en-IN")}</span>
              </div>
              {activeOrder.discountAmount > 0 && (
                <div className="flex justify-between text-[#b3261e]">
                  <span>Discount</span>
                  <span>-₹{activeOrder.discountAmount}</span>
                </div>
              )}
              {activeOrder.codFee > 0 && (
                <div className="flex justify-between text-[#5c5a52]">
                  <span>COD Handling Fee</span>
                  <span>+₹{activeOrder.codFee}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-[15px] text-[#4a0e14] border-t border-[#f0dfc6] pt-1.5">
                <span>Total Amount</span>
                <span>₹{activeOrder.totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Fulfillment Action Controls */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              {activeOrder.orderStatus === "PROCESSING" && (
                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={() => {
                    const tracking = `CP-IND-${Math.floor(1000000 + Math.random() * 9000000)}`;
                    handleUpdateStatus(activeOrder.id, "SHIPPED", {
                      trackingNumber: tracking,
                      trackingUrl: `/track?tracking_id=${tracking}`,
                    });
                  }}
                  className="flex-1 bg-[#4a0e14] hover:bg-[#b3261e] text-white py-2.5 px-4 rounded-xl font-bold text-[13px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Truck size={16} />
                  <span>Mark as Shipped (Assign Tracking AWB)</span>
                </button>
              )}

              {activeOrder.orderStatus === "SHIPPED" && (
                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={() => handleUpdateStatus(activeOrder.id, "DELIVERED")}
                  className="flex-1 bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] py-2.5 px-4 rounded-xl font-bold text-[13px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <CheckCircle2 size={16} />
                  <span>Mark as Delivered</span>
                </button>
              )}

              {activeOrder.paymentStatus !== "PAID" && (
                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={() =>
                    handleUpdateStatus(activeOrder.id, activeOrder.orderStatus, {
                      paymentStatus: "PAID",
                    })
                  }
                  className="px-4 py-2.5 bg-[#fff6e6] border border-[#f7d9a6] hover:bg-[#ffefd2] text-[#b3261e] rounded-xl font-bold text-[13px] transition-colors cursor-pointer"
                >
                  Confirm Payment (Mark PAID)
                </button>
              )}

              <button
                type="button"
                disabled={isUpdating}
                onClick={() => handleDeleteOrder(activeOrder.id)}
                className="px-3.5 py-2.5 bg-[#fff5f5] border border-[#feb2b2] hover:bg-[#ffe3e3] text-[#c53030] rounded-xl font-bold text-[13px] flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
              >
                <Trash2 size={15} />
                <span>Delete Order</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
