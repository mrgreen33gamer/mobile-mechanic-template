'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

interface CTABannerProps {
  headline?: string;
  subline?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  spot?: string;
  imageSrc?: string;
  eyebrow?: string;
  badgeA?: string;
  badgeB?: string;
  badgeC?: string;
}

/** BayCall — car motif */
export default function CTABanner({
  headline = "The Shop Comes to You.",
  subline = "Mobile diagnostics, batteries, brakes, and maintenance in your driveway — real techs, real parts.",
  primaryText = "Call (254) 940-1515",
  primaryLink = "tel:+12549401515",
  secondaryText = "Book Mobile Tech",
  secondaryLink = "/contact",
  spot = "CTABanner",
  imageSrc,
  eyebrow = "BayCall · Central Texas",
  badgeA = "Driveway",
  badgeB = "Card OK",
  badgeC = "Parts Stocked",
}: CTABannerProps) {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.banner} aria-label="Call to action">
      {imageSrc ? (
        <div className={styles.photoBg} aria-hidden="true">
          <img src={imageSrc} alt="" className={styles.photoBgImg} />
          <div className={styles.photoScrim} />
        </div>
      ) : null}

      <div className={styles.grid} aria-hidden="true" />

      <motion.div
        className={styles.bgMotif}
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <svg width="420" height="420" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v5h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3v-5a1 1 0 0 1 1-1h1zm2.2-1h9.6l-1-3H8.2l-1 3z" opacity="0.85"/></svg>
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {eyebrow}
          </span>
          <h2 className={styles.heading}>{headline}</h2>
          <p className={styles.sub}>{subline}</p>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <a
            href={primaryLink}
            className={styles.primaryBtn}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: primaryText, section: spot })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {primaryText}
          </a>
          <Link
            href={secondaryLink}
            className={styles.secondaryBtn}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: secondaryText, section: spot })}
          >
            {secondaryText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {badgeA}
            </span>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {badgeB}
            </span>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {badgeC}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
