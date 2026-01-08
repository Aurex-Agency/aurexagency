import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowRight, Users, Zap, TrendingUp, Building2, Heart, CheckCircle2, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { useRef } from "react";
import { GoldSparkles, FloatingOrbs, RetroGridPattern, GoldDivider, MetallicGoldText } from "@/components/ui/decorative-elements";

const features = [{
  icon: Users,
  title: "Town-Wide Loyalty",
  description: "Unite your community with a shared rewards program that keeps dollars local."
}, {
  icon: Zap,
  title: "Smart Automations",
  description: "Save hours weekly with automated follow-ups, reminders, and marketing campaigns."
}, {
  icon: TrendingUp,
  title: "Proven Results",
  description: "Our clients see an average 35% increase in repeat customer visits."
}];

const testimonials = [{
  quote: "Smart Loyalty transformed how we connect with customers. Our repeat visits are up 40% since joining!",
  author: "Sarah Johnson",
  role: "Owner, Main Street Bakery",
  location: "Tupelo, MS"
}, {
  quote: "The automation features alone save me 10+ hours a week. Game changer for small business.",
  author: "Marcus Williams",
  role: "Owner, Williams Auto Care",
  location: "Oxford, MS"
}];

const stats = [{
  value: "500+",
  label: "Local Businesses"
}, {
  value: "35%",
  label: "Avg. Sales Increase"
}, {
  value: "50K+",
  label: "Loyal Customers"
}, {
  value: "98%",
  label: "Client Satisfaction"
}];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Background darkening and hue shift on scroll
  const backgroundDarkness = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.2, 0.5, 0.8]);
  const hueRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const saturation = useTransform(scrollYProgress, [0, 0.5, 1], [100, 110, 90]);

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Fixed gradient background that darkens on scroll */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, hsl(0 75% 45%) 0%, hsl(10 80% 40%) 25%, hsl(25 85% 35%) 50%, hsl(15 70% 25%) 75%, hsl(10 40% 12%) 100%)",
          filter: useTransform(
            [hueRotate, saturation],
            ([hue, sat]) => `hue-rotate(${hue}deg) saturate(${sat}%)`
          )
        }}
      />
      
      {/* Darkening overlay */}
      <motion.div 
        className="fixed inset-0 bg-black pointer-events-none z-[1]"
        style={{ opacity: backgroundDarkness }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        <Layout>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-[73px] pt-[73px]">
            {/* Animated decorative elements */}
            <FloatingOrbs />
            <RetroGridPattern />
            <GoldSparkles count={20} />
            
            {/* Rotating ring decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
              <motion.div
                className="w-full h-full rounded-full border border-accent/20"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(43 100% 50% / 0.1), transparent, hsl(43 100% 50% / 0.1), transparent)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="container relative z-10">
              <motion.div 
                className="max-w-4xl mx-auto text-center" 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {/* Glass pill badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 glass-dark rounded-full px-5 py-2.5 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-accent animate-glow-pulse" />
                  <span className="text-sm font-medium text-primary-foreground">Trusted by businesses and local communities</span>
                </motion.div>
                
                <motion.h1 
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-primary-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Grow Your Business with{" "}
                  <span className="relative inline-block">
                    <MetallicGoldText className="drop-shadow-lg">Aurex Agency</MetallicGoldText>
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-1 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <div className="w-full h-full gold-metallic" />
                    </motion.div>
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-primary-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  We help North Mississippi businesses build lasting customer relationships through powerful loyalty programs and smart automation solutions.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <AppointmentDialog>
                    <Button variant="accent" size="xl" className="shadow-gold-intense animate-pulse-gold gold-border-glow">
                      Schedule an Appointment
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </AppointmentDialog>
                  <Button variant="outline" size="xl" className="glass-dark border-accent/30 text-primary-foreground hover:bg-white/10 hover:border-accent/50" asChild>
                    <Link to="/town-loyalty">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Decorative bottom sparkles */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
              <GoldDivider className="absolute top-1/2" />
            </div>
          </section>

          {/* Stats Bar with Glass Effect */}
          <section className="py-12 relative">
            <div className="container">
              <motion.div 
                className="glass-dark rounded-3xl p-8 border border-accent/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map(stat => (
                    <StaggerItem key={stat.label} className="text-center">
                      <div className="font-display text-3xl lg:text-4xl font-bold mb-1">
                        <MetallicGoldText>{stat.value}</MetallicGoldText>
                      </div>
                      <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 lg:py-28 relative">
            <GoldSparkles count={8} />
            <div className="container relative z-10">
              <ScrollReveal className="text-center mb-14 lg:mb-18">
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  Everything You Need to <MetallicGoldText>Thrive</MetallicGoldText>
                </h2>
                <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                  From loyalty rewards to automated marketing, we provide the tools to grow your business and keep customers coming back.
                </p>
              </ScrollReveal>
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <StaggerItem key={feature.title}>
                    <motion.div 
                      className="glass-dark rounded-3xl p-8 h-full border border-accent/20 group"
                      whileHover={{ 
                        y: -8,
                        borderColor: "hsl(43 100% 50% / 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-2xl gold-metallic flex items-center justify-center mb-6 shadow-gold group-hover:shadow-gold-intense transition-shadow">
                        <feature.icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-primary-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 lg:py-28 relative">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal direction="left">
                  <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
                    Solutions Built for <MetallicGoldText>Local Success</MetallicGoldText>
                  </h2>
                  <p className="text-lg text-primary-foreground/70 mb-8">
                    Whether you're a single business or an entire downtown district, we have the perfect solution to boost customer loyalty and streamline your operations.
                  </p>
                  <ul className="space-y-4">
                    {["Town-wide loyalty programs that benefit every local business", "Individual business loyalty & rewards systems", "Automated marketing and customer follow-ups", "Easy-to-use dashboards and analytics"].map((item, index) => (
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
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button variant="accent" size="lg" className="shadow-gold" asChild>
                      <Link to="/town-loyalty">Town Programs</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="glass-dark border-accent/30 text-primary-foreground hover:bg-white/10" asChild>
                      <Link to="/for-businesses">For Businesses</Link>
                    </Button>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="glass-dark rounded-3xl p-8 lg:p-12 border border-accent/20 relative">
                    <GoldSparkles count={6} />
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <motion.div 
                        className="glass-dark rounded-2xl p-6 border border-accent/15"
                        whileHover={{ scale: 1.02, borderColor: "hsl(43 100% 50% / 0.3)" }}
                      >
                        <Building2 className="w-10 h-10 text-accent mb-4 animate-glow-pulse" />
                        <div className="font-display text-2xl font-bold text-primary-foreground">250+</div>
                        <div className="text-sm text-primary-foreground/60">Partner Businesses</div>
                      </motion.div>
                      <motion.div 
                        className="glass-dark rounded-2xl p-6 border border-accent/15"
                        whileHover={{ scale: 1.02, borderColor: "hsl(43 100% 50% / 0.3)" }}
                      >
                        <Users className="w-10 h-10 text-accent mb-4 animate-glow-pulse" />
                        <div className="font-display text-2xl font-bold text-primary-foreground">50K+</div>
                        <div className="text-sm text-primary-foreground/60">Active Members</div>
                      </motion.div>
                      <motion.div 
                        className="col-span-2 glass-dark rounded-2xl p-6 border border-accent/15"
                        whileHover={{ scale: 1.02, borderColor: "hsl(43 100% 50% / 0.3)" }}
                      >
                        <TrendingUp className="w-10 h-10 text-accent mb-4 animate-glow-pulse" />
                        <div className="font-display text-2xl font-bold text-primary-foreground">$2.5M+</div>
                        <div className="text-sm text-primary-foreground/60">Local Revenue Generated</div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 lg:py-28 relative">
            <GoldDivider className="absolute top-0 left-0 right-0" />
            <GoldSparkles count={10} />
            
            <div className="container relative z-10">
              <ScrollReveal className="text-center mb-14">
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  Loved by <MetallicGoldText>Local Businesses</MetallicGoldText>
                </h2>
                <p className="text-primary-foreground/70 text-lg">
                  Hear from business owners who've transformed their customer relationships.
                </p>
              </ScrollReveal>
              <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map(testimonial => (
                  <StaggerItem key={testimonial.author}>
                    <motion.div 
                      className="glass-dark rounded-3xl p-8 h-full border border-accent/20"
                      whileHover={{ borderColor: "hsl(43 100% 50% / 0.4)" }}
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 fill-accent text-accent animate-glow-pulse" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg mb-6 leading-relaxed text-primary-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-primary-foreground">{testimonial.author}</div>
                        <div className="text-primary-foreground/60 text-sm">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            
            <GoldDivider className="absolute bottom-0 left-0 right-0" />
          </section>

          {/* CTA Section */}
          <section className="py-20 lg:py-28 relative">
            <div className="container">
              <ScrollReveal>
                <motion.div 
                  className="glass-dark rounded-3xl p-10 lg:p-20 text-center border border-accent/30 relative overflow-hidden"
                  whileHover={{ borderColor: "hsl(43 100% 50% / 0.5)" }}
                >
                  <GoldSparkles count={15} />
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent/30 to-transparent rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/30 to-transparent rounded-tl-full" />
                  
                  <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4 relative z-10">
                    Ready to <MetallicGoldText>Grow Your Business</MetallicGoldText>?
                  </h2>
                  <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto relative z-10">
                    Schedule a free consultation call and see how Aurex Agency can help you build stronger scalable systems, increase customer lifetime value, and allow you to focus on working on your business.
                  </p>
                  <div className="flex justify-center relative z-10">
                    <AppointmentDialog>
                      <Button variant="accent" size="xl" className="shadow-gold-intense animate-pulse-gold gold-border-glow">
                        Schedule an Appointment
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </AppointmentDialog>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </section>
        </Layout>
      </div>
    </div>
  );
}