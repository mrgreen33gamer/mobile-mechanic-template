import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/pre-purchase-inspection';

export const metadata: Metadata = {
  title: "Pre-Purchase Inspection Waco TX | BayCall Mobile Mechanics",
  description: "Mobile pre-purchase vehicle inspections in Waco and Central Texas. Engines, brakes, leaks, and electronics checked at the seller location before you buy.",
  keywords: ["pre-purchase inspection Waco TX","used car inspection mobile","PPI mobile mechanic Waco","buy used car inspection Central Texas","BayCall Mobile Mechanics"],
  alternates: { canonical: url },
  openGraph: {
    title: "Pre-Purchase Inspection Waco TX | BayCall Mobile Mechanics",
    description: "Mobile pre-purchase vehicle inspections in Waco and Central Texas. Engines, brakes, leaks, and electronics checked at the seller location before you buy.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Purchase Inspection Waco TX | BayCall Mobile Mechanics",
    description: "Mobile pre-purchase vehicle inspections in Waco and Central Texas. Engines, brakes, leaks, and electronics checked at the seller location before you buy.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pre-Purchase Inspection",
  description: "Mobile pre-purchase vehicle inspections in Waco and Central Texas. Engines, brakes, leaks, and electronics checked at the seller location before you buy.",
  provider: {
    "@type": "AutomotiveBusiness",
    name: "BayCall Mobile Mechanics",
    url: BASE_URL,
    telephone: "+12549401515",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1400 N Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Pre-Purchase Inspection",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
