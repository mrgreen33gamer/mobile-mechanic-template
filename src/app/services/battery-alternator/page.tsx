// BayCall Mobile Mechanics — Battery & Alternator Service Page
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

export default function BatteryAlternatorPage() {

  const expectations = [
    { icon: faSearch, title: "Proper Load Testing", description: "We test the battery and charging system so you do not replace parts blindly." },
    { icon: faFileContract, title: "Clear Pricing", description: "Battery and labor quoted before installation. No surprise add-ons." },
    { icon: faCheckCircle, title: "On-Site Replacement", description: "Common batteries installed where you are — home, office, or parking lot." },
    { icon: faShieldHalved, title: "Parts Warranty", description: "Battery and common electrical jobs covered under our parts warranty terms." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Response", description: "Stranded situations get priority when we have availability." },
    { icon: faWrench, title: "More Than a Jump", description: "We diagnose why it died — battery, alternator, or parasitic draw clues." },
    { icon: faShieldHalved, title: "ASE-Certified Techs", description: "Electrical diagnosis done correctly the first time." },
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
    { question: "Can you replace my battery on-site?", answer: "Yes for most common vehicles. We bring quality batteries and install them where you park." },
    { question: "How do I know if it is the battery or alternator?", answer: "We test both. A weak battery and a failing alternator can look similar — proper testing prevents wrong parts." },
    { question: "Do you recycle old batteries?", answer: "Yes — we handle core returns and proper disposal of the old unit." },
    { question: "What if my car needs a special battery?", answer: "We confirm fitment first. If a specialty battery is required, we source it and schedule the install." },
  ];

  const related = [
    { icon: faWrench, title: "Starter Repair", body: "When it is not the battery — click-no-crank diagnosis.", link: "/services/starter-repair" },
    { icon: faSearch, title: "Mobile Diagnostics", body: "Electrical and computer issues diagnosed on-site.", link: "/services/mobile-diagnostics" },
    { icon: faOilCan, title: "Mobile Oil Change", body: "Pair electrical care with routine maintenance.", link: "/services/oil-change-mobile" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Battery & Alternator" },
        ]}
      />

      <SectionIntro
        title="Battery & Alternator in Waco & Central Texas"
        subtitle={"Dead battery or weak charging system? We load-test, replace batteries, and diagnose alternators at your location so you are not stuck waiting on a tow."}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for Battery & Alternator" />
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
        <FAQ cityName="Waco" faq={faq} title="Battery & Alternator FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Battery & Alternator" cityName="Waco" slug="/services/battery-alternator" spot="service-battery-alternator-form" formVariant={2} />
      </div>

      <CTABanner
        headline={"Dead Battery? We Come to You."}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
