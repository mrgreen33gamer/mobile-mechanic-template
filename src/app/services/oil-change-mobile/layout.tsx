import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/oil-change-mobile';

export const metadata: Metadata = {
  title: "Mobile Oil Change Waco TX | BayCall Mobile Mechanics",
  description: "Mobile oil changes in Waco and Central Texas. Conventional and synthetic service at home or work with filter and multi-point glance.",
  keywords: ["mobile oil change Waco TX","oil change at home Waco","synthetic oil change mobile","fleet oil change Central Texas","BayCall Mobile Mechanics"],
  alternates: { canonical: url },
  openGraph: {
    title: "Mobile Oil Change Waco TX | BayCall Mobile Mechanics",
    description: "Mobile oil changes in Waco and Central Texas. Conventional and synthetic service at home or work with filter and multi-point glance.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Oil Change Waco TX | BayCall Mobile Mechanics",
    description: "Mobile oil changes in Waco and Central Texas. Conventional and synthetic service at home or work with filter and multi-point glance.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile Oil Change",
  description: "Mobile oil changes in Waco and Central Texas. Conventional and synthetic service at home or work with filter and multi-point glance.",
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
  serviceType: "Mobile Oil Change",
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
