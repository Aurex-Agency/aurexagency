import { Link } from "react-router-dom";
import { ArrowRight, Check, CornerDownRight } from "lucide-react";
import type { Tier } from "@/data/packages";
import { RISK_REVERSAL } from "@/data/packages";
import { GuaranteeBox } from "./GuaranteeBox";

/* ------------------------------------------------------------------ */
/* Compact teaser card — used on the Home page                        */
/* ------------------------------------------------------------------ */

export function TierTeaser({ tier }: { tier: Tier }) {
  const Icon = tier.icon;
  return (
    <div
      className={`relative h-full rounded-2xl p-7 flex flex-col ${
        tier.popular
          ? "surface-dark border border-brand-cyan/40 shadow-[0_30px_60px_-30px_hsl(222_86%_56%/0.45)]"
          : "card-soft"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white" style={{ background: "var(--gradient-brand)" }}>
          Most popular
        </span>
      )}
      <span
        className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5 ${
          tier.popular ? "bg-white/10 text-brand-cyan" : "bg-accent/10 text-accent"
        }`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <h3 className={`text-lg font-bold ${tier.popular ? "text-white" : "text-foreground"}`}>{tier.name}</h3>
      <p className={`mt-1.5 text-sm leading-relaxed ${tier.popular ? "text-white/65" : "text-foreground/60"}`}>
        {tier.outcome}
      </p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className={`text-3xl font-extrabold tnum ${tier.popular ? "text-white" : "text-foreground"}`}>
          ${tier.price}
        </span>
        <span className={`text-sm ${tier.popular ? "text-white/55" : "text-foreground/55"}`}>/mo</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Full sales card — used on the Packages page                        */
/* ------------------------------------------------------------------ */

export function TierCard({ tier }: { tier: Tier }) {
  const Icon = tier.icon;
  const popular = !!tier.popular;

  return (
    <div
      className={`relative flex flex-col rounded-3xl ${
        popular
          ? "surface-dark grain overflow-hidden border border-brand-cyan/40 shadow-[0_40px_80px_-32px_hsl(222_86%_56%/0.5)] lg:-mt-6 lg:mb-[-1.5rem] lg:scale-[1.02] z-10"
          : "card-soft"
      }`}
    >
      {popular && (
        <div className="text-center py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white" style={{ background: "var(--gradient-brand)" }}>
          Most popular
        </div>
      )}

      <div className="p-7 lg:p-8 flex flex-col flex-1">
        {/* Name + outcome */}
        <span
          className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5 ${
            popular ? "bg-white/10 text-brand-cyan" : "bg-accent/10 text-accent"
          }`}
        >
          <Icon className="w-5 h-5" />
        </span>
        <h3 className={`text-2xl font-extrabold tracking-tight ${popular ? "text-white" : "text-foreground"}`}>
          {tier.name}
        </h3>
        <p className={`mt-2 text-base font-semibold ${popular ? "text-brand-cyan" : "text-accent"}`}>{tier.outcome}</p>

        {/* "This is for you if..." */}
        <p className={`mt-4 text-sm leading-relaxed ${popular ? "text-white/70" : "text-foreground/65"}`}>
          <span className={popular ? "text-white/90 font-semibold" : "text-foreground/80 font-semibold"}>
            {tier.forYou}
          </span>
        </p>

        {/* Price + risk reversal */}
        <div className={`mt-6 pt-6 border-t ${popular ? "border-white/10" : "hairline"}`}>
          <div className="flex items-baseline gap-1.5">
            <span className={`text-5xl font-extrabold tnum ${popular ? "text-white" : "text-foreground"}`}>
              ${tier.price}
            </span>
            <span className={`text-base ${popular ? "text-white/55" : "text-foreground/55"}`}>/month</span>
          </div>
          <p className={`mt-1.5 text-sm ${popular ? "text-white/55" : "text-foreground/55"}`}>{RISK_REVERSAL}</p>
        </div>

        {/* Outcome-first blurb */}
        <p className={`mt-6 leading-relaxed ${popular ? "text-white/75" : "text-foreground/70"}`}>{tier.blurb}</p>

        {/* Stacked-value note */}
        {tier.inheritNote && (
          <div
            className={`mt-6 flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
              popular ? "bg-white/[0.06] text-white/90" : "bg-accent/[0.07] text-accent"
            }`}
          >
            <CornerDownRight className="w-4 h-4 shrink-0 mt-0.5" />
            {tier.inheritNote}
          </div>
        )}

        {/* Benefit-framed features */}
        <ul className="mt-6 space-y-3.5">
          {tier.features.map((f, i) => (
            <li key={i} className="flex gap-3">
              <Check className={`w-5 h-5 shrink-0 mt-0.5 ${popular ? "text-brand-cyan" : "text-accent"}`} />
              <span className={`text-sm leading-relaxed ${popular ? "text-white/80" : "text-foreground/75"}`}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Guarantee */}
        <div className="mt-7">
          <GuaranteeBox text={tier.guarantee} light={popular} />
        </div>

        {/* CTA */}
        <div className="mt-auto pt-7">
          <a href="#book" className={`w-full px-6 text-base ${popular ? "btn-light" : "btn-primary"}`} style={{ height: "3.25rem" }}>
            {tier.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
