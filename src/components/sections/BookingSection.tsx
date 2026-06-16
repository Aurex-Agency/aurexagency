import { Calendar, Check } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { RISK_REVERSAL } from "@/data/packages";

const defaultReassurances = [
  "A real conversation, not a sales pitch",
  "15 minutes, by phone or video",
  "You'll leave knowing exactly what I'd do",
];

/**
 * Booking section with a GoHighLevel calendar embed. Reused across pages.
 * The Packages page uses id="book" (the 15-minute call); the Growth page
 * uses id="book-strategy" (the strategy call) with its own embed.
 *
 * >>> Paste the matching GoHighLevel calendar embed into the marked div. <<<
 */
export function BookingSection({
  id = "book",
  embedId = "ghl-calendar-embed",
  eyebrow = "Book your call",
  heading = "Let's spend 15 minutes on your phone problem.",
  sub = "Pick a time that works. I'll take a look at how your leads come in today and tell you straight what I'd change. No charge, no obligation.",
  reassurances = defaultReassurances,
  note = RISK_REVERSAL,
  surface = "muted",
}: {
  id?: string;
  embedId?: string;
  eyebrow?: string;
  heading?: string;
  sub?: string;
  reassurances?: string[];
  note?: string;
  surface?: "muted" | "paper";
}) {
  const surfaceClass = surface === "paper" ? "bg-background" : "surface-muted";
  return (
    <section id={id} className={`scroll-mt-24 ${surfaceClass} py-20 lg:py-28`}>
      <div className="shell">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center mb-4">{eyebrow}</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
            {heading}
          </h2>
          <p className="mt-5 text-lg text-foreground/65">{sub}</p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/70">
            {reassurances.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" /> {r}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-12 max-w-3xl mx-auto">
            {/* ============================================================= */}
            {/* GHL CALENDAR EMBED GOES HERE                                  */}
            {/* Replace the entire placeholder block below with your          */}
            {/* GoHighLevel calendar embed <iframe> / <script>.              */}
            {/* ============================================================= */}
            <div
              id={embedId}
              className="card-soft flex flex-col items-center justify-center text-center px-6 py-16 border-dashed"
              style={{ minHeight: "32rem" }}
            >
              <span className="inline-flex w-14 h-14 rounded-2xl bg-accent/10 text-accent items-center justify-center mb-5">
                <Calendar className="w-6 h-6" />
              </span>
              <p className="text-lg font-bold text-foreground">Booking calendar loads here</p>
              <p className="mt-2 text-sm text-foreground/55 max-w-sm">
                Placeholder for the GoHighLevel calendar embed. Paste the embed code into the
                <code className="mx-1 px-1.5 py-0.5 rounded bg-muted text-foreground/70 text-xs">#{embedId}</code>
                block in <code className="px-1.5 py-0.5 rounded bg-muted text-foreground/70 text-xs">BookingSection.tsx</code>.
              </p>
            </div>
            {/* ============================================================= */}
            {/* END GHL CALENDAR EMBED                                        */}
            {/* ============================================================= */}
            {note && <p className="mt-6 text-center text-sm text-foreground/50">{note}</p>}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
