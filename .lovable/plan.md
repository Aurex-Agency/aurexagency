## Goal
Rewrite all copy that frames Aurex as a solo operator/founder doing the work, so it reads as a unified in-house team. Keep the existing anti-agency promise (no juniors, no hand-offs) and add an explicit "nothing is outsourced" note where natural.

## Voice rules
- "one operator" / "one-operator" → "our team" / "your dedicated team" / "Aurex team"
- "the founder does the work" / "by one operator" → "senior in-house team" / "senior operators on our team"
- First-person "I build…myself / I run…myself" → "we build and run it in-house"
- Preserve "we" voice already used elsewhere; never switch to "I"
- Add the phrase "in-house, never outsourced" (or equivalent) in 2-3 high-signal spots: hero/sub on Home, About manifesto, the FAQ "do you actually do the work" answer
- No em dashes (per project rule)

## Files to edit

### Core data (drives many pages)
- `src/data/aurex.ts`
  - Line 18 `sub` blurb: replace "run by one operator who owns the number" → "run by a senior in-house team that owns the number"
  - Line 122 comparison row: `aurex: "The founder, every time"` → `"Senior in-house team"`
  - Line 152 FAQ answer: rewrite to "Yes. A senior in-house Aurex team builds and runs your system. No account managers, no junior hand-offs, nothing outsourced."
  - Line 162 metric: `"1 operator"` "owns your number" → swap metric to something team-fitting, e.g. `{ value: 1, suffix: " team", label: "owns your number, start to finish" }` (or replace with "0 hand-offs")
- `src/data/site.ts` line 28: outcome "One operator. Big-agency results." → "One in-house team. Big-agency results."
- `src/data/productized.ts` — already uses "senior operators"; no change needed beyond confirming.

### Pages
- `src/pages/Home.tsx`
  - Line 22 SEO description: drop "run by one operator" → "run by a senior in-house team"
  - Line 125 heading: "Everything your marketing needs, run by one operator." → "Everything your marketing needs, run by one in-house team."
- `src/pages/About.tsx`
  - Line 9 promise: title "The founder does the work" → "A senior team, no hand-offs"; body keeps "no account managers, no junior hand-offs, nothing outsourced."
  - Line 19 SEO: "one-operator marketing studio" → "senior in-house marketing team"
  - Line 28 H1: "Built and run by one operator who owns the number." → "Built and run by a senior in-house team that owns the number."
  - Line 42 manifesto paragraph: rewrite to "So Aurex is built differently. One senior team builds and runs the whole system in-house: ads, funnels, follow-up, and the CRM behind them, and reports the return every month."
  - Line 50 signature: change "Kalob, Founder of Aurex" → "The Aurex Team" (removes solo framing). If you want to keep founder attribution, swap to "Founded by Kalob · The Aurex Team."
- `src/pages/Contact.tsx` line 54: "Thirty minutes, one operator, zero fluff." → "Thirty minutes, our senior team, zero fluff."
- `src/pages/Book.tsx` lines 19, 28, 95, 104, 127: "a real operator" → "a senior strategist from our team" (keeps the anti-SDR promise)
- `src/pages/HomeServices.tsx`, `src/pages/HealthPractices.tsx`, `src/pages/MedSpas.tsx`, `src/pages/MedSpasFacebookAds.tsx`, `src/pages/RoiCalculator.tsx`, `src/pages/CityLanding.tsx`: every "a real operator" → "a senior strategist from our team"
- `src/pages/Index.tsx` lines 72, 126: "Senior operators · Pause anytime" stays (already team voice); change line 126 "Operator-to-operator wins" → "Owner-to-owner wins"

### Components
- `src/components/layout/Footer.tsx` line 31: "run by one operator who owns the number" → "run by a senior in-house team that owns the number"
- `src/components/sections/ServicesGrid.tsx` line 13: "run by one operator" → "run by one in-house team"

### Unused components (leave as-is)
`SoloAdvantage.tsx` and `FounderLetter.tsx` are not imported anywhere (only `Home.tsx` is the home route, not `Index.tsx`). Skip to avoid churn. Note them so we can delete in a follow-up if desired.

## Out of scope
- No visual/layout changes.
- No new sections.
- Not touching `src/hooks/use-toast.ts` "I'll keep it here" (code comment, not user copy).

## Verification
- After edits, grep for remaining `\bone operator\b`, `one-operator`, `the founder does`, `myself`, and `\bI\b` in rendered files; expect zero hits in routed pages/components.
- Spot-check Home, About, Pricing, Contact, Book in preview.
