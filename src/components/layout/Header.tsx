import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookCallDialog } from "@/components/BookCallDialog";
import aurexLogoMain from "@/assets/aurex-logo-main.png";

const nav = [
  { name: "Home", href: "/" },
  { name: "Results", href: "/results" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Growth Engine", href: "/growth-engine" },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={aurexLogoMain} alt="Aurex Agency" className="h-9 lg:h-10 w-auto" />
          <span className="font-display text-xl font-medium text-ink hidden sm:inline">Aurex</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = location.pathname === n.href;
            return (
              <Link
                key={n.name}
                to={n.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {n.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <BookCallDialog>
            <button className="btn-amber px-5 h-11 text-sm">Book a Strategy Call</button>
          </BookCallDialog>
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
                <BookCallDialog>
                  <button className="btn-amber w-full h-12">Book a Strategy Call</button>
                </BookCallDialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
