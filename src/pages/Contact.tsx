import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  MessageSquare,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { GoldSparkles, GoldDivider, MetallicGoldText } from "@/components/ui/decorative-elements";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(662) 555-1234",
    href: "tel:+16625551234",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@aurexagency.com",
    href: "mailto:hello@aurexagency.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: "North Mississippi\nTupelo • Oxford • Corinth",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon–Fri: 8am–6pm\nSat: 9am–1pm",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 75% 45%) 0%, hsl(10 80% 40%) 50%, hsl(15 70% 30%) 100%)" }}>
        <GoldSparkles count={8} />
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's <MetallicGoldText>Talk</MetallicGoldText>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to grow your business? Schedule a free demo or reach out with any questions. We're here to help.
            </motion.p>
          </motion.div>
        </div>
        <GoldDivider className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(15 70% 30%) 0%, hsl(10 50% 20%) 100%)" }}>
        <div className="container px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gold-metallic flex items-center justify-center shadow-gold">
                    <MessageSquare className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-primary-foreground">Send Us a Message</h2>
                    <p className="text-sm text-primary-foreground/60">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="h-12 bg-white/10 border-accent/20 text-primary-foreground placeholder:text-primary-foreground/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@business.com"
                        className="h-12 bg-white/10 border-accent/20 text-primary-foreground placeholder:text-primary-foreground/40"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(662) 555-1234"
                        className="h-12 bg-white/10 border-accent/20 text-primary-foreground placeholder:text-primary-foreground/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-primary-foreground mb-2">
                        Business Name
                      </label>
                      <Input
                        id="business"
                        name="business"
                        type="text"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        className="h-12 bg-white/10 border-accent/20 text-primary-foreground placeholder:text-primary-foreground/40"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-primary-foreground mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-lg border border-accent/20 bg-white/10 px-3 py-2 text-sm text-primary-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <option value="" className="bg-background text-foreground">Select an option...</option>
                      <option value="town-loyalty" className="bg-background text-foreground">Town-Wide Loyalty Program</option>
                      <option value="business-loyalty" className="bg-background text-foreground">Business Loyalty Program</option>
                      <option value="automations" className="bg-background text-foreground">Business Automations</option>
                      <option value="both" className="bg-background text-foreground">Loyalty + Automations</option>
                      <option value="other" className="bg-background text-foreground">Other / General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      className="resize-none bg-white/10 border-accent/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  
                  <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto shadow-gold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Schedule an Appointment Card */}
              <div className="glass-dark rounded-2xl p-8 border border-accent/30 relative overflow-hidden">
                <GoldSparkles count={3} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-8 h-8 text-accent animate-glow-pulse" />
                    <h3 className="font-display text-xl font-bold text-primary-foreground">Schedule an Appointment</h3>
                  </div>
                  <p className="text-primary-foreground/70 mb-6">
                    See Aurex Agency in action. Schedule a free 30-minute call with our team.
                  </p>
                  <AppointmentDialog>
                    <Button variant="accent" size="lg" className="w-full shadow-gold-intense animate-pulse-gold">
                      Schedule Now
                    </Button>
                  </AppointmentDialog>
                </div>
              </div>
              
              {/* Contact Details */}
              <div className="glass-dark rounded-2xl p-8 border border-accent/20">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg gold-metallic flex items-center justify-center shrink-0 shadow-gold">
                        <info.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-primary-foreground mb-1">{info.title}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-primary-foreground/70 hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-primary-foreground/70 whitespace-pre-line">
                            {info.content}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(10 50% 20%) 0%, hsl(10 40% 15%) 100%)" }}>
        <GoldSparkles count={4} />
        <div className="container relative z-10 px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Common <MetallicGoldText>Questions</MetallicGoldText>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does setup take?",
                a: "Most businesses are up and running within 24-48 hours. Town-wide programs typically take 2-4 weeks.",
              },
              {
                q: "Is there a long-term contract?",
                a: "No! All our plans are month-to-month. You can cancel anytime with no penalties.",
              },
              {
                q: "Do I need special equipment?",
                a: "No special hardware required. Our system works with your existing devices and POS.",
              },
              {
                q: "What support do you offer?",
                a: "We provide phone, email, and chat support, plus personalized onboarding and training.",
              },
            ].map((faq) => (
              <motion.div 
                key={faq.q} 
                className="glass-dark rounded-xl p-6 border border-accent/20"
                whileHover={{ borderColor: "hsl(43 100% 50% / 0.4)" }}
              >
                <h4 className="font-display font-bold text-primary-foreground mb-2">{faq.q}</h4>
                <p className="text-primary-foreground/70 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}