import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "@/data/aurex";

const cols = {
  Company: [
    { name: "How it works", href: "/how-it-works" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Results", href: "/results" },
    { name: "About", href: "/about" },
  ],
  "Get started": [
    { name: "Book a Call", href: "/contact" },
    { name: "Dormant Lead Reactivation", href: "/pricing" },
    { name: "Marketing Blueprint", href: "/pricing" },
    { name: "One-time builds", href: "/pricing" },
  ],
};

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="shell relative py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 max-w-sm">
            <div className="font-extrabold text-2xl tracking-tight">
              Aurex<span className="text-accent">.</span>
            </div>
            <p className="mt-4 text-white/55 leading-relaxed">
              Your marketing department, on demand. Built to prove ROI, run by one operator who owns the number.
            </p>
            <p className="mt-5 text-sm text-white/40">North Mississippi · Tupelo · Oxford · Ripley</p>
          </div>

          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-semibold mb-4">{title}</div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.name}>
                    <Link to={l.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/45">
          {/* TODO: confirm contact email */}
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">{CONTACT_EMAIL}</a>
          <span>© {new Date().getFullYear()} Aurex. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
