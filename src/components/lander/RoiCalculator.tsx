import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ROI } from "@/data/lander";

const currency = (n: number) => "$" + Math.round(n).toLocaleString();

/**
 * Signature interactive section: estimates monthly revenue at risk from slow
 * response times. Number counts up from zero the first time it scrolls into
 * view, then updates live as the inputs change.
 */
export function RoiCalculator({ onCta }: { onCta: () => void }) {
  const [leads, setLeads] = useState(ROI.defaultLeads);
  const [jobValue, setJobValue] = useState(ROI.defaultJobValue);
  const value = leads * ROI.uncontactedRate * ROI.wouldConvertRate * jobValue;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    // After the first count-up, track the live value instantly.
    if (animated.current) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    animated.current = true;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1400);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (value - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <section id="roi" className="scroll-mt-20 surface-dark grain relative overflow-hidden py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(40rem 24rem at 12% 0%, hsl(205 90% 55% / 0.16), transparent 62%)" }}
      />
      <div className="shell relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Inputs */}
        <div>
          <p className="eyebrow-light mb-4">See your numbers</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.06]">
            How much are slow response times actually costing you?
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="roi-leads" className="text-sm font-semibold text-white/80">
                  How many leads do you get per month?
                </label>
                <span className="text-lg font-extrabold text-white tnum">{leads}</span>
              </div>
              <input
                id="roi-leads"
                type="range"
                min={1}
                max={200}
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="roi-slider mt-3 w-full"
                aria-label="Leads per month"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="roi-value" className="text-sm font-semibold text-white/80">
                  What is your average job value?
                </label>
                <span className="text-lg font-extrabold text-white tnum">{currency(jobValue)}</span>
              </div>
              <input
                id="roi-value"
                type="range"
                min={100}
                max={10000}
                step={100}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="roi-slider mt-3 w-full"
                aria-label="Average job value"
              />
            </div>
          </div>
        </div>

        {/* Output */}
        <div ref={ref}>
          <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 lg:p-10" style={{ borderTopColor: "hsl(var(--brand-cyan))", borderTopWidth: 3 }}>
            <h3 className="text-xl font-bold text-white">Your estimated monthly revenue at risk</h3>
            <div className="mt-3 text-6xl lg:text-7xl font-extrabold tnum text-gradient-brand leading-none">
              {currency(display)}
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Based on industry data: 51% of leads are never contacted. Of those, about 30% would have converted.
            </p>
            <p className="mt-5 text-base text-white/90 font-semibold">
              Aurex Agency protects this revenue automatically.
            </p>
            <button onClick={onCta} className="btn-primary h-13 px-7 text-base mt-6 w-full" style={{ height: "3.25rem" }}>
              Start Protecting Your Revenue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
