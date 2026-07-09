// BayCall Mobile Mechanics — Pre-Purchase Inspection Service Page
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

export default function PrePurchaseInspectionPage() {

  const expectations = [
    { icon: faSearch, title: "Thorough Walkthrough", description: "Engine, transmission behavior, brakes, leaks, belts, and electronics checked on-site." },
    { icon: faFileContract, title: "Clear Findings Report", description: "You get plain-English findings — deal-breakers vs. normal wear." },
    { icon: faCheckCircle, title: "At the Seller Location", description: "No need to tow the car to a shop. We come to the vehicle." },
    { icon: faShieldHalved, title: "Honest Opinion", description: "We work for you, not the seller. No pressure to buy or walk away — just facts." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Scheduling", description: "PPI appointments fit buyer timelines — often same- or next-day." },
    { icon: faWrench, title: "Real Technician Eyes", description: "ASE-certified techs catch what casual test drives miss." },
    { icon: faShieldHalved, title: "Buyer-Side Loyalty", description: "Our only job is protecting your purchase decision." },
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
    { question: "How long does a pre-purchase inspection take?", answer: "Most PPIs take about 45–90 minutes depending on vehicle and findings." },
    { question: "Can you inspect at a private seller or dealer?", answer: "Yes — home driveway, parking lot, or dealership lot when access is allowed." },
    { question: "Do you guarantee the car after inspection?", answer: "A PPI is a point-in-time assessment, not a warranty on the vehicle. We report what we find that day." },
    { question: "What if you find major issues?", answer: "We explain severity and rough repair ranges so you can renegotiate or walk away informed." },
  ];

  const related = [
    { icon: faSearch, title: "Mobile Diagnostics", body: "Deeper computer diagnosis if warning lights are present.", link: "/services/mobile-diagnostics" },
    { icon: faCogs, title: "Brake Service", body: "Fix worn brakes after you buy — still mobile.", link: "/services/brake-service" },
    { icon: faCarBattery, title: "Battery & Alternator", body: "Address electrical findings before they strand you.", link: "/services/battery-alternator" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Pre-Purchase Inspection" },
        ]}
      />

      <SectionIntro
        title="Pre-Purchase Inspection in Waco & Central Texas"
        subtitle={"Buying a used car? We meet at the seller and inspect engines, brakes, leaks, tires, and electronics so you know what you are signing up for."}
      />

      <TrustBar headline="ASE-certified mobile techs · Fair upfront quotes · 12-month parts warranty on common jobs" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BayCall for Pre-Purchase Inspection" />
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
        <FAQ cityName="Waco" faq={faq} title="Pre-Purchase Inspection FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Pre-Purchase Inspection" cityName="Waco" slug="/services/pre-purchase-inspection" spot="service-pre-purchase-inspection-form" formVariant={2} />
      </div>

      <CTABanner
        headline={"Buying a Used Car? Get a Mobile PPI First."}
        subline="Same-day mobile appointments across Waco and Central Texas. Fair upfront quotes."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
