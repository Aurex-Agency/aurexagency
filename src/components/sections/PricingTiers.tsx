import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { tiers, oneTimeBuilds, QUARTERLY_DISCOUNT, BOOKING_LINK } from "@/data/site";

type Billing = "monthly" | "quarterly";

export function PricingTiers() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const reduce = useReducedMotion();

  const priceFor = (monthly: number) =>
    billing === "quarterly" ? Math.round(monthly * (1 - QUARTERLY_DISCOUNT)) : monthly;

  return (
    <section id="pricing" className="scroll-mt-24 bg-bone-200 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeUp className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-4">Transparent pricing</p>
          <h2 className="font-display text-4xl lg:text-5xl text-coal tracking-[-0.02em] max-w-3xl mx-auto text-balance leading-[1.08]">
            Real prices. Right here. No "call for a quote."
          </h2>
          <p className="mt-5 text-lg text-coal/65 max-w-2xl mx-auto leading-relaxed">
            Pick a plan, get the whole system built and run for you. No contracts. Pause or cancel anytime.
          </p>
        </FadeUp>

        {/* Billing toggle */}
        <FadeUp delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-coal/5 border border-coal/10">
            {(["monthly", "quarterly"] as Billing[]).map((opt) => (
              <button
                key={opt}
                onClick={() => setBilling(opt)}
                className="relative px-5 h-10 rounded-full text-sm font-semibold capitalize"
              >
                {billing === opt && (
                  <motion.span
                    layoutId={reduce ? undefined : "billingPill"}
                    className="absolute inset-0 rounded-full bg-coal"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${billing === opt ? "text-bone" : "text-coal/60"}`}>
                  {opt}
                </span>
                {opt === "quarterly" && (
                  <span className={`relative z-10 ml-2 text-[11px] font-bold ${billing === "quarterly" ? "text-clay-soft" : "text-clay"}`}>
                    Save 10%
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Tiers */}
        <Stagger className="mt-12 grid lg:grid-cols-3 gap-5 items-stretch" gap={0.1}>
          {tiers.map((t) => (
            <FadeItem key={t.name} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative h-full rounded-3xl p-8 flex flex-col ${
                  t.popular
                    ? "bg-coal text-bone shadow-[0_40px_90px_-45px_rgba(26,23,20,0.85)] ring-1 ring-clay/40"
                    : "bg-bone-100 border border-coal/10"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-clay text-bone text-[11px] font-bold uppercase tracking-widest">
                    Most popular
                  </span>
                )}
                <h3 className={`font-display text-2xl ${t.popular ? "text-bone" : "text-coal"}`}>{t.name}</h3>
                <p className={`text-sm mt-1 mb-6 min-h-[2.5rem] ${t.popular ? "text-bone/55" : "text-coal/55"}`}>{t.wedge}</p>

                <div className="flex items-end gap-1 h-[3.75rem]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={`${t.name}-${billing}`}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className={`font-display text-5xl tracking-tight tnum ${t.popular ? "text-bone" : "text-coal"}`}
                    >
                      ${priceFor(t.monthly).toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                  <span className={`mb-1.5 text-sm ${t.popular ? "text-bone/50" : "text-coal/50"}`}>/mo</span>
                </div>
                <p className={`text-xs h-4 ${t.popular ? "text-clay-soft" : "text-clay-deep"}`}>
                  {billing === "quarterly" ? "billed quarterly" : " "}
                </p>

                <ul className="mt-7 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className={`flex gap-3 text-sm ${t.popular ? "text-bone/80" : "text-coal/75"}`}>
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.popular ? "text-clay-soft" : "text-clay"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noreferrer"
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full font-semibold h-13 transition-colors ${
                    t.popular
                      ? "bg-clay text-bone hover:bg-clay-deep"
                      : "border border-coal/20 text-coal hover:bg-coal/[0.04]"
                  }`}
                  style={{ height: "3.25rem" }}
                >
                  Book a Call <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </FadeItem>
          ))}
        </Stagger>

        <FadeUp delay={0.1} className="mt-6 flex items-center justify-center gap-2 text-sm text-coal/60">
          <ShieldCheck className="w-4 h-4 text-clay" />
          First-month happiness guarantee. If it is not right, we make it right or you do not pay.
        </FadeUp>

        {/* One-time builds */}
        <FadeUp delay={0.15} className="mt-16">
          <div className="rounded-3xl border border-coal/10 bg-bone-100 p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-2">Prefer a one-time build?</p>
                <h3 className="font-display text-2xl lg:text-3xl text-coal">Project pricing, also out in the open.</h3>
              </div>
              <p className="text-sm text-coal/55 max-w-sm">Own the system outright, then run it yourself or hand it to us.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-px bg-coal/10 border border-coal/10 rounded-2xl overflow-hidden">
              {oneTimeBuilds.map((b) => (
                <div key={b.name} className="bg-bone-100 p-6">
                  <div className="font-display text-2xl text-coal tnum">{b.price}</div>
                  <div className="text-sm text-coal/60 mt-1">{b.name}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
