import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, BOOKING_LINK } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-xl border-b border-coal/10 shadow-[0_8px_30px_-20px_rgba(26,23,20,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className={`mx-auto max-w-[1200px] px-5 sm:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="#top" className="font-display text-2xl tracking-tight text-coal flex items-center gap-1">
          Aurex<span className="text-clay">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.name}
              href={n.href}
              className="text-sm font-medium text-coal/65 hover:text-coal transition-colors"
            >
              {n.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.a
            href={BOOKING_LINK}
            target="_blank"
            rel="noreferrer"
            whileHover={reduce ? undefined : { y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-coal text-bone text-sm font-semibold px-5 h-11 hover:bg-coal-soft transition-colors"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-coal"
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-bone border-t border-coal/10"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.name}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-base text-coal/80 hover:bg-coal/5"
                >
                  {n.name}
                </a>
              ))}
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coal text-bone font-semibold h-12"
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
