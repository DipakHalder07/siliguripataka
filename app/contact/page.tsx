import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Package, RotateCcw, Truck } from "lucide-react";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";
import ContactForm from "@/components/ContactForm";
import { LEGAL } from "@/lib/legal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: `Contact Us | ${LEGAL.brand}, Siliguri`,
    description: `Questions about an order, delivery in Siliguri, returns or our crackers and gifts? Get in touch with ${LEGAL.brand}.`,
    path: "/contact",
  }),
};

const QUICK_HELP = [
  { href: "/track", icon: Truck, title: "Track your order", detail: "With your order number or phone" },
  { href: "/account", icon: Package, title: "My orders", detail: "All your orders in one place" },
  { href: "/shipping-returns", icon: RotateCcw, title: "Shipping & returns", detail: "Delivery times, refunds, damaged items" },
];

// Fully static: the form reads ?topic= itself in the browser, so the page renders instantly.
export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: <a href={`mailto:${LEGAL.supportEmail}`} className="underline break-all">{LEGAL.supportEmail}</a> },
    { icon: MessageCircle, label: "Phone / WhatsApp", value: LEGAL.supportPhone },
    { icon: Clock, label: "Support hours", value: LEGAL.supportHours },
    { icon: MapPin, label: "Address", value: LEGAL.address },
  ];

  return (
    <SiteLayoutWrapper>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ]),
          { "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE_URL}/contact`, about: { "@id": `${SITE_URL}/#store` } },
        ]}
      />
      <div className="bg-[#fff9ef] text-[#2b1215]">
        <section className="bg-[#4a0e14] text-white px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-[1100px] mx-auto">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[#e8bfa0] mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              › <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="font-stencil text-[32px] sm:text-[44px] font-bold leading-tight">Contact Us</h1>
            <p className="text-[15px] text-[#f1dccb] mt-2 max-w-[560px]">
              A question about an order, a delivery in Siliguri or our products? Send us a message and we&apos;ll get back to you by email.
            </p>
          </div>
        </section>

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 sm:py-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="bg-white border border-[#f0dfc6] rounded-2xl p-6 sm:p-8 min-w-0">
            <h2 className="text-[20px] font-bold text-[#4a0e14] mb-5">Send us a message</h2>
            <ContactForm supportEmail={LEGAL.supportEmail} />
          </div>

          <aside className="space-y-6">
            <div className="bg-white border border-[#f0dfc6] rounded-2xl p-6 space-y-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <Icon size={18} className="text-[#b3261e] shrink-0 mt-0.5" />
                  <div className="text-[14px] min-w-0">
                    <div className="text-[12px] font-semibold uppercase tracking-[1px] text-[#747576]">{label}</div>
                    <div className="text-[#2b1215]">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#747576] mb-3">Quick help</div>
              <div className="space-y-2.5">
                {QUICK_HELP.map(({ href, icon: Icon, title, detail }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 bg-white border border-[#f0dfc6] hover:border-[#4a0e14] rounded-xl p-3.5 transition-colors"
                  >
                    <Icon size={18} className="text-[#b3261e] shrink-0" />
                    <div>
                      <div className="text-[14px] font-semibold text-[#2b1215]">{title}</div>
                      <div className="text-[12.5px] text-[#5c5a52]">{detail}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayoutWrapper>
  );
}
