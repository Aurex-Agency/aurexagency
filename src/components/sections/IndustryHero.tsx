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
    <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-28 surface-cream overflow-hidden">
      <div className="absolute inset-0 mesh-amber pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container relative grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-6">{eyebrow}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.02] tracking-tight text-balance">
              {headline}
            </h1>
            <p className="mt-7 text-xl text-foreground/65 max-w-2xl text-pretty">{sub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-px border-t hairline max-w-2xl">
              {bullets.map((b) => (
                <li key={b} className="flex gap-4 py-4 border-b hairline text-foreground/80">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-28">
              <div className="mb-4">
                <p className="font-display text-2xl text-foreground">Get your free revenue audit</p>
                <p className="text-sm text-foreground/55">No ad pitch. Just the numbers.</p>
              </div>
              <LeadForm defaultIndustry={defaultIndustry} ctaLabel="Send My Free Audit" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
