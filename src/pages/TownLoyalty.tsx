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
import { GoldSparkles, GoldDivider, MetallicGoldText } from "@/components/ui/decorative-elements";

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
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 75% 45%) 0%, hsl(10 80% 40%) 50%, hsl(15 70% 30%) 100%)" }}>
        <GoldSparkles count={8} />
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="w-4 h-4 text-accent animate-glow-pulse" />
              <span className="text-sm font-medium text-primary-foreground">Serving North Mississippi Communities</span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Town-Wide <MetallicGoldText>Loyalty Programs</MetallicGoldText>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Unite your downtown businesses with a shared loyalty program that keeps customers shopping local and coming back for more.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="accent" size="xl" className="shadow-gold" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="glass-dark border-accent/30 text-primary-foreground hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <GoldDivider className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(15 70% 30%) 0%, hsl(10 50% 20%) 100%)" }}>
        <GoldSparkles count={4} />
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Why Towns Choose <MetallicGoldText>Aurex Agency</MetallicGoldText>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto px-4">
              A unified loyalty program creates a rising tide that lifts all local businesses.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div 
                  className="glass-dark rounded-2xl p-6 h-full border border-accent/20"
                  whileHover={{ y: -4, borderColor: "hsl(43 100% 50% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl gold-metallic flex items-center justify-center mb-4 shadow-gold">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(10 50% 20%) 0%, hsl(10 40% 15%) 100%)" }}>
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              How It <MetallicGoldText>Works</MetallicGoldText>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto px-4">
              Getting started is simple. We guide you through every step.
            </p>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step) => (
                <StaggerItem key={step.title}>
                  <motion.div 
                    className="glass-dark rounded-2xl p-6 relative overflow-hidden h-full border border-accent/20"
                    whileHover={{ borderColor: "hsl(43 100% 50% / 0.4)" }}
                  >
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full gold-metallic flex items-center justify-center shadow-gold">
                      <span className="font-display text-xl font-bold text-accent-foreground">{step.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary-foreground mb-2 pr-16">
                      {step.title}
                    </h3>
                    <p className="text-primary-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(10 40% 15%) 0%, hsl(10 35% 12%) 100%)" }}>
        <GoldSparkles count={6} />
        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4 animate-glow-pulse" />
                EVERYTHING INCLUDED
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                A Complete Solution for Your <MetallicGoldText>Community</MetallicGoldText>
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
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0 animate-glow-pulse" />
                    <span className="text-primary-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-dark rounded-3xl p-8 lg:p-12 border border-accent/20">
                <GoldSparkles count={3} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl gold-metallic flex items-center justify-center shadow-gold">
                      <Users className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-primary-foreground">12 Towns</div>
                      <div className="text-primary-foreground/60">Already thriving</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Tupelo", "Oxford", "Corinth", "Starkville"].map((town) => (
                      <div key={town} className="flex items-center gap-2 text-primary-foreground/70">
                        <MapPin className="w-4 h-4 text-accent" />
                        {town}, MS
                      </div>
                    ))}
                    <div className="text-sm text-primary-foreground/50 pt-2">
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
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(10 35% 12%) 0%, hsl(0 75% 45%) 100%)" }}>
        <GoldDivider className="absolute top-0 left-0 right-0" />
        <GoldSparkles count={6} />
        <div className="container text-center relative z-10 px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to <MetallicGoldText>Unite Your Town?</MetallicGoldText>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a call with our team to learn how a town-wide loyalty program can transform your local economy.
            </p>
            <AppointmentDialog>
              <Button variant="accent" size="xl" className="shadow-gold-intense animate-pulse-gold">
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