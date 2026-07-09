'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faExclamationTriangle, faVolumeHigh, faShieldHalved, faWrench, faClock, faCar, faBan } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Brakes talk — squeals, grinds, clicks, and groans all mean different things. Some noises are early wear warnings. Others mean metal-on-metal damage is already happening. For Waco and Central Texas drivers, knowing the difference helps you book service before a small pad job becomes rotors, calipers, and a much bigger bill.",
  },
  {
    type: 'cards',
    heading: 'Common Brake Noises Decoded',
    cards: [
      { icon: faVolumeHigh, title: 'High-pitched squeal while braking', body: 'Often wear indicators or glazed pads. Schedule an inspection soon — do not ignore progressive squeals.' },
      { icon: faExclamationTriangle, title: 'Grinding under braking', body: 'Frequently means pads are gone and metal is cutting rotors. Stop hard driving and get service ASAP.' },
      { icon: faCar, title: 'Click or clunk over bumps / braking', body: 'Hardware, caliper brackets, or suspension-related noise — needs hands-on inspection.' },
      { icon: faWrench, title: 'Squeak when reversing only', body: 'Sometimes pad material or light surface rust after rain — still worth checking if it persists.' },
      { icon: faBan, title: 'Soft or sinking pedal with noise', body: 'Possible fluid or hydraulic issue. Do not keep driving if the pedal feels unsafe.' },
      { icon: faShieldHalved, title: 'Pulsation / steering shake', body: 'Often rotor thickness variation — inspect pads and rotors together.' },
      { icon: faClock, title: 'Noise after recent work', body: 'Bedding-in can cause temporary sound, but ongoing grind or scrape needs a recheck.' },
    ],
  },
  {
    type: 'table',
    heading: 'Urgency Guide',
    tableHeaders: ['Noise', 'Urgency', 'Typical Next Step'],
    tableRows: [
      ['Light squeal, brief', 'Soon', 'Pad inspection'],
      ['Loud squeal, constant', 'This week', 'Pads likely due'],
      ['Grinding', 'Immediate', 'Pads/rotors — safety issue'],
      ['Soft pedal + noise', 'Immediate', 'Hydraulic/brake system check'],
      ['Click over bumps', 'Soon', 'Hardware/suspension inspect'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Grinding brakes are a same-day call. BayCall Mobile Mechanics can inspect and often replace pads and rotors at your location — (254) 940-1515.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Note when the noise happens (braking, turning, reverse, speed)',
      'Avoid hard panic stops if you suspect worn pads',
      'Book a mobile brake inspection before a long trip',
      'Ask for pad thickness measurements and rotor condition',
      'Get a written quote before approving pad/rotor work',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Brake Noise: What That Squeal, Grind, or Click Really Means"
        description="Squeals, grinds, and clicks are not all the same. Here is how to read common brake sounds and when to schedule mobile brake service."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Brake noise meanings guide for Central Texas drivers"
        category="Safety"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Brakes Making Noise?"
        body="Get mobile brake service from BayCall — fair upfront quotes and ASE-certified techs at your driveway."
        buttonText="Book Brake Service"
        buttonHref="/services/brake-service"
      />
      <NewsletterSignup variant={1} spot="brake-noise-what-it-means-blog" />
    </>
  );
}
