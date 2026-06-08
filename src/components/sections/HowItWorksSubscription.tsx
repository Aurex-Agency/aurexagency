import { Reveal } from "@/components/Reveal";
import { steps } from "@/data/productized";

export function HowItWorksSubscription({ surface = "surface-cream-warm" }: { surface?: string }) {
  return (
    <section id="how" className={`py-24 lg:py-32 ${surface}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">How it works</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">
            Marketing that runs like software, not a slow agency.
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl text-pretty">
            Subscribe, request, and watch it get built. No scoping calls, no change orders, no drama.
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-[hsl(var(--hairline))] border hairline rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="h-full bg-card p-8 lg:p-10">
                <span className="font-display text-6xl lg:text-7xl text-foreground/10 tnum leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl text-foreground mt-6 mb-3">{s.title}</h3>
                <p className="text-foreground/65 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
