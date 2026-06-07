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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b hairline" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center">
          <img src={aurexLogoMain} alt="Aurex, ROI-first marketing agency in North Mississippi" className="h-9 lg:h-10 w-auto" />
        </Link>


        <div className="hidden lg:flex items-center gap-7">
          {nav.map((n) => {
            const active = location.pathname === n.href;
            return (
              <Link
                key={n.name}
                to={n.href}
                className={`relative text-[13px] font-medium tracking-tight transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                  active
                    ? "text-foreground after:w-full"
                    : "text-foreground/55 hover:text-foreground after:w-0 hover:after:w-full"
                }`}
              >
                {n.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link to="/book" className="btn-amber px-5 h-10 text-[13px] cursor-pointer">Book a Call</Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-foreground"
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
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t hairline overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.name}
                  to={n.href}
                  className="px-3 py-3 rounded-lg text-base text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                >
                  {n.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link to="/book" className="btn-amber w-full h-12 cursor-pointer">Book a Call</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
