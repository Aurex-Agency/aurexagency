import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem, CountUp } from "@/components/Motion";
import { CtaBand } from "@/components/sections/CtaBand";
import { metrics, testimonials } from "@/data/aurex";

export default function Results() {
  return (
    <Layout>
      <Seo
        title="Results | Aurex"
        description="We report booked revenue, not vanity metrics. See the kind of measurable ROI Aurex builds for local service businesses, and how marketing becomes an investment you can track."
        path="/results"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-16">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-5">Results</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] text-foreground text-balance max-w-4xl leading-[1.03]">
              Marketing, measured. Not promised.
            </h1>
            <p className="mt-6 text-xl text-foreground/65 max-w-2xl leading-relaxed">
              The whole model is built on proof. Every engagement ties spend to booked revenue, so you always
              know what your marketing actually returned.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-background pb-8">
        <div className="shell">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border hairline rounded-2xl overflow-hidden">
            {metrics.map((m) => (
              <FadeItem key={m.label} className="h-full">
                <div className="h-full bg-card p-7">
                  <div className="text-4xl lg:text-5xl font-extrabold text-accent tracking-tight">
                    <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-foreground/60 leading-snug">{m.label}</div>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <p className="mt-3 text-xs text-foreground/40 italic">Sample figures shown for layout. Replace with your verified client results.</p>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials (placeholders) */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-10">In their words.</h2>
          </FadeUp>
          <Stagger className="grid md:grid-cols-3 gap-5">
            {/* TODO: replace placeholders with real client quotes, names, and metrics */}
            {testimonials.map((t, i) => (
              <FadeItem key={i} className="h-full">
                <div className="card-soft h-full p-7 flex flex-col">
                  <div className="text-2xl font-extrabold text-accent">{t.metric}</div>
                  <p className="mt-4 text-foreground/75 leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t hairline">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-foreground/55">{t.business}</div>
                  </div>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Marketing as investment */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-4">The thesis</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              When you can measure the return, marketing stops being a cost.
            </h2>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed">
              Most owners can't tell you what their marketing earned last month. That's the real problem, and
              it's the one we solve first. We start by proving ROI on assets you already own, usually the
              dormant leads sitting in your CRM, then reinvest into the channels that work. The dashboard makes
              it impossible to hide from the numbers, in either direction.
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
