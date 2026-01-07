import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [{
  name: "Home",
  href: "/"
}, {
  name: "Town Loyalty",
  href: "/town-loyalty"
}, {
  name: "For Businesses",
  href: "/for-businesses"
}, {
  name: "Automations",
  href: "/automations"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Contact",
  href: "/contact"
}];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren" as const
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeInOut" as const,
      staggerChildren: 0.07,
      delayChildren: 0.1,
      when: "beforeChildren" as const
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

const iconVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 }
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">AA</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">Aurex Agency </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              {item.name}
            </Link>)}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+16625551234" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            (662) 555-1234
          </a>
          <Button variant="accent" size="lg">
            Schedule an Appointment
          </Button>
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
            className="lg:hidden bg-card border-b border-border overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container py-4 flex flex-col gap-2">
              {navigation.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link 
                    to={item.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${location.pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-1"}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                variants={itemVariants}
                className="pt-4 border-t border-border mt-2"
              >
                <a href="tel:+16625551234" className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  (662) 555-1234
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>;
}