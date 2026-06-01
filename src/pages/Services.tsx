import { Layout } from "@/components/layout/Layout";
import { BookCallDialog } from "@/components/BookCallDialog";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check, HeartPulse, Hammer } from "lucide-react";

const tiers = [
  {
    name: "Launchpad",
    price: "Starting at $3,000",
    sub: "plus monthly",
    desc: "Core setup to stop the leaks and capture every inbound.",
    features: [
      "Missed-call text-back",
      "Booking automation and reminders",
      "AI website chat",
      "Reputation and reviews engine",
      "Single CRM pipeline",
      "30-day onboarding",
    ],
    highlight: false,
  },
  {
    name: "Growth Engine",
    price: "Starting at $7,500",
    sub: "plus monthly",
    desc: "Our flagship. The full lead-to-booking engine.",
    features: [
      "Everything in Launchpad",
      "AI voice agent answering 24/7",
      "Database reactivation campaigns",
      "Paid ad funnel with conversion tracking",
      "Conversion-optimized landing site",
      "Monthly optimization sprints",
    ],
    highlight: true,
  },
  {
    name: "Command Center",
    price: "Starting at $12,000",
    sub: "plus monthly",
    desc: "Full done-for-you AI infrastructure for operators ready to scale.",
    features: [
      "Everything in Growth Engine",
      "Advanced multi-pipeline automation",
      "Smart call routing and lead scoring",
      "Custom executive dashboards",
      "Integrations with EMR or job-management systems",
      "Performance guarantee",
    ],
    highlight: false,
  },
];

const verticals = [
  {
    icon: HeartPulse,
    name: "Med Spas and Hormone Clinics",
    body: "HIPAA-aligned infrastructure for TRT, HRT, weight-loss, and aesthetics clinics. Multi-location ready.",
    points: ["Patient intake automation", "AI voice receptionist", "Database reactivation for past patients", "Recurring program retention"],
  },
  {
    icon: Hammer,
    name: "Roofing and HVAC",
    body: "Lead-to-job pipelines for home-services operators. Built on top of AcuLynx, ServiceTitan, or your existing stack.",
    points: ["Instant 60-second lead response", "Comment-to-DM automation", "Estimator routing and dispatch", "Repeat and referral engine"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="surface-ink grain pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 surface-ink-grad" />
        <div className="container relative z-10 max-w-4xl">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">Services</div>
            <h1 className="font-display text-cream text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
              Choose your level of <span className="italic text-amber">growth.</span>
            </h1>
            <p className="mt-6 text-cream/70 text-lg max-w-2xl">
              Three tiers. One mission. Install the AI infrastructure that does the work your team should not have to do.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className={`card-premium p-8 lg:p-10 h-full flex flex-col relative ${t.highlight ? "ring-2 ring-amber bg-ink text-cream" : ""}`}>
                  {t.highlight && (
                    <span className="absolute -top-3 left-8 bg-amber text-ink text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className={`font-display text-3xl font-medium mb-2 ${t.highlight ? "text-cream" : "text-ink"}`}>{t.name}</h3>
                  <p className={`text-sm mb-6 ${t.highlight ? "text-cream/70" : "text-ink/60"}`}>{t.desc}</p>
                  <div className="mb-6">
                    <p className={`font-display text-3xl font-medium ${t.highlight ? "text-amber" : "text-ink"}`}>{t.price}</p>
                    <p className={`text-xs ${t.highlight ? "text-cream/50" : "text-ink/50"}`}>{t.sub}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlight ? "text-amber" : "text-amber-deep"}`} />
                        <span className={t.highlight ? "text-cream/85" : "text-ink/75"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <BookCallDialog>
                    <button className={t.highlight ? "btn-amber w-full h-12" : "btn-ghost-ink w-full h-12"}>
                      Book a call
                    </button>
                  </BookCallDialog>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-cream-warm py-20 lg:py-28 border-y hairline">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="eyebrow mb-5">Who we build for</div>
              <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.05]">
                Two industries. <span className="italic">Built deep.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.08}>
                <div className="card-premium p-8 lg:p-10 h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber-deep flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2 font-medium">{v.name}</h3>
                  <p className="text-ink/65 mb-5">{v.body}</p>
                  <ul className="space-y-2">
                    {v.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber-deep mt-0.5 shrink-0" />
                        <span className="text-ink/75">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-amber opacity-25" />
        <div className="container relative z-10 text-center max-w-3xl">
          <Reveal>
            <h2 className="font-display text-cream text-4xl lg:text-6xl font-medium leading-[1.05]">
              Not sure which tier fits? <span className="italic text-amber">We will tell you on the call.</span>
            </h2>
            <div className="mt-8">
              <BookCallDialog>
                <button className="btn-amber h-14 px-8 text-base">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </BookCallDialog>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
