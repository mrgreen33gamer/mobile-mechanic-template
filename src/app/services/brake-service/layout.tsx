import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/brake-service';

export const metadata: Metadata = {
  title: "Brake Service Waco TX | BayCall Mobile Mechanics",
  description: "Mobile brake service in Waco and Central Texas. Pads, rotors, calipers, and fluid service at your location. ASE-certified with fair upfront quotes.",
  keywords: ["mobile brake service Waco TX","brake pads Waco","brake repair mobile mechanic","rotor replacement Central Texas","BayCall Mobile Mechanics"],
  alternates: { canonical: url },
  openGraph: {
    title: "Brake Service Waco TX | BayCall Mobile Mechanics",
    description: "Mobile brake service in Waco and Central Texas. Pads, rotors, calipers, and fluid service at your location. ASE-certified with fair upfront quotes.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brake Service Waco TX | BayCall Mobile Mechanics",
    description: "Mobile brake service in Waco and Central Texas. Pads, rotors, calipers, and fluid service at your location. ASE-certified with fair upfront quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brake Service",
  description: "Mobile brake service in Waco and Central Texas. Pads, rotors, calipers, and fluid service at your location. ASE-certified with fair upfront quotes.",
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
  serviceType: "Brake Service",
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
