import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Motion";

export function CtaBand({
  title = "Let's turn your marketing into an investment.",
  sub = "Book a call. We'll diagnose where your revenue is leaking and show you the fastest path to provable ROI. No contracts, no pressure.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="surface-dark grain relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(38rem 22rem at 50% 0%, hsl(205 90% 55% / 0.16), transparent 65%)" }}
      />
      <div className="shell relative py-20 lg:py-28 text-center">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-balance max-w-3xl mx-auto leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">{sub}</p>
          <Link to="/contact" className="btn-primary h-14 px-8 text-base mt-9">
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-5 text-sm text-white/40">No contracts. Pause or cancel anytime.</p>
        </FadeUp>
      </div>
    </section>
  );
}
