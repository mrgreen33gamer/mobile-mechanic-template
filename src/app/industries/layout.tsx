import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Fleet Managers, Property Manager Vehicles & Commercial | BayCall Mobile Mechanics",
  description:
    "BayCall Mobile Mechanics serves property management companies, homebuilders & remodelers, and commercial facilities across Waco and Central Texas with mobile mechanic repair, installation, and maintenance.",
  keywords: [
    "mobile mechanic property management Waco",
    "homebuilder mobile mechanics Texas",
    "commercial mobile mechanics Waco TX",
    "multi-unit mobile mechanic service",
    "BayCall Mobile Mechanics industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | BayCall Mobile Mechanics",
    description: "Mobile mechanic programs for property managers, homebuilders, and commercial facilities in Central Texas.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
