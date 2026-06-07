import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";

interface FinalCTAProps {
  eyebrow?: string;
  title?: string;
  sub?: string;
  defaultIndustry?: string;
  ctaLabel?: string;
}

export function FinalCTASection({
  eyebrow = "Get your free revenue audit",
  title = "Tell us where it hurts. We will show you the revenue hiding in plain sight.",
  sub = "A 30 minute call with a real operator. We map your five gaps, run the numbers on your dormant list, and tell you exactly what your first 30 days would look like.",
  defaultIndustry,
  ctaLabel,
}: FinalCTAProps) {
  return (
    <section id="audit" className="py-24 lg:py-32 surface-cream-warm relative overflow-hidden">
      <div className="absolute inset-0 mesh-amber pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-5 text-balance leading-tight">{title}</h2>
          <p className="text-lg text-foreground/65 max-w-xl text-pretty">{sub}</p>
          <ul className="mt-10 space-y-px border-t hairline">
            {[
              "A line-by-line look at your five revenue leaks.",
              "A realistic 30 day projection from your existing assets.",
              "No pressure. No retainer pitch unless the numbers warrant one.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 py-4 border-b hairline text-foreground/80">
                <span className="section-index text-sm tnum pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm defaultIndustry={defaultIndustry} ctaLabel={ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
