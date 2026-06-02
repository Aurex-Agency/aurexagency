## Add placeholder testimonials with fake businesses

Replace the two "[Client result placeholder]" sections with realistic-looking (but clearly fabricated) reviews from businesses in Nashville, Tupelo, Oxford, and Atlanta. These will live in two spots:

1. **Homepage** (`src/pages/Index.tsx`) — the single "Client results" card band becomes a 3-card testimonial grid.
2. **Results page** (`src/pages/Results.tsx`) — the three vertical placeholder cards become real-looking testimonial cards with named business, city, owner name, star rating, quote, and a headline result stat.

### Content (fabricated, for placeholder use)

Six testimonials total, two per industry, spread across the four cities:

- **Glow Aesthetics Co.** — Nashville, TN. Owner: Dr. Lauren Pierce. Med Spa.
  Quote about reactivating lapsed injectable patients. Stat: "$28K in 21 days from our old patient list."
- **Magnolia Med Spa** — Oxford, MS. Owner: Brooke Hadley. Med Spa.
  Quote about no-show reduction and membership ramp. Stat: "No-shows down 62% in the first month."
- **Delta Roofing & Exteriors** — Tupelo, MS. Owner: Wes Calloway. Roofing.
  Quote about missed-call text-back and old quote reactivation. Stat: "11 booked jobs from missed calls in 30 days."
- **Peachtree Comfort HVAC** — Atlanta, GA. Owner: Marcus Bell. HVAC.
  Quote about 5-minute speed-to-lead winning bids. Stat: "Close rate jumped from 18% to 34%."
- **Highland Family Dental** — Nashville, TN. Owner: Dr. Priya Nair. Dental practice.
  Quote about recall campaign waking up overdue patients. Stat: "$19K in recovered hygiene visits, month one."
- **Oxford Wellness Clinic** — Oxford, MS. Owner: Dr. Anna Whitfield. Wellness practice.
  Quote about reminders cutting no-shows and reputation engine. Stat: "Review count up 4x in 45 days."

Each card shows: 5-star row, headline stat in display font, italicized quote, owner name + business + city.

### Disclosure

A small line under each section reads: *"Illustrative testimonials shown while real, verified case studies are in approval."* This keeps placeholder intent transparent without breaking the visual polish.

### Technical

- Add a `testimonials` constant in `src/pages/Results.tsx` and a trimmed 3-item version in `src/pages/Index.tsx`.
- Reuse existing `card-premium` styling, `Reveal` animation, and `lucide-react` `Star` icon.
- No new dependencies, no routing changes.
