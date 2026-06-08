import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { plans } from "@/data/productized";
import { Check, ArrowRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title?: string;
  sub?: string;
  surface?: string;
}

export function PricingSection({
  eyebrow = "Membership pricing",
  title = "Simple, flat monthly pricing.",
  sub = "One predictable rate. Pause or cancel anytime. Sample pricing shown below, final plans are confirmed on your intro call.",
  surface = "surface-cream-warm",
}: Props) {
  return (
    <section id="pricing" className={`py-24 lg:py-32 ${surface}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">{title}</h2>
          <p className="text-lg text-foreground/65 max-w-2xl text-pretty">{sub}</p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <div
                className={`relative h-full rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? "bg-card border border-accent/40 shadow-[0_30px_80px_-40px_hsl(var(--accent)/0.5)]"
                    : "card-premium"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent text-[hsl(var(--surface-deep))] font-mono text-[11px] uppercase tracking-widest font-semibold">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-2xl text-foreground">{plan.name}</h3>
                <p className="text-sm text-foreground/55 mt-1 mb-6 min-h-[2.5rem]">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-foreground tnum tracking-tight">{plan.price}</span>
                  <span className="text-foreground/50">{plan.cadence}</span>
                </div>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/75">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className={`mt-8 h-13 cursor-pointer ${plan.popular ? "btn-amber" : "btn-ghost-ink"}`}
                  style={{ height: "3.25rem" }}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-foreground/50 max-w-3xl">
            Sample pricing for illustration. Not sure which plan fits? Book a free intro call and we will
            recommend the right one based on your goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
