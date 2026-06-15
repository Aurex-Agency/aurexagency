import { Link } from "react-router-dom";
import { CONTACT_EMAIL, TAGLINE, nav, BOOKING_HREF } from "@/data/packages";
import aurexLogo from "@/assets/aurex-logo-main.png";

export function Footer() {
  return (
    <footer className="surface-dark grain relative overflow-hidden">
      <div className="shell relative py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 max-w-sm">
            <Link to="/" className="inline-flex items-center" aria-label="Aurex Agency home">
              <img src={aurexLogo} alt="Aurex Agency" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-white/80 font-semibold tracking-tight">{TAGLINE}</p>
            <p className="mt-3 text-white/55 leading-relaxed">
              Marketing systems that get the phone ringing with paying jobs, and make sure you never lose a lead you
              already paid for.
            </p>
            <p className="mt-5 text-sm text-white/40">North Mississippi · home services &amp; cash-pay clinics</p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-semibold mb-4">Site</div>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-semibold mb-4">Get started</div>
            <ul className="space-y-2.5">
              <li>
                <Link to={BOOKING_HREF} className="text-sm text-white/70 hover:text-white transition-colors">
                  Book a 15-minute call
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-white/70 hover:text-white transition-colors">
                  See the packages
                </Link>
              </li>
              <li>
                <Link to="/growth" className="text-sm text-white/70 hover:text-white transition-colors">
                  Custom growth systems
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/45">
          {/* TODO: confirm contact email */}
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
          <span>© {new Date().getFullYear()} Aurex Agency. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
