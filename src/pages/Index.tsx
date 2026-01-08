import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowRight, Users, Zap, TrendingUp, Building2, Heart, CheckCircle2, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { useRef } from "react";

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroDarkness = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return <Layout>
      {/* Hero Section with iOS Glassmorphism */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Darkening overlay on scroll */}
        <motion.div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: heroDarkness }}
        />
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        
        {/* Retro pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <motion.div 
          className="container relative z-10 py-20 lg:py-32"
          style={{ opacity: heroOpacity }}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Glass pill badge */}
            <motion.div 
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
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
                <span className="text-gradient-gold">Aurex Agency</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
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
                <Button variant="accent" size="xl" className="shadow-gold animate-pulse-gold">
                  Schedule an Appointment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </AppointmentDialog>
              <Button variant="outline" size="xl" className="glass border-white/30 text-primary-foreground hover:bg-white/20" asChild>
                <Link to="/town-loyalty">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar with Glass Effect */}
      <section className="bg-card border-b border-border py-10 -mt-16 relative z-20">
        <div className="container">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(stat => <StaggerItem key={stat.label} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 subtle-gradient">
        <div className="container">
          <ScrollReveal className="text-center mb-14 lg:mb-18">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need to <span className="text-gradient-gold">Thrive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From loyalty rewards to automated marketing, we provide the tools to grow your business and keep customers coming back.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {features.map(feature => <StaggerItem key={feature.title}>
                <div className="bg-card rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 h-full border border-border/50 group hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6 shadow-lg group-hover:shadow-gold transition-shadow">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Solutions Built for <span className="text-gradient">Local Success</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a single business or an entire downtown district, we have the perfect solution to boost customer loyalty and streamline your operations.
              </p>
              <ul className="space-y-4">
                {["Town-wide loyalty programs that benefit every local business", "Individual business loyalty & rewards systems", "Automated marketing and customer follow-ups", "Easy-to-use dashboards and analytics"].map((item, index) => <motion.li key={item} className="flex items-start gap-3" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1,
                duration: 0.4
              }}>
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="shadow-lg" asChild>
                  <Link to="/town-loyalty">Town Programs</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/for-businesses">For Businesses</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-8 lg:p-12 border border-border/50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-6 shadow-medium border border-border/50">
                    <Building2 className="w-10 h-10 text-primary mb-4" />
                    <div className="font-display text-2xl font-bold text-foreground">250+</div>
                    <div className="text-sm text-muted-foreground">Partner Businesses</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-medium border border-border/50">
                    <Users className="w-10 h-10 text-accent mb-4" />
                    <div className="font-display text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="col-span-2 bg-card rounded-2xl p-6 shadow-medium border border-border/50">
                    <TrendingUp className="w-10 h-10 text-success mb-4" />
                    <div className="font-display text-2xl font-bold text-foreground">$2.5M+</div>
                    <div className="text-sm text-muted-foreground">Local Revenue Generated</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials with retro gradient */}
      <section className="py-20 lg:py-28 hero-gradient-dark text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              Loved by <span className="text-gradient-gold">Local Businesses</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Hear from business owners who've transformed their customer relationships.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map(testimonial => <StaggerItem key={testimonial.author}>
                <div className="glass rounded-3xl p-8 h-full border border-white/10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
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
                </div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-10 lg:p-20 text-center border border-border/50 relative overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full" />
              
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4 relative z-10">
                Ready to <span className="text-gradient-gold">Grow Your Business</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
                Schedule a free consultation call and see how Aurex Agency can help you build stronger scalable systems, increase customer lifetime value, and allow you to focus on working on your business.
              </p>
              <div className="flex justify-center relative z-10">
                <AppointmentDialog>
                  <Button variant="accent" size="xl" className="shadow-gold animate-pulse-gold">
                    Schedule an Appointment
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </AppointmentDialog>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>;
}