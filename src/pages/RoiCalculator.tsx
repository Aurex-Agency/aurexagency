import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ArrowRight, TrendingUp } from "lucide-react";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));

interface Inputs {
  avgSale: number;
  perYear: number;
  years: number;
  newPerMonth: number;
  extraPerMonth: number;
}

const defaults: Inputs = {
  avgSale: 500,
  perYear: 2,
  years: 3,
  newPerMonth: 20,
  extraPerMonth: 10,
};

export default function RoiCalculator() {
  const [v, setV] = useState<Inputs>(defaults);

  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((s) => ({ ...s, [k]: Math.max(0, Number(e.target.value) || 0) }));

  const r = useMemo(() => {
    const yearlyValue = v.avgSale * v.perYear;
    const ltv = yearlyValue * v.years;
    const newPerYear = v.newPerMonth * 12;
    const currentAnnual = newPerYear * yearlyValue;
    const addedAnnual = v.extraPerMonth * 12 * yearlyValue;
    const addedLifetime = v.extraPerMonth * 12 * ltv;
    return { yearlyValue, ltv, newPerYear, currentAnnual, addedAnnual, addedLifetime };
  }, [v]);

  const fields = [
    { k: "avgSale" as const, label: "Average sale", prefix: "$", step: 25, help: "What a customer spends in a typical visit or purchase." },
    { k: "perYear" as const, label: "Purchases per year", prefix: "", step: 1, help: "How many times a year the average customer buys from you." },
    { k: "years" as const, label: "Years a customer stays", prefix: "", step: 1, help: "How long the average customer keeps coming back." },
    { k: "newPerMonth" as const, label: "New customers per month", prefix: "", step: 1, help: "Roughly how many first-time customers you win each month." },
  ];

  const miniStats = [
    { label: "Value per customer / year", value: usd(r.yearlyValue) },
    { label: "New customers / year", value: r.newPerYear.toLocaleString() },
    { label: "New-customer revenue / year", value: usd(r.currentAnnual) },
  ];

  return (
    <Layout>
      <Seo
        title="Customer Value & Growth Calculator | Aurex"
        description="Free customer value calculator. Enter your average sale and a couple of numbers to see your customer lifetime value and exactly what a few more customers a month is worth to your business."
        path="/roi-calculator"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Aurex Customer Value & Growth Calculator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://www.aurexagency.com/roi-calculator",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Calculate your customer lifetime value and the revenue impact of adding more customers each month.",
        }}
      />

      {/* HERO + CALCULATOR */}
      <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-28 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <div className="flex items-center justify-between border-b hairline pb-6 mb-12">
              <p className="eyebrow eyebrow-amber">Customer value calculator</p>
              <p className="label-mono hidden sm:block">Free · No email required</p>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
              What is a customer really worth?{" "}
              <span className="italic text-accent">Let's do the math.</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-foreground/65 max-w-2xl text-pretty">
              Most owners undervalue a single customer. Enter three quick numbers to see your true customer
              lifetime value, then see what just a few more customers a month would add to your bottom line.
            </p>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* INPUTS */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="card-premium p-6 sm:p-8">
                  <h2 className="font-display text-2xl text-foreground mb-6">Your business</h2>
                  <div className="space-y-6">
                    {fields.map((f) => (
                      <div key={f.k}>
                        <label htmlFor={f.k} className="label-mono mb-2 block">{f.label}</label>
                        <div className="relative">
                          {f.prefix && (
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/45">{f.prefix}</span>
                          )}
                          <input
                            id={f.k}
                            type="number"
                            min={0}
                            step={f.step}
                            value={v[f.k]}
                            onChange={set(f.k)}
                            className={`w-full h-12 ${f.prefix ? "pl-8 pr-4" : "px-4"} rounded-lg bg-secondary border hairline text-foreground tnum focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition`}
                          />
                        </div>
                        <p className="mt-1.5 text-xs text-foreground/45">{f.help}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RESULTS */}
            <div className="lg:col-span-7">
              <Reveal delay={0.16}>
                <div className="lg:sticky lg:top-28 space-y-5">
                  {/* LTV hero */}
                  <div className="card-premium p-7 sm:p-9 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    <p className="label-mono eyebrow-amber mb-4">Your customer lifetime value</p>
                    <div className="font-display text-6xl lg:text-7xl text-accent tnum tracking-tight leading-none">
                      {usd(r.ltv)}
                    </div>
                    <p className="mt-3 text-foreground/65 max-w-md">
                      That is what one new customer is worth to you over {v.years || 0}{" "}
                      {v.years === 1 ? "year" : "years"}, not just their first visit of {usd(v.avgSale)}.
                    </p>

                    <div className="mt-7 pt-6 border-t hairline grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {miniStats.map((s) => (
                        <div key={s.label}>
                          <div className="font-display text-2xl lg:text-3xl text-foreground tnum">{s.value}</div>
                          <div className="text-xs text-foreground/50 mt-1 leading-snug">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Growth scenario */}
                  <div className="card-premium p-7 sm:p-9">
                    <div className="flex items-center gap-2 label-mono mb-5">
                      <TrendingUp className="w-4 h-4 text-accent" /> Your growth scenario
                    </div>
                    <div className="flex items-baseline justify-between mb-2">
                      <label htmlFor="extra" className="text-foreground">
                        If you added{" "}
                        <span className="font-display text-2xl text-accent tnum">{v.extraPerMonth}</span> more
                        customers per month
                      </label>
                    </div>
                    <input
                      id="extra"
                      type="range"
                      min={0}
                      max={50}
                      step={1}
                      value={v.extraPerMonth}
                      onChange={set("extraPerMonth")}
                      style={{ accentColor: "hsl(var(--accent))" }}
                      className="w-full cursor-pointer"
                      aria-label="Extra customers per month"
                    />

                    <div className="mt-6 grid sm:grid-cols-2 gap-px bg-[hsl(var(--hairline))] border hairline rounded-xl overflow-hidden">
                      <div className="bg-card p-6">
                        <div className="label-mono mb-2">Added revenue, year one</div>
                        <div className="font-display text-4xl text-foreground tnum">{usd(r.addedAnnual)}</div>
                      </div>
                      <div className="bg-card p-6">
                        <div className="label-mono eyebrow-amber mb-2">Added lifetime revenue</div>
                        <div className="font-display text-4xl text-accent tnum">{usd(r.addedLifetime)}</div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm text-foreground/55 leading-relaxed">
                      Capturing missed calls, answering leads in minutes, and reactivating past customers is
                      usually all it takes to add this many. That is exactly what Aurex builds for you.
                    </p>
                  </div>

                  <Link to="/book" className="btn-amber w-full h-14 text-base cursor-pointer">
                    Show me how to add these customers <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-xs text-foreground/45 text-center">
                    Numbers update as you type. Estimates for planning, not a guarantee.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        eyebrow="Turn the math into customers"
        title="Now let us show you how to actually add them."
        sub="A 30 minute call with a real operator. We map where your next customers will come from and what your first 30 days would look like."
      />
    </Layout>
  );
}
