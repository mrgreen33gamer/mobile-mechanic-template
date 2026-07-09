// BayCall Mobile Mechanics — Services Index
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
