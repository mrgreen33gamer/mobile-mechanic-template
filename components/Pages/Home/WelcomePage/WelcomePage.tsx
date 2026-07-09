// Mobile Mechanic Hero C — Interstate roads, van route polyline, ETA badge
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon, PinIcon } from './_shared/icons';
import styles from './styles.module.scss';

function ServiceAreaMap({
  mapCenterLabel,
  mapPins,
  coverageLabel,
}: {
  mapCenterLabel: string;
  mapPins: Array<{ label: string; x: number; y: number }>;
  coverageLabel?: string;
}) {
  return (
    <div
      className={`${styles.mapCard} ${styles.highwayMap}`}
      role="img"
      aria-label={`Service area map centered on ${mapCenterLabel}`}
    >
      <svg
        className={styles.mapSvg}
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mechGlow" cx="45%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.12)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
          <marker id="routeArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(249, 115, 22, 0.9)" />
          </marker>
        </defs>

        <rect width="400" height="320" fill="url(#mechGlow)" />

        {/* Interstate-style multi-lane roads */}
        <path
          d="M -20 100 L 420 100"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="18"
        />
        <path
          d="M -20 100 L 420 100"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeDasharray="14 10"
        />
        <path
          d="M 80 -10 L 80 340"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="14"
        />
        <path
          d="M 80 -10 L 80 340"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.25"
          strokeDasharray="10 8"
        />
        <path
          d="M -10 240 Q 160 200 280 250 T 420 220"
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="12"
        />
        <path
          d="M -10 240 Q 160 200 280 250 T 420 220"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1.1"
          strokeDasharray="9 7"
        />

        {/* Secondary arterials */}
        <path d="M 200 0 L 200 320" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
        <path d="M 0 160 L 400 160" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />

        {/* Active van route polyline */}
        <polyline
          points="80,280 80,200 140,160 200,160 260,120 320,100 360,100"
          fill="none"
          stroke="rgba(249, 115, 22, 0.85)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#routeArrow)"
          className={styles.routeLine}
        />
        {/* Route waypoints */}
        <circle cx="80" cy="280" r="5" fill="rgba(249,115,22,0.95)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <circle cx="200" cy="160" r="4" fill="rgba(249,115,22,0.7)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <circle cx="320" cy="100" r="4.5" fill="rgba(249,115,22,0.9)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.25" />

        {/* Highway shield markers */}
        <g className={styles.shieldGroup}>
          <path d="M48 88 L72 88 L76 100 L72 118 L48 118 L44 100 Z" fill="rgba(15,15,20,0.85)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
          <text x="60" y="107" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
            35
          </text>
          <path d="M188 72 L212 72 L216 84 L212 102 L188 102 L184 84 Z" fill="rgba(15,15,20,0.85)" stroke="rgba(249,115,22,0.45)" strokeWidth="1.2" />
          <text x="200" y="91" textAnchor="middle" fill="rgba(249,115,22,0.95)" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
            6
          </text>
        </g>
      </svg>

      <div className={`${styles.rings} ${styles.routeRings}`} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ring1}`} />
        <span className={`${styles.ring} ${styles.ring2}`} />
      </div>

      <div className={styles.centerPin}>
        <div className={`${styles.centerPinIcon} ${styles.vanHub}`}>
          <PinIcon size={20} />
        </div>
        <span className={styles.centerLabel}>{mapCenterLabel}</span>
      </div>

      {/* ETA badge */}
      <div className={styles.etaBadge} aria-hidden="true">
        <span className={styles.etaLive} />
        ETA 42 min
      </div>

      {mapPins.map((pin) => (
        <div
          key={`${pin.label}-${pin.x}-${pin.y}`}
          className={styles.satPin}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span className={styles.satDot} />
          <span className={styles.satLabel}>{pin.label}</span>
        </div>
      ))}

      {coverageLabel && (
        <div className={styles.coverageBadge}>
          <span className={styles.coverageDot} />
          {coverageLabel}
        </div>
      )}
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Mobile Mechanics — Since 2013";
  const headlineLines = ['We Come to You.', 'Fixed Right.'];
  const headlineAccent = 'BayCall Mobile Mechanics.';
  const subheadline =
    'We Come to You · Diagnostics · Brakes · Batteries. Fair upfront quotes. Same-day mobile service. 12-month parts warranty on common jobs. Serving Waco and Central Texas with ASE-certified technicians.';
  const primaryCta = { label: 'Call (254) 940-1515', href: 'tel:+12549401515' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Same-Day Service',
    'No Contracts',
    'ASE-Certified',
    '15+ Yrs Local',
    '12-Month Parts Warranty',
  ];
  const mapCenterLabel = 'Service HQ';
  const mapPins = [
    { label: 'Waco', x: 42, y: 48 },
    { label: 'Temple', x: 68, y: 62 },
    { label: 'Killeen', x: 58, y: 72 },
  ];
  const coverageLabel = 'Central Texas coverage';

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <ServiceAreaMap
            mapCenterLabel={mapCenterLabel}
            mapPins={mapPins}
            coverageLabel={coverageLabel}
          />
        </motion.div>
      </div>
    </section>
  );
}
