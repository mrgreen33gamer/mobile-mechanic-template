// BayCall Mobile Mechanics — Brake Service Service Page
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

export default function BrakeServicePage() {

  const expectations = [
    { icon: faSearch, title: "Brake Inspection First", description: "We measure pad life, check rotors, and look for leaks before recommending any work." },
    { icon: faFileContract, title: "Fair Upfront Quote", description: "Know the price for pads, rotors, or fluid service before we start." },
    { icon: faCheckCircle, title: "Safe Stopping Power", description: "Quality parts installed correctly and road-tested before we leave." },
    { icon: faShieldHalved, title: "12-Month Parts Warranty", description: "Common brake jobs carry a 12-month parts warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "We Come to You", description: "No shop wait. Service at home, work, or a safe parking location." },
    { icon: faWrench, title: "Complete Brake Care", description: "Pads, rotors, hardware, calipers, and fluid — not just a quick pad slap." },
    { icon: faShieldHalved, title: "ASE-Certified Techs", description: "Brakes are safety-critical. Our techs treat them that way." },
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
    { feature: 'Fair price before work starts', us: true, others: false },
    { feature: '12-month parts warranty on common jobs', us: true, others: false },
    { feature: 'ASE-certified technicians', us: true, others: 'Not always' },
    { feature: 'We come to you', us: true, others: 'Tow required' },
    { feature: 'Parts on truck — same-visit repair', us: true, others: 'Often a return trip' },
  ];

  const faq = [
    { question: "How much does mobile brake service cost?", answer: "Pricing depends on vehicle and whether pads, rotors, or calipers are needed. We quote before starting — no surprises." },
    { question: "Can you do brakes at my apartment complex?", answer: "Usually yes, if we can safely jack the vehicle and park our service vehicle nearby." },
    { question: "Do you resurface rotors?", answer: "We evaluate rotor thickness and condition. Many modern jobs use new rotors for safety and long-term value — we explain options." },
    { question: "How long does a brake job take?", answer: "Many axle jobs complete in a single visit once parts are confirmed. We will give a time window when we quote." },
  ];

  const related = [
    { icon: faSearch, title: "Mobile Diagnostics", body: "Find the real cause of warning lights and drivability issues.", link: "/services/mobile-diagnostics" },
    { icon: faClipboardCheck, title: "Pre-Purchase Inspection", body: "Know brake condition before you buy a used car.", link: "/services/pre-purchase-inspection" },
    { icon: faOilCan, title: "Mobile Oil Change", body: "Keep routine maintenance simple at home or work.", link: "/services/oil-change-mobile" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Brake Service" },
        ]}
      />

      <SectionIntro
        title="Brake Service in Waco & Central Texas"
        subtitle={"Squealing, grinding, or soft pedals fixed where you park. Pads, rotors, calipers, and fluid service with a fair upfront quote and quality parts."}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for Brake Service" />
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
        <FAQ cityName="Waco" faq={faq} title="Brake Service FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Brake Service" cityName="Waco" slug="/services/brake-service" spot="service-brake-service-form" formVariant={2} />
      </div>

      <CTABanner
        headline={"Brakes Squealing or Grinding? Book Mobile Service."}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
