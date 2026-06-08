import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/Motion";
import { phases } from "@/data/site";

export function SystemProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="system" className="scroll-mt-24 grain relative bg-coal text-bone py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-soft mb-4">The Aurex method</p>
          <h2 className="font-display text-4xl lg:text-6xl tracking-[-0.02em] max-w-3xl text-balance leading-[1.05]">
            One system, built in three phases.
          </h2>
          <p className="mt-5 text-lg text-bone/60 max-w-2xl leading-relaxed">
            We do not throw tactics at the wall. We build a foundation, grow on top of it, then let it compound.
          </p>
        </FadeUp>

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-14">
          {/* progress rail */}
          <div className="absolute left-[14px] sm:left-[18px] top-2 bottom-2 w-px bg-bone/15">
            <motion.div
              className="absolute top-0 left-0 w-full bg-clay origin-top"
              style={{ height: reduce ? "100%" : fill }}
            />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {phases.map((p) => (
              <FadeUp key={p.n} className="relative">
                <span className="absolute -left-10 sm:-left-14 top-1 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-clay text-bone font-mono text-xs sm:text-sm font-semibold ring-4 ring-coal">
                  {p.n}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <h3 className="font-display text-3xl lg:text-4xl text-bone">{p.name}</h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-clay-soft">{p.tag}</span>
                </div>
                <p className="mt-3 text-lg text-bone/65 max-w-2xl leading-relaxed">{p.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
