import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { TierCard } from "@/components/packages/TierCard";
import { Faq } from "@/components/packages/Faq";
import { BookCta } from "@/components/sections/BookCta";
import { BookingSection } from "@/components/sections/BookingSection";
import { tiers, valueAnchors, RISK_REVERSAL, TAGLINE } from "@/data/packages";
import { ArrowRight, ShieldCheck, Zap, Repeat, Lock } from "lucide-react";

const mapping = [
  { word: "Protect it.", icon: ShieldCheck, tier: "Get-Found", body: "Guard the Google listing customers find first." },
  { word: "Answer it.", icon: Zap, tier: "Front Door", body: "Catch every lead in seconds, day or night." },
  { word: "Grow it.", icon: Repeat, tier: "Growth Engine", body: "Turn happy customers into more customers." },
];

export default function Packages() {
  return (
    <Layout>
      <Seo
        title="Packages & Pricing | Aurex Agency"
        description="Three simple systems to keep your phone ringing with paying jobs: The Get-Found System ($97/mo), The Front Door ($397/mo), and The Growth Engine ($597/mo). No contract, month-to-month, cancel anytime."
        path="/packages"
      />

      {/* HERO */}
      <section className="relative bg-background pt-32 lg:pt-40 pb-14 lg:pb-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(42rem 26rem at 50% -4%, hsl(205 90% 55% / 0.10), transparent 62%)" }}
        />
        <div className="shell relative text-center max-w-3xl mx-auto">
          <FadeUp>
            <p className="eyebrow justify-center mb-5">Packages &amp; pricing</p>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03] font-extrabold tracking-[-0.03em] text-foreground text-balance">
              Three ways to stop losing jobs you already paid for.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              Each one is a system I build, install, and run for you, usually within days. You don't learn any software,
              you don't sign a contract, and you don't lift a finger. You just start catching the calls you were
              missing. Pick the one that fits where money's leaking out right now.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#book" className="btn-primary h-14 px-7 text-base">
                Book a 15-Minute Call <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tiers" className="btn-outline h-14 px-7 text-base">See the three systems</a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/55">
              <Lock className="w-4 h-4 text-accent" /> {RISK_REVERSAL}
            </p>
          </FadeUp>
        </div>

        {/* Protect it. Answer it. Grow it. mapping */}
        <div className="shell relative mt-14">
          <Stagger className="grid sm:grid-cols-3 gap-4">
            {mapping.map((m) => (
              <FadeItem key={m.tier} className="h-full">
                <div className="card-soft h-full p-6 flex items-start gap-4">
                  <span className="inline-flex w-11 h-11 shrink-0 rounded-xl bg-accent/10 text-accent items-center justify-center">
                    <m.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-lg font-extrabold tracking-tight text-gradient-brand">{m.word}</div>
                    <p className="mt-1 text-sm text-foreground/60 leading-relaxed">{m.body}</p>
                  </div>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <p className="mt-5 text-center text-sm text-foreground/45">
            <span className="font-semibold text-foreground/60">{TAGLINE}</span> Each tier adds the next, so the value
            stacks as you grow.
          </p>
        </div>
      </section>

      {/* THE THREE TIERS */}
      <section id="tiers" className="scroll-mt-24 bg-background pb-8 lg:pb-12">
        <div className="shell">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-7 items-start">
            {tiers.map((tier) => (
              <FadeUp key={tier.id} className="h-full">
                <TierCard tier={tier} />
              </FadeUp>
            ))}
          </div>

          {/* Risk reversal repeated right under pricing */}
          <FadeUp>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-center">
              <p className="text-base font-semibold text-foreground">
                No contract. Month-to-month. Cancel anytime. Guaranteed.
              </p>
              <a href="#book" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                Book a call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT THIS REPLACES */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">What this really costs you</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
              Look at it against one lost job, not against your budget.
            </h2>
          </FadeUp>
          <Stagger className="mt-10 grid md:grid-cols-3 gap-5">
            {valueAnchors.map((v, i) => (
              <FadeItem key={i} className="h-full">
                <div className="card-soft h-full p-7">
                  <div className="text-4xl font-extrabold text-foreground/10 tnum">0{i + 1}</div>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{v}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp>
            <p className="mt-10 text-xl lg:text-2xl font-extrabold tracking-tight text-foreground text-balance max-w-2xl">
              One saved job pays for a year of this. The rest is profit you were leaving on the table.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <BookCta
        href="#book"
        title="Not sure which one fits?"
        sub="Tell me how leads come in today and I'll point you at the right system, even if that's the $97 one. No upselling, no pressure."
      />

      {/* OBJECTIONS */}
      <Faq />

      {/* BOOKING */}
      <BookingSection />
    </Layout>
  );
}
