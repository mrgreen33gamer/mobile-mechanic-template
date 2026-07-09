// BayCall Mobile Mechanics — Mobile Diagnostics Service Page
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

export default function MobileDiagnosticsPage() {

  const expectations = [
    { icon: faSearch, title: "On-Site Scan & Diagnosis", description: "We plug in, read codes, and verify the real cause — not just clear the light and hope." },
    { icon: faFileContract, title: "Fair Quote Before Work", description: "You get a clear price before any repair starts. No pressure to approve work you do not need." },
    { icon: faCheckCircle, title: "Fix It Right When Possible", description: "Common sensors, batteries, and wear items are often repaired the same visit when parts are on the truck." },
    { icon: faShieldHalved, title: "12-Month Parts Warranty", description: "Common jobs are backed by a 12-month parts warranty. We stand behind the work." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Same-Day When Available", description: "We dispatch from Waco and keep common diagnostic paths fast — often same-day." },
    { icon: faWrench, title: "Real Diagnostic Process", description: "Code reading plus verification. We chase root cause, not the first code on the list." },
    { icon: faShieldHalved, title: "ASE-Certified Techs", description: "Every tech is ASE-certified. You are never dealing with guesswork freelancers." },
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
    { question: "How much does mobile diagnostics cost in Waco?", answer: "Diagnostic fees are quoted up front and often applied toward approved repairs. Call (254) 940-1515 for current rates." },
    { question: "Can you clear my check-engine light?", answer: "We can clear codes after a proper diagnosis and repair. Clearing codes without fixing the cause is a temporary mask, not a solution." },
    { question: "What if you need a part that is not on the truck?", answer: "We explain options, order what is needed, and return promptly — still without a tow if the car is safe to leave." },
    { question: "Do you diagnose hybrids and newer cars?", answer: "We handle most late-model cars and light trucks. If a specialty tool is required, we will tell you honestly before proceeding." },
  ];

  const related = [
    { icon: faCogs, title: "Brake Service", body: "Pads, rotors, and safe stopping power at your location.", link: "/services/brake-service" },
    { icon: faCarBattery, title: "Battery & Alternator", body: "Load tests and charging-system diagnosis on-site.", link: "/services/battery-alternator" },
    { icon: faWrench, title: "Starter Repair", body: "Click-no-crank diagnosis and starter replacement.", link: "/services/starter-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mobile Diagnostics" },
        ]}
      />

      <SectionIntro
        title="Mobile Diagnostics in Waco & Central Texas"
        subtitle={"Check-engine lights, intermittent no-starts, and rough running diagnosed at your driveway — scan tools, real answers, and a fair quote before any repair."}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for Mobile Diagnostics" />
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
        <FAQ cityName="Waco" faq={faq} title="Mobile Diagnostics FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Mobile Diagnostics" cityName="Waco" slug="/services/mobile-diagnostics" spot="service-mobile-diagnostics-form" formVariant={2} />
      </div>

      <CTABanner
        headline={"Check Engine Light On? We Come to You."}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
