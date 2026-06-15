import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, BOOKING_HREF } from "@/data/packages";
import aurexLogo from "@/assets/aurex-logo-main.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b hairline" : "bg-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between h-16 lg:h-[72px]">
        <Link to="/" className="flex items-center" aria-label="Aurex Agency home">
          <img src={aurexLogo} alt="Aurex Agency" className="h-8 lg:h-9 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.name}
                to={n.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {n.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link to={BOOKING_HREF} className="btn-primary h-10 px-5 text-sm">
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button className="md:hidden p-2 -mr-2 text-foreground" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background border-t hairline"
          >
            <div className="shell py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.name} to={n.href} className="px-2 py-3 rounded-lg text-base text-foreground/80 hover:bg-muted">
                  {n.name}
                </Link>
              ))}
              <Link to={BOOKING_HREF} className="btn-primary h-12 mt-2">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
