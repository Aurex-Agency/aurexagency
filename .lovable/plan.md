## Goal
Replace the current teal accent (`--accent: 176 84% 34%`) — used on buttons, eyebrows, links, focus rings, and subtext highlights — with the Aurex logo's brand blue/cyan palette.

## Brand colors (from memory)
- Deep electric blue: `#1130c3` (hsl 230 84% 41%)
- Cyan: `#00d0e0` (hsl 185 100% 44%)
- Gradient: deep blue → cyan, used on primary CTAs

## Changes

### 1. `src/index.css` — update accent tokens
- `--accent` → `230 84% 41%` (deep brand blue) so all `text-accent`, `border-accent`, and `bg-accent` usages render in brand blue (good contrast on white/cream and on dark surfaces).
- `--ring` → match new accent.
- Add new tokens:
  - `--brand-blue: 230 84% 41%`
  - `--brand-cyan: 185 100% 44%`
  - `--gradient-brand: linear-gradient(135deg, hsl(var(--brand-blue)), hsl(var(--brand-cyan)))`

### 2. `src/index.css` — repoint `.btn-primary` to gradient
- Change `.btn-primary` background from solid `hsl(var(--accent))` to `var(--gradient-brand)` so primary CTAs match logo.
- Update its hover shadow to use `--brand-blue` glow.
- Keep `.btn-dark`, `.btn-outline`, `.btn-light` as-is.

### 3. `tailwind.config.ts`
- No structural change needed; `accent` already maps to `--accent`. Optionally add `brand: { blue, cyan }` color entries for future use.

## Out of scope
- No layout, copy, or component logic changes.
- Amber/gold tokens (already unused per brand rule) left untouched.
- Cream/ink palette unchanged.

## Verification
- Scan preview: hero CTA, pricing "Book a Call" buttons, eyebrows, FAQ accents, focus rings on form inputs all show brand blue / blue-cyan gradient instead of teal.
