import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/starter-repair';

export const metadata: Metadata = {
  title: "Starter Repair Waco TX | BayCall Mobile Mechanics",
  description: "Mobile starter repair in Waco and Central Texas. Click-no-crank diagnosis and starter replacement without a tow. ASE-certified techs.",
  keywords: ["mobile starter repair Waco","car won't start Waco TX","starter replacement mobile mechanic","click no crank Central Texas","BayCall Mobile Mechanics"],
  alternates: { canonical: url },
  openGraph: {
    title: "Starter Repair Waco TX | BayCall Mobile Mechanics",
    description: "Mobile starter repair in Waco and Central Texas. Click-no-crank diagnosis and starter replacement without a tow. ASE-certified techs.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starter Repair Waco TX | BayCall Mobile Mechanics",
    description: "Mobile starter repair in Waco and Central Texas. Click-no-crank diagnosis and starter replacement without a tow. ASE-certified techs.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Starter Repair",
  description: "Mobile starter repair in Waco and Central Texas. Click-no-crank diagnosis and starter replacement without a tow. ASE-certified techs.",
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
  serviceType: "Starter Repair",
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
