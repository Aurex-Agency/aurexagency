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
    <section id="audit" className="py-24 lg:py-32 surface-cream">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink mb-5 text-balance">{title}</h2>
          <p className="text-lg text-ink/70 max-w-xl text-pretty">{sub}</p>
          <ul className="mt-8 space-y-3 text-ink/80">
            <li>• A line-by-line look at your five revenue leaks.</li>
            <li>• A realistic 30 day projection from your existing assets.</li>
            <li>• No pressure. No retainer pitch unless the numbers warrant one.</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm defaultIndustry={defaultIndustry} ctaLabel={ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
