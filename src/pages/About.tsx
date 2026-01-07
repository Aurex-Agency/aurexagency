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
  { year: "2019", event: "Smart Loyalty founded in Tupelo, MS" },
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
      <section className="hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Smart Loyalty
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're on a mission to help North Mississippi businesses thrive through the power of customer loyalty and smart technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Smart Loyalty was born out of a simple observation: local businesses are the heart of our communities, but they often lack the tools that big corporations use to build customer loyalty.
                </p>
                <p>
                  Our founder, James Mitchell, spent 15 years running a family business in downtown Tupelo. He saw firsthand how hard it was to compete with big-box stores and online giants—not because local businesses weren't better, but because they didn't have the same resources.
                </p>
                <p>
                  In 2019, he set out to change that. Smart Loyalty was created to give every local business access to enterprise-level loyalty and automation tools, without the enterprise-level complexity or cost.
                </p>
                <p>
                  Today, we're proud to serve over 500 businesses across North Mississippi, helping them build stronger customer relationships and grow their revenue.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="font-display text-xl font-bold text-foreground">Proudly Local</span>
                </div>
                <p className="text-muted-foreground mb-6">
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
                      <div className="font-display font-bold text-primary w-12">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from product development to customer support.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div 
                  className="bg-card rounded-2xl p-6 shadow-soft text-center h-full"
                >
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of local professionals committed to your success.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium text-sm mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
              Let's Build Something Together
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Ready to see how Smart Loyalty can help your business or community thrive?
            </p>
            <Button variant="accent" size="xl" asChild>
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
