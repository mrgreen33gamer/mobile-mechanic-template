# Mobile Mechanic Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `mobile-mechanic-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | BayCall Mobile Mechanics |
| **Tagline** | We Come to You · Diagnostics · Brakes · Batteries |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2013 |
| **Owner** | Omar Singh |
| **License** | ASE-Certified Techs · Bonded & Insured |
| **Guarantee** | Fair Upfront Quotes · 12-Month Parts Warranty on Common Jobs |
| **Social proof** | 4.9★, 2,100+ reviews, 18,000+ mobile visits |
| **Accent hex** | `#7c2d12` (rust brown dark) · `$orange` = `#ea580c` |
| **Phone** | (254) 940-1515 / `tel:+12549401515` |
| **Email** | hello@baycallmobile.com |
| **Domain** | baycallmobile.com |
| **Address** | 1400 N Valley Mills Dr, Waco, TX 76710 |

## Services (6)

| Old HVAC | New slug | Title |
|----------|----------|--------|
| ac-repair | mobile-diagnostics | Mobile Diagnostics |
| heating | brake-service | Brake Service |
| installation | battery-alternator | Battery & Alternator |
| duct-cleaning | oil-change-mobile | Mobile Oil Change |
| indoor-air-quality | starter-repair | Starter Repair |
| maintenance | pre-purchase-inspection | Pre-Purchase Inspection |

## Industries (3)

| Old slug | New slug | Title |
|----------|----------|--------|
| automotive | fleet-managers | Fleet Managers |
| manufacturing | property-managers-vehicles | Property Manager Vehicles |
| oil-gas | rideshare-delivery | Rideshare & Delivery |

## Blogs (3)

1. `mobile-mechanic-vs-shop`
2. `when-you-need-mobile-diagnostics`
3. `brake-noise-what-it-means`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #ea580c`, `$lightorange: #fb923c`, `$darkorange: #7c2d12`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#ea580c`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: BayCall Mobile Mechanics throughout
