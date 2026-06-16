import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { TierTeaser } from "@/components/packages/TierCard";
import { BookCta } from "@/components/sections/BookCta";
import { tiers, TAGLINE, BOOKING_HREF, RISK_REVERSAL } from "@/data/packages";
import { ArrowRight, PhoneOff, Clock, EyeOff } from "lucide-react";

const SITE = "https://www.aurexagency.com";

const problems = [
  {
    icon: Clock,
    title: "Slow callbacks",
    body: "A lead waits ten minutes, calls the next guy, and books him instead. You paid for that call and lost the job.",
  },
  {
    icon: EyeOff,
    title: "A neglected profile",
    body: "Wrong hours, bad edits, reviews sitting unanswered. People see it and quietly call somebody who looks more on top of it.",
  },
  {
    icon: PhoneOff,
    title: "No follow-up",
    body: "The leads that don't book right away just go cold. Nobody chases them, so the money you spent to get them walks away.",
  },
];

const steps = [
  { n: "01", t: "Book a call", b: "Fifteen minutes. We talk through how leads come in today and where you're losing them. No pressure." },
  { n: "02", t: "I build & install in days", b: "I set the whole system up and put it in place for you. You don't learn any software or lift a finger." },
  { n: "03", t: "You catch jobs you were losing", b: "Leads get answered, profiles get watched, customers come back. You just take the calls." },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aurex Agency — Be the first one they call",
    url: `${SITE}/`,
    description:
      "Marketing systems for North Mississippi home-service businesses and cash-pay clinics that get the phone ringing with paying jobs and make sure you never lose a lead you already paid for.",
  };

  return (
    <Layout>
      <Seo
        title="Be the First One They Call | Aurex Agency — North Mississippi"
        description="Marketing systems for North Mississippi home-service businesses and clinics: get found, answer every lead in seconds, and turn customers into more customers. Protect it. Answer it. Grow it. No contract, cancel anytime."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative bg-background pt-32 lg:pt-44 pb-16 lg:pb-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(44rem 26rem at 50% -4%, hsl(205 90% 55% / 0.10), transparent 62%)" }}
        />
        <div className="shell relative text-center max-w-3xl mx-auto">
          <FadeUp>
            <p className="eyebrow justify-center mb-5">Marketing systems for local service businesses</p>
            <h1 className="text-[2.9rem] leading-[1.04] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02] font-extrabold tracking-[-0.03em] text-foreground text-balance">
              Be the first one they call.
            </h1>
            <p className="mt-6 text-xl lg:text-2xl font-bold tracking-tight text-gradient-brand">{TAGLINE}</p>
            <p className="mt-5 text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              You already pay to make the phone ring. I build the systems that make sure you actually catch those
              calls, turn them into booked jobs, and never lose a lead you already paid for.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to={BOOKING_HREF} className="btn-primary h-14 px-7 text-base">
                Book a 15-Minute Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/packages" className="btn-outline h-14 px-7 text-base">See the packages</Link>
            </div>
            <p className="mt-7 text-sm text-foreground/50">
              Built for roofers, HVAC, plumbers, med spas &amp; insurance across North Mississippi.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">The problem</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              You pay to make the phone ring. Then you lose the leads.
            </h2>
            <p className="mt-5 text-lg text-foreground/65">
              It's almost never a lead problem. It's what happens after the lead comes in, and it's costing you real
              jobs every week.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {problems.map((p) => (
              <FadeItem key={p.title} className="h-full">
                <div className="card-soft h-full p-7">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-destructive/10 text-destructive items-center justify-center mb-5">
                    <p.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{p.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3-TIER TEASER */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <p className="eyebrow justify-center mb-4">Pick your system</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Three simple systems. Plain monthly prices.
            </h2>
            <p className="mt-5 text-lg text-foreground/65">
              <span className="font-semibold text-foreground/80">{TAGLINE}</span> Start with one, or run all three
              together. {RISK_REVERSAL}
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <FadeItem key={tier.id} className="h-full">
                <Link to="/packages" className="block h-full">
                  <TierTeaser tier={tier} />
                </Link>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp className="mt-10 text-center">
            <Link to="/packages" className="btn-primary h-13 px-7 text-base inline-flex" style={{ height: "3.25rem" }}>
              See everything each one includes <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Easy to start. Almost nothing on you.
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

      {/* PROOF — placeholder, never fabricated */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <p className="eyebrow justify-center mb-4">Local businesses we work with</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
              Trusted by owners across North Mississippi.
            </h2>
            <p className="mt-5 text-foreground/60">
              Logos and real owner quotes will live here. Nothing made up, real work only.
            </p>
          </FadeUp>

          {/* Logo placeholder slots */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              /* TODO: replace with a real client logo before launch. */
              <div key={i} className="card-soft border-dashed h-20 flex items-center justify-center">
                <span className="text-xs text-foreground/35">Client logo</span>
              </div>
            ))}
          </div>

          {/* Testimonial placeholder slots */}
          <Stagger className="mt-5 grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <FadeItem key={i} className="h-full">
                {/* TODO: replace with a real, verified client quote before launch. */}
                <div className="card-soft h-full p-7 border-dashed">
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-foreground/[0.05]" />
                    <div className="h-3 w-11/12 rounded bg-foreground/[0.05]" />
                    <div className="h-3 w-3/4 rounded bg-foreground/[0.05]" />
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-foreground/[0.06]" />
                    <div className="h-4 w-28 rounded bg-foreground/[0.06]" />
                  </div>
                  <p className="mt-4 text-xs text-foreground/40">Owner quote coming soon</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BookCta />
    </Layout>
  );
}
