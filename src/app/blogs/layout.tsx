import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';

export const metadata: Metadata = {
  title: 'Mobile Mechanic Tips & Insights | BayCall Mobile Mechanics Blog',
  description:
    'Mobile Mechanic safety tips, spring & cable repair guides, and door maintenance advice for Waco and Central Texas drivers from BayCall Mobile Mechanics.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Mobile Mechanic Tips & Insights | BayCall Mobile Mechanics Blog',
    description: 'Practical mobile mechanic guidance for Central Texas drivers.',
    url: `${BASE_URL}/blogs`,
    siteName: 'BayCall Mobile Mechanics',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
