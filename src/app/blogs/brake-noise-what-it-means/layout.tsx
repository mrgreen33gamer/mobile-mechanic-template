import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/blogs/brake-noise-what-it-means';

export const metadata: Metadata = {
  title: "Brake Noise: What That Squeal, Grind, or Click Really Means",
  description: "Squeals, grinds, and clicks are not all the same. Learn common brake sounds and when to schedule mobile brake service in Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Brake Noise: What That Squeal, Grind, or Click Really Means",
    description: "Squeals, grinds, and clicks are not all the same. Learn common brake sounds and when to schedule mobile brake service in Central Texas.",
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
