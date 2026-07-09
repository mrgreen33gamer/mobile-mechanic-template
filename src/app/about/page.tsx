// BayCall Mobile Mechanics — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2013",
      description: "BayCall Mobile Mechanics was founded in Waco by Omar Singh. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust at Your Driveway",
      description: "Every technician is background-checked, ASE-certified, bonded, and insured. We treat your property with the same respect we'd want for our own.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full engine overhaul when a battery or sensor will do. Our reputation is built on straight talk and fair upfront quotes.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Mobile visits across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,    label: "Years serving Central Texas drivers", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "We Come to You", description: "An ASE-certified tech arrives with tools and common parts — at home, work, or a safe parking spot.", icon: faShieldHalved },
    { number: 3, title: "Fair Quote", description: "Clear price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Fixed Right, Warrantied", description: "Quality parts, clean workmanship, 12-month parts warranty on common jobs.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About BayCall Mobile Mechanics"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2013. We Come to You · Diagnostics · Brakes · Batteries — honest work at fair prices for the drivers and fleets we've called neighbors for 13 years."
      />

      <TrustBar headline="18,000+ Central Texas mobile visits — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Who We Are" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="13 Years, By the Numbers" metrics={metrics} cityName="Waco" />
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
        headline="Waco's Mobile Mechanics — Ready When You Need Us"
        subline="Same-day mobile service. Fair upfront quotes. 12-month parts warranty on common jobs. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12549401515"
        secondaryText="Request Service Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
