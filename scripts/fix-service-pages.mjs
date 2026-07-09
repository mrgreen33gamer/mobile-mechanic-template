import fs from 'fs';

const dirs = [
  'mobile-diagnostics',
  'brake-service',
  'battery-alternator',
  'oil-change-mobile',
  'starter-repair',
  'pre-purchase-inspection',
];

const newRows = `  const comparisonRows = [
    { feature: 'Fair price before work starts', us: true, others: false },
    { feature: '12-month parts warranty on common jobs', us: true, others: false },
    { feature: 'ASE-certified technicians', us: true, others: 'Not always' },
    { feature: 'We come to you', us: true, others: 'Tow required' },
    { feature: 'Parts on truck — same-visit repair', us: true, others: 'Often a return trip' },
  ];`;

for (const d of dirs) {
  const p = `src/app/services/${d}/page.tsx`;
  let t = fs.readFileSync(p, 'utf8');
  t = t.replace(/items=\{/g, 'crumbs={');
  t = t.replace(/const comparisonRows = \[[\s\S]*?\];/, newRows);
  fs.writeFileSync(p, t);
  console.log('fixed', d);
}
