'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faExclamationTriangle, faSearch, faWrench, faClock, faCar, faBan } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A check-engine light is not a parts list — it is a symptom. Throwing sensors and spark plugs at a code without verifying the cause wastes money. Mobile diagnostics bring scan tools and a trained tech to your driveway so you fix the real problem, not a guess.",
  },
  {
    type: 'cards',
    heading: 'Signs You Need Real Diagnostics',
    cards: [
      { icon: faBolt, title: 'Check-engine light is on or flashing', body: 'Flashing lights can mean active misfires that damage catalytic converters — stop driving hard and get scanned.' },
      { icon: faExclamationTriangle, title: 'Intermittent no-starts', body: 'Problems that come and go need capture and testing, not a random battery swap every time.' },
      { icon: faCar, title: 'Rough idle, hesitation, or power loss', body: 'Drivability issues often involve sensors, fuel, ignition, or vacuum leaks — diagnosis narrows it fast.' },
      { icon: faSearch, title: 'Multiple codes or pending codes', body: 'Code lists can be effects, not causes. Verification prevents parts roulette.' },
      { icon: faBan, title: 'Someone already replaced parts that did not help', body: 'If a prior parts swap failed, stop guessing and diagnose properly.' },
      { icon: faWrench, title: 'You want a clear repair plan', body: 'Diagnostics turn mystery symptoms into a prioritized list with a fair quote.' },
      { icon: faClock, title: 'You cannot afford a full day offline', body: 'Mobile diagnostics save tow time and shop queues for many issues.' },
    ],
  },
  {
    type: 'table',
    heading: 'Diagnosis vs. Guesswork',
    tableHeaders: ['Approach', 'What Happens', 'Risk'],
    tableRows: [
      ['Scan + verify', 'Codes read, tested, confirmed', 'Lowest — repairs match the cause'],
      ['Parts cannon', 'Replace popular sensors first', 'High — wasted money, still broken'],
      ['Clear codes only', 'Light returns in days or hours', 'High — masks ongoing damage'],
      ['Ignore the light', 'Problem grows', 'Highest — secondary failures'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If your light is flashing or the car is barely driveable, call (254) 940-1515. BayCall prioritizes safety-related mobile diagnostics across Central Texas.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Note when the light came on and any recent work',
      'Avoid clearing codes before a tech can see them',
      'Book mobile diagnostics if the car is safely accessible',
      'Ask for findings in plain English before approving repairs',
      'Confirm warranty terms on any parts installed',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="When You Need Mobile Diagnostics (Not Just a Parts Swap)"
        description="Check-engine lights, intermittent no-starts, and drivability issues need real diagnostics. Learn when to call a mobile tech with scan tools."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="When you need mobile diagnostics guide for Waco TX"
        category="Diagnostics"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Check Engine Light On?"
        body="Get on-site diagnostics from BayCall Mobile Mechanics — ASE-certified, fair quotes, we come to you."
        buttonText="Book Diagnostics"
        buttonHref="/services/mobile-diagnostics"
      />
      <NewsletterSignup variant={1} spot="when-you-need-mobile-diagnostics-blog" />
    </>
  );
}
