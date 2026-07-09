import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/industries/fleet-managers';

export const metadata: Metadata = {
  title: "Fleet Managers | Mobile Mechanic Service | BayCall Mobile Mechanics",
  description: "Mobile mechanic service for fleet managers in Waco and Central Texas. Lot service for diagnostics, brakes, batteries, oil changes, and more.",
  alternates: { canonical: url },
  openGraph: {
    title: "Fleet Managers | BayCall Mobile Mechanics",
    description: "Mobile mechanic service for fleet managers in Waco and Central Texas. Lot service for diagnostics, brakes, batteries, oil changes, and more.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
