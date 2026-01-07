import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Store, 
  Smartphone, 
  Gift,
  BarChart3,
  Repeat,
  MessageSquare,
  CheckCircle2,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Smartphone,
    title: "Digital Punch Cards",
    description: "Replace paper punch cards with a digital solution customers love. Never lose a card again.",
  },
  {
    icon: Gift,
    title: "Custom Rewards",
    description: "Create rewards that match your brand. Free items, discounts, exclusive experiences—you decide.",
  },
  {
    icon: BarChart3,
    title: "Customer Insights",
    description: "Know who your best customers are and what keeps them coming back.",
  },
  {
    icon: Repeat,
    title: "Automated Campaigns",
    description: "Birthday rewards, win-back campaigns, and visit reminders—all on autopilot.",
  },
  {
    icon: MessageSquare,
    title: "SMS & Email Marketing",
    description: "Reach customers where they are with targeted messages that drive visits.",
  },
  {
    icon: Store,
    title: "Easy Integration",
    description: "Works with your existing POS or standalone. Setup takes minutes, not weeks.",
  },
];

const pricing = [
  {
    name: "Loyalty Program",
    price: "300",
    setupFee: "300",
    description: "Build lasting customer relationships",
    features: [
      "Digital loyalty cards",
      "Custom rewards program",
      "Customer database & insights",
      "Automated campaigns",
      "SMS & email marketing",
      "Dedicated support",
    ],
  },
  {
    name: "Custom Automations",
    price: "Custom",
    popular: true,
    description: "Scale your business with tailored solutions",
    features: [
      "Business process automation",
      "Custom workflow design",
      "Integration with your tools",
      "Growth strategy consulting",
      "Ongoing optimization",
      "Priority support",
    ],
  },
];

export default function ForBusinesses() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Store className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Built for Local Businesses</span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Smart Loyalty for Your Business
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Turn first-time visitors into lifelong customers with a loyalty program that's easy to set up and powerful to use.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl">
                See Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Build Loyalty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features that work together to keep customers coming back.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div 
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Real Results for Real Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our clients see measurable improvements in customer retention, visit frequency, and average spend.
              </p>
              <StaggerContainer className="grid grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="font-display text-3xl font-bold text-primary">+35%</div>
                    <div className="text-sm text-muted-foreground">Repeat Visits</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="font-display text-3xl font-bold text-accent">+28%</div>
                    <div className="text-sm text-muted-foreground">Avg. Order Value</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="font-display text-3xl font-bold text-success">92%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="font-display text-3xl font-bold text-primary">4.9x</div>
                    <div className="text-sm text-muted-foreground">ROI Average</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-card rounded-2xl p-8 shadow-strong">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed text-foreground">
                  "We implemented Smart Loyalty 6 months ago and our repeat customer rate went from 22% to 38%. The automated birthday campaigns alone bring in an extra $2,000/month."
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">Jennifer Martinez</div>
                  <div className="text-muted-foreground text-sm">Owner, Bella's Boutique • Oxford, MS</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((plan) => (
              <StaggerItem key={plan.name}>
                <div 
                  className={`bg-card rounded-2xl p-8 shadow-soft relative h-full ${
                    plan.popular ? 'ring-2 ring-accent shadow-medium' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Let's Talk
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    {plan.price === "Custom" ? (
                      <span className="font-display text-4xl font-bold text-foreground">Custom Pricing</span>
                    ) : (
                      <>
                        <span className="font-display text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                        {plan.setupFee && (
                          <div className="text-sm text-muted-foreground mt-1">+ ${plan.setupFee} setup fee</div>
                        )}
                      </>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "accent" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">{plan.price === "Custom" ? "Contact Us" : "Get Started"}</Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss how we can help you build customer loyalty and scale your operations.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Schedule Your Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
