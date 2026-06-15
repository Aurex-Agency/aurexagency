import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { BOOKING_HREF, RISK_REVERSAL } from "@/data/packages";

/**
 * The dark final-CTA band that closes every page.
 * Defaults route to the booking calendar; pass `href="#book"` on the
 * Packages page so it scrolls to the in-page embed instead.
 */
export function BookCta({
  title = "Be the first one they call.",
  sub = "Book a free 15-minute call. I'll show you exactly where you're losing jobs and what I'd put in place to stop it. No pressure, no jargon.",
  href = BOOKING_HREF,
  note = RISK_REVERSAL,
}: {
  title?: string;
  sub?: string;
  href?: string;
  note?: string;
}) {
  const isHash = href.startsWith("#");
  return (
    <section className="surface-dark grain relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(38rem 22rem at 50% 0%, hsl(205 90% 55% / 0.18), transparent 65%)" }}
      />
      <div className="shell relative py-20 lg:py-28 text-center">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-balance max-w-3xl mx-auto leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 text-lg text-white/65 max-w-xl mx-auto leading-relaxed">{sub}</p>
          {isHash ? (
            <a href={href} className="btn-primary h-14 px-8 text-base mt-9">
              Book a 15-Minute Call <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link to={href} className="btn-primary h-14 px-8 text-base mt-9">
              Book a 15-Minute Call <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {note && <p className="mt-5 text-sm text-white/45">{note}</p>}
        </FadeUp>
      </div>
    </section>
  );
}
