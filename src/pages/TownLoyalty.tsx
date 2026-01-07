import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Store, 
  Users, 
  CreditCard, 
  BarChart3, 
  Gift,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { AppointmentDialog } from "@/components/AppointmentDialog";

const benefits = [
  {
    icon: Store,
    title: "Participating Businesses",
    description: "Customers earn points at any participating local business, encouraging them to shop local.",
  },
  {
    icon: CreditCard,
    title: "Unified Rewards Card",
    description: "One card or app works everywhere in town. Simple for customers, powerful for businesses.",
  },
  {
    icon: BarChart3,
    title: "Community Analytics",
    description: "Track town-wide shopping trends and see how your business compares to peers.",
  },
  {
    icon: Gift,
    title: "Shared Promotions",
    description: "Run coordinated town-wide events and promotions that benefit everyone.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Town Signs Up",
    description: "Your chamber of commerce or downtown association partners with us to launch the program.",
  },
  {
    step: "2",
    title: "Businesses Join",
    description: "Local businesses sign up with minimal setup. We handle all the technology.",
  },
  {
    step: "3",
    title: "Customers Earn & Spend",
    description: "Shoppers earn points everywhere and redeem rewards at participating businesses.",
  },
  {
    step: "4",
    title: "Community Thrives",
    description: "Watch as customer loyalty grows and local spending increases across your entire town.",
  },
];

export default function TownLoyalty() {
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
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Serving North Mississippi Communities</span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Town-Wide Loyalty Programs
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Unite your downtown businesses with a shared loyalty program that keeps customers shopping local and coming back for more.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Towns Choose Smart Loyalty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unified loyalty program creates a rising tide that lifts all local businesses.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div 
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. We guide you through every step.
            </p>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step) => (
                <StaggerItem key={step.title}>
                  <div 
                    className="bg-card rounded-2xl p-6 shadow-soft relative overflow-hidden h-full"
                  >
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 pr-16">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                EVERYTHING INCLUDED
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                A Complete Solution for Your Community
              </h2>
              <ul className="space-y-4">
                {[
                  "Custom-branded loyalty cards and mobile app",
                  "Point-of-sale integration with major providers",
                  "Real-time analytics dashboard for each business",
                  "Automated customer communications",
                  "Town-wide promotional campaigns",
                  "Dedicated local support team",
                  "Training for all participating businesses",
                  "Marketing materials and launch support",
                ].map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
                <div className="bg-card rounded-2xl p-8 shadow-strong">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-foreground">12 Towns</div>
                      <div className="text-muted-foreground">Already thriving</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Tupelo", "Oxford", "Corinth", "Starkville"].map((town) => (
                      <div key={town} className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {town}, MS
                      </div>
                    ))}
                    <div className="text-sm text-muted-foreground pt-2">
                      + 8 more communities across North MS
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Ready to Unite Your Town?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a call with our team to learn how a town-wide loyalty program can transform your local economy.
            </p>
            <AppointmentDialog>
              <Button variant="accent" size="xl">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </AppointmentDialog>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
