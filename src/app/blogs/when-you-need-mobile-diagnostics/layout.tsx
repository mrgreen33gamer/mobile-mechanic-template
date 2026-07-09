import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/blogs/when-you-need-mobile-diagnostics';

export const metadata: Metadata = {
  title: "When You Need Mobile Diagnostics (Not Just a Parts Swap)",
  description: "Learn when check-engine lights and drivability issues need real diagnostics from a mobile mechanic in Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "When You Need Mobile Diagnostics (Not Just a Parts Swap)",
    description: "Learn when check-engine lights and drivability issues need real diagnostics from a mobile mechanic in Central Texas.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
