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
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
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
