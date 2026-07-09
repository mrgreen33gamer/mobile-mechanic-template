import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/blogs/mobile-mechanic-vs-shop';

export const metadata: Metadata = {
  title: "Mobile Mechanic vs. Shop: Which Is Right for Your Waco Vehicle?",
  description: "Honest comparison of mobile mechanics vs traditional shops for Central Texas drivers — cost, convenience, and when each makes sense.",
  alternates: { canonical: url },
  openGraph: {
    title: "Mobile Mechanic vs. Shop: Which Is Right for Your Waco Vehicle?",
    description: "Honest comparison of mobile mechanics vs traditional shops for Central Texas drivers — cost, convenience, and when each makes sense.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
