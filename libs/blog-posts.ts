// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'mobile-mechanic-vs-shop',
    title:    'Mobile Mechanic vs. Shop: Which Is Right for Your Waco Vehicle?',
    excerpt:  'Tow bills, waiting rooms, and shop markups vs. driveway service. Here is an honest comparison of mobile mechanics and traditional shops for Central Texas drivers.',
    category: 'Guides',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-1.jpg',
    imageAlt: 'Mobile mechanic vs shop comparison for Waco TX drivers',
    featured: true,
  },
  {
    slug:     'when-you-need-mobile-diagnostics',
    title:    'When You Need Mobile Diagnostics (Not Just a Parts Swap)',
    excerpt:  'Check-engine lights, intermittent no-starts, and drivability issues need real diagnostics. Learn when to call a mobile tech with scan tools in Central Texas.',
    category: 'Diagnostics',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'When you need mobile diagnostics guide for Waco TX',
  },
  {
    slug:     'brake-noise-what-it-means',
    title:    'Brake Noise: What That Squeal, Grind, or Click Really Means',
    excerpt:  'Squeals, grinds, and clicks are not all the same. Here is how to read common brake sounds and when to schedule mobile brake service in Central Texas.',
    category: 'Safety',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Brake noise meanings guide for Central Texas drivers',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
