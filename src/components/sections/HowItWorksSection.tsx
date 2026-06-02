import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

interface Phase {
  label: string;
  window: string;
  title: string;
  blurb: string;
  items: { name: string; desc: string }[];
}

const defaultPhases: Phase[] = [
  {
    label: "Phase 1",
    window: "Weeks 1 to 4",
    title: "The Fast Win",
    blurb: "We prove revenue before you spend a dollar on ads. Everything here uses assets you already own.",
    items: [
      { name: "Dormant-Database Payday", desc: "Reactivate past customers with text and email offers tuned to their history." },
      { name: "Missed-Call Text-Back", desc: "Every missed call gets an instant text within seconds. Conversations start, jobs get booked." },
      { name: "5-Minute Speed-to-Lead", desc: "Every form, ad, and DM gets a human-quality reply in under five minutes, 24/7." },
      { name: "No-Show Shield", desc: "Automated reminders by text and email. Fewer empty slots, more revenue per day." },
      { name: "Reputation Engine", desc: "Automated review requests to happy customers. Your rating climbs. So does your local search rank." },
    ],
  },
  {
    label: "Phase 2",
    window: "Month 2 and beyond",
    title: "Scale",
    blurb: "Once the proof is on the board, we layer on durable, recurring growth funded by the wins from Phase 1.",
    items: [
      { name: "Membership and recurring revenue", desc: "Turn one-time buyers into monthly revenue with simple plans that fit your business." },
      { name: "Paid acquisition, funded by proof", desc: "Ad spend goes live only after the system is converting. No guessing." },
      { name: "Retention and rebooking automation", desc: "Lifecycle journeys that keep customers coming back without lifting a finger." },
      { name: "Quarterly business reviews", desc: "We sit down with you every 90 days, show the numbers, and plan the next move." },
    ],
  },
];

export function HowItWorksSection({ phases = defaultPhases }: { phases?: Phase[] }) {
  return (
    <section className="py-24 lg:py-32 surface-ink surface-ink-grad relative overflow-hidden">
      <div className="container relative">
        <Reveal>
          <p className="eyebrow text-amber mb-4">How it works</p>
          <h2 className="font-display text-4xl lg:text-5xl text-cream max-w-3xl mb-5 text-balance">
            Fast proof first. Then scale.
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl">
            A sequenced system, not a kitchen sink. Phase 1 prints revenue from what you already have. Phase 2 compounds it.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {phases.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] backdrop-blur p-8 h-full">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-amber font-mono text-sm tracking-wider">{p.label}</span>
                  <span className="text-cream/40 text-sm">{p.window}</span>
                </div>
                <h3 className="font-display text-3xl text-cream mb-3">{p.title}</h3>
                <p className="text-cream/70 mb-7">{p.blurb}</p>
                <ul className="space-y-4">
                  {p.items.map((it) => (
                    <li key={it.name} className="flex gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-amber/20 text-amber flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <div>
                        <div className="text-cream font-medium">{it.name}</div>
                        <div className="text-cream/60 text-sm leading-relaxed">{it.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
