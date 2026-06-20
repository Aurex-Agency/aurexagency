import { useState, type ReactNode } from "react";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { RoiCalculator } from "@/components/lander/RoiCalculator";
import { LeadForm } from "@/components/lander/LeadForm";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  VSL_EMBED_URL,
  serviceAreasShort,
  serviceAreasFull,
  problemStats,
  howSteps,
  landerTiers,
  industries,
  testimonials,
} from "@/data/lander";
import aurexLogo from "@/assets/aurex-logo-main.png";
import { ArrowRight, ArrowDown, Check, Phone, Play, Quote } from "lucide-react";

const SITE = "https://www.aurexagency.com";

// Smooth-scroll to an in-page section (no routing — this is a sealed lander).
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 lk-kicker text-brand-cyan">
      <span className="text-white/25">{n}</span>
      <span className="h-px w-8 bg-white/15" />
      <span className="text-white/55">{children}</span>
    </div>
  );
}

const marqueeItems = [
  "Missed-Call Text Back",
  "Speed to Lead",
  "Auto Booking",
  "Unified Inbox",
  "Google Reviews",
  "Database Reactivation",
  "Referral Automation",
  "ROI Dashboard",
];

export default function NorthMississippi() {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const choosePlan = (tierName: string, price: number) => {
    setSelectedPlan(`${tierName} ($${price}/mo)`);
    scrollTo("start");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Speed-to-Lead Automation for North Mississippi Service Businesses",
    serviceType: "Lead response automation",
    provider: { "@type": "ProfessionalService", name: "Aurex Agency", url: SITE, telephone: PHONE_TEL },
    areaServed: serviceAreasFull.map((c) => ({ "@type": "City", name: `${c}, Mississippi` })),
    description:
      "Automated systems that respond to your leads in under 60 seconds, book appointments automatically, and show the revenue you're protecting every month.",
    url: `${SITE}/northmississippi`,
  };

  return (
    <div className="lander min-h-screen text-white" style={{ background: "hsl(var(--ink))" }}>
      <Seo
        title="Speed-to-Lead Automation for North Mississippi Service Businesses | Aurex Agency"
        description="Every missed call is a job you didn't get. Aurex Agency builds automated systems that respond to your North Mississippi leads in under 60 seconds, book appointments automatically, and show the revenue you protect every month. Setup included. No contracts."
        path="/northmississippi"
        jsonLd={jsonLd}
      />

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10" style={{ background: "hsl(var(--ink) / 0.8)" }}>
        <div className="shell flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img src={aurexLogo} alt="Aurex Agency" className="h-7 w-auto brightness-0 invert select-none" draggable={false} />
            <span className="hidden sm:block h-5 w-px bg-white/15" />
            <span className="hidden sm:block lk-kicker text-white/40 text-[0.65rem]">North Mississippi</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 font-display text-lg tracking-wide text-white/85 hover:text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" /> {PHONE_DISPLAY}
            </a>
            <button onClick={() => scrollTo("start")} className="btn-lk btn-lk-primary h-10 px-5 text-base">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain blueprint">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50rem 32rem at 80% -10%, hsl(187 92% 48% / 0.14), transparent 60%), radial-gradient(40rem 28rem at 0% 30%, hsl(222 86% 56% / 0.12), transparent 60%)" }}
        />
        <div className="shell relative grid lg:grid-cols-12 gap-12 lg:gap-10 items-center py-16 lg:py-24 min-h-[88vh]">
          {/* Copy */}
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-3 lk-kicker text-brand-cyan mb-7">
                <span className="h-px w-10 bg-brand-cyan/70" />
                Speed-to-Lead System · For North Mississippi
              </div>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h1 className="lk-display text-white text-[3.4rem] sm:text-7xl lg:text-[5.6rem]">
                Every missed call is a <span className="text-gradient-brand">job you didn't get.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-7 text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
                We build automated systems that answer your leads in under 60 seconds, book the appointment without you
                lifting a finger, and show you exactly how much revenue you're protecting every month.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <button onClick={() => scrollTo("how")} className="btn-lk btn-lk-primary h-14 px-8 w-full sm:w-auto">
                  See How It Works <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollTo("pricing")} className="btn-lk btn-lk-ghost h-14 px-8 w-full sm:w-auto">
                  View Pricing
                </button>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 lk-kicker text-white/45 text-[0.7rem]">
                {["Setup included", "No contracts", "Cancel anytime"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan" /> {t}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* VSL video */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.18}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)] aspect-video bg-black">
                  {VSL_EMBED_URL ? (
                    <iframe
                      src={VSL_EMBED_URL}
                      title="Aurex Agency — North Mississippi"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    /* TODO: set VSL_EMBED_URL in src/data/lander.ts to your video. */
                    <button
                      onClick={() => scrollTo("start")}
                      className="group absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                      style={{ background: "radial-gradient(70% 70% at 50% 45%, hsl(222 40% 14%), hsl(var(--ink)))" }}
                      aria-label="Video placeholder"
                    >
                      <span className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(transparent 50%, rgba(255,255,255,0.5) 50%)", backgroundSize: "100% 4px" }} />
                      <span className="relative inline-flex w-20 h-20 rounded-full items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--gradient-brand)", boxShadow: "0 0 0 10px hsl(187 92% 48% / 0.1)" }}>
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </span>
                      <p className="relative mt-5 font-display text-2xl tracking-wide text-white">Watch the 2-minute walkthrough</p>
                      <p className="relative mt-1 text-xs text-white/45">Placeholder · set VSL_EMBED_URL in lander.ts</p>
                    </button>
                  )}
                </div>
                {/* Floating response-time badge */}
                <div className="absolute -bottom-6 -left-3 sm:-left-6 rounded-xl border border-white/10 px-5 py-3 shadow-2xl" style={{ background: "hsl(var(--ink-soft))" }}>
                  <div className="lk-kicker text-white/40 text-[0.6rem] mb-1">Response time</div>
                  <div className="flex items-center gap-2.5 font-display text-2xl tracking-wide">
                    <span className="text-white/45 line-through">4–6 hrs</span>
                    <ArrowRight className="w-4 h-4 text-brand-cyan" />
                    <span className="text-gradient-brand">&lt; 60 sec</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Capability marquee */}
        <div className="relative border-y border-white/10 py-4 overflow-hidden" style={{ background: "hsl(var(--ink-soft))" }}>
          <div className="flex w-max marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center font-display text-lg uppercase tracking-[0.12em] text-white/35 whitespace-nowrap">
                <span className="px-7">{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE REALITY ────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-3xl">
            <SectionLabel n="01">The reality in North Mississippi</SectionLabel>
            <h2 className="lk-display text-white text-4xl sm:text-5xl lg:text-6xl mt-6">
              Most local businesses are losing jobs they already paid to get.
            </h2>
          </FadeUp>

          <div className="mt-14 grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10" style={{ background: "hsl(0 0% 100% / 0.08)" }}>
            {problemStats.map((s, i) => (
              <FadeUp key={s.stat} delay={i * 0.08}>
                <div className="h-full p-8 lg:p-9" style={{ background: "hsl(var(--ink))" }}>
                  <div className="lk-display text-gradient-brand text-6xl lg:text-7xl tnum">{s.stat}</div>
                  <p className="mt-4 text-white/65 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="mt-12 flex items-center gap-4">
              <span className="lk-hairline w-12" />
              <p className="font-display text-2xl lg:text-3xl uppercase tracking-wide text-white/80">
                Aurex Agency fixes this. <span className="text-gradient-brand">Automatically.</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section id="how" className="scroll-mt-20 relative py-20 lg:py-28 grain blueprint overflow-hidden" style={{ background: "hsl(var(--ink-soft))" }}>
        <div className="shell relative">
          <FadeUp className="max-w-3xl">
            <SectionLabel n="02">How the system works</SectionLabel>
            <h2 className="lk-display text-white text-4xl sm:text-5xl lg:text-6xl mt-6">
              Set it up once. It works while you're on the job.
            </h2>
          </FadeUp>

          <div className="relative mt-16">
            {/* connecting line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brand-cyan) / 0.5) 15%, hsl(var(--brand-cyan) / 0.5) 85%, transparent)" }} />
            <Stagger className="grid md:grid-cols-3 gap-10 lg:gap-8">
              {howSteps.map((s) => (
                <FadeItem key={s.n} className="relative">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full font-display text-2xl text-[hsl(var(--ink))] relative z-10" style={{ background: "var(--gradient-brand)" }}>
                    {s.n}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-wide text-white mt-6">{s.title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed max-w-sm">{s.body}</p>
                </FadeItem>
              ))}
            </Stagger>
          </div>

          <FadeUp className="mt-16">
            <button onClick={() => scrollTo("pricing")} className="btn-lk btn-lk-primary h-14 px-8">
              See What's Included in Each Plan <ArrowRight className="w-5 h-5" />
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────── */}
      <section id="pricing" className="scroll-mt-20 relative py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-3xl">
            <SectionLabel n="03">Simple pricing · No contracts</SectionLabel>
            <h2 className="lk-display text-white text-4xl sm:text-5xl lg:text-6xl mt-6">
              Pick the plan that fits where you are right now.
            </h2>
            <p className="mt-5 text-lg text-white/65 max-w-xl">
              Every plan includes setup at no extra charge. No long-term contracts. Cancel any time.
            </p>
          </FadeUp>

          <div className="mt-14 grid lg:grid-cols-3 gap-6 items-start">
            {landerTiers.map((tier) => {
              const popular = !!tier.popular;
              return (
                <FadeUp key={tier.id} className={`h-full ${popular ? "order-first lg:order-none" : ""}`}>
                  <div
                    className={`relative h-full flex flex-col rounded-2xl overflow-hidden ${popular ? "lg:-mt-4 lg:mb-[-1rem]" : ""}`}
                    style={
                      popular
                        ? { background: "linear-gradient(hsl(var(--ink-soft)), hsl(var(--ink-soft))) padding-box, var(--gradient-brand) border-box", border: "1.5px solid transparent", boxShadow: "0 40px 80px -32px hsl(187 92% 48% / 0.4)" }
                        : { background: "hsl(var(--ink-soft))", border: "1px solid hsl(0 0% 100% / 0.1)" }
                    }
                  >
                    {popular && (
                      <div className="text-center py-2.5 font-display text-sm uppercase tracking-[0.2em] text-[hsl(var(--ink))]" style={{ background: "var(--gradient-brand)" }}>
                        Most Popular
                      </div>
                    )}
                    <div className="p-7 lg:p-8 flex flex-col flex-1">
                      <h3 className="font-display text-2xl uppercase tracking-wide text-white">{tier.name}</h3>
                      <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="lk-display text-white text-6xl tnum">${tier.price}</span>
                        <span className="text-base text-white/50">/month</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">{tier.subline}</p>

                      <div className="lk-hairline w-full my-7 opacity-60" />

                      <ul className="space-y-3.5 flex-1">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex gap-3">
                            <Check className="w-5 h-5 shrink-0 mt-0.5 text-brand-cyan" />
                            <span className="text-sm leading-relaxed text-white/80">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => choosePlan(tier.name, tier.price)}
                        className={`btn-lk w-full h-13 px-6 mt-8 ${popular ? "btn-lk-primary" : "btn-lk-ghost"}`}
                        style={{ height: "3.25rem" }}
                      >
                        Get Started <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp className="mt-9">
            <p className="text-center lk-kicker text-white/40 text-[0.7rem]">
              All plans run on GoHighLevel · Setup included · No tech skills required
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── ROI CALCULATOR ─────────────────────────────────────── */}
      <RoiCalculator onCta={() => scrollTo("start")} />

      {/* ── BUILT FOR NORTH MISSISSIPPI ────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-3xl">
            <SectionLabel n="04">Built for North Mississippi</SectionLabel>
            <h2 className="lk-display text-white text-4xl sm:text-5xl lg:text-6xl mt-6">
              If you run a service business here, this was built for you.
            </h2>
          </FadeUp>

          <div className="mt-14 border-t border-white/10">
            <Stagger>
              {industries.map((ind) => (
                <FadeItem key={ind.name}>
                  <div className="group grid sm:grid-cols-12 items-center gap-3 sm:gap-6 py-6 border-b border-white/10 transition-colors hover:bg-white/[0.03]">
                    <div className="sm:col-span-1 flex items-center">
                      <ind.icon className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <h3 className="sm:col-span-5 font-display text-2xl lg:text-3xl uppercase tracking-wide text-white">
                      {ind.name}
                    </h3>
                    <p className="sm:col-span-5 text-white/55 leading-relaxed">{ind.line}</p>
                    <div className="hidden sm:flex sm:col-span-1 justify-end">
                      <ArrowRight className="w-5 h-5 text-white/20 transition-all group-hover:text-brand-cyan group-hover:translate-x-1" />
                    </div>
                  </div>
                </FadeItem>
              ))}
            </Stagger>
          </div>

          <FadeUp>
            <p className="mt-8 lk-kicker text-white/40 text-[0.7rem]">
              Serving {serviceAreasShort.join(" · ")} · and surrounding areas
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── SOCIAL PROOF ───────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 grain blueprint overflow-hidden" style={{ background: "hsl(var(--ink-soft))" }}>
        <div className="shell relative">
          <FadeUp className="max-w-3xl">
            <SectionLabel n="05">From real local owners</SectionLabel>
            <h2 className="lk-display text-white text-4xl sm:text-5xl lg:text-6xl mt-6">Don't take our word for it.</h2>
          </FadeUp>

          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeItem key={t.attribution} className="h-full">
                <div
                  className={`relative h-full p-7 lg:p-8 rounded-2xl border border-white/10 flex flex-col ${i === 0 ? "md:row-span-1" : ""}`}
                  style={{ background: "hsl(var(--ink))" }}
                >
                  <Quote className="w-9 h-9 text-brand-cyan/50 fill-brand-cyan/20" />
                  <p className="mt-4 text-lg leading-relaxed text-white/85 flex-1">{t.quote}</p>
                  <p className="mt-6 pt-5 border-t border-white/10 font-display text-base uppercase tracking-[0.12em] text-brand-cyan">
                    {t.attribution}
                  </p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FINAL CTA + LEAD FORM ──────────────────────────────── */}
      <section id="start" className="scroll-mt-20 relative py-20 lg:py-28 grain blueprint overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(46rem 28rem at 50% 0%, hsl(187 92% 48% / 0.16), transparent 60%)" }}
        />
        <div className="shell relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Pitch */}
          <div>
            <FadeUp>
              <SectionLabel n="06">Let's build it</SectionLabel>
              <h2 className="lk-display text-white text-4xl sm:text-5xl lg:text-6xl mt-6">
                Ready to stop losing jobs you already paid for?
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-md">
                Setup is included. No contracts. We build the system, you keep the revenue. Fill this out and we'll
                reach out fast — or call us right now.
              </p>
              <a href={`tel:${PHONE_TEL}`} className="mt-7 inline-flex items-center gap-3 font-display text-3xl lg:text-4xl tracking-wide text-white hover:text-brand-cyan transition-colors">
                <Phone className="w-7 h-7 text-brand-cyan" /> {PHONE_DISPLAY}
              </a>
            </FadeUp>
          </div>

          {/* Form (light card for contrast) */}
          <FadeUp delay={0.1}>
            <div className="rounded-2xl bg-background text-foreground p-6 sm:p-8 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)] border border-white/10">
              <div className="font-display text-2xl uppercase tracking-wide text-foreground mb-1">Claim your system</div>
              <p className="text-sm text-foreground/55 mb-6">Takes 30 seconds. No obligation.</p>
              <LeadForm defaultPlan={selectedPlan} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="relative border-t border-white/10 grain blueprint overflow-hidden" style={{ background: "hsl(var(--ink))" }}>
        <div className="shell relative py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img src={aurexLogo} alt="Aurex Agency" className="h-8 w-auto brightness-0 invert select-none" draggable={false} />
              <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
                Speed-to-Lead automation for North Mississippi service businesses.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {/* TODO: replace with a real Google Reviews badge/link. */}
                <span className="inline-flex items-center gap-0.5 text-brand-cyan">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9z" /></svg>
                  ))}
                </span>
                <span className="lk-kicker text-white/40 text-[0.6rem]">Google Reviews</span>
              </div>
            </div>

            <div>
              <div className="lk-kicker text-white/40 text-[0.65rem] mb-4">Service areas</div>
              <p className="text-sm text-white/55 leading-relaxed">
                {serviceAreasFull.join(", ")}, and surrounding North Mississippi communities.
              </p>
            </div>

            <div>
              <div className="lk-kicker text-white/40 text-[0.65rem] mb-4">Quick links</div>
              <ul className="space-y-2.5">
                {[
                  { name: "How it works", id: "how" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Your numbers", id: "roi" },
                  { name: "Get started", id: "start" },
                ].map((l) => (
                  <li key={l.id}>
                    <button onClick={() => scrollTo(l.id)} className="text-sm text-white/65 hover:text-white transition-colors">
                      {l.name}
                    </button>
                  </li>
                ))}
              </ul>
              <a href={`tel:${PHONE_TEL}`} className="mt-5 inline-flex items-center gap-2 font-display text-xl tracking-wide text-brand-cyan">
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/10 text-center lk-kicker text-white/30 text-[0.6rem]">
            © {new Date().getFullYear()} Aurex Agency · All rights reserved · Powered by GoHighLevel
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE CALL ─────────────────────────────────── */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="md:hidden fixed bottom-0 inset-x-0 z-50 h-14 flex items-center justify-center gap-2 font-display text-lg uppercase tracking-[0.1em] text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Phone className="w-5 h-5" /> Call Now · {PHONE_DISPLAY}
      </a>
      <div className="md:hidden h-14" />
    </div>
  );
}
