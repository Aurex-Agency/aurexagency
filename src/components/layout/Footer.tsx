import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import aurexLogo from "@/assets/aurex-logo.png";

const footerLinks = {
  services: [{
    name: "Town Loyalty Program",
    href: "/town-loyalty"
  }, {
    name: "Business Loyalty",
    href: "/for-businesses"
  }, {
    name: "Business Automations",
    href: "/automations"
  }],
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Contact",
    href: "/contact"
  }]
};

export function Footer() {
  return <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Decorative sparkles */}
      <div className="absolute top-8 right-[10%] opacity-20">
        <Sparkles className="w-6 h-6 text-accent animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-[5%] opacity-20">
        <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={aurexLogo} 
                alt="Aurex Agency" 
                width={120}
                height={48}
                className="h-12 w-auto drop-shadow-lg"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Helping North Mississippi businesses grow with smart loyalty programs and automation solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-accent">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+16625551234" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  (662) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@aurexagency.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  hello@aurexagency.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Serving North Mississippi<br />Tupelo • Oxford • Corinth</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Aurex Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}