"use client";
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
