import { FadeUp, Stagger, FadeItem, CountUp } from "@/components/Motion";
import { metrics, testimonials } from "@/data/site";

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-24 bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-4">Real results</p>
          <h2 className="font-display text-4xl lg:text-5xl text-coal tracking-[-0.02em] max-w-3xl text-balance leading-[1.08]">
            Booked jobs and recovered revenue. Not vanity metrics.
          </h2>
        </FadeUp>

        {/* Metric counters. TODO: replace sample numbers with real client results. */}
        <Stagger className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-coal/10 border border-coal/10 rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <FadeItem key={m.label} className="h-full">
              <div className="h-full bg-bone-100 p-7">
                <div className="font-display text-4xl lg:text-5xl text-clay tracking-tight">
                  <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-sm text-coal/60 leading-snug">{m.label}</div>
              </div>
            </FadeItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1}>
          <p className="mt-3 text-xs text-coal/40 italic">Sample figures shown for layout. Replace with your verified client results.</p>
        </FadeUp>

        {/* Testimonials. TODO: replace placeholders with real quotes, names, businesses, metrics. */}
        <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeItem key={i} className="h-full">
              <div className="h-full rounded-2xl border border-coal/10 bg-bone-100 p-7 flex flex-col">
                <div className="font-display text-2xl text-clay">{t.metric}</div>
                <p className="mt-4 text-coal/75 leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-coal/10">
                  <div className="font-semibold text-coal">{t.name}</div>
                  <div className="text-sm text-coal/55">{t.business}</div>
                </div>
              </div>
            </FadeItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
