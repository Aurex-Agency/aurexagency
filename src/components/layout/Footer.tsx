import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
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
  return <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">SL</span>
              </div>
              <span className="font-display font-bold text-xl">Aurex Agency</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Helping North Mississippi businesses grow with smart loyalty programs and automation solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+16625551234" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  (662) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@smartloyalty.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  hello@smartloyalty.com
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
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Aurex Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}