import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  MessageSquare,
  Calendar
} from "lucide-react";
import { useState } from "react";

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
    content: "hello@smartloyalty.com",
    href: "mailto:hello@smartloyalty.com",
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
    // Form submission logic would go here
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
      <section className="hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Talk
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Ready to grow your business? Schedule a free demo or reach out with any questions. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-medium">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">Send Us a Message</h2>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(662) 555-1234"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                        Business Name
                      </label>
                      <Input
                        id="business"
                        name="business"
                        type="text"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select an option...</option>
                      <option value="town-loyalty">Town-Wide Loyalty Program</option>
                      <option value="business-loyalty">Business Loyalty Program</option>
                      <option value="automations">Business Automations</option>
                      <option value="both">Loyalty + Automations</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Schedule an Appointment Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8" />
                  <h3 className="font-display text-xl font-bold">Schedule an Appointment</h3>
                </div>
                <p className="text-primary-foreground/80 mb-6">
                  See Smart Loyalty in action. Schedule a free 30-minute call with our team.
                </p>
                <Button variant="accent" size="lg" className="w-full">
                  Schedule Now
                </Button>
              </div>
              
              {/* Contact Details */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground mb-1">{info.title}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-muted-foreground whitespace-pre-line">
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
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Common Questions
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
              <div key={faq.q} className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="font-display font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
