// Business details shown on the Terms + Conditions, Privacy Policy and Contact pages, and used in
// the search-engine data (lib/seo.ts). Empty values are simply not shown on the site.
// Indian e-commerce rules require the seller's name, address and a grievance officer to be published,
// so fill in the real registered details before going live.

export const LEGAL = {
  brand: "Siliguri Pataka",
  legalName: "Siliguri Pataka",
  streetAddress: "", // shop number and street, e.g. "12 Hill Cart Road"
  address: "Siliguri, West Bengal, India",
  gstin: "",
  fireworksLicence: "",
  supportEmail: "dipakh810@gmail.com",
  supportPhone: "+91 86175 13004",
  grievanceOfficer: "Customer Care, Siliguri Pataka",
  grievanceEmail: "dipakh810@gmail.com",
  jurisdictionCity: "Siliguri",
  // Social pages: icons appear in the footer only once a link is filled in
  facebookUrl: "",
  instagramUrl: "",
  // Delivery promises shown across the site
  dispatchTime: "the same day",
  deliveryTime: "the same day or the next day",
  supportHours: "Every day during the Diwali season, 10 am – 8 pm IST",
  lastUpdated: "3 November 2026",
};

// Areas shown on the delivery pages. Edit to match where you really deliver.
export const DELIVERY_AREAS = [
  "Hill Cart Road", "Sevoke Road", "Burdwan Road", "Pradhan Nagar", "Hakimpara", "Subhaspally",
  "Deshbandhu Para", "Ashighar", "Champasari", "Salugara", "Matigara", "Shivmandir",
];
