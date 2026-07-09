// src/app/sitemap.xml/route.ts
// BayCall Mobile Mechanics — XML Sitemap
// Covers: all static pages, all 6 core service pages, all 3 industry pages, blog posts
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.baycallmobile.com';
  const today   = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  // ── Core service pages ─────────────────────────────────────────────────────
  const coreServices = [
    { url: '/services/mobile-diagnostics',     priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/brake-service',    priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/battery-alternator',  priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/oil-change-mobile',    priority: '0.85', changefreq: 'monthly' },
    { url: '/services/starter-repair',       priority: '0.85', changefreq: 'monthly' },
    { url: '/services/pre-purchase-inspection',       priority: '0.85', changefreq: 'monthly' },
  ];

  // ── Industry pages ─────────────────────────────────────────────────────────
  const industries = [
    { url: '/industries/fleet-managers',   priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/property-managers-vehicles',          priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/rideshare-delivery', priority: '0.80', changefreq: 'monthly' },
  ];

  // ── Blog pages ─────────────────────────────────────────────────────────────
  const blogPages = getAllPosts().map((post: any) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...coreServices,
    ...industries,
    ...blogPages,
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
