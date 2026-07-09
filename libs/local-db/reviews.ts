// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for BayCall Mobile Mechanics — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Mobile Diagnostics',
    text:     "Check engine light came on before a road trip. BayCall diagnosed a failing O2 sensor at my driveway the same afternoon, explained the repair clearly, and had me back on the road with a fair upfront quote. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Brake Service',
    text:     'Squealing brakes and a soft pedal. Called BayCall and they had someone at my house by 9am. Pads and rotors done the same day, clean work, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Battery & Alternator',
    text:     'Car wouldn\'t start at work. BayCall load-tested the battery and alternator on-site, replaced the battery, and confirmed the charging system was healthy. No tow, no shop wait. Exactly what I needed.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Pre-Purchase Inspection',
    text:     'They met me at the seller\'s house and did a thorough used-car inspection. Caught a leaking axle seal and worn front pads I would have missed. Saved me from a bad buy — worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Mobile Oil Change',
    text:     'We schedule BayCall for oil changes across our small delivery fleet. They come to our lot, keep records straight, and never leave a mess. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Starter Repair',
    text:     'Click-no-crank on a Saturday morning. BayCall diagnosed a bad starter, installed a quality unit, and I was shopping by lunch. My go-to mobile mechanic for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Mobile Diagnostics',
    text:     'Rough idle and hesitation. BayCall found a vacuum leak and bad spark plugs without upselling a full engine overhaul. Fair pricing, clear communication. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Brake Service',
    text:     'Grinding noise on a school run. They treated it like it mattered, showed me the worn pads, and finished the same visit with a 12-month parts warranty. Thank you.',
  },
];

export default reviews;
