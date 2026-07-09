/**
 * Rewrite services index + 6 service pages + industries + blogs with mobile mechanic content.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', rel);
};

const servicesIndex = `// BayCall Mobile Mechanics — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCarBattery, faOilCan, faWrench, faCogs, faClipboardCheck, faSearch,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers,
  faHeadset, faFileContract, faCheckCircle, faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faSearch,          title: "Mobile Diagnostics",      body: "Check-engine lights, no-starts, and drivability issues diagnosed at your driveway with scan tools and plain-English answers.", link: "/services/mobile-diagnostics" },
    { icon: faCogs,            title: "Brake Service",           body: "Pads, rotors, calipers, and fluid service where you park — safe stopping power with fair upfront quotes.", link: "/services/brake-service" },
    { icon: faCarBattery,      title: "Battery & Alternator",    body: "Load testing, battery replacement, and charging-system diagnosis on-site so you're not stranded waiting on a tow.", link: "/services/battery-alternator" },
    { icon: faOilCan,          title: "Mobile Oil Change",       body: "Conventional and synthetic oil changes at home or work, plus a multi-point glance for leaks and wear.", link: "/services/oil-change-mobile" },
    { icon: faWrench,          title: "Starter Repair",          body: "Click-no-crank and slow-start diagnosis with starter replacement without a shop wait or tow bill.", link: "/services/starter-repair" },
    { icon: faClipboardCheck,  title: "Pre-Purchase Inspection", body: "Used-car inspections at the seller's location — engines, brakes, leaks, and electronics before you buy.", link: "/services/pre-purchase-inspection" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Fair Upfront Quotes", description: "Clear price before we turn a wrench. No mystery hourly billing mid-job." },
    { icon: faShieldHalved,   title: "ASE-Certified Techs", description: "Every tech is ASE-certified, bonded, and insured." },
    { icon: faUsers,          title: "Locally Owned Since 2013", description: "Founded in Waco by Omar Singh. Every decision is made locally." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Come to You", description: "An ASE-certified tech arrives with tools and common parts on the truck.", icon: faTruck },
    { number: 3, title: "Fair Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Fixed Right, Warrantied", description: "Quality parts, clean workmanship, 12-month parts warranty on common jobs.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Mobile visits across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,    label: "Years of mobile mechanic experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does mobile mechanic service cost in Waco?", answer: "Common repairs are quoted upfront. Many diagnostic and repair visits land in the $100–$450 range depending on parts and complexity. We always provide a fair written quote before work begins." },
    { question: "What vehicles do you work on?", answer: "Most cars, light trucks, and SUVs — plus fleet, property-manager, and rideshare vehicles." },
    { question: "Do you offer emergency service?", answer: "Yes — same-day mobile service is available across Central Texas when scheduling allows. Call (254) 940-1515." },
    { question: "Are you bonded and insured?", answer: "Yes — BayCall Mobile Mechanics is bonded and insured with ASE-certified technicians." },
    { question: "Do you offer a warranty?", answer: "Yes — fair upfront quotes and a 12-month parts warranty on common jobs." },
    { question: "Can you work at my office or apartment?", answer: "Yes — as long as we can safely park and access the vehicle, we come to you." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Mobile Mechanic Services for Waco & Central Texas"
        subtitle="Diagnostics, brakes, batteries, oil changes, starters, and pre-purchase inspections — done at your location, priced upfront, backed by a 12-month parts warranty on common jobs."
      />

      <TrustBar headline="18,000+ Central Texas mobile visits completed by BayCall Mobile Mechanics" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Drivers Choose BayCall" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Mobile Mechanic Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need a Mobile Mechanic Today?"
        subline="Same-day appointments available. Fair upfront quotes. 12-month parts warranty on common jobs."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
`;

function serviceLayout({ slug, title, description, keywords }) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/services/${slug}';

export const metadata: Metadata = {
  title: "${title} Waco TX | BayCall Mobile Mechanics",
  description: ${JSON.stringify(description)},
  keywords: ${JSON.stringify(keywords)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} Waco TX | BayCall Mobile Mechanics",
    description: ${JSON.stringify(description)},
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title} Waco TX | BayCall Mobile Mechanics",
    description: ${JSON.stringify(description)},
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${title}",
  description: ${JSON.stringify(description)},
  provider: {
    "@type": "AutomotiveBusiness",
    name: "BayCall Mobile Mechanics",
    url: BASE_URL,
    telephone: "+12549401515",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1400 N Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "${title}",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
`;
}

function servicePage({ componentName, title, intro, expectations, whyFeatures, faq, related, ctaHeadline }) {
  return `// BayCall Mobile Mechanics — ${title} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faCarBattery, faOilCan, faCogs, faClipboardCheck,
  faTrophy, faChartLine, faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function ${componentName}() {

  const expectations = ${JSON.stringify(expectations, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1').replace(/"title"/g, 'title').replace(/"description"/g, 'description')};

  const whyFeatures = ${JSON.stringify(whyFeatures, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1').replace(/"title"/g, 'title').replace(/"description"/g, 'description')};

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule you in — often same-day.", icon: faHeadset },
    { number: 2, title: "We Come to You", description: "ASE-certified tech arrives with tools and common parts on the truck.", icon: faTruck },
    { number: 3, title: "Fair Quote", description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Repair & Warranty", description: "Fixed with quality parts, tested before we leave, and backed by our warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Mobile visits across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "First-visit fix rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,    label: "Years serving Waco-area drivers", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available techs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full mobile coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-day mobile service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full mobile mechanic coverage for Bell County.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Fair price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "12-month parts warranty on common jobs", us: "✅ Every common job", others: "❌ Rare or none" },
    { feature: "ASE-certified technicians", us: "✅ All techs", others: "❌ Not always" },
    { feature: "We come to you", us: "✅ Home, work, roadside", others: "❌ Tow required" },
    { feature: "Parts on truck — same-visit repair", us: "✅ Most repairs", others: "❌ Often a return trip" },
  ];

  const faq = ${JSON.stringify(faq, null, 2).replace(/"question"/g, 'question').replace(/"answer"/g, 'answer')};

  const related = ${JSON.stringify(related, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1').replace(/"title"/g, 'title').replace(/"body"/g, 'body').replace(/"link"/g, 'link')};

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "${title}" },
        ]}
      />

      <SectionIntro
        title="${title} in Waco & Central Texas"
        subtitle=${JSON.stringify(intro)}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for ${title}" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="BayCall vs. Typical Shop Wait"
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${title} FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request ${title}" cityName="Waco" slug="/services" spot="service-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-form" formVariant={2} />
      </div>

      <CTABanner
        headline=${JSON.stringify(ctaHeadline)}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
`;
}

// Fix icon references properly without broken JSON approach - write pages manually cleaner
const services = [
  {
    slug: 'mobile-diagnostics',
    componentName: 'MobileDiagnosticsPage',
    title: 'Mobile Diagnostics',
    description: 'Mobile vehicle diagnostics in Waco and Central Texas. Check-engine lights, no-starts, and drivability issues diagnosed at your location. ASE-certified, fair upfront quotes.',
    keywords: ['mobile diagnostics Waco TX', 'check engine light Waco', 'mobile mechanic diagnostics', 'car computer scan Waco', 'BayCall Mobile Mechanics'],
    intro: 'Check-engine lights, intermittent no-starts, and rough running diagnosed at your driveway — scan tools, real answers, and a fair quote before any repair.',
    ctaHeadline: 'Check Engine Light On? We Come to You.',
    expectations: [
      { icon: 'faSearch', title: 'On-Site Scan & Diagnosis', description: 'We plug in, read codes, and verify the real cause — not just clear the light and hope.' },
      { icon: 'faFileContract', title: 'Fair Quote Before Work', description: 'You get a clear price before any repair starts. No pressure to approve work you do not need.' },
      { icon: 'faCheckCircle', title: 'Fix It Right When Possible', description: 'Common sensors, batteries, and wear items are often repaired the same visit when parts are on the truck.' },
      { icon: 'faShieldHalved', title: '12-Month Parts Warranty', description: 'Common jobs are backed by a 12-month parts warranty. We stand behind the work.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Same-Day When Available', description: 'We dispatch from Waco and keep common diagnostic paths fast — often same-day.' },
      { icon: 'faWrench', title: 'Real Diagnostic Process', description: 'Code reading plus verification. We chase root cause, not the first code on the list.' },
      { icon: 'faShieldHalved', title: 'ASE-Certified Techs', description: 'Every tech is ASE-certified. You are never dealing with guesswork freelancers.' },
    ],
    faq: [
      { question: 'How much does mobile diagnostics cost in Waco?', answer: 'Diagnostic fees are quoted up front and often applied toward approved repairs. Call (254) 940-1515 for current rates.' },
      { question: 'Can you clear my check-engine light?', answer: 'We can clear codes after a proper diagnosis and repair. Clearing codes without fixing the cause is a temporary mask, not a solution.' },
      { question: 'What if you need a part that is not on the truck?', answer: 'We explain options, order what is needed, and return promptly — still without a tow if the car is safe to leave.' },
      { question: 'Do you diagnose hybrids and newer cars?', answer: 'We handle most late-model cars and light trucks. If a specialty tool is required, we will tell you honestly before proceeding.' },
    ],
    related: [
      { icon: 'faCogs', title: 'Brake Service', body: 'Pads, rotors, and safe stopping power at your location.', link: '/services/brake-service' },
      { icon: 'faCarBattery', title: 'Battery & Alternator', body: 'Load tests and charging-system diagnosis on-site.', link: '/services/battery-alternator' },
      { icon: 'faWrench', title: 'Starter Repair', body: 'Click-no-crank diagnosis and starter replacement.', link: '/services/starter-repair' },
    ],
  },
  {
    slug: 'brake-service',
    componentName: 'BrakeServicePage',
    title: 'Brake Service',
    description: 'Mobile brake service in Waco and Central Texas. Pads, rotors, calipers, and fluid service at your location. ASE-certified with fair upfront quotes.',
    keywords: ['mobile brake service Waco TX', 'brake pads Waco', 'brake repair mobile mechanic', 'rotor replacement Central Texas', 'BayCall Mobile Mechanics'],
    intro: 'Squealing, grinding, or soft pedals fixed where you park. Pads, rotors, calipers, and fluid service with a fair upfront quote and quality parts.',
    ctaHeadline: 'Brakes Squealing or Grinding? Book Mobile Service.',
    expectations: [
      { icon: 'faSearch', title: 'Brake Inspection First', description: 'We measure pad life, check rotors, and look for leaks before recommending any work.' },
      { icon: 'faFileContract', title: 'Fair Upfront Quote', description: 'Know the price for pads, rotors, or fluid service before we start.' },
      { icon: 'faCheckCircle', title: 'Safe Stopping Power', description: 'Quality parts installed correctly and road-tested before we leave.' },
      { icon: 'faShieldHalved', title: '12-Month Parts Warranty', description: 'Common brake jobs carry a 12-month parts warranty.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'We Come to You', description: 'No shop wait. Service at home, work, or a safe parking location.' },
      { icon: 'faWrench', title: 'Complete Brake Care', description: 'Pads, rotors, hardware, calipers, and fluid — not just a quick pad slap.' },
      { icon: 'faShieldHalved', title: 'ASE-Certified Techs', description: 'Brakes are safety-critical. Our techs treat them that way.' },
    ],
    faq: [
      { question: 'How much does mobile brake service cost?', answer: 'Pricing depends on vehicle and whether pads, rotors, or calipers are needed. We quote before starting — no surprises.' },
      { question: 'Can you do brakes at my apartment complex?', answer: 'Usually yes, if we can safely jack the vehicle and park our service vehicle nearby.' },
      { question: 'Do you resurface rotors?', answer: 'We evaluate rotor thickness and condition. Many modern jobs use new rotors for safety and long-term value — we explain options.' },
      { question: 'How long does a brake job take?', answer: 'Many axle jobs complete in a single visit once parts are confirmed. We will give a time window when we quote.' },
    ],
    related: [
      { icon: 'faSearch', title: 'Mobile Diagnostics', body: 'Find the real cause of warning lights and drivability issues.', link: '/services/mobile-diagnostics' },
      { icon: 'faClipboardCheck', title: 'Pre-Purchase Inspection', body: 'Know brake condition before you buy a used car.', link: '/services/pre-purchase-inspection' },
      { icon: 'faOilCan', title: 'Mobile Oil Change', body: 'Keep routine maintenance simple at home or work.', link: '/services/oil-change-mobile' },
    ],
  },
  {
    slug: 'battery-alternator',
    componentName: 'BatteryAlternatorPage',
    title: 'Battery & Alternator',
    description: 'Mobile battery and alternator service in Waco and Central Texas. Load testing, battery replacement, and charging-system diagnosis on-site.',
    keywords: ['mobile battery replacement Waco', 'alternator diagnosis Waco TX', 'car battery mobile mechanic', 'dead battery Central Texas', 'BayCall Mobile Mechanics'],
    intro: 'Dead battery or weak charging system? We load-test, replace batteries, and diagnose alternators at your location so you are not stuck waiting on a tow.',
    ctaHeadline: 'Dead Battery? We Come to You.',
    expectations: [
      { icon: 'faSearch', title: 'Proper Load Testing', description: 'We test the battery and charging system so you do not replace parts blindly.' },
      { icon: 'faFileContract', title: 'Clear Pricing', description: 'Battery and labor quoted before installation. No surprise add-ons.' },
      { icon: 'faCheckCircle', title: 'On-Site Replacement', description: 'Common batteries installed where you are — home, office, or parking lot.' },
      { icon: 'faShieldHalved', title: 'Parts Warranty', description: 'Battery and common electrical jobs covered under our parts warranty terms.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Fast Response', description: 'Stranded situations get priority when we have availability.' },
      { icon: 'faWrench', title: 'More Than a Jump', description: 'We diagnose why it died — battery, alternator, or parasitic draw clues.' },
      { icon: 'faShieldHalved', title: 'ASE-Certified Techs', description: 'Electrical diagnosis done correctly the first time.' },
    ],
    faq: [
      { question: 'Can you replace my battery on-site?', answer: 'Yes for most common vehicles. We bring quality batteries and install them where you park.' },
      { question: 'How do I know if it is the battery or alternator?', answer: 'We test both. A weak battery and a failing alternator can look similar — proper testing prevents wrong parts.' },
      { question: 'Do you recycle old batteries?', answer: 'Yes — we handle core returns and proper disposal of the old unit.' },
      { question: 'What if my car needs a special battery?', answer: 'We confirm fitment first. If a specialty battery is required, we source it and schedule the install.' },
    ],
    related: [
      { icon: 'faWrench', title: 'Starter Repair', body: 'When it is not the battery — click-no-crank diagnosis.', link: '/services/starter-repair' },
      { icon: 'faSearch', title: 'Mobile Diagnostics', body: 'Electrical and computer issues diagnosed on-site.', link: '/services/mobile-diagnostics' },
      { icon: 'faOilCan', title: 'Mobile Oil Change', body: 'Pair electrical care with routine maintenance.', link: '/services/oil-change-mobile' },
    ],
  },
  {
    slug: 'oil-change-mobile',
    componentName: 'OilChangeMobilePage',
    title: 'Mobile Oil Change',
    description: 'Mobile oil changes in Waco and Central Texas. Conventional and synthetic service at home or work with filter and multi-point glance.',
    keywords: ['mobile oil change Waco TX', 'oil change at home Waco', 'synthetic oil change mobile', 'fleet oil change Central Texas', 'BayCall Mobile Mechanics'],
    intro: 'Skip the oil-change lane. Conventional and synthetic oil changes at your home, office, or lot — clean, scheduled, and done right.',
    ctaHeadline: 'Due for an Oil Change? We Come to You.',
    expectations: [
      { icon: 'faSearch', title: 'Right Oil Spec', description: 'We match manufacturer viscosity and quality recommendations for your vehicle.' },
      { icon: 'faFileContract', title: 'Transparent Pricing', description: 'Know the oil type and price before we start — no bait-and-switch packages.' },
      { icon: 'faCheckCircle', title: 'Filter + Glance', description: 'New filter, proper fill level, and a quick look for leaks and worn belts.' },
      { icon: 'faShieldHalved', title: 'Clean Work', description: 'We protect the driveway and clean up before we leave.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'On Your Schedule', description: 'Home or work — fit maintenance around your day, not a shop queue.' },
      { icon: 'faWrench', title: 'More Than a Drain', description: 'Filter, fluids, and a multi-point glance catch small issues early.' },
      { icon: 'faShieldHalved', title: 'ASE-Certified Techs', description: 'Routine service done by real technicians, not rushed greasers.' },
    ],
    faq: [
      { question: 'Do you offer synthetic oil changes?', answer: 'Yes — conventional and synthetic options depending on your vehicle and preference.' },
      { question: 'How long does a mobile oil change take?', answer: 'Most vehicles complete in under an hour once the tech arrives, depending on access and oil type.' },
      { question: 'Can you service a small fleet?', answer: 'Yes — we regularly help fleet managers and delivery drivers with scheduled oil service.' },
      { question: 'Do you dispose of used oil properly?', answer: 'Yes — used oil and filters are handled responsibly every visit.' },
    ],
    related: [
      { icon: 'faCogs', title: 'Brake Service', body: 'Pair oil service with safe brake care.', link: '/services/brake-service' },
      { icon: 'faCarBattery', title: 'Battery & Alternator', body: 'Catch weak batteries before they leave you stranded.', link: '/services/battery-alternator' },
      { icon: 'faSearch', title: 'Mobile Diagnostics', body: 'When warning lights appear between oil changes.', link: '/services/mobile-diagnostics' },
    ],
  },
  {
    slug: 'starter-repair',
    componentName: 'StarterRepairPage',
    title: 'Starter Repair',
    description: 'Mobile starter repair in Waco and Central Texas. Click-no-crank diagnosis and starter replacement without a tow. ASE-certified techs.',
    keywords: ['mobile starter repair Waco', 'car won\'t start Waco TX', 'starter replacement mobile mechanic', 'click no crank Central Texas', 'BayCall Mobile Mechanics'],
    intro: 'Click-no-crank or slow starts? We diagnose starter, battery, and related electrical issues on-site and replace starters without a tow when possible.',
    ctaHeadline: 'Car Clicks But Won\'t Start? Call BayCall.',
    expectations: [
      { icon: 'faSearch', title: 'Correct Diagnosis', description: 'Battery, starter, and connections checked so you do not buy the wrong part.' },
      { icon: 'faFileContract', title: 'Upfront Quote', description: 'Parts and labor quoted before replacement begins.' },
      { icon: 'faCheckCircle', title: 'On-Site Replacement', description: 'Many starter jobs complete where the car sits — no shop drop-off.' },
      { icon: 'faShieldHalved', title: 'Warranty Coverage', description: 'Common starter jobs backed by our parts warranty terms.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'No Tow Required', description: 'When the vehicle is accessible, we bring the shop to you.' },
      { icon: 'faWrench', title: 'Electrical Know-How', description: 'Starters fail for multiple reasons — we verify before replacing.' },
      { icon: 'faShieldHalved', title: 'ASE-Certified Techs', description: 'Proper torque, connections, and post-install testing.' },
    ],
    faq: [
      { question: 'How do I know if my starter is bad?', answer: 'Common signs include a single click, rapid clicking, or no crank with lights working. We test to confirm.' },
      { question: 'Can you replace a starter in a parking lot?', answer: 'Often yes, if we have safe access under the vehicle and room to work.' },
      { question: 'Will you check the battery first?', answer: 'Always. Weak batteries frequently mimic starter failure.' },
      { question: 'How long does starter replacement take?', answer: 'It varies by vehicle access. We provide a time estimate with the quote.' },
    ],
    related: [
      { icon: 'faCarBattery', title: 'Battery & Alternator', body: 'Rule out battery and charging issues first.', link: '/services/battery-alternator' },
      { icon: 'faSearch', title: 'Mobile Diagnostics', body: 'Broader electrical and computer diagnosis.', link: '/services/mobile-diagnostics' },
      { icon: 'faClipboardCheck', title: 'Pre-Purchase Inspection', body: 'Catch starting system issues before you buy.', link: '/services/pre-purchase-inspection' },
    ],
  },
  {
    slug: 'pre-purchase-inspection',
    componentName: 'PrePurchaseInspectionPage',
    title: 'Pre-Purchase Inspection',
    description: 'Mobile pre-purchase vehicle inspections in Waco and Central Texas. Engines, brakes, leaks, and electronics checked at the seller location before you buy.',
    keywords: ['pre-purchase inspection Waco TX', 'used car inspection mobile', 'PPI mobile mechanic Waco', 'buy used car inspection Central Texas', 'BayCall Mobile Mechanics'],
    intro: 'Buying a used car? We meet at the seller and inspect engines, brakes, leaks, tires, and electronics so you know what you are signing up for.',
    ctaHeadline: 'Buying a Used Car? Get a Mobile PPI First.',
    expectations: [
      { icon: 'faSearch', title: 'Thorough Walkthrough', description: 'Engine, transmission behavior, brakes, leaks, belts, and electronics checked on-site.' },
      { icon: 'faFileContract', title: 'Clear Findings Report', description: 'You get plain-English findings — deal-breakers vs. normal wear.' },
      { icon: 'faCheckCircle', title: 'At the Seller Location', description: 'No need to tow the car to a shop. We come to the vehicle.' },
      { icon: 'faShieldHalved', title: 'Honest Opinion', description: 'We work for you, not the seller. No pressure to buy or walk away — just facts.' },
    ],
    whyFeatures: [
      { icon: 'faClock', title: 'Fast Scheduling', description: 'PPI appointments fit buyer timelines — often same- or next-day.' },
      { icon: 'faWrench', title: 'Real Technician Eyes', description: 'ASE-certified techs catch what casual test drives miss.' },
      { icon: 'faShieldHalved', title: 'Buyer-Side Loyalty', description: 'Our only job is protecting your purchase decision.' },
    ],
    faq: [
      { question: 'How long does a pre-purchase inspection take?', answer: 'Most PPIs take about 45–90 minutes depending on vehicle and findings.' },
      { question: 'Can you inspect at a private seller or dealer?', answer: 'Yes — home driveway, parking lot, or dealership lot when access is allowed.' },
      { question: 'Do you guarantee the car after inspection?', answer: 'A PPI is a point-in-time assessment, not a warranty on the vehicle. We report what we find that day.' },
      { question: 'What if you find major issues?', answer: 'We explain severity and rough repair ranges so you can renegotiate or walk away informed.' },
    ],
    related: [
      { icon: 'faSearch', title: 'Mobile Diagnostics', body: 'Deeper computer diagnosis if warning lights are present.', link: '/services/mobile-diagnostics' },
      { icon: 'faCogs', title: 'Brake Service', body: 'Fix worn brakes after you buy — still mobile.', link: '/services/brake-service' },
      { icon: 'faCarBattery', title: 'Battery & Alternator', body: 'Address electrical findings before they strand you.', link: '/services/battery-alternator' },
    ],
  },
];

// Build pages with proper icon identifiers
function buildExpectations(list) {
  return list.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} },`).join('\n');
}
function buildWhy(list) {
  return list.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} },`).join('\n');
}
function buildFaq(list) {
  return list.map(e => `    { question: ${JSON.stringify(e.question)}, answer: ${JSON.stringify(e.answer)} },`).join('\n');
}
function buildRelated(list) {
  return list.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, body: ${JSON.stringify(e.body)}, link: ${JSON.stringify(e.link)} },`).join('\n');
}

w('src/app/services/page.tsx', servicesIndex);

for (const s of services) {
  w(`src/app/services/${s.slug}/layout.tsx`, serviceLayout(s));
  const page = `// BayCall Mobile Mechanics — ${s.title} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faCarBattery, faOilCan, faCogs, faClipboardCheck,
  faTrophy, faChartLine, faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function ${s.componentName}() {

  const expectations = [
${buildExpectations(s.expectations)}
  ];

  const whyFeatures = [
${buildWhy(s.whyFeatures)}
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule you in — often same-day.", icon: faHeadset },
    { number: 2, title: "We Come to You", description: "ASE-certified tech arrives with tools and common parts on the truck.", icon: faTruck },
    { number: 3, title: "Fair Quote", description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Repair & Warranty", description: "Fixed with quality parts, tested before we leave, and backed by our warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Mobile visits across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "First-visit fix rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,    label: "Years serving Waco-area drivers", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available techs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full mobile coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-day mobile service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full mobile mechanic coverage for Bell County.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Fair price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "12-month parts warranty on common jobs", us: "✅ Every common job", others: "❌ Rare or none" },
    { feature: "ASE-certified technicians", us: "✅ All techs", others: "❌ Not always" },
    { feature: "We come to you", us: "✅ Home, work, roadside", others: "❌ Tow required" },
    { feature: "Parts on truck — same-visit repair", us: "✅ Most repairs", others: "❌ Often a return trip" },
  ];

  const faq = [
${buildFaq(s.faq)}
  ];

  const related = [
${buildRelated(s.related)}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "${s.title}" },
        ]}
      />

      <SectionIntro
        title="${s.title} in Waco & Central Texas"
        subtitle={${JSON.stringify(s.intro)}}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for ${s.title}" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="BayCall vs. Typical Shop Wait"
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${s.title} FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request ${s.title}" cityName="Waco" slug="/services/${s.slug}" spot="service-${s.slug}-form" formVariant={2} />
      </div>

      <CTABanner
        headline={${JSON.stringify(s.ctaHeadline)}}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
`;
  w(`src/app/services/${s.slug}/page.tsx`, page);
}

console.log('Service pages complete');
