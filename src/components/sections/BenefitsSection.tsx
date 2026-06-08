import { Reveal } from "@/components/Reveal";
import { benefits } from "@/data/productized";
import { Check } from "lucide-react";

export function BenefitsSection({ surface = "surface-ink surface-ink-grad grain" }: { surface?: string }) {
  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${surface}`}>
      <div className="container relative">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">Why a subscription</p>
          <h2 className="font-display text-4xl lg:text-6xl text-cream max-w-3xl mb-5 text-balance leading-tight">
            All the upside of an in-house team. None of the overhead.
          </h2>
          <p className="text-lg text-cream/65 max-w-2xl text-pretty">
            A senior marketing department, on demand, for less than the cost of a single hire.
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--foreground)/0.08)] border border-[hsl(var(--foreground)/0.08)] rounded-2xl overflow-hidden">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.05} className="h-full">
              <div className="h-full p-8 bg-[hsl(var(--foreground)/0.02)]">
                <span className="w-9 h-9 rounded-lg bg-accent/15 text-accent border border-accent/25 flex items-center justify-center mb-5">
                  <Check className="w-4 h-4" />
                </span>
                <h3 className="font-display text-xl text-cream mb-2">{b.title}</h3>
                <p className="text-cream/60 leading-relaxed text-sm">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
