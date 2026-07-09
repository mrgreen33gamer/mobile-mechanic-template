import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, content) => {
  fs.writeFileSync(path.join(ROOT, rel), content, 'utf8');
  console.log('wrote', rel);
};

// ── Industries index ─────────────────────────────────────────────────────────
w('src/app/industries/page.tsx', `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A fleet manager, a property manager with vehicle pools, and a rideshare driver all need different response times and billing. We learn your workflow first.",
    },
    {
      icon: faShieldHalved,
      title: "ASE-Certified, Bonded & Insured",
      description: "We're based in Waco, TX with ASE-certified technicians and full insurance — the documentation commercial accounts require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Diagnostics Through Maintenance — One Vendor",
      description: "Mobile diagnostics, brakes, batteries, oil, starters, and PPIs under one account — fewer vendors, clearer invoices.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,     label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 18000, label: "Mobile visits completed for drivers and fleets",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 13,    label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving fleets, property vehicles, and drivers.", badge: "Headquarters" },
    { town: "Temple", benefit: "Fleet and delivery coverage across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Rideshare, delivery, and light commercial fleets.", badge: "" },
    { town: "Hewitt", benefit: "Property manager vehicles and suburban fleets.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and company vehicles.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor and service fleets.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: true, others: false },
    { feature: "Central Texas market knowledge", us: true, others: "Out-of-area vendors" },
    { feature: "ASE-certified mobile crews", us: true, others: "Not always" },
    { feature: "Transparent, upfront pricing", us: true, others: false },
    { feature: "12-month parts warranty on common jobs", us: true, others: false },
  ];

  const faq = [
    {
      question: "What types of organizations does BayCall work with?",
      answer: "We support fleet managers, property managers with vehicle pools, and rideshare/delivery drivers — in addition to everyday Central Texas drivers.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every commercial account is built around downtime windows, billing preferences, and service locations — not a generic retail quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-vehicle fleets?",
      answer: "Yes — we schedule lot service, staggered appointments, and standing maintenance with a single point of contact.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll recommend the approach that fits — no pressure.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Mobile mechanic programs built for fleets, property vehicles, and rideshare drivers — not a one-size retail shop wait."
      />
      <TrustBar headline="Trusted by fleets, property managers, and drivers across Central Texas since 2013" />
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly what we build for organizations like yours."
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose BayCall" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="BayCall for Business Accounts" />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving Organizations Across Central Texas" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Service FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Talk to Us About Your Fleet or Drivers" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Mobile Service for Multiple Vehicles?"
        subline="Fair upfront quotes. ASE-certified techs. We come to your lot, office, or drivers."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

function industryLayout(slug, title, description) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/industries/${slug}';

export const metadata: Metadata = {
  title: "${title} | Mobile Mechanic Service | BayCall Mobile Mechanics",
  description: ${JSON.stringify(description)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} | BayCall Mobile Mechanics",
    description: ${JSON.stringify(description)},
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
}

w('src/app/industries/fleet-managers/layout.tsx', industryLayout(
  'fleet-managers',
  'Fleet Managers',
  'Mobile mechanic service for fleet managers in Waco and Central Texas. Lot service for diagnostics, brakes, batteries, oil changes, and more.'
));

w('src/app/industries/fleet-managers/page.tsx', `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faTruck, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faCogs, faCarBattery, faOilCan,
} from "@fortawesome/free-solid-svg-icons";

export default function FleetManagersIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Vehicles sit waiting on shop appointments", consequence: "Downtime multiplies across routes when every van needs a tow or a half-day shop wait." },
    { icon: faFileInvoiceDollar, problem: "Repair costs hit without a plan", consequence: "Reactive emergency repairs blow budgets that planned mobile maintenance would smooth out." },
    { icon: faUsers, problem: "Drivers stranded mid-route", consequence: "No-start and brake issues strand drivers far from the shop — and far from revenue." },
    { icon: faTruck, problem: "Inconsistent quality across vendors", consequence: "Rotating freelancers leave different standards on brakes, batteries, and oil service." },
    { icon: faClipboardList, problem: "No single point of contact", consequence: "Tracking invoices and status across multiple shops wastes management time." },
    { icon: faHandshake, problem: "Vendors don't understand fleet workflows", consequence: "Billing codes, lot access, and after-hours windows all need a commercial mindset." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Lot-Based Scheduling", description: "We service vehicles at your yard or office so drivers stay productive." },
    { icon: faFileInvoiceDollar, title: "Clear Fleet Pricing", description: "Upfront quotes and consolidated invoicing for multi-vehicle accounts." },
    { icon: faUsers, title: "Driver-Friendly Response", description: "Mobile diagnostics and common repairs reduce roadside chaos." },
  ];

  const processSteps = [
    { number: 1, title: "Fleet Assessment", description: "We review vehicle types, common failures, and service locations.", icon: faSearch },
    { number: 2, title: "Service Plan & Rates", description: "Agreed scopes for oil, brakes, batteries, and diagnostics.", icon: faCalendarAlt },
    { number: 3, title: "Lot or Route Service", description: "Techs arrive on schedule with parts and tools ready.", icon: faRocket },
    { number: 4, title: "Reporting & Follow-Up", description: "Clear notes on what was found, fixed, and recommended next.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 18000, label: "Mobile visits completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 50, label: "Fleet and multi-vehicle accounts supported", suffix: "+", duration: 2 },
    { icon: faClock, value: 13, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Lot-based mobile service", us: true, others: false },
    { feature: "Consolidated fleet invoicing", us: true, others: "Per-shop chaos" },
    { feature: "Single point of contact", us: true, others: false },
    { feature: "ASE-certified & insured", us: true, others: "Not always" },
    { feature: "12-month parts warranty on common jobs", us: true, others: false },
  ];

  const faq = [
    { question: "Can you service a mixed fleet of cars and light trucks?", answer: "Yes — most light-duty fleets are within our scope. Tell us vehicle types and we'll confirm." },
    { question: "Do you offer standing maintenance schedules?", answer: "Yes. Oil, multi-point checks, and recurring brake/battery needs can be scheduled on a cadence." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for commercial accounts are available on request." },
    { question: "What if a vehicle fails mid-route?", answer: "Call us. When available, we dispatch mobile diagnostics and common repairs to the vehicle location." },
    { question: "What areas do you cover for fleets?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faSearch, title: "Mobile Diagnostics", body: "Keep units rolling with on-lot diagnosis.", link: "/services/mobile-diagnostics" },
    { icon: faCogs, title: "Brake Service", body: "Fleet brake work without shop downtime.", link: "/services/brake-service" },
    { icon: faCarBattery, title: "Battery & Alternator", body: "Reduce no-start callouts across the fleet.", link: "/services/battery-alternator" },
    { icon: faOilCan, title: "Mobile Oil Change", body: "Scheduled oil service at your lot.", link: "/services/oil-change-mobile" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for fleet lot service.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-vehicle coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Delivery and service fleets near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban fleet and company vehicles.", badge: "" },
    { town: "Woodway", benefit: "Professional service fleets.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor fleets.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Fleet Managers" }]} />
      <SectionIntro
        title="Mobile Mechanic Service for Fleet Managers"
        subtitle="Keep light-duty fleets productive with lot-based diagnostics, brakes, batteries, and oil service — ASE-certified techs, fair upfront quotes."
      />
      <TrustBar headline="Fleet-ready mobile service · ASE-certified · Bonded & insured" />
      <div className={styles.section}><IndustryPainPoints painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Fleet Operations" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Fleets Use Most" cards={services} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Fleet Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Fleet Manager FAQs" /></div>
      <div className={styles.section}><Variant4 title="Talk About Your Fleet" cityName="Waco" slug="/industries/fleet-managers" spot="fleet-managers-form" formVariant={2} /></div>
      <CTABanner
        headline="Ready to Cut Fleet Downtime?"
        subline="Mobile service at your lot. Fair quotes. ASE-certified techs."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

w('src/app/industries/property-managers-vehicles/layout.tsx', industryLayout(
  'property-managers-vehicles',
  'Property Manager Vehicles',
  'Mobile mechanic service for property manager vehicles and maintenance trucks in Waco and Central Texas.'
));

w('src/app/industries/property-managers-vehicles/page.tsx', `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faCogs, faCarBattery, faOilCan,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagerVehiclesIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Maintenance trucks sit offline at shops", consequence: "When a work truck is down, work orders stack up and residents wait longer." },
    { icon: faFileInvoiceDollar, problem: "Unexpected vehicle repair bills", consequence: "Reactive repairs hit operating budgets without a maintenance cadence." },
    { icon: faUsers, problem: "Staff stranded between properties", consequence: "No-starts and brake issues strand techs mid-route between buildings." },
    { icon: faBuilding, problem: "Multiple properties, no vehicle plan", consequence: "Scattered trucks and vans get inconsistent care without a single vendor." },
    { icon: faClipboardList, problem: "Hard-to-track vendor invoices", consequence: "Different shops mean different paperwork and unclear repair history." },
    { icon: faHandshake, problem: "Vendors ignore property schedules", consequence: "Access windows and resident-facing work still need to move — vehicles must stay rolling." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Service at the Property or Office", description: "We meet trucks where they park between jobs." },
    { icon: faFileInvoiceDollar, title: "Clear Property-Friendly Invoicing", description: "Simple quotes and documentation ownership teams can approve." },
    { icon: faUsers, title: "Keep Maintenance Staff Moving", description: "Faster turnaround than a multi-day shop visit." },
  ];

  const processSteps = [
    { number: 1, title: "Vehicle Inventory", description: "List trucks/vans and common failure patterns.", icon: faSearch },
    { number: 2, title: "Service Cadence", description: "Oil, brakes, batteries, and diagnostics on a schedule.", icon: faCalendarAlt },
    { number: 3, title: "On-Site Execution", description: "We service units at the office or property lots.", icon: faRocket },
    { number: 4, title: "Simple Reporting", description: "What was fixed, what is deferred, what to budget next.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 100, label: "Property vehicle accounts supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years in Central Texas", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "On-site property vehicle service", us: true, others: false },
    { feature: "Simple ownership-ready invoices", us: true, others: false },
    { feature: "ASE-certified techs", us: true, others: "Not always" },
    { feature: "Multi-property coverage", us: true, others: "Limited" },
    { feature: "12-month parts warranty on common jobs", us: true, others: false },
  ];

  const faq = [
    { question: "Do you service maintenance trucks and vans?", answer: "Yes — light-duty work trucks and vans used by property maintenance teams are a core fit." },
    { question: "Can you work at multiple properties?", answer: "Yes. We can schedule service at offices or individual property lots across Central Texas." },
    { question: "Do you provide COIs?", answer: "Yes — insurance certificates available on request." },
    { question: "Can you help after a no-start at a property?", answer: "When available, we dispatch mobile battery, starter, and diagnostic help to the vehicle." },
    { question: "What areas do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and nearby." },
  ];

  const services = [
    { icon: faOilCan, title: "Mobile Oil Change", body: "Keep work trucks on a maintenance cadence.", link: "/services/oil-change-mobile" },
    { icon: faCogs, title: "Brake Service", body: "Safe stopping for trucks that haul tools daily.", link: "/services/brake-service" },
    { icon: faCarBattery, title: "Battery & Alternator", body: "Cut no-start callouts for field staff.", link: "/services/battery-alternator" },
    { icon: faWrench, title: "Starter Repair", body: "Get trucks cranking without a tow.", link: "/services/starter-repair" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-property vehicle support.", badge: "Home Base" },
    { town: "Temple", benefit: "Property portfolios across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Rental and HOA maintenance vehicles.", badge: "" },
    { town: "Hewitt", benefit: "Suburban property fleets.", badge: "" },
    { town: "Woodway", benefit: "Office and site vehicles.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site maintenance trucks.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Manager Vehicles" }]} />
      <SectionIntro
        title="Mobile Mechanic Service for Property Manager Vehicles"
        subtitle="Keep maintenance trucks and staff vehicles rolling with on-site oil, brakes, batteries, and diagnostics."
      />
      <TrustBar headline="Property vehicle support · ASE-certified · Fair upfront quotes" />
      <div className={styles.section}><IndustryPainPoints painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Property Operations" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Property Teams Use Most" cards={services} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Manager Vehicle FAQs" /></div>
      <div className={styles.section}><Variant4 title="Talk About Your Vehicles" cityName="Waco" slug="/industries/property-managers-vehicles" spot="pm-vehicles-form" formVariant={2} /></div>
      <CTABanner
        headline="Keep Maintenance Trucks Online"
        subline="We come to your property or office. Fair quotes. ASE-certified techs."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

w('src/app/industries/rideshare-delivery/layout.tsx', industryLayout(
  'rideshare-delivery',
  'Rideshare & Delivery',
  'Mobile mechanic service for rideshare and delivery drivers in Waco and Central Texas. Fast diagnostics, brakes, batteries, and oil — we come to you.'
));

w('src/app/industries/rideshare-delivery/page.tsx', `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faCarSide, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faCogs, faCarBattery, faOilCan,
} from "@fortawesome/free-solid-svg-icons";

export default function RideshareDeliveryIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Every hour offline is lost earnings", consequence: "Shop waits kill a full day of rides or deliveries." },
    { icon: faFileInvoiceDollar, problem: "Surprise repair bills", consequence: "Unplanned repairs wipe out a week's profit without clear quotes first." },
    { icon: faUsers, problem: "Stranded between trips", consequence: "Battery and starter failures leave drivers stuck mid-shift." },
    { icon: faCarSide, problem: "High-mileage wear arrives early", consequence: "Brakes, oil, and batteries wear faster on ride and delivery duty cycles." },
    { icon: faClipboardList, problem: "Hard to schedule around peak hours", consequence: "Traditional shops don't work around lunch and evening surge times." },
    { icon: faHandshake, problem: "Unclear who to trust", consequence: "Drivers need honest mobile techs who won't upsell unnecessary work." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Flexible Mobile Windows", description: "Service between shifts at home or a safe parking spot." },
    { icon: faFileInvoiceDollar, title: "Fair Upfront Quotes", description: "Know the number before we start — protect your earnings." },
    { icon: faUsers, title: "High-Mileage Aware", description: "We understand how rideshare and delivery miles wear brakes and oil." },
  ];

  const processSteps = [
    { number: 1, title: "Text or Call", description: "Tell us the symptom and where the car is.", icon: faSearch },
    { number: 2, title: "We Come to You", description: "Meet at home, apartment, or a safe lot.", icon: faCalendarAlt },
    { number: 3, title: "Quote & Fix", description: "Approve the price, then we repair on-site when possible.", icon: faRocket },
    { number: 4, title: "Back Online", description: "Get back to earning with confidence in the work.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 2100, label: "Five-star style reviews across services", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years serving Central Texas drivers", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Service at your location", us: true, others: false },
    { feature: "Fair upfront quotes", us: true, others: false },
    { feature: "Same-day when available", us: true, others: "Sometimes" },
    { feature: "ASE-certified techs", us: true, others: "Not always" },
    { feature: "12-month parts warranty on common jobs", us: true, others: false },
  ];

  const faq = [
    { question: "Can you service my car between shifts?", answer: "Yes — many drivers book morning or mid-day windows so evenings stay free for earning." },
    { question: "Do you work on high-mileage vehicles?", answer: "Yes. We service daily-driver and high-mileage cars used for rideshare and delivery every week." },
    { question: "What if I need brakes before an inspection?", answer: "Call us. We prioritize safety items when scheduling allows." },
    { question: "Can you meet at an apartment complex?", answer: "Usually yes, if we can safely access the vehicle and park nearby." },
    { question: "What areas do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and nearby Central Texas." },
  ];

  const services = [
    { icon: faOilCan, title: "Mobile Oil Change", body: "Fast oil service between shifts.", link: "/services/oil-change-mobile" },
    { icon: faCogs, title: "Brake Service", body: "High-mileage brake care at home.", link: "/services/brake-service" },
    { icon: faCarBattery, title: "Battery & Alternator", body: "Don't lose a full day to a dead battery.", link: "/services/battery-alternator" },
    { icon: faSearch, title: "Mobile Diagnostics", body: "Check-engine lights explained clearly.", link: "/services/mobile-diagnostics" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest response for local drivers.", badge: "Home Base" },
    { town: "Temple", benefit: "Rideshare and delivery coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "High demand corridor for mobile service.", badge: "" },
    { town: "Hewitt", benefit: "Home-based service between shifts.", badge: "" },
    { town: "Woodway", benefit: "Apartment and driveway service.", badge: "" },
    { town: "Bellmead", benefit: "Quick mobile visits for local drivers.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Rideshare & Delivery" }]} />
      <SectionIntro
        title="Mobile Mechanic Service for Rideshare & Delivery Drivers"
        subtitle="Stay online with mobile oil changes, brakes, batteries, and diagnostics — fair quotes, ASE-certified techs, we come to you."
      />
      <TrustBar headline="Built for drivers who can't afford a full day offline" />
      <div className={styles.section}><IndustryPainPoints painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Gig & Delivery Drivers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Drivers Book Most" cards={services} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Driver Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Rideshare & Delivery FAQs" /></div>
      <div className={styles.section}><Variant4 title="Book Mobile Service" cityName="Waco" slug="/industries/rideshare-delivery" spot="rideshare-delivery-form" formVariant={2} /></div>
      <CTABanner
        headline="Don't Lose Another Day to the Shop"
        subline="We come to you. Fair quotes. Get back to earning."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

// About
w('src/app/about/page.tsx', `// BayCall Mobile Mechanics — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2013",
      description: "BayCall Mobile Mechanics was founded in Waco by Omar Singh. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust at Your Driveway",
      description: "Every technician is background-checked, ASE-certified, bonded, and insured. We treat your property with the same respect we'd want for our own.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full engine overhaul when a battery or sensor will do. Our reputation is built on straight talk and fair upfront quotes.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Mobile visits across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,    label: "Years serving Central Texas drivers", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "We Come to You", description: "An ASE-certified tech arrives with tools and common parts — at home, work, or a safe parking spot.", icon: faShieldHalved },
    { number: 3, title: "Fair Quote", description: "Clear price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Fixed Right, Warrantied", description: "Quality parts, clean workmanship, 12-month parts warranty on common jobs.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About BayCall Mobile Mechanics"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2013. We Come to You · Diagnostics · Brakes · Batteries — honest work at fair prices for the drivers and fleets we've called neighbors for 13 years."
      />

      <TrustBar headline="18,000+ Central Texas mobile visits — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Who We Are" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="13 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Mobile Mechanics — Ready When You Need Us"
        subline="Same-day mobile service. Fair upfront quotes. 12-month parts warranty on common jobs. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12549401515"
        secondaryText="Request Service Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
`);

w('src/app/about/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';

export const metadata: Metadata = {
  title: "About BayCall Mobile Mechanics — Waco TX Mobile Mechanics Since 2013",
  description:
    "Meet BayCall Mobile Mechanics. Locally owned in Waco, Texas since 2013 by Omar Singh. ASE-certified techs, bonded & insured, fair upfront quotes, and a 12-month parts warranty on common jobs.",
  keywords: [
    "about BayCall Mobile Mechanics",
    "mobile mechanic Waco TX",
    "Omar Singh mobile mechanic",
    "ASE certified mobile mechanic Waco",
  ],
  alternates: { canonical: BASE_URL + '/about' },
  openGraph: {
    title: "About BayCall Mobile Mechanics — Waco TX Since 2013",
    description:
      "Locally owned mobile mechanics in Waco since 2013. ASE-certified, fair upfront quotes, 12-month parts warranty on common jobs.",
    url: BASE_URL + '/about',
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

// Blogs
const blogMeta = (slug, title, description, category, date, readTime, image) => `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';
const url = BASE_URL + '/blogs/${slug}';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  alternates: { canonical: url },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url,
    siteName: "BayCall Mobile Mechanics",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

w('src/app/blogs/mobile-mechanic-vs-shop/layout.tsx', blogMeta(
  'mobile-mechanic-vs-shop',
  'Mobile Mechanic vs. Shop: Which Is Right for Your Waco Vehicle?',
  'Honest comparison of mobile mechanics vs traditional shops for Central Texas drivers — cost, convenience, and when each makes sense.'
));

w('src/app/blogs/mobile-mechanic-vs-shop/page.tsx', `'use client';
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
`);

w('src/app/blogs/when-you-need-mobile-diagnostics/layout.tsx', blogMeta(
  'when-you-need-mobile-diagnostics',
  'When You Need Mobile Diagnostics (Not Just a Parts Swap)',
  'Learn when check-engine lights and drivability issues need real diagnostics from a mobile mechanic in Central Texas.'
));

w('src/app/blogs/when-you-need-mobile-diagnostics/page.tsx', `'use client';
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
`);

w('src/app/blogs/brake-noise-what-it-means/layout.tsx', blogMeta(
  'brake-noise-what-it-means',
  'Brake Noise: What That Squeal, Grind, or Click Really Means',
  'Squeals, grinds, and clicks are not all the same. Learn common brake sounds and when to schedule mobile brake service in Central Texas.'
));

w('src/app/blogs/brake-noise-what-it-means/page.tsx', `'use client';
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
`);

// SectionIndustriesServed defaults
const sisPath = path.join(ROOT, 'components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx');
let sis = fs.readFileSync(sisPath, 'utf8');
// rewrite industries array if present
if (sis.includes('href:') || sis.includes('title:')) {
  // full rewrite of common defaults
}
w('components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx', fs.readFileSync(sisPath, 'utf8')
  .replace(/property-management/g, 'fleet-managers')
  .replace(/homebuilders/g, 'property-managers-vehicles')
  .replace(/commercial-facilities/g, 'rideshare-delivery')
  .replace(/Property Management/g, 'Fleet Managers')
  .replace(/Homebuilders & Remodelers/g, 'Property Manager Vehicles')
  .replace(/Homebuilders/g, 'Property Manager Vehicles')
  .replace(/Commercial Facilities/g, 'Rideshare & Delivery')
  .replace(/Fleet Managersers/g, 'Fleet Managers') // safety
);

// sitemap / robots / llms already partially done by rebrand; verify contact layout
w('src/app/contact/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.baycallmobile.com';

export const metadata: Metadata = {
  title: 'Contact BayCall Mobile Mechanics | Schedule Service in Waco & Central Texas',
  description:
    'Contact BayCall Mobile Mechanics to schedule mobile diagnostics, brake service, battery help, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 940-1515.',
  keywords: [
    'contact BayCall Mobile Mechanics',
    'mobile mechanic appointment Waco',
    'schedule mobile mechanic',
    '254-940-1515',
  ],
  alternates: { canonical: BASE_URL + '/contact' },
  openGraph: {
    title: 'Contact BayCall Mobile Mechanics | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day mobile service available. Fair upfront quotes, ASE-certified techs.',
    url: BASE_URL + '/contact',
    siteName: 'BayCall Mobile Mechanics',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

console.log('Remaining content written.');
