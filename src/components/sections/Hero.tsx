import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PhoneIncoming, MessageSquare, Bot, CalendarCheck, Star } from "lucide-react";
import { BOOKING_LINK } from "@/data/site";

const flow = [
  { icon: PhoneIncoming, label: "Call comes in", sub: "Missed call detected" },
  { icon: MessageSquare, label: "Instant text-back", sub: "Replied in 9 seconds" },
  { icon: Bot, label: "AI follows up", sub: "Qualified and nurtured" },
  { icon: CalendarCheck, label: "Job booked", sub: "Added to your calendar" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? 3 : 0);
  const [booked, setBooked] = useState(128);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % flow.length;
        if (next === 0) setBooked((b) => b + 1);
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative overflow-hidden bg-bone pt-32 lg:pt-40 pb-20 lg:pb-28">
      {/* warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(42rem 28rem at 12% 0%, rgba(184,98,58,0.10), transparent 60%), radial-gradient(40rem 30rem at 100% 20%, rgba(184,98,58,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep"
          >
            <span className="w-6 h-px bg-clay-deep/60" />
            Marketing systems for North Mississippi businesses
          </motion.p>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[4.1rem] lg:leading-[1.02] text-coal tracking-[-0.02em] text-balance"
          >
            Your business should run itself.{" "}
            <span className="italic text-clay">We build the system</span> that makes it happen.
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg lg:text-xl text-coal/70 leading-relaxed max-w-xl"
          >
            Aurex builds and runs the marketing engine, lead capture, follow-up, funnels, social, and CRM,
            so owners stop chasing and start booking. No contracts. Pause or cancel anytime.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={BOOKING_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-clay text-bone font-semibold px-7 h-14 text-base shadow-[0_16px_40px_-16px_rgba(184,98,58,0.7)] hover:bg-clay-deep transition-colors"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-coal/20 text-coal font-semibold px-7 h-14 text-base hover:bg-coal/[0.04] transition-colors"
            >
              See Pricing
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-3 text-sm text-coal/55"
          >
            <span className="flex text-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-clay" />
              ))}
            </span>
            Trusted by clinics, roofers, HVAC &amp; insurance agencies across North Mississippi
          </motion.div>
        </div>

        {/* Animated system visual */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="grain relative rounded-3xl bg-coal text-bone p-6 sm:p-8 shadow-[0_40px_90px_-40px_rgba(26,23,20,0.8)] border border-white/5 overflow-hidden">
            <div className="relative flex items-center justify-between mb-7">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  {!reduce && <span className="absolute inline-flex h-full w-full rounded-full bg-clay opacity-75 animate-ping" />}
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-clay" />
                </span>
                <span className="text-sm font-medium text-bone/80">Aurex System</span>
                <span className="text-[11px] uppercase tracking-widest text-bone/40">Live</span>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl leading-none tnum">{booked}</div>
                <div className="text-[11px] text-bone/45 mt-0.5">booked this month</div>
              </div>
            </div>

            <div className="relative">
              {/* connector line */}
              <div className="absolute left-[26px] top-6 bottom-6 w-px bg-bone/12" />
              {!reduce && (
                <motion.div
                  className="absolute left-[23px] w-1.5 h-1.5 rounded-full bg-clay shadow-[0_0_12px_2px_rgba(184,98,58,0.8)]"
                  animate={{ top: ["1.5rem", "calc(100% - 1.75rem)"] }}
                  transition={{ duration: 1.4 * flow.length, repeat: Infinity, ease: "linear" }}
                />
              )}

              <div className="space-y-3">
                {flow.map((step, i) => {
                  const on = i <= active;
                  return (
                    <motion.div
                      key={step.label}
                      animate={{
                        opacity: on ? 1 : 0.4,
                        scale: i === active && !reduce ? 1.015 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className={`relative flex items-center gap-4 rounded-2xl border p-3.5 pr-5 transition-colors ${
                        on ? "border-clay/40 bg-white/[0.06]" : "border-white/5 bg-white/[0.02]"
                      }`}
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          on ? "bg-clay text-bone" : "bg-white/8 text-bone/50"
                        }`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-bone">{step.label}</div>
                        <div className="text-xs text-bone/50">{step.sub}</div>
                      </div>
                      {on && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-5 h-5 rounded-full bg-clay/20 text-clay flex items-center justify-center text-xs"
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* floating caption chip */}
          <div className="absolute -bottom-4 -left-3 sm:-left-5 rounded-xl bg-bone border border-coal/10 shadow-lg px-4 py-3">
            <div className="text-[11px] uppercase tracking-widest text-coal/45">Avg. response</div>
            <div className="font-display text-xl text-coal leading-none mt-0.5">9 seconds</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
