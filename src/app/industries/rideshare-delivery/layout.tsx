import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/industries/rideshare-delivery';

export const metadata: Metadata = {
  title: "Rideshare & Delivery | Mobile Mechanic Service | BayCall Mobile Mechanics",
  description: "Mobile mechanic service for rideshare and delivery drivers in Waco and Central Texas. Fast diagnostics, brakes, batteries, and oil — we come to you.",
  alternates: { canonical: url },
  openGraph: {
    title: "Rideshare & Delivery | BayCall Mobile Mechanics",
    description: "Mobile mechanic service for rideshare and delivery drivers in Waco and Central Texas. Fast diagnostics, brakes, batteries, and oil — we come to you.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
