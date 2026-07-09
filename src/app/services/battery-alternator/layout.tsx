import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/battery-alternator';

export const metadata: Metadata = {
  title: "Battery & Alternator Waco TX | BayCall Mobile Mechanics",
  description: "Mobile battery and alternator service in Waco and Central Texas. Load testing, battery replacement, and charging-system diagnosis on-site.",
  keywords: ["mobile battery replacement Waco","alternator diagnosis Waco TX","car battery mobile mechanic","dead battery Central Texas","BayCall Mobile Mechanics"],
  alternates: { canonical: url },
  openGraph: {
    title: "Battery & Alternator Waco TX | BayCall Mobile Mechanics",
    description: "Mobile battery and alternator service in Waco and Central Texas. Load testing, battery replacement, and charging-system diagnosis on-site.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery & Alternator Waco TX | BayCall Mobile Mechanics",
    description: "Mobile battery and alternator service in Waco and Central Texas. Load testing, battery replacement, and charging-system diagnosis on-site.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Battery & Alternator",
  description: "Mobile battery and alternator service in Waco and Central Texas. Load testing, battery replacement, and charging-system diagnosis on-site.",
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
  serviceType: "Battery & Alternator",
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
