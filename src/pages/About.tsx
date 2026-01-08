import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Heart,
  Users,
  Target,
  Award,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { GoldSparkles, GoldDivider, MetallicGoldText } from "@/components/ui/decorative-elements";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe strong local businesses create strong communities. Everything we do is designed to help Main Street thrive.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We're not just a software vendor. We're your partner in growth, invested in your success.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "We measure success by your success. If you're not seeing results, we're not doing our job.",
  },
  {
    icon: Award,
    title: "Local Expertise",
    description: "Born and raised in North Mississippi, we understand the unique needs of businesses in our region.",
  },
];

const team = [
  {
    name: "James Mitchell",
    role: "Founder & CEO",
    bio: "Former Main Street business owner with 15+ years helping local businesses grow.",
  },
  {
    name: "Emily Rogers",
    role: "Head of Customer Success",
    bio: "Passionate about helping businesses succeed with personalized support and training.",
  },
  {
    name: "Marcus Thompson",
    role: "Head of Technology",
    bio: "Building intuitive tools that make powerful technology accessible to everyone.",
  },
];

const milestones = [
  { year: "2019", event: "Aurex Agency founded in Tupelo, MS" },
  { year: "2020", event: "Launched first town-wide program in Oxford" },
  { year: "2021", event: "Expanded to 5 North MS communities" },
  { year: "2022", event: "Introduced automation platform" },
  { year: "2023", event: "Reached 500+ business partners" },
  { year: "2024", event: "Serving 12 towns across the region" },
];

export default function About() {
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
              About <MetallicGoldText>Aurex Agency</MetallicGoldText>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're on a mission to help North Mississippi businesses thrive through the power of customer loyalty and smart technology.
            </motion.p>
          </motion.div>
        </div>
        <GoldDivider className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(15 70% 30%) 0%, hsl(10 50% 20%) 100%)" }}>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Our <MetallicGoldText>Story</MetallicGoldText>
              </h2>
              <div className="space-y-4 text-primary-foreground/70 leading-relaxed">
                <p>
                  Aurex Agency was born out of a simple observation: local businesses are the heart of our communities, but they often lack the tools that big corporations use to build customer loyalty.
                </p>
                <p>
                  Our founder, James Mitchell, spent 15 years running a family business in downtown Tupelo. He saw firsthand how hard it was to compete with big-box stores and online giants—not because local businesses weren't better, but because they didn't have the same resources.
                </p>
                <p>
                  In 2019, he set out to change that. Aurex Agency was created to give every local business access to enterprise-level loyalty and automation tools, without the enterprise-level complexity or cost.
                </p>
                <p>
                  Today, we're proud to serve over 500 businesses across North Mississippi, helping them build stronger customer relationships and grow their revenue.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-dark rounded-3xl p-8 lg:p-12 border border-accent/20">
                <GoldSparkles count={3} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-accent animate-glow-pulse" />
                    <span className="font-display text-xl font-bold text-primary-foreground">Proudly Local</span>
                  </div>
                  <p className="text-primary-foreground/70 mb-6">
                    Headquartered in Tupelo, MS, serving communities across North Mississippi.
                  </p>
                  <div className="space-y-3">
                    {milestones.map((milestone, index) => (
                      <motion.div 
                        key={milestone.year} 
                        className="flex gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <div className="font-display font-bold text-accent w-12">{milestone.year}</div>
                        <div className="text-primary-foreground">{milestone.event}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(10 50% 20%) 0%, hsl(10 40% 15%) 100%)" }}>
        <GoldSparkles count={4} />
        <div className="container relative z-10 px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              What We <MetallicGoldText>Stand For</MetallicGoldText>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Our values guide everything we do, from product development to customer support.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div 
                  className="glass-dark rounded-2xl p-6 text-center h-full border border-accent/20"
                  whileHover={{ y: -4, borderColor: "hsl(43 100% 50% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl gold-metallic flex items-center justify-center mx-auto mb-4 shadow-gold">
                    <value.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(10 40% 15%) 0%, hsl(10 35% 12%) 100%)" }}>
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Meet the <MetallicGoldText>Team</MetallicGoldText>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              A dedicated team of local professionals committed to your success.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full gold-metallic mx-auto mb-4 flex items-center justify-center shadow-gold">
                    <span className="font-display text-3xl font-bold text-accent-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-accent font-medium text-sm mb-3">{member.role}</div>
                  <p className="text-primary-foreground/70 text-sm">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(10 35% 12%) 0%, hsl(0 75% 45%) 100%)" }}>
        <GoldDivider className="absolute top-0 left-0 right-0" />
        <GoldSparkles count={6} />
        <div className="container text-center relative z-10 px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
              Let's Build Something <MetallicGoldText>Together</MetallicGoldText>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Ready to see how Aurex Agency can help your business or community thrive?
            </p>
            <Button variant="accent" size="xl" className="shadow-gold-intense animate-pulse-gold" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}