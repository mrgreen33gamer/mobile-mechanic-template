// BayCall Mobile Mechanics — Mobile Oil Change Service Page
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

export default function OilChangeMobilePage() {

  const expectations = [
    { icon: faSearch, title: "Right Oil Spec", description: "We match manufacturer viscosity and quality recommendations for your vehicle." },
    { icon: faFileContract, title: "Transparent Pricing", description: "Know the oil type and price before we start — no bait-and-switch packages." },
    { icon: faCheckCircle, title: "Filter + Glance", description: "New filter, proper fill level, and a quick look for leaks and worn belts." },
    { icon: faShieldHalved, title: "Clean Work", description: "We protect the driveway and clean up before we leave." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "On Your Schedule", description: "Home or work — fit maintenance around your day, not a shop queue." },
    { icon: faWrench, title: "More Than a Drain", description: "Filter, fluids, and a multi-point glance catch small issues early." },
    { icon: faShieldHalved, title: "ASE-Certified Techs", description: "Routine service done by real technicians, not rushed greasers." },
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
    { question: "Do you offer synthetic oil changes?", answer: "Yes — conventional and synthetic options depending on your vehicle and preference." },
    { question: "How long does a mobile oil change take?", answer: "Most vehicles complete in under an hour once the tech arrives, depending on access and oil type." },
    { question: "Can you service a small fleet?", answer: "Yes — we regularly help fleet managers and delivery drivers with scheduled oil service." },
    { question: "Do you dispose of used oil properly?", answer: "Yes — used oil and filters are handled responsibly every visit." },
  ];

  const related = [
    { icon: faCogs, title: "Brake Service", body: "Pair oil service with safe brake care.", link: "/services/brake-service" },
    { icon: faCarBattery, title: "Battery & Alternator", body: "Catch weak batteries before they leave you stranded.", link: "/services/battery-alternator" },
    { icon: faSearch, title: "Mobile Diagnostics", body: "When warning lights appear between oil changes.", link: "/services/mobile-diagnostics" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mobile Oil Change" },
        ]}
      />

      <SectionIntro
        title="Mobile Oil Change in Waco & Central Texas"
        subtitle={"Skip the oil-change lane. Conventional and synthetic oil changes at your home, office, or lot — clean, scheduled, and done right."}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for Mobile Oil Change" />
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
        <FAQ cityName="Waco" faq={faq} title="Mobile Oil Change FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Mobile Oil Change" cityName="Waco" slug="/services/oil-change-mobile" spot="service-oil-change-mobile-form" formVariant={2} />
      </div>

      <CTABanner
        headline={"Due for an Oil Change? We Come to You."}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
