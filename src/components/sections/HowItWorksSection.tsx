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
    <section className="py-24 lg:py-32 surface-ink surface-ink-grad grain relative overflow-hidden">
      <div className="container relative">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">How it works</p>
          <h2 className="font-display text-4xl lg:text-6xl text-cream max-w-3xl mb-5 text-balance leading-tight">
            Fast proof first. Then scale.
          </h2>
          <p className="text-lg text-cream/65 max-w-2xl">
            A sequenced system, not a kitchen sink. Phase 1 prints revenue from what you already have. Phase 2 compounds it.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-px bg-[hsl(var(--foreground)/0.08)] border border-[hsl(var(--foreground)/0.08)] rounded-2xl overflow-hidden">
          {phases.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="relative bg-[hsl(var(--foreground)/0.02)] backdrop-blur p-8 lg:p-10 h-full">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="label-mono eyebrow-amber">{p.label}</span>
                  <span className="font-display text-6xl lg:text-7xl text-cream/10 tnum leading-none">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="label-mono mb-2 text-cream/40">{p.window}</div>
                <h3 className="font-display text-3xl lg:text-4xl text-cream mb-3">{p.title}</h3>
                <p className="text-cream/65 mb-8">{p.blurb}</p>
                <ul className="space-y-4 pt-6 border-t border-[hsl(var(--foreground)/0.1)]">
                  {p.items.map((it) => (
                    <li key={it.name} className="flex gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 border border-accent/25">
                        <Check className="w-3 h-3" />
                      </span>
                      <div>
                        <div className="text-cream font-medium">{it.name}</div>
                        <div className="text-cream/55 text-sm leading-relaxed">{it.desc}</div>
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
