import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Mobile Mechanic Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | BayCall Mobile Mechanics',
  description:
    'BayCall Mobile Mechanics serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, Fair Upfront Quotes · 12-Month Parts Warranty on Common Jobs.',
  keywords: [
    'mobile mechanic service areas Central Texas',
    'mobile mechanic repair Waco TX',
    'mobile mechanic technician Hewitt TX',
    'mobile mechanic technician Killeen TX',
    'mobile mechanic technician Temple TX',
    'BayCall Mobile Mechanics service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Mobile Mechanic Service Areas | BayCall Mobile Mechanics — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate mobile mechanic repair, spring & cable repair, and installation. Same-day service available.',
    url,
    siteName: 'BayCall Mobile Mechanics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Mechanic Service Areas | BayCall Mobile Mechanics — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — ASE-certified mobile mechanic service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
