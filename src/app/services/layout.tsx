// src/app/services/layout.tsx
// BayCall Mobile Mechanics — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Mobile Mechanic Services | Diagnostics, Brakes, Batteries & More | BayCall Mobile Mechanics",
  description:
    "BayCall Mobile Mechanics offers mobile diagnostics, brake service, battery & alternator, oil changes, starter repair, and pre-purchase inspections for Waco and Central Texas. ASE-certified, fair upfront quotes, 12-month parts warranty on common jobs.",
  keywords: [
    "mobile mechanic Waco TX",
    "mobile diagnostics Waco",
    "mobile brake service Central Texas",
    "battery replacement Waco TX",
    "mobile oil change Waco",
    "ASE mobile mechanic Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Mobile Mechanic Services | BayCall Mobile Mechanics",
    description:
      "Diagnostics, brakes, batteries, oil changes, starters, and pre-purchase inspections for Waco and Central Texas. ASE-certified — we come to you.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Mechanic Services | BayCall Mobile Mechanics",
    description: "Diagnostics, brakes, batteries & more for Central Texas. ASE-certified.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "BayCall Mobile Mechanics — Mobile Mechanic Services",
  description:
    "Mobile mechanic services for Waco and Central Texas: diagnostics, brakes, batteries, oil changes, starters, and pre-purchase inspections.",
  provider: {
    "@type": "AutomotiveBusiness",
    name: "BayCall Mobile Mechanics",
    url: BASE_URL,
    telephone: "+12549401515",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Diagnostics", url: `${BASE_URL}/services/mobile-diagnostics` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Service", url: `${BASE_URL}/services/brake-service` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery & Alternator", url: `${BASE_URL}/services/battery-alternator` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Oil Change", url: `${BASE_URL}/services/oil-change-mobile` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Starter Repair", url: `${BASE_URL}/services/starter-repair` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Purchase Inspection", url: `${BASE_URL}/services/pre-purchase-inspection` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      {children}
    </>
  );
}
