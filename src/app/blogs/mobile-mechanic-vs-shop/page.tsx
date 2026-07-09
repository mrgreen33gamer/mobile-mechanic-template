'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faCar, faClock, faDollarSign, faShieldHalved, faWrench, faTruck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "When something goes wrong with your car in Waco, you face a choice: tow it to a shop and lose a day, or call a mobile mechanic who comes to you. Both options can be right — depending on the job. Here's an honest comparison so Central Texas drivers can decide without the marketing fog.",
  },
  {
    type: 'cards',
    heading: 'Mobile Mechanic vs. Shop — Key Differences',
    cards: [
      { icon: faTruck, title: 'Convenience', body: 'Mobile techs work at your driveway, office, or a safe lot. Shops require drop-off, pickup, and often a loaner or rideshare.' },
      { icon: faClock, title: 'Time cost', body: 'A shop visit can consume a full workday. Mobile service often finishes while you keep your schedule.' },
      { icon: faDollarSign, title: 'Cost structure', body: 'Mobile quotes include coming to you. Shops may look cheaper until you add tow fees, time off work, and shop fees.' },
      { icon: faWrench, title: 'Job fit', body: 'Diagnostics, brakes, batteries, oil, and starters are excellent mobile jobs. Major engine or transmission rebuilds still belong in a bay.' },
      { icon: faShieldHalved, title: 'Trust signals', body: 'Look for ASE-certified techs, insurance, and written quotes — mobile or shop.' },
      { icon: faBolt, title: 'Emergencies', body: 'No-starts and check-engine surprises are where mobile service shines — no tow required for many repairs.' },
      { icon: faCar, title: 'Fleet & gig drivers', body: 'High-mileage drivers and small fleets often save the most by keeping vehicles offline for less time.' },
    ],
  },
  {
    type: 'table',
    heading: 'When to Choose Which',
    tableHeaders: ['Situation', 'Mobile Mechanic', 'Shop'],
    tableRows: [
      ['Dead battery / no-start', 'Usually best', 'Only if specialty tools needed'],
      ['Brake pads & rotors', 'Excellent fit', 'Also fine'],
      ['Oil change', 'Excellent fit', 'Also fine'],
      ['Check-engine light', 'Great starting point', 'If deep teardown needed'],
      ['Transmission rebuild', 'Not typical', 'Best fit'],
      ['Pre-purchase inspection', 'Excellent — at seller', 'Requires bringing the car'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Start with a mobile diagnosis. If the job needs a full bay, you'll know before paying a tow. Call BayCall at (254) 940-1515.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'List the symptom (no-start, noise, light, smell)',
      'Ask for ASE credentials and insurance',
      'Get a written quote before work starts',
      'Confirm warranty on parts for common jobs',
      'Book mobile service if the job fits driveway work',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Mobile Mechanic vs. Shop: Which Is Right for Your Waco Vehicle?"
        description="Tow bills, waiting rooms, and shop markups vs. driveway service. An honest comparison for Central Texas drivers."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Mobile mechanic vs shop comparison for Waco TX drivers"
        category="Guides"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need Help Deciding?"
        body="Call BayCall Mobile Mechanics — ASE-certified techs, fair upfront quotes, we come to you."
        buttonText="Book Mobile Service"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="mobile-mechanic-vs-shop-blog" />
    </>
  );
}
