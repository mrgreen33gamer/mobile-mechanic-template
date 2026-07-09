import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';

export const metadata: Metadata = {
  title: 'Contact BayCall Mobile Mechanics | Schedule Service in Waco & Central Texas',
  description:
    'Contact BayCall Mobile Mechanics to schedule mobile diagnostics, brake service, battery help, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 940-1515.',
  keywords: [
    'contact BayCall Mobile Mechanics',
    'mobile mechanic appointment Waco',
    'schedule mobile mechanic',
    '254-940-1515',
  ],
  alternates: { canonical: BASE_URL + '/contact' },
  openGraph: {
    title: 'Contact BayCall Mobile Mechanics | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day mobile service available. Fair upfront quotes, ASE-certified techs.',
    url: BASE_URL + '/contact',
    siteName: 'BayCall Mobile Mechanics',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
