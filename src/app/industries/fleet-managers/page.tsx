"use client";
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
      <div className={styles.section}><IndustryPainPoints industry="fleet manager" painPoints={painPoints} /></div>
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
