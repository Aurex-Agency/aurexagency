import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aurexLogoMain from "@/assets/aurex-logo-main.png";

const nav = [
  { name: "Home", href: "/" },
  { name: "Med Spas", href: "/med-spas" },
  { name: "Home Services", href: "/home-services" },
  { name: "Health Practices", href: "/health-practices" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const goAudit = () => {
    if (location.pathname === "/contact") {
      document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact#audit";
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-xl border-b hairline" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center">
          <img src={aurexLogoMain} alt="Aurex" className="h-9 lg:h-10 w-auto" />
        </Link>


        <div className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = location.pathname === n.href;
            return (
              <Link
                key={n.name}
                to={n.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {n.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <button onClick={goAudit} className="btn-amber px-5 h-11 text-sm">Book a Call</button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-cream border-t hairline overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.name}
                  to={n.href}
                  className="px-3 py-3 rounded-lg text-base text-ink hover:bg-ink/5"
                >
                  {n.name}
                </Link>
              ))}
              <div className="pt-3">
                <button onClick={goAudit} className="btn-amber w-full h-12">Book a Call</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
