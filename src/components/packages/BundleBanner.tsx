import { ArrowRight, Check, Layers } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { bundle, RISK_REVERSAL } from "@/data/packages";

/** The "get everything" highlight that sits below the three equal tiers. */
export function BundleBanner() {
  return (
    <FadeUp>
      <div className="relative overflow-hidden rounded-3xl surface-dark grain border border-brand-cyan/30 shadow-[0_40px_80px_-36px_hsl(222_86%_56%/0.5)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{ background: "radial-gradient(40rem 22rem at 85% -10%, hsl(187 92% 48% / 0.16), transparent 60%)" }}
        />
        <div className="relative p-8 lg:p-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: the pitch */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white" style={{ background: "var(--gradient-brand)" }}>
              <Layers className="w-3.5 h-3.5" /> Best value
            </span>
            <h3 className="mt-4 text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance leading-[1.08]">
              Want the whole machine? Run all three together.
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed max-w-xl">{bundle.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
              {bundle.systems.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="w-4 h-4 text-brand-cyan" /> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: the price + CTA */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/45 font-semibold">All three systems</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tnum text-white">${bundle.price}</span>
              <span className="text-base text-white/55">/month</span>
            </div>
            <p className="mt-2 text-sm text-white/60">
              <span className="line-through text-white/40 tnum">${bundle.separateTotal}/mo</span>{" "}
              bought separately, you save{" "}
              <span className="font-semibold text-brand-cyan tnum">${bundle.savings}/mo</span>.
            </p>
            <a href="#book" className="btn-light w-full px-6 text-base mt-6" style={{ height: "3.25rem" }}>
              {bundle.cta} <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-center text-xs text-white/45">{RISK_REVERSAL}</p>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
