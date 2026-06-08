import { Reveal } from "@/components/Reveal";
import { services } from "@/data/productized";

interface Props {
  eyebrow?: string;
  title?: string;
  sub?: string;
  surface?: string;
}

export function ServicesSection({
  eyebrow = "Everything you can request",
  title = "One subscription. Your entire marketing department.",
  sub = "Add any of these to your board. We prioritize, build, and launch them, then keep them running.",
  surface = "surface-cream",
}: Props) {
  return (
    <section className={`py-24 lg:py-32 ${surface}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">{title}</h2>
          <p className="text-lg text-foreground/65 max-w-2xl text-pretty">{sub}</p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--hairline))] border hairline rounded-xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05} className="h-full">
              <div className="h-full p-7 bg-card hover:bg-secondary transition-colors">
                <span className="mark w-11 h-11 mb-5"><s.icon className="w-5 h-5" /></span>
                <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
