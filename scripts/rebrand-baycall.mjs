/**
 * One-shot rebrand: Summit Door Pros → BayCall Mobile Mechanics
 * Run: node scripts/rebrand-baycall.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const EXTS = new Set(['.ts', '.tsx', '.scss', '.css', '.js', '.jsx', '.json', '.md', '.txt', '.mjs']);
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'public']);

// Order matters — longer / more specific first
const REPLACEMENTS = [
  // Paths first
  ['/services/garage-door-repair', '/services/mobile-diagnostics'],
  ['/services/spring-cable-repair', '/services/brake-service'],
  ['/services/new-door-installation', '/services/battery-alternator'],
  ['/services/opener-installation', '/services/oil-change-mobile'],
  ['/services/door-maintenance', '/services/starter-repair'],
  ['/services/commercial-doors', '/services/pre-purchase-inspection'],
  ['/industries/property-management', '/industries/fleet-managers'],
  ['/industries/homebuilders', '/industries/property-managers-vehicles'],
  ['/industries/commercial-facilities', '/industries/rideshare-delivery'],
  ['garage-door-spring-break-safety-waco', 'mobile-mechanic-vs-shop'],
  ['how-to-choose-garage-door-opener', 'when-you-need-mobile-diagnostics'],
  ['signs-garage-door-needs-replacement', 'brake-noise-what-it-means'],

  // Identity
  ['Summit Door Pros', 'BayCall Mobile Mechanics'],
  ['summitdoorpros.com', 'baycallmobile.com'],
  ['summitdoorpros', 'baycallmobile'],
  ['hello@baycallmobile.com', 'hello@baycallmobile.com'], // no-op guard
  ['Marcus Hale', 'Omar Singh'],
  ['Lead Garage Door Technician', 'Owner & Lead Mobile Mechanic'],
  ['Owner & Lead Garage Door Technician', 'Owner & Lead Mobile Mechanic'],

  // Contact
  ['(254) 720-1100', '(254) 940-1515'],
  ['+12547201100', '+12549401515'],
  ['1401 Franklin Ave', '1400 N Valley Mills Dr'],
  ['76701', '76710'],

  // Credentials / proof
  ['IDA-Trained Technicians', 'ASE-Certified Techs'],
  ['IDA-trained technicians', 'ASE-certified technicians'],
  ['IDA-Trained', 'ASE-Certified'],
  ['IDA-trained', 'ASE-certified'],
  ['IDA', 'ASE'],
  ['Lifetime Spring Warranty + 2-Year Workmanship', 'Fair Upfront Quotes · 12-Month Parts Warranty on Common Jobs'],
  ['Lifetime Spring Warranty', '12-Month Parts Warranty'],
  ['lifetime spring warranty', '12-month parts warranty'],
  ['2-Year Workmanship', '12-Month Parts Warranty'],
  ['Garage Doors Installed, Repaired & Maintained', 'We Come to You · Diagnostics · Brakes · Batteries'],
  ['Garage Doors Installed, Repaired &amp; Maintained', 'We Come to You · Diagnostics · Brakes · Batteries'],
  ['800+ Reviews', '2,100+ Reviews'],
  ['800+ reviews', '2,100+ reviews'],
  ['5,000+ doors serviced', '18,000+ mobile visits'],
  ['5000+ doors', '18,000+ mobile visits'],
  ['Doors serviced across Central Texas', 'Mobile visits across Central Texas'],
  ['Years of local garage door experience', 'Years of mobile mechanic experience'],
  ['Serving Central Texas Since 2011', 'Serving Central Texas Since 2013'],
  ['since 2011', 'since 2013'],
  ['Since 2011', 'Since 2013'],
  ['foundingDate: "2011"', 'foundingDate: "2013"'],
  ['founded in 2011', 'founded in 2013'],
  ['Founded in 2011', 'Founded in 2013'],

  // Service titles
  ['Garage Door Repair', 'Mobile Diagnostics'],
  ['Spring & Cable Repair', 'Brake Service'],
  ['New Door Installation', 'Battery & Alternator'],
  ['Opener Installation', 'Mobile Oil Change'],
  ['Door Maintenance Plans', 'Starter Repair'],
  ['Door Maintenance', 'Starter Repair'],
  ['Commercial Doors', 'Pre-Purchase Inspection'],

  // Industry titles
  ['Property Management', 'Fleet Managers'],
  ['Homebuilders & Remodelers', 'Property Manager Vehicles'],
  ['Homebuilders', 'Property Manager Vehicles'],
  ['Commercial Facilities', 'Rideshare & Delivery'],

  // Colors — primary accent #ea580c, dark rust #7c2d12
  ['#1d4ed8', '#ea580c'],
  ['#3b82f6', '#fb923c'],
  ['#1e3a8a', '#7c2d12'],

  // Domain / business type leftovers
  ['garage door company', 'mobile mechanic company'],
  ['garage door services', 'mobile mechanic services'],
  ['garage door pros', 'mobile mechanics'],
  ['Garage door', 'Mobile mechanic'],
  ['garage door', 'mobile mechanic'],
  ['Garage Door', 'Mobile Mechanic'],
  ['doors serviced', 'mobile visits completed'],
  ['Doors Done.', 'We Come to You.'],
  ['Done Right.', 'Fixed Right.'],
  ["Waco's Most Trusted Garage Door Pros", "Waco's Most Trusted Mobile Mechanics"],
  ["Waco&apos;s Most Trusted Garage Door Pros", "Waco&apos;s Most Trusted Mobile Mechanics"],
  ['HomeAndConstructionBusiness', 'AutomotiveBusiness'],
  ['HVACBusiness', 'AutomotiveBusiness'],

  // Package name
  ['"name": "hvac-template"', '"name": "mobile-mechanic-template"'],
  ['"name": "garage-door-template"', '"name": "mobile-mechanic-template"'],
];

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (EXTS.has(path.extname(ent.name))) files.push(p);
  }
  return files;
}

let changed = 0;
const files = walk(ROOT);
for (const file of files) {
  // skip this script itself mid-run partially
  if (file.includes('rebrand-baycall.mjs')) continue;
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;
  for (const [from, to] of REPLACEMENTS) {
    if (text.includes(from)) text = text.split(from).join(to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
    console.log('updated', path.relative(ROOT, file));
  }
}
console.log(`\nDone. ${changed} files updated.`);
