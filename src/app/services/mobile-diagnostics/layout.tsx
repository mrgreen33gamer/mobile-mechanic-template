import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/mobile-diagnostics';

export const metadata: Metadata = {
  title: "Mobile Diagnostics Waco TX | BayCall Mobile Mechanics",
  description: "Mobile vehicle diagnostics in Waco and Central Texas. Check-engine lights, no-starts, and drivability issues diagnosed at your location. ASE-certified, fair upfront quotes.",
  keywords: ["mobile diagnostics Waco TX","check engine light Waco","mobile mechanic diagnostics","car computer scan Waco","BayCall Mobile Mechanics"],
  alternates: { canonical: url },
  openGraph: {
    title: "Mobile Diagnostics Waco TX | BayCall Mobile Mechanics",
    description: "Mobile vehicle diagnostics in Waco and Central Texas. Check-engine lights, no-starts, and drivability issues diagnosed at your location. ASE-certified, fair upfront quotes.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Diagnostics Waco TX | BayCall Mobile Mechanics",
    description: "Mobile vehicle diagnostics in Waco and Central Texas. Check-engine lights, no-starts, and drivability issues diagnosed at your location. ASE-certified, fair upfront quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile Diagnostics",
  description: "Mobile vehicle diagnostics in Waco and Central Texas. Check-engine lights, no-starts, and drivability issues diagnosed at your location. ASE-certified, fair upfront quotes.",
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
  serviceType: "Mobile Diagnostics",
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
