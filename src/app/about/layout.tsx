import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';

export const metadata: Metadata = {
  title: "About BayCall Mobile Mechanics — Waco TX Mobile Mechanics Since 2013",
  description:
    "Meet BayCall Mobile Mechanics. Locally owned in Waco, Texas since 2013 by Omar Singh. ASE-certified techs, bonded & insured, fair upfront quotes, and a 12-month parts warranty on common jobs.",
  keywords: [
    "about BayCall Mobile Mechanics",
    "mobile mechanic Waco TX",
    "Omar Singh mobile mechanic",
    "ASE certified mobile mechanic Waco",
  ],
  alternates: { canonical: BASE_URL + '/about' },
  openGraph: {
    title: "About BayCall Mobile Mechanics — Waco TX Since 2013",
    description:
      "Locally owned mobile mechanics in Waco since 2013. ASE-certified, fair upfront quotes, 12-month parts warranty on common jobs.",
    url: BASE_URL + '/about',
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
