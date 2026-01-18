import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown, Database, Wrench, HeartPulse, Scale, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import aurexLogoMain from "@/assets/aurex-logo-main.png";

const solutions = [
  {
    name: "AI Lead Reactivation",
    href: "/solutions/ai-lead-reactivation",
    description: "Database Monetization",
    icon: Database,
  },
  {
    name: "Trade-Pro Automation",
    href: "/solutions/trade-pro-automation",
    description: "Contractors & HVAC",
    icon: Wrench,
  },
  {
    name: "Patient Lifecycle Systems",
    href: "/solutions/patient-lifecycle-systems",
    description: "HIPAA-Compliant Healthcare",
    icon: HeartPulse,
  },
  {
    name: "Legal Intake Velocity",
    href: "/solutions/legal-intake-velocity",
    description: "Law Firms",
    icon: Scale,
  },
  {
    name: "Town Loyalty Rewards",
    href: "/solutions/town-loyalty-rewards",
    description: "Town Loyalty Ecosystem",
    icon: MapPin,
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren" as const,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeInOut" as const,
      staggerChildren: 0.07,
      delayChildren: 0.1,
      when: "beforeChildren" as const,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const iconVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

const dropdownVariants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  const isSolutionActive = location.pathname.startsWith("/solutions");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={aurexLogoMain}
            alt="Aurex Agency"
            width={160}
            height={48}
            className="h-12 w-auto drop-shadow-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === "/"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isSolutionActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Solutions
              <ChevronDown
                className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-80 bg-card rounded-xl border border-border shadow-xl overflow-hidden z-50"
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="p-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <solution.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground text-sm">
                            {solution.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {solution.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navigation.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+16625551234"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            (662) 555-1234
          </a>
          <AppointmentDialog>
            <Button variant="accent" size="lg" className="shadow-gold">
              Schedule an Appointment
            </Button>
          </AppointmentDialog>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            variants={iconVariants}
            animate={mobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden glass border-b border-border/50 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container py-4 flex flex-col gap-2">
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === "/"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-1"
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              {/* Mobile Solutions Accordion */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isSolutionActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Solutions
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      className="ml-4 mt-2 space-y-1 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          to={solution.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileSolutionsOpen(false);
                          }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            location.pathname === solution.href
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          <solution.icon className="w-5 h-5 text-primary/70" />
                          <div>
                            <div className="text-sm font-medium">{solution.name}</div>
                            <div className="text-xs text-muted-foreground/70">
                              {solution.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navigation.slice(1).map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-1"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-4 border-t border-border mt-2">
                <a
                  href="tel:+16625551234"
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (662) 555-1234
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
