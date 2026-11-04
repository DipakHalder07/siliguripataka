export interface SiliguriArea {
  name: string;
  pincode: string;
  ward?: string;
}

export const SILIGURI_DELIVERY_AREAS: SiliguriArea[] = [
  // Prominent Siliguri Municipal Wards & Residential Localities
  { name: "Ward 1 - Pradhan Nagar", pincode: "734001", ward: "Ward 1" },
  { name: "Ward 2 - Gurung Basty / Pradhan Nagar", pincode: "734001", ward: "Ward 2" },
  { name: "Ward 3 - Subhaspally", pincode: "734001", ward: "Ward 3" },
  { name: "Ward 4 - Santoshi Mata Mandir / Pradhan Nagar", pincode: "734001", ward: "Ward 4" },
  { name: "Ward 5 - Milan Pally / Deshbandhupara", pincode: "734004", ward: "Ward 5" },
  { name: "Ward 6 - Alipurduar Line / Central", pincode: "734001", ward: "Ward 6" },
  { name: "Ward 7 - Khalpara / S.F. Road", pincode: "734005", ward: "Ward 7" },
  { name: "Ward 8 - Khalpara / Nayabazar", pincode: "734005", ward: "Ward 8" },
  { name: "Ward 9 - Hill Cart Road / Bidhan Market", pincode: "734001", ward: "Ward 9" },
  { name: "Ward 10 - Hakimpara", pincode: "734001", ward: "Ward 10" },
  { name: "Ward 11 - Collegepara", pincode: "734001", ward: "Ward 11" },
  { name: "Ward 12 - Ashrampara", pincode: "734001", ward: "Ward 12" },
  { name: "Ward 13 - Punjabipara / Sevoke Road", pincode: "734001", ward: "Ward 13" },
  { name: "Ward 14 - Rabindra Sarani / Hakimpara", pincode: "734001", ward: "Ward 14" },
  { name: "Ward 15 - Khalpara Bazar / Mahananda Link", pincode: "734005", ward: "Ward 15" },
  { name: "Ward 16 - Subhash Pally", pincode: "734001", ward: "Ward 16" },
  { name: "Ward 17 - Babupara / Netaji More", pincode: "734004", ward: "Ward 17" },
  { name: "Ward 18 - Babupara Central", pincode: "734004", ward: "Ward 18" },
  { name: "Ward 19 - Deshbandhu Para", pincode: "734004", ward: "Ward 19" },
  { name: "Ward 20 - Milan Pally Central", pincode: "734004", ward: "Ward 20" },
  { name: "Ward 21 - Rabindra Nagar", pincode: "734006", ward: "Ward 21" },
  { name: "Ward 22 - Deshbandhu Para / Rathkhola", pincode: "734004", ward: "Ward 22" },
  { name: "Ward 23 - Dabgram / Ward 23", pincode: "734004", ward: "Ward 23" },
  { name: "Ward 24 - Bharat Nagar", pincode: "734006", ward: "Ward 24" },
  { name: "Ward 25 - Milan Pally South", pincode: "734004", ward: "Ward 25" },
  { name: "Ward 26 - South Colony / NJP", pincode: "734007", ward: "Ward 26" },
  { name: "Ward 27 - Raghunathpur", pincode: "734004", ward: "Ward 27" },
  { name: "Ward 28 - Deshbandhupara South", pincode: "734004", ward: "Ward 28" },
  { name: "Ward 29 - Deshbandhupara Extension", pincode: "734004", ward: "Ward 29" },
  { name: "Ward 30 - Subhas Pally South", pincode: "734004", ward: "Ward 30" },
  { name: "Ward 31 - Ashighar / Saktigarh", pincode: "734006", ward: "Ward 31" },
  { name: "Ward 32 - Saktigarh / Dabgram", pincode: "734006", ward: "Ward 32" },
  { name: "Ward 33 - Dabgram / Fulbari link", pincode: "734006", ward: "Ward 33" },
  { name: "Ward 34 - Suryasen Colony", pincode: "734004", ward: "Ward 34" },
  { name: "Ward 35 - Suryasen Colony / NJP", pincode: "734004", ward: "Ward 35" },
  { name: "Ward 36 - Ashighar East", pincode: "734006", ward: "Ward 36" },
  { name: "Ward 37 - Ghogomali", pincode: "734006", ward: "Ward 37" },
  { name: "Ward 38 - Haiderpara", pincode: "734001", ward: "Ward 38" },
  { name: "Ward 39 - Haiderpara Bazar", pincode: "734001", ward: "Ward 39" },
  { name: "Ward 40 - Haiderpara / Don Bosco", pincode: "734001", ward: "Ward 40" },
  { name: "Ward 41 - Jyoti Nagar / Sevoke Road", pincode: "734001", ward: "Ward 41" },
  { name: "Ward 42 - Salugara / Prakash Nagar", pincode: "734008", ward: "Ward 42" },
  { name: "Ward 43 - Prakash Nagar / Ektiasal", pincode: "734008", ward: "Ward 43" },
  { name: "Ward 44 - Salugara / 2.5 Mile", pincode: "734008", ward: "Ward 44" },
  { name: "Ward 45 - Champasari / Mallaguri", pincode: "734003", ward: "Ward 45" },
  { name: "Ward 46 - Champasari / Pradhan Nagar", pincode: "734003", ward: "Ward 46" },
  { name: "Ward 47 - Champasari / Devidanga", pincode: "734003", ward: "Ward 47" },

  // Key Greater Siliguri Delivery Zones
  { name: "Sevoke Road (Planet Mall / Vega Circle)", pincode: "734001" },
  { name: "Matigara (City Centre / Khaprail Road)", pincode: "734010" },
  { name: "Shivmandir / North Bengal University (NBU)", pincode: "734011" },
  { name: "Medical College / Kawakhali", pincode: "734012" },
  { name: "Bagdogra / Airport Area / Bihar More", pincode: "734014" },
  { name: "NJP Station / New Jalpaiguri Colony", pincode: "734007" },
  { name: "Fulbari / Ghoshpukur Link", pincode: "734015" },
  { name: "Burdwan Road / Siliguri Town Station", pincode: "734005" },
  { name: "Dagapur / Uttarayan Township", pincode: "734010" },
  { name: "Sukna / Hill Cart Road Army Camp", pincode: "734009" },
];

/**
 * Generate a WhatsApp chat URL pre-filled with the customer's delivery location details
 * so the shop and delivery rider receive the exact address & map pin.
 */
export function buildWhatsAppLocationShareUrl(params: {
  orderNumber?: string;
  customerName?: string;
  address?: string;
  city?: string;
  pincode?: string;
  mapsUrl?: string;
}): string {
  const shopPhone = "918617513004";
  const orderRef = params.orderNumber ? `Order #${params.orderNumber}` : "My Delivery Order";
  const lines = [
    `📍 *Delivery Location for ${orderRef}*`,
    params.customerName ? `👤 Name: ${params.customerName}` : null,
    params.address ? `🏠 Address: ${params.address}` : null,
    params.city ? `🏙 City: ${params.city} (PIN: ${params.pincode || "734001"})` : null,
    params.mapsUrl ? `🗺️ Map Pin: ${params.mapsUrl}` : null,
    ``,
    `Sending my exact delivery location for fast Siliguri Pataka delivery! 💥`,
  ].filter(Boolean);

  return `https://wa.me/${shopPhone}?text=${encodeURIComponent(lines.join("\n"))}`;
}
