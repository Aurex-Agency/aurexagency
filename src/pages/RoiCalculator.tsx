import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ArrowRight, PhoneOff, CalendarX, DatabaseZap, TrendingUp } from "lucide-react";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));

// Conservative recovery assumptions, shown to the user for transparency.
const LEAD_RECAPTURE = 0.5; // share of missed/slow leads we get back into a conversation
const NOSHOW_RECOVERY = 0.5; // share of no-shows prevented by reminders
const DB_REACTIVATION = 0.03; // share of past customers reactivated in first 90 days

interface Inputs {
  avgRevenue: number;
  monthlyLeads: number;
  missedPct: number;
  closeRate: number;
  databaseSize: number;
  monthlyNoShows: number;
}

const defaults: Inputs = {
  avgRevenue: 500,
  monthlyLeads: 100,
  missedPct: 30,
  closeRate: 30,
  databaseSize: 1000,
  monthlyNoShows: 10,
};

export default function RoiCalculator() {
  const [v, setV] = useState<Inputs>(defaults);

  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((s) => ({ ...s, [k]: Math.max(0, Number(e.target.value) || 0) }));

  const r = useMemo(() => {
    const recoveredLeads = v.monthlyLeads * (v.missedPct / 100) * LEAD_RECAPTURE;
    const leadCustomers = recoveredLeads * (v.closeRate / 100);
    const leadRevenueMonthly = leadCustomers * v.avgRevenue;

    const noShowRevenueMonthly = v.monthlyNoShows * NOSHOW_RECOVERY * v.avgRevenue;

    const monthly = leadRevenueMonthly + noShowRevenueMonthly;
    const annual = monthly * 12;

    const dormantOneTime = v.databaseSize * DB_REACTIVATION * v.avgRevenue;
    const firstYear = annual + dormantOneTime;

    return {
      leadRevenueMonthly,
      noShowRevenueMonthly,
      monthly,
      annual,
      dormantOneTime,
      firstYear,
      leadCustomers,
    };
  }, [v]);

  const breakdown = [
    {
      icon: PhoneOff,
      label: "Missed & slow-to-answer leads",
      value: usd(r.leadRevenueMonthly),
      unit: "/mo",
      note: "Instant text-back and 5-minute response recapture leads you lose to voicemail and slow replies.",
    },
    {
      icon: CalendarX,
      label: "No-shows & cancellations",
      value: usd(r.noShowRevenueMonthly),
      unit: "/mo",
      note: "Automated reminders cut the empty slots that quietly drain your calendar.",
    },
    {
      icon: DatabaseZap,
      label: "Dormant past customers",
      value: usd(r.dormantOneTime),
      unit: " one-time",
      note: "Reactivating a slice of your existing database in the first 90 days.",
    },
  ];

  const fields = [
    { k: "avgRevenue" as const, label: "Average revenue per customer", prefix: "$", min: 0, step: 25, help: "Your average ticket or first-visit value." },
    { k: "monthlyLeads" as const, label: "New leads & calls per month", prefix: "", min: 0, step: 5, help: "Calls, form fills, and DMs combined." },
    { k: "databaseSize" as const, label: "Past customers in your database", prefix: "", min: 0, step: 50, help: "People who have paid you at least once." },
    { k: "monthlyNoShows" as const, label: "No-shows or cancellations per month", prefix: "", min: 0, step: 1, help: "Booked appointments that fall through." },
  ];

  return (
    <Layout>
      <Seo
        title="Revenue Leak Calculator | See What You're Missing | Aurex"
        description="Free revenue leak calculator. Enter your average revenue per customer and a few numbers to see how much money your North Mississippi business is missing from missed calls, slow follow-up, no-shows, and a dormant database."
        path="/roi-calculator"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Aurex Revenue Leak Calculator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://www.aurexagency.com/roi-calculator",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Estimate the revenue your local business is losing to missed calls, slow follow-up, no-shows, and a dormant customer database.",
        }}
      />

      {/* HERO + CALCULATOR */}
      <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-28 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <div className="flex items-center justify-between border-b hairline pb-6 mb-12">
              <p className="eyebrow eyebrow-amber">Revenue leak calculator</p>
              <p className="label-mono hidden sm:block">Free · No email required</p>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
              See how much revenue you are leaving{" "}
              <span className="italic text-accent">on the table.</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-foreground/65 max-w-2xl text-pretty">
              Enter a few numbers about your business. We will estimate the revenue slipping through missed
              calls, slow follow-up, no-shows, and a dormant customer list, the exact leaks Aurex plugs.
            </p>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* INPUTS */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="card-premium p-6 sm:p-8">
                  <h2 className="font-display text-2xl text-foreground mb-6">Your numbers</h2>

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
                            min={f.min}
                            step={f.step}
                            value={v[f.k]}
                            onChange={set(f.k)}
                            className={`w-full h-12 ${f.prefix ? "pl-8 pr-4" : "px-4"} rounded-lg bg-secondary border hairline text-foreground tnum focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition`}
                          />
                        </div>
                        <p className="mt-1.5 text-xs text-foreground/45">{f.help}</p>
                      </div>
                    ))}

                    {/* Sliders */}
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <label htmlFor="missedPct" className="label-mono">Leads you miss or answer slowly</label>
                        <span className="font-display text-xl text-accent tnum">{v.missedPct}%</span>
                      </div>
                      <input
                        id="missedPct"
                        type="range"
                        min={0}
                        max={60}
                        step={1}
                        value={v.missedPct}
                        onChange={set("missedPct")}
                        style={{ accentColor: "hsl(var(--accent))" }}
                        className="w-full cursor-pointer"
                      />
                      <p className="mt-1.5 text-xs text-foreground/45">Industry average for local businesses is 25 to 40%.</p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <label htmlFor="closeRate" className="label-mono">Close rate on leads you reach</label>
                        <span className="font-display text-xl text-accent tnum">{v.closeRate}%</span>
                      </div>
                      <input
                        id="closeRate"
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        value={v.closeRate}
                        onChange={set("closeRate")}
                        style={{ accentColor: "hsl(var(--accent))" }}
                        className="w-full cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RESULTS */}
            <div className="lg:col-span-6">
              <Reveal delay={0.16}>
                <div className="lg:sticky lg:top-28 space-y-5">
                  <div className="card-premium p-7 sm:p-9 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    <div className="flex items-center gap-2 label-mono eyebrow-amber mb-4">
                      <TrendingUp className="w-4 h-4" /> Revenue you are missing
                    </div>
                    <div className="font-display text-6xl lg:text-7xl text-accent tnum tracking-tight leading-none">
                      {usd(r.annual)}
                    </div>
                    <p className="mt-3 text-foreground/65">
                      per year in recurring missed revenue, about{" "}
                      <span className="text-foreground font-medium">{usd(r.monthly)}</span> every month.
                    </p>

                    <div className="mt-7 pt-7 border-t hairline">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <div className="label-mono mb-1">First-year opportunity</div>
                          <div className="font-display text-3xl text-foreground tnum">{usd(r.firstYear)}</div>
                        </div>
                        <p className="text-xs text-foreground/45 max-w-[12rem] text-right">
                          Recurring missed revenue plus a one-time dormant database reactivation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="card-premium p-2">
                    {breakdown.map((b, i) => (
                      <div
                        key={b.label}
                        className={`flex gap-4 p-5 ${i !== 0 ? "border-t hairline" : ""}`}
                      >
                        <span className="mark w-10 h-10 mt-0.5"><b.icon className="w-4 h-4" /></span>
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-foreground font-medium">{b.label}</span>
                            <span className="font-display text-xl text-foreground tnum whitespace-nowrap">
                              {b.value}<span className="text-sm text-foreground/45">{b.unit}</span>
                            </span>
                          </div>
                          <p className="text-sm text-foreground/55 mt-1 leading-relaxed">{b.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/book" className="btn-amber w-full h-14 text-base cursor-pointer">
                    Get my real numbers in a free audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-xs text-foreground/45 text-center leading-relaxed">
                    Illustrative estimate. Assumes we recapture {LEAD_RECAPTURE * 100}% of missed or slow leads,
                    prevent {NOSHOW_RECOVERY * 100}% of no-shows, and reactivate {DB_REACTIVATION * 100}% of your
                    past customers in 90 days. Your audit runs the math on your real data.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        eyebrow="Turn the estimate into a plan"
        title="That number is sitting in your business right now. Let us prove it."
        sub="A 30 minute call with a real operator. We run these numbers on your actual data and show you exactly what your first 30 days would look like."
      />
    </Layout>
  );
}
