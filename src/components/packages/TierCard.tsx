import { ArrowRight, Check } from "lucide-react";
import type { Tier } from "@/data/packages";
import { RISK_REVERSAL } from "@/data/packages";
import { GuaranteeBox } from "./GuaranteeBox";

/* ------------------------------------------------------------------ */
/* Compact teaser card — used on the Home page                        */
/* ------------------------------------------------------------------ */

export function TierTeaser({ tier }: { tier: Tier }) {
  const Icon = tier.icon;
  return (
    <div className="card-soft card-hover h-full rounded-2xl p-7 flex flex-col">
      <span className="inline-flex w-11 h-11 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
        <Icon className="w-5 h-5" />
      </span>
      <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">{tier.outcome}</p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold tnum text-foreground">${tier.price}</span>
        <span className="text-sm text-foreground/55">/mo</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Full sales card — used on the Packages page                        */
/* Three equal, standalone systems (no stacking, no "most popular").  */
/* ------------------------------------------------------------------ */

export function TierCard({ tier }: { tier: Tier }) {
  const Icon = tier.icon;

  return (
    <div className="relative flex flex-col rounded-3xl card-soft">
      <div className="p-7 lg:p-8 flex flex-col flex-1">
        {/* Name + outcome */}
        <span className="inline-flex w-12 h-12 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
          <Icon className="w-5 h-5" />
        </span>
        <h3 className="text-2xl font-extrabold tracking-tight text-foreground">{tier.name}</h3>
        <p className="mt-2 text-base font-semibold text-accent">{tier.outcome}</p>

        {/* "This is for you if..." */}
        <p className="mt-4 text-sm leading-relaxed text-foreground/65">
          <span className="text-foreground/80 font-semibold">{tier.forYou}</span>
        </p>

        {/* Price + risk reversal */}
        <div className="mt-6 pt-6 border-t hairline">
          <div className="flex items-baseline gap-1.5">
            <span className="text-5xl font-extrabold tnum text-foreground">${tier.price}</span>
            <span className="text-base text-foreground/55">/month</span>
          </div>
          <p className="mt-1.5 text-sm text-foreground/55">{RISK_REVERSAL}</p>
        </div>

        {/* Outcome-first blurb */}
        <p className="mt-6 leading-relaxed text-foreground/70">{tier.blurb}</p>

        {/* Benefit-framed features */}
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/45">What's handled for you</p>
        <ul className="mt-3 space-y-3.5">
          {tier.features.map((f, i) => (
            <li key={i} className="flex gap-3">
              <Check className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
              <span className="text-sm leading-relaxed text-foreground/75">{f}</span>
            </li>
          ))}
        </ul>

        {/* Guarantee */}
        <div className="mt-7">
          <GuaranteeBox text={tier.guarantee} />
        </div>

        {/* CTA */}
        <div className="mt-auto pt-7">
          <a href="#book" className="btn-primary w-full px-6 text-base" style={{ height: "3.25rem" }}>
            {tier.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
