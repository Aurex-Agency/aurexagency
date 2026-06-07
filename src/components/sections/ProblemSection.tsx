import { Reveal } from "@/components/Reveal";
import { PhoneOff, Clock, DatabaseZap, CalendarX, Star } from "lucide-react";

const defaultGaps = [
  { icon: DatabaseZap, title: "Dormant past customers", body: "Hundreds of people who already paid you once. Most are one text away from booking again." },
  { icon: PhoneOff, title: "Missed calls", body: "Every voicemail is a competitor's win. The phone rings, nobody picks up, the job is gone." },
  { icon: Clock, title: "Slow lead response", body: "Leads contacted in five minutes are up to 21x more likely to qualify. Most businesses take hours." },
  { icon: CalendarX, title: "No-shows", body: "Empty chairs, empty calendars, empty trucks. Almost all of it preventable with the right reminders." },
  { icon: Star, title: "Weak reviews", body: "A one-star bump can lift revenue 5 to 9 percent. Most happy customers never leave one unless you ask." },
];

interface ProblemSectionProps {
  eyebrow?: string;
  title?: string;
  sub?: string;
  gaps?: typeof defaultGaps;
}

export function ProblemSection({
  eyebrow = "The five revenue leaks",
  title = "Most local businesses are leaking revenue in five exact places.",
  sub = "It is not a traffic problem. It is a capture and follow-through problem. Plug these five and your next month of revenue is sitting right in front of you.",
  gaps = defaultGaps,
}: ProblemSectionProps) {
  return (
    <section className="py-24 lg:py-32 surface-cream-warm">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">{title}</h2>
          <p className="text-lg text-foreground/65 max-w-2xl text-pretty">{sub}</p>
        </Reveal>

        <div className="mt-16 border-t hairline">
          {gaps.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-8 border-b hairline transition-colors hover:bg-foreground/[0.02]">
                <div className="md:col-span-5 flex items-center gap-5">
                  <span className="section-index text-2xl lg:text-3xl tnum w-12 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mark w-11 h-11">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{g.title}</h3>
                </div>
                <p className="md:col-span-7 text-foreground/65 leading-relaxed md:pl-8 md:border-l hairline">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
