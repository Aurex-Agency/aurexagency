import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { ArrowRight } from "lucide-react";

interface IndustryHeroProps {
  eyebrow: string;
  headline: string;
  sub: string;
  bullets: string[];
  defaultIndustry: string;
}

export function IndustryHero({ eyebrow, headline, sub, bullets, defaultIndustry }: IndustryHeroProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 surface-cream overflow-hidden">
      <div className="absolute inset-0 mesh-amber opacity-40 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-5">{eyebrow}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02] tracking-tight text-balance">
              {headline}
            </h1>
            <p className="mt-7 text-xl text-ink/70 max-w-2xl text-pretty">{sub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-ink/80">
                  <ArrowRight className="w-5 h-5 text-amber-deep mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 text-center">
                <p className="font-display text-2xl text-ink">Get your free revenue audit</p>
                <p className="text-sm text-ink/60">No ad pitch. Just the numbers.</p>
              </div>
              <LeadForm defaultIndustry={defaultIndustry} ctaLabel="Send My Free Audit" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
