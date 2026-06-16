import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { Faq } from "@/components/packages/Faq";
import { BookCta } from "@/components/sections/BookCta";
import { BookingSection } from "@/components/sections/BookingSection";
import { qualifiers, pillars, process, verticals, faqs, STRATEGY_HREF } from "@/data/growth";
import { ArrowRight, Check, Package, Wrench } from "lucide-react";

const SITE = "https://www.aurexagency.com";

const difference = [
  {
    icon: Package,
    label: "The monthly packages",
    points: [
      "Off-the-shelf systems, cloned and installed fast",
      "Fixed monthly price, pick one and go",
      "Built to get the phone ringing right away",
    ],
    cta: { text: "See the packages", href: "/packages" },
  },
  {
    icon: Wrench,
    label: "A custom growth system",
    points: [
      "Built from scratch around your business",
      "Scoped to your goals, priced once we both understand it",
      "A complete acquisition + retention engine, run for you",
    ],
    cta: { text: "Book a strategy call", href: STRATEGY_HREF },
    primary: true,
  },
];

export default function Growth() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom Growth Systems",
      serviceType: "Custom marketing automation and growth system",
      provider: {
        "@type": "ProfessionalService",
        name: "Aurex Agency",
        url: SITE,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "North Mississippi" },
        { "@type": "City", name: "Tupelo, Mississippi" },
        { "@type": "City", name: "Oxford, Mississippi" },
        { "@type": "City", name: "Southaven, Mississippi" },
        { "@type": "City", name: "New Albany, Mississippi" },
      ],
      description:
        "Complete, custom growth systems for established home-service businesses and cash-pay clinics: full lead acquisition, instant response and booking, follow-up, retention, referrals, and reporting, built and run as one system.",
      url: `${SITE}/growth`,
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: "Scoped per business after a strategy conversation.",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Growth", item: `${SITE}/growth` },
      ],
    },
  ];

  return (
    <Layout>
      <Seo
        title="Custom Growth Systems for Established Local Businesses | Aurex Agency"
        description="For established home-service businesses and multi-location clinics ready to build a complete, custom growth system: lead acquisition, instant response, follow-up, retention, and referrals, built and run as one machine. North Mississippi. Starts with a strategy call."
        path="/growth"
        jsonLd={jsonLd}
      />

      {/* HERO — dark, premium, conversion-forward */}
      <section className="relative surface-dark grain overflow-hidden pt-32 lg:pt-44 pb-20 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{ background: "radial-gradient(46rem 28rem at 50% -6%, hsl(205 90% 55% / 0.18), transparent 62%)" }}
        />
        <div className="shell relative max-w-3xl">
          <FadeUp>
            <p className="eyebrow-light mb-5">Custom growth systems</p>
            <h1 className="text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02] font-extrabold tracking-[-0.03em] text-white text-balance">
              Stop duct-taping tools together. Build the whole machine.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              For established businesses ready to grow on purpose: one complete system that captures every lead, books
              it, follows up, brings customers back, and turns them into more, built around your business and run for
              you. It starts with a conversation, not a price tag.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={STRATEGY_HREF} className="btn-light h-14 px-7 text-base">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/packages" className="btn-outline h-14 px-7 text-base border-white/25 text-white hover:bg-white/5">
                Just need the basics? See packages
              </Link>
            </div>
            <p className="mt-7 text-sm text-white/45">
              Bespoke and scoped per business · No fixed price · North Mississippi &amp; beyond
            </p>
          </FadeUp>
        </div>
      </section>

      {/* IS THIS YOU? */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <FadeUp>
              <p className="eyebrow mb-4">Is this you?</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
                This is for the business that's already working, and wants to work bigger.
              </h2>
              <p className="mt-5 text-foreground/65 leading-relaxed max-w-md">
                If a few of these sound like you, a custom system is probably the right move.
              </p>
              <div className="mt-7 rounded-2xl border hairline bg-muted/60 p-5">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Not there yet? If you're a smaller shop just trying to get the phone ringing, start with the{" "}
                  <Link to="/packages" className="font-semibold text-accent hover:underline">
                    monthly packages
                  </Link>
                  . They're built for exactly that, and you can always step up later.
                </p>
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <Stagger className="space-y-3">
              {qualifiers.map((q) => (
                <FadeItem key={q}>
                  <div className="card-soft flex items-start gap-4 p-5">
                    <span className="inline-flex w-7 h-7 shrink-0 rounded-full bg-accent/10 text-accent items-center justify-center mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="text-foreground/80 leading-relaxed">{q}</p>
                  </div>
                </FadeItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* HOW IT'S DIFFERENT FROM THE PACKAGES */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">How this is different</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Same person. A different level of engagement.
            </h2>
            <p className="mt-5 text-lg text-foreground/65">
              The packages are built to be cloned and installed fast. This is built from the ground up around one
              business.
            </p>
          </FadeUp>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {difference.map((d) => (
              <FadeUp key={d.label} className="h-full">
                <div
                  className={`h-full rounded-3xl p-7 lg:p-8 flex flex-col ${
                    d.primary ? "surface-dark grain overflow-hidden border border-brand-cyan/30" : "card-soft"
                  }`}
                >
                  <span
                    className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5 ${
                      d.primary ? "bg-white/10 text-brand-cyan" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <d.icon className="w-5 h-5" />
                  </span>
                  <h3 className={`text-xl font-bold ${d.primary ? "text-white" : "text-foreground"}`}>{d.label}</h3>
                  <ul className="mt-5 space-y-3 flex-1">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${d.primary ? "text-brand-cyan" : "text-accent"}`} />
                        <span className={`text-sm leading-relaxed ${d.primary ? "text-white/80" : "text-foreground/75"}`}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {d.cta.href.startsWith("#") ? (
                    <a
                      href={d.cta.href}
                      className={`mt-7 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                        d.primary ? "text-brand-cyan" : "text-accent"
                      }`}
                    >
                      {d.cta.text} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={d.cta.href}
                      className={`mt-7 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                        d.primary ? "text-brand-cyan" : "text-accent"
                      }`}
                    >
                      {d.cta.text} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT INCLUDES — the pillars */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">What it includes</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              One system that runs your whole growth.
            </h2>
            <p className="mt-5 text-lg text-foreground/65">
              Every piece below works together as one machine, not six tools you have to keep an eye on.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <FadeItem key={p.title} className="h-full">
                <div className="card-soft card-hover h-full p-7">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
                    <p.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{p.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp className="mt-10 text-center">
            <a href={STRATEGY_HREF} className="btn-primary h-13 px-7 text-base inline-flex" style={{ height: "3.25rem" }}>
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Starts with a conversation. Priced before any work begins.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((s) => (
              <FadeItem key={s.n} className="h-full">
                <div className="card-soft h-full p-7">
                  <div className="text-4xl font-extrabold text-foreground/10 tnum">{s.n}</div>
                  <h3 className="text-lg font-bold text-foreground mt-3 mb-2">{s.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{s.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">Who it's for</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Built for established local businesses ready to scale.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {verticals.map((v) => (
              <FadeItem key={v.who} className="h-full">
                <div className="card-soft h-full p-7">
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.who}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{v.what}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <p className="mt-8 text-sm text-foreground/50">North Mississippi and beyond. If you've got the revenue and the ambition, distance isn't the problem.</p>
          </FadeUp>
        </div>
      </section>

      {/* PROOF — placeholder, never fabricated */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">Proof</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
              Real results from real local businesses.
            </h2>
            <p className="mt-5 text-foreground/60">
              Case studies and numbers from custom builds will live here. Nothing made up, real work only.
            </p>
          </FadeUp>
          <Stagger className="mt-10 grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <FadeItem key={i} className="h-full">
                {/* TODO: replace with a real client result + quote before launch. */}
                <div className="card-soft h-full p-7 border-dashed">
                  <div className="h-7 w-24 rounded-md bg-foreground/[0.06]" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded bg-foreground/[0.05]" />
                    <div className="h-3 w-11/12 rounded bg-foreground/[0.05]" />
                    <div className="h-3 w-3/4 rounded bg-foreground/[0.05]" />
                  </div>
                  <div className="mt-5 h-4 w-32 rounded bg-foreground/[0.06]" />
                  <p className="mt-4 text-xs text-foreground/40">Case study coming soon</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* OBJECTIONS */}
      <Faq
        items={faqs}
        eyebrow="Straight answers"
        heading="What owners ask before they build."
        sub="The honest questions about cost, timing, and ownership. Want more? Ask me on the call."
        surface="paper"
      />

      {/* FINAL CTA */}
      <BookCta
        href={STRATEGY_HREF}
        cta="Book a Strategy Call"
        title="Let's talk about what you're building."
        sub="A straight conversation about where the growth is, what it takes to capture it, and whether we're the right fit. No fixed price until we both understand the scope."
        note="By conversation. Scoped per business."
      />

      {/* STRATEGY-CALL BOOKING — its own calendar */}
      <BookingSection
        id="book-strategy"
        embedId="ghl-strategy-embed"
        eyebrow="Book your strategy call"
        heading="Let's map out the whole system."
        sub="Grab a time and we'll talk through your business, your goals, and what a custom system would actually look like for you. No charge, no obligation."
        reassurances={[
          "A working session, not a pitch",
          "We scope it before you commit to anything",
          "You'll leave with a clear plan either way",
        ]}
        note="By conversation. Scoped per business."
        surface="muted"
      />
    </Layout>
  );
}
