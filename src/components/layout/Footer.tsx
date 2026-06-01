import { Link } from "react-router-dom";
import aurexLogoMain from "@/assets/aurex-logo-main.png";

const cols = {
  Site: [
    { name: "Home", href: "/" },
    { name: "Results", href: "/results" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ],
  Verticals: [
    { name: "Med Spas & Hormone Clinics", href: "/services" },
    { name: "Roofing & HVAC", href: "/services" },
  ],
  Flagship: [
    { name: "Growth Engine", href: "/growth-engine" },
    { name: "Book a Strategy Call", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="surface-ink relative overflow-hidden">
      <div className="absolute inset-0 mesh-amber opacity-30 pointer-events-none" />
      <div className="container relative py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={aurexLogoMain} alt="Aurex Agency" className="h-10 w-auto" />
              <span className="font-display text-2xl text-cream">Aurex</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              AI growth infrastructure for med spas, hormone clinics, roofers, and HVAC companies.
            </p>
          </div>

          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.22em] text-amber font-semibold mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.name}>
                    <Link to={l.href} className="text-cream/70 hover:text-amber text-sm transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-thin mt-14 mb-6 opacity-30" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Aurex Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-cream/40 text-sm">
            <a href="mailto:hello@aurexagency.com" className="hover:text-amber">hello@aurexagency.com</a>
            <span>North Mississippi. Serving nationwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
