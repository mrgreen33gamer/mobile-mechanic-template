// BayCall Mobile Mechanics — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faCarBattery, faOilCan, faWrench, faCogs, faClipboardCheck, faCarSide,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faSearch,
      title: "Mobile Diagnostics",
      body: "Check-engine lights, no-start issues, and drivability problems diagnosed at your driveway. We bring OBD tools and plain-English answers — not a tow-bill surprise.",
      link: "/services/mobile-diagnostics",
    },
    {
      icon: faCogs,
      title: "Brake Service",
      body: "Pads, rotors, calipers, and brake fluid service where you park. Safe stopping power with fair upfront quotes and a 12-month parts warranty on common jobs.",
      link: "/services/brake-service",
    },
    {
      icon: faCarBattery,
      title: "Battery & Alternator",
      body: "Load testing, battery replacement, and alternator diagnosis on-site. We stock common batteries and charge systems so you're not stranded waiting on a parts run.",
      link: "/services/battery-alternator",
    },
    {
      icon: faOilCan,
      title: "Mobile Oil Change",
      body: "Conventional and synthetic oil changes at home or work. Filter, fluids, and a multi-point glance so small issues don't become roadside emergencies.",
      link: "/services/oil-change-mobile",
    },
    {
      icon: faWrench,
      title: "Starter Repair",
      body: "Click-no-crank, slow starts, and starter replacement without a tow. ASE-certified techs diagnose electrical and mechanical no-start causes correctly the first time.",
      link: "/services/starter-repair",
    },
    {
      icon: faClipboardCheck,
      title: "Pre-Purchase Inspection",
      body: "Buying a used car in Central Texas? We inspect engines, brakes, leaks, and electronics at the seller's location so you know what you're signing up for.",
      link: "/services/pre-purchase-inspection",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Mobile visits across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 13,    label: "Years of mobile mechanic experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Fair Upfront Quotes",
      description: "You get a clear price before we turn a wrench. No hourly mystery bills, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "ASE-Certified Techs",
      description: "Every tech is ASE-certified, bonded, and insured. Real technicians in fully stocked mobile service vehicles.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2013",
      description: "We're not a franchise. BayCall Mobile Mechanics was founded in Waco by Omar Singh. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Come to You",
      description: "An ASE-certified tech arrives at your home, office, or roadside location with diagnostic tools and common parts on the truck.",
      icon: faTruck,
    },
    {
      number: 3,
      title: "You Get a Fair Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Fixed Right, Warrantied",
      description: "Quality parts, clean workmanship, and a 12-month parts warranty on common jobs. We leave when you're confident and ready to drive.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Vehicle Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths, driveway care, and tidy cleanup. Your property is left the way we found it — usually better.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Fair Pricing",
      description: "Clear quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Parts & Warranty",
      description: "Quality parts for brakes, batteries, filters, and common repairs — backed by a 12-month parts warranty on common jobs.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and fleet coverage. On our regular route.",           badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and workplaces.",              badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                 badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",     badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",          badge: "" },
  ];

  const faq = [
    {
      question: "How much does a mobile mechanic visit cost in Waco?",
      answer: "Diagnostic visits and common repairs are quoted upfront before work begins. Many jobs land in the $100–$450 range depending on parts and complexity. Oil changes, batteries, and brake jobs are priced clearly — no mystery hourly clock.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day mobile service is available across Waco and Central Texas when scheduling allows. Call us at (254) 940-1515 and we'll get a tech rolling when we can.",
    },
    {
      question: "What vehicles do you work on?",
      answer: "Most cars, light trucks, and SUVs. We also support fleet managers, property-manager vehicle pools, and rideshare/delivery drivers who need reliable same-day help.",
    },
    {
      question: "What mobile mechanic services do you offer?",
      answer: "Mobile diagnostics, brake service, battery & alternator, mobile oil changes, starter repair, and pre-purchase inspections.",
    },
    {
      question: "Are you bonded and insured?",
      answer: "Yes — BayCall Mobile Mechanics is bonded and insured with ASE-certified technicians. Credentials available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — fair upfront quotes and a 12-month parts warranty on common jobs. We'll explain coverage before any work starts.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <WelcomePage />

      <TrustBar
        headline="Waco's trusted mobile mechanics — ASE-certified, insured, and warrantied on common jobs"
      />

      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Mobile Mechanic Services — At Your Location"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes BayCall Mobile Mechanics Different"
        />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Car Won't Start? Check Engine Light? We Come to You."
        subline="Same-day mobile appointments across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Fair upfront quotes. 12-month parts warranty on common jobs."
        primaryText="Call (254) 940-1515"
        primaryLink="tel:+12549401515"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>

      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Mobile Mechanic Questions — Answered Straight"
        />
      </div>

      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>

    </main>
  );
}
