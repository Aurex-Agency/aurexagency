import { FadeUp } from "@/components/Motion";
import { Check } from "lucide-react";

const points = [
  "No account managers between you and the work.",
  "No junior hand-offs or offshore guesswork.",
  "A direct line to the person doing the building.",
  "Senior-level work on every single request.",
];

export function SoloAdvantage() {
  return (
    <section className="grain relative bg-coal text-bone py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-soft mb-4">Why Aurex</p>
          <h2 className="font-display text-4xl lg:text-5xl tracking-[-0.02em] text-balance leading-[1.07]">
            The person who builds it is the person who <span className="italic text-clay-soft">runs it.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/65 leading-relaxed max-w-xl">
            Big agencies sell you a pitch from a senior, then hand your account to whoever is free. Aurex is
            built the opposite way. One operator builds your system, runs it, and answers when you call. You
            get big-league work without the big-league overhead, or the telephone game.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-bone/80">
                <span className="w-6 h-6 rounded-md bg-clay/20 text-clay-soft flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="flex items-center gap-4">
              {/* TODO: swap this initial avatar for a real photo of Kalob */}
              <div className="w-16 h-16 rounded-2xl bg-clay text-bone font-display text-3xl flex items-center justify-center">
                K
              </div>
              <div>
                <div className="font-display text-xl text-bone">Kalob</div>
                <div className="text-sm text-bone/55">Founder & Operator, Aurex</div>
              </div>
            </div>
            <p className="mt-6 text-bone/70 leading-relaxed">
              "I build every system myself and I run it myself. When something needs to change, it changes that
              day, not three meetings from now."
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {["Builds it", "Runs it", "Answers"].map((c) => (
                <div key={c} className="rounded-xl border border-white/10 bg-white/[0.03] py-3 text-center text-sm text-bone/75">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
