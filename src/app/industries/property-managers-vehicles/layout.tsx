import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/industries/property-managers-vehicles';

export const metadata: Metadata = {
  title: "Property Manager Vehicles | Mobile Mechanic Service | BayCall Mobile Mechanics",
  description: "Mobile mechanic service for property manager vehicles and maintenance trucks in Waco and Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Manager Vehicles | BayCall Mobile Mechanics",
    description: "Mobile mechanic service for property manager vehicles and maintenance trucks in Waco and Central Texas.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
