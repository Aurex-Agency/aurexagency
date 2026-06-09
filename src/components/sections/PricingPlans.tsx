import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { tiers, annualNote } from "@/data/aurex";

type Cycle = "monthly" | "annual";

export function PricingPlans({ showToggle = true }: { showToggle?: boolean }) {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const reduce = useReducedMotion();
  const price = (monthly: number) => (cycle === "annual" ? Math.round((monthly * 10) / 12) : monthly);

  return (
    <div>
      {showToggle && (
        <FadeUp className="flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-muted border hairline">
            {(["monthly", "annual"] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className="relative px-5 h-10 rounded-full text-sm font-semibold capitalize"
              >
                {cycle === c && (
                  <motion.span
                    layoutId={reduce ? undefined : "cyclePill"}
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${cycle === c ? "text-background" : "text-foreground/60"}`}>{c}</span>
                {c === "annual" && (
                  <span className={`relative z-10 ml-2 text-[11px] font-bold ${cycle === "annual" ? "text-accent" : "text-accent"}`}>
                    2 months free
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeUp>
      )}

      <Stagger className="mt-12 grid lg:grid-cols-3 gap-5 items-stretch" gap={0.09}>
        {tiers.map((t) => (
          <FadeItem key={t.name} className="h-full">
            <div
              className={`relative h-full rounded-3xl p-8 flex flex-col ${
                t.popular ? "surface-dark text-white ring-1 ring-accent/40 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]" : "card-soft"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-widest">
                  Most popular
                </span>
              )}
              <h3 className={`text-xl font-bold ${t.popular ? "text-white" : "text-foreground"}`}>{t.name}</h3>
              <p className={`text-sm mt-1 mb-6 min-h-[2.5rem] ${t.popular ? "text-white/55" : "text-foreground/55"}`}>{t.best}</p>

              <div className="flex items-end gap-1">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={`${t.name}-${cycle}`}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={`text-5xl font-extrabold tracking-tight tnum ${t.popular ? "text-white" : "text-foreground"}`}
                  >
                    ${price(t.price).toLocaleString()}
                  </motion.span>
                </AnimatePresence>
                <span className={`mb-1.5 text-sm ${t.popular ? "text-white/50" : "text-foreground/50"}`}>/mo</span>
              </div>
              <p className={`mt-1 text-xs h-4 ${t.popular ? "text-white/45" : "text-foreground/45"}`}>
                {cycle === "annual" ? "billed annually" : " "}
              </p>

              <div className={`mt-5 flex flex-wrap gap-2 text-xs ${t.popular ? "text-white/70" : "text-foreground/60"}`}>
                <span className={`px-2.5 py-1 rounded-full ${t.popular ? "bg-white/10" : "bg-muted"}`}>{t.tasks}</span>
                <span className={`px-2.5 py-1 rounded-full ${t.popular ? "bg-white/10" : "bg-muted"}`}>{t.turnaround}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className={`flex gap-3 text-sm ${t.popular ? "text-white/80" : "text-foreground/75"}`}>
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 h-12 ${t.popular ? "btn-primary" : "btn-dark"}`}
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeItem>
        ))}
      </Stagger>

      <FadeUp delay={0.1}>
        <p className="mt-6 text-center text-sm text-foreground/50">{annualNote} No contracts. Pause or cancel anytime.</p>
      </FadeUp>
    </div>
  );
}
