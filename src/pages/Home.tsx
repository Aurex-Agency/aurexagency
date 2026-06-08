import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { CtaBand } from "@/components/sections/CtaBand";
import { ONE_LINER, SUB_LINE, services, whoFor, landOffers } from "@/data/aurex";
import { ArrowRight, ArrowUpRight, Check, TrendingUp } from "lucide-react";

const steps = [
  { n: "01", t: "Subscribe", b: "Pick a plan and your branded client portal opens in minutes. No long onboarding." },
  { n: "02", t: "Request", b: "Drop unlimited requests in your queue. We work one task at a time and finish it properly." },
  { n: "03", t: "We prove it", b: "We build, launch, and report the only number that matters: revenue you can measure." },
];

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Aurex | Your Marketing Department, On Demand"
        description="Aurex turns your marketing into an investment you can measure. Ads, funnels, follow-up, and the systems behind them, run by a senior in-house team that owns the number. Flat monthly pricing, no contracts. North Mississippi."
        path="/"
      />

      {/* HERO */}
      <section className="relative bg-background pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(40rem 26rem at 15% 0%, hsl(176 84% 34% / 0.08), transparent 60%)" }}
        />
        <div className="shell relative grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="eyebrow mb-5">Marketing you can measure as an investment</p>
              <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4rem] lg:leading-[1.03] font-extrabold tracking-[-0.03em] text-foreground text-balance">
                {ONE_LINER}
              </h1>
              <p className="mt-7 text-lg lg:text-xl text-foreground/65 leading-relaxed max-w-xl">{SUB_LINE}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary h-14 px-7 text-base">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pricing" className="btn-outline h-14 px-7 text-base">See pricing</Link>
              </div>
              <p className="mt-7 text-sm text-foreground/50">
                Built for med spas, clinics, roofers &amp; insurance agencies across North Mississippi.
              </p>
            </FadeUp>
          </div>

          {/* ROI dashboard mock */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.15}>
              <div className="grain relative rounded-3xl surface-dark p-6 sm:p-7 shadow-[0_40px_90px_-44px_rgba(15,20,30,0.6)] overflow-hidden">
                <div className="relative flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-white/80">Aurex · ROI Dashboard</span>
                  <span className="text-[11px] uppercase tracking-widest text-white/40">This month</span>
                </div>
                {/* TODO: sample numbers for illustration */}
                <div className="relative">
                  <div className="text-[11px] uppercase tracking-widest text-white/40">Return on investment</div>
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-extrabold text-accent tnum leading-none">4.2x</span>
                    <span className="mb-2 text-sm text-white/50 inline-flex items-center gap-1"><TrendingUp className="w-4 h-4" /> up 38%</span>
                  </div>
                </div>
                <div className="mt-7 flex items-end gap-2 h-24">
                  {[34, 48, 41, 63, 72, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 5 ? "hsl(176 84% 40%)" : "rgba(255,255,255,0.12)" }} />
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <div className="text-[11px] text-white/45">Booked revenue</div>
                    <div className="text-xl font-bold text-white tnum">$47,000</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <div className="text-[11px] text-white/45">Ad spend</div>
                    <div className="text-xl font-bold text-white tnum">$11,200</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* who-for strip */}
        <div className="shell relative mt-14">
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground/45 border-t hairline pt-6">
              <span className="font-semibold text-foreground/60">Who we build for:</span>
              {whoFor.map((w, i) => (
                <span key={w}>{w}{i < whoFor.length - 1 ? " ·" : ""}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">Why Aurex</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              You don't need another agency that sells you leads.
            </h2>
            <p className="mt-5 text-lg text-foreground/65 max-w-2xl">
              Agencies bill for activity. Freelancers hand you a deliverable. Aurex owns the number, and reports it.
            </p>
          </FadeUp>
          <div className="mt-12">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">One queue. The whole department.</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              Everything your marketing needs, run by one operator.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <FadeItem key={s.title} className="h-full">
                <div className="card-soft card-hover h-full p-7">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
                    <s.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{s.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <Link to="/services" className="mt-10 inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              See how the queue works <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* HOW IT WORKS (steps) */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              Subscribe, request, and watch the number move.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {steps.map((s) => (
              <FadeItem key={s.n} className="h-full">
                <div className="card-soft h-full p-8">
                  <div className="text-5xl font-extrabold text-foreground/10 tnum">{s.n}</div>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-2">{s.t}</h3>
                  <p className="text-foreground/60 leading-relaxed">{s.b}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* LAND OFFER */}
      <section className="bg-background py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <div className="card-soft p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow mb-4">Start here</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
                  {landOffers[0].name}: provable ROI in about 30 days.
                </h2>
                <p className="mt-4 text-lg text-foreground/65 max-w-2xl">{landOffers[0].body}</p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
                  {["No subscription required", "Works from your existing CRM", "See the math before you commit"].map((x) => (
                    <li key={x} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> {x}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <div className="text-4xl font-extrabold text-foreground tnum">{landOffers[0].price}</div>
                <Link to="/contact" className="btn-primary h-13 px-7 mt-5" style={{ height: "3.25rem" }}>
                  Start with a reactivation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="surface-muted py-24 lg:py-32">
        <div className="shell">
          <FadeUp className="text-center">
            <p className="eyebrow justify-center mb-4">Transparent pricing</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto text-balance leading-[1.07]">
              Flat monthly pricing. Out in the open.
            </h2>
            <p className="mt-5 text-lg text-foreground/65 max-w-2xl mx-auto">
              No "call for a quote." Pick a plan, get the whole department in one queue.
            </p>
          </FadeUp>
          <div className="mt-10">
            <PricingPlans />
          </div>
          <FadeUp delay={0.1} className="text-center">
            <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              See full pricing &amp; one-time builds <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
