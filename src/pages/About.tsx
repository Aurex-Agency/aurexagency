import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { CtaBand } from "@/components/sections/CtaBand";
import { whoFor } from "@/data/aurex";
import { Check } from "lucide-react";

const promises = [
  { t: "A senior team, no hand-offs", b: "No account managers, no junior hand-offs, nothing outsourced. The team that builds your system is the team that runs it." },
  { t: "You own the number", b: "We don't hide behind reach and impressions. We report booked revenue and the return on your spend." },
  { t: "No lock-in, ever", b: "We bet on results keeping you here, not contracts. Pause or cancel whenever you need to." },
];

export default function About() {
  return (
    <Layout>
      <Seo
        title="About | Aurex"
        description="Aurex is a senior in-house marketing team in North Mississippi built on a simple idea: marketing should be an investment you can measure. The team that builds your system is the team that runs it. Nothing outsourced."
        path="/about"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-16">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-5">About Aurex</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] text-foreground text-balance max-w-4xl leading-[1.03]">
              Built and run by a senior in-house team that owns the number.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-background pb-24 lg:pb-28">
        <div className="shell max-w-3xl">
          <div className="space-y-6 text-xl lg:text-2xl text-foreground/80 leading-relaxed font-medium">
            <FadeUp><p>Aurex exists because most marketing can't answer the only question that matters: what did it earn?</p></FadeUp>
            <FadeUp><p>Agencies sell activity and lock you into long contracts. Freelancers hand you a deliverable and disappear. Both leave the owner guessing.</p></FadeUp>
            <FadeUp>
              <p>
                So Aurex is built differently. One senior team builds and runs the whole system in-house, ads, funnels,
                follow-up, and the CRM behind them, and reports the return every month. Nothing handed off, nothing outsourced.
                Marketing you can put on a balance sheet as an investment, not a line item you hope is working.
              </p>
            </FadeUp>
            <FadeUp><p className="text-accent">If that's the kind of partner you've been looking for, let's talk.</p></FadeUp>
          </div>
          <FadeUp>
            <p className="mt-8 text-2xl font-extrabold text-foreground">Kalob<span className="text-foreground/50 font-medium">, Founder of Aurex</span></p>
          </FadeUp>
        </div>
      </section>

      {/* Promises */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">What that means for you</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              Senior work, a direct line, and a number you can trust.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {promises.map((p) => (
              <FadeItem key={p.t} className="h-full">
                <div className="card-soft h-full p-7">
                  <span className="inline-flex w-10 h-10 rounded-lg bg-accent/10 text-accent items-center justify-center mb-5"><Check className="w-5 h-5" /></span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.t}</h3>
                  <p className="text-foreground/60 leading-relaxed">{p.b}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who we build for */}
      <section className="bg-background py-24 lg:py-28">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">Who we build for</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.1]">
              High-ticket local businesses with revenue worth measuring.
            </h2>
            <p className="mt-5 text-lg text-foreground/65 max-w-2xl">
              These verticals share what makes the model work: real customer lifetime value, lead lists already
              leaking money, and owners who want an outcome, not a dashboard to babysit.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {whoFor.map((w) => (
                <span key={w} className="px-4 py-2 rounded-full border hairline text-sm text-foreground/75 bg-card">{w}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
