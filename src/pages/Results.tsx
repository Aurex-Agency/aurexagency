import { Layout } from "@/components/layout/Layout";
import { BookCallDialog } from "@/components/BookCallDialog";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check } from "lucide-react";

const cases = [
  {
    client: "Uplift Medical",
    industry: "Multi-location hormone therapy clinic",
    location: "Mississippi",
    problem:
      "Patient inquiries were scattered across phone, web forms, and DMs. Front desk staff manually triaged everything, response times stretched to hours, and same-day bookings slipped through the cracks.",
    built: [
      "Centralized GoHighLevel CRM with 3 pipelines (new patient, returning, reactivation)",
      "24+ automated workflows covering intake, qualification, booking, reminders, and post-visit follow-up",
      "AI conversation bot for SMS and web chat with HIPAA-aligned handling",
      "Smart call routing across locations with overflow to AI voice agent",
      "Custom n8n AI orchestration layer connecting EMR data to outreach triggers",
    ],
    outcome: [
      "Average lead response time reduced from hours to seconds",
      "Consistent patient experience across every location",
      "Front desk freed to focus on in-clinic care, not chasing leads",
    ],
  },
  {
    client: "Shurden Roofing",
    industry: "Roofing and home services",
    location: "Mississippi",
    problem:
      "Leads arrived through ads, organic social, and word-of-mouth, but lived in separate inboxes. Estimators wasted hours rekeying jobs and follow-ups got lost between systems.",
    built: [
      "Integrated GoHighLevel + AcuLynx job-system stack with two-way sync",
      "Comment-to-DM automation across Meta with instant qualification",
      "Interactive video assets with embedded CTA tracking",
      "End-to-end pipeline visibility from first touch to invoice",
    ],
    outcome: [
      "Fully automated lead-to-job pipeline",
      "Every inbound captured, qualified, routed, and tracked",
      "Single source of truth for sales and operations",
    ],
  },
];

export default function Results() {
  return (
    <Layout>
      <section className="surface-ink grain pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 surface-ink-grad" />
        <div className="container relative z-10 max-w-4xl">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">Results</div>
            <h1 className="font-display text-cream text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
              Systems that <span className="italic text-amber">actually ship.</span>
            </h1>
            <p className="mt-6 text-cream/70 text-lg max-w-2xl">
              Two flagship builds. Two industries. Real infrastructure running every day for real operators.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-cream py-20 lg:py-28">
        <div className="container space-y-16 lg:space-y-24">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.05}>
              <article className="card-premium p-8 lg:p-14 grid lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-amber-deep mb-3">{c.location}</p>
                  <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-tight mb-3">{c.client}</h2>
                  <p className="text-ink/55 text-sm">{c.industry}</p>
                </div>
                <div className="lg:col-span-8 space-y-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/40 mb-2">The problem</p>
                    <p className="text-ink/80 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/40 mb-3">What we built</p>
                    <ul className="space-y-2.5">
                      {c.built.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-amber-deep mt-1 shrink-0" />
                          <span className="text-ink/80">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/40 mb-3">The outcome</p>
                    <ul className="space-y-2.5">
                      {c.outcome.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2.5 shrink-0" />
                          <span className="text-ink/80">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-ink py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 mesh-amber opacity-30" />
        <div className="container relative z-10 text-center max-w-3xl">
          <Reveal>
            <h2 className="font-display text-cream text-4xl lg:text-6xl font-medium leading-[1.05]">
              Want one of these <span className="italic text-amber">built for you?</span>
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
