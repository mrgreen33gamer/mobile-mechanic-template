'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string; // 'brand' | 'cert' | 'tool'
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Parts & Systems We Service',
    items: [
      { name: 'OEM & Quality Aftermarket', type: 'brand' },
      { name: 'Brake Pads & Rotors',       type: 'brand' },
      { name: 'Batteries',                 type: 'brand' },
      { name: 'Alternators',               type: 'brand' },
      { name: 'Starters',                  type: 'brand' },
      { name: 'Oil & Filters',             type: 'brand' },
      { name: 'Sensors & Ignition',        type: 'brand' },
      { name: 'OBD Diagnostics',           type: 'brand' },
    ],
  },
  {
    label: 'Certifications & Coverage',
    items: [
      { name: 'ASE-Certified Techs',       type: 'cert' },
      { name: 'Bonded & Insured',          type: 'cert' },
      { name: '12-Month Parts Warranty',   type: 'cert' },
      { name: 'Fair Upfront Quotes',       type: 'cert' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Mobile Diagnostics',        type: 'tool' },
      { name: 'Brake Service',             type: 'tool' },
      { name: 'Battery & Alternator',      type: 'tool' },
      { name: 'Mobile Oil Change',         type: 'tool' },
      { name: 'Starter Repair',            type: 'tool' },
      { name: 'Pre-Purchase Inspection',   type: 'tool' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Quality Parts, Certified Techs',
  subtitle = 'We diagnose and repair with quality parts and ASE-certified technicians — fair quotes, no driveway shortcuts.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className={`${styles.item} ${item.type === 'cert' ? styles.itemCert : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.type === 'cert' ? (
                      <div className={styles.certCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    ) : (
                      <div className={styles.itemDot} aria-hidden="true" />
                    )}
                    <span className={styles.itemName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
