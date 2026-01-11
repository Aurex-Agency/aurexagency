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
import { BlueDivider } from "@/components/ui/decorative-elements";

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
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(230 84% 42%) 0%, hsl(210 80% 35%) 50%, hsl(195 85% 35%) 100%)" }}>
        {/* Rotating ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[550px] h-[300px] md:h-[450px] lg:h-[550px] pointer-events-none">
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
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About <span className="text-light-blue">Aurex Agency</span>
              <motion.div 
                className="h-1 sm:h-1.5 rounded-full overflow-hidden mx-auto mt-4 bg-light-blue"
                style={{ width: "50%", maxWidth: "240px" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 px-4 font-medium"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're on a mission to help businesses thrive through the power of customer loyalty and smart technology.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <BlueDivider className="absolute bottom-0" />
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(195 85% 35%) 0%, hsl(200 75% 30%) 100%)" }}>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                Our <span className="text-light-blue">Story</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-light-blue/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-light-blue" />
                    <span className="font-display text-xl font-bold text-white">Proudly Local</span>
                  </div>
                  <p className="text-white/70 mb-6">
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
                        <div className="font-display font-bold text-light-blue w-12">{milestone.year}</div>
                        <div className="text-white">{milestone.event}</div>
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
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(200 75% 30%) 0%, hsl(210 70% 25%) 100%)" }}>
        <div className="container relative z-10 px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              What We <span className="text-light-blue">Stand For</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our values guide everything we do, from product development to customer support.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center h-full border border-light-blue/20"
                  whileHover={{ y: -4, borderColor: "hsl(180 100% 45% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-deep-blue flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="w-7 h-7 text-light-blue" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 70% 25%) 0%, hsl(220 65% 22%) 100%)" }}>
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet the <span className="text-light-blue">Team</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A dedicated team of local professionals committed to your success.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-deep-blue mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-light-blue/30">
                    <span className="font-display text-3xl font-bold text-light-blue">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-light-blue font-medium text-sm mb-3">{member.role}</div>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(220 65% 22%) 0%, hsl(230 84% 42%) 100%)" }}>
        <BlueDivider className="absolute top-0 left-0 right-0" />
        <div className="container text-center relative z-10 px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white">
              Let's Build Something <span className="text-light-blue">Together</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Ready to see how Aurex Agency can help your business or community thrive?
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
