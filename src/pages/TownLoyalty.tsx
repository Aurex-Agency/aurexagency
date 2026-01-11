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
import { BlueDivider } from "@/components/ui/decorative-elements";

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
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(230 84% 42%) 0%, hsl(210 80% 35%) 50%, hsl(195 85% 35%) 100%)" }}>
        {/* Rotating ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] lg:w-[650px] h-[350px] md:h-[500px] lg:h-[650px] pointer-events-none">
          <motion.div
            className="w-full h-full rounded-full border border-light-blue/20"
            style={{
              background: "conic-gradient(from 0deg, transparent, hsl(180 100% 45% / 0.1), transparent, hsl(180 100% 45% / 0.1), transparent)"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container relative z-10 py-20 lg:py-28">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="w-4 h-4 text-light-blue" />
              <span className="text-sm font-medium text-white">Serving North Mississippi Communities</span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Town-Wide <span className="text-light-blue">Loyalty Programs</span>
              <motion.div 
                className="h-1 sm:h-1.5 rounded-full overflow-hidden mx-auto mt-4 bg-light-blue"
                style={{ width: "60%", maxWidth: "280px" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-10 px-4 font-medium"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
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
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-light-blue/30 text-white hover:bg-white/20 hover:border-light-blue/50" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <BlueDivider className="absolute bottom-0" />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-20 relative" style={{ background: "linear-gradient(180deg, hsl(195 85% 35%) 0%, hsl(195 85% 35%) 100%)" }}>
        <div className="container relative z-10 px-4">
          <ScrollReveal className="text-center mb-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
              See Our <span className="text-light-blue">Program in Action</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Watch how town-wide loyalty programs are transforming local communities.
            </p>
          </ScrollReveal>
          <motion.div 
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-light-blue/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://player.vimeo.com/video/1153263936?h=d982db0d51&autoplay=1&loop=1&muted=1&background=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Aurex Agency Town Loyalty Program"
              />
            </div>
          </motion.div>
          <p className="text-center text-white/50 text-sm mt-4">
            Click video to pause/play
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(195 85% 35%) 0%, hsl(200 75% 30%) 100%)" }}>
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Towns Choose <span className="text-light-blue">Aurex Agency</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto px-4">
              A unified loyalty program creates a rising tide that lifts all local businesses.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-light-blue/20"
                  whileHover={{ y: -4, borderColor: "hsl(180 100% 45% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-blue flex items-center justify-center mb-4 shadow-lg">
                    <benefit.icon className="w-6 h-6 text-light-blue" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(200 75% 30%) 0%, hsl(210 70% 25%) 100%)" }}>
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              How It <span className="text-light-blue">Works</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto px-4">
              Getting started is simple. We guide you through every step.
            </p>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step) => (
                <StaggerItem key={step.title}>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden h-full border border-light-blue/20"
                    whileHover={{ borderColor: "hsl(180 100% 45% / 0.4)" }}
                  >
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center shadow-lg">
                      <span className="font-display text-xl font-bold text-light-blue">{step.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2 pr-16">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
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
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 70% 25%) 0%, hsl(220 65% 22%) 100%)" }}>
        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-light-blue text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                EVERYTHING INCLUDED
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                A Complete Solution for Your <span className="text-light-blue">Community</span>
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
                    <CheckCircle2 className="w-5 h-5 text-light-blue mt-0.5 shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-light-blue/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-deep-blue flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-light-blue" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-white">12 Towns</div>
                      <div className="text-white/60">Already thriving</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Tupelo", "Oxford", "Corinth", "Starkville"].map((town) => (
                      <div key={town} className="flex items-center gap-2 text-white/70">
                        <MapPin className="w-4 h-4 text-light-blue" />
                        {town}, MS
                      </div>
                    ))}
                    <div className="text-sm text-white/50 pt-2">
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
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(220 65% 22%) 0%, hsl(230 84% 42%) 100%)" }}>
        <BlueDivider className="absolute top-0 left-0 right-0" />
        <div className="container text-center relative z-10 px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to <span className="text-light-blue">Unite Your Town?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
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
