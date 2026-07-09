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
      <div className={styles.section}><IndustryPainPoints industry="rideshare and delivery" painPoints={painPoints} /></div>
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
