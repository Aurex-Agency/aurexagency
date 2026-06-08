import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { BOOKING_LINK } from "@/data/site";

export function FinalCta() {
  const reduce = useReducedMotion();
  return (
    <section className="grain relative bg-coal text-bone py-24 lg:py-36 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(40rem 24rem at 50% 0%, rgba(184,98,58,0.18), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[820px] px-5 sm:px-8 text-center">
        <FadeUp>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] text-balance leading-[1.04]">
            Ready to build a system that <span className="italic text-clay-soft">runs itself?</span>
          </h2>
          <p className="mt-6 text-lg text-bone/65 max-w-xl mx-auto leading-relaxed">
            Book a quick call. We will map where you are losing jobs and exactly what your system would do
            about it. No pressure, no contract.
          </p>
          <motion.a
            href={BOOKING_LINK}
            target="_blank"
            rel="noreferrer"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-clay text-bone font-semibold px-8 h-14 text-base shadow-[0_18px_50px_-18px_rgba(184,98,58,0.8)] hover:bg-clay-deep transition-colors"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </motion.a>
          <p className="mt-6 text-sm text-bone/45">No contracts. Pause or cancel anytime.</p>
        </FadeUp>
      </div>
    </section>
  );
}
