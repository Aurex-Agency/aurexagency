import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowRight, Users, Zap, TrendingUp, Building2, CheckCircle2, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { useRef } from "react";
import { FloatingOrbs, RetroGridPattern } from "@/components/ui/decorative-elements";

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
  quote: "Aurex Agency transformed how we connect with customers. Our repeat visits are up 40% since joining!",
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
  value: "50+",
  label: "Local Businesses"
}, {
  value: "35%",
  label: "Avg. Sales Increase"
}, {
  value: "34K+",
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
  const backgroundDarkness = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.1, 0.25, 0.4]);
  const hueRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const saturation = useTransform(scrollYProgress, [0, 0.5, 1], [100, 110, 90]);
  
  const backgroundFilter = useTransform(
    [hueRotate, saturation],
    ([hue, sat]) => `hue-rotate(${hue}deg) saturate(${sat}%)`
  );

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Fixed gradient background - Deep Blue to Light Blue */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, hsl(230 84% 42%) 0%, hsl(220 80% 45%) 25%, hsl(200 90% 45%) 50%, hsl(185 95% 45%) 75%, hsl(180 100% 45%) 100%)",
          filter: backgroundFilter,
          willChange: "filter"
        }}
      />
      
      {/* Subtle darkening overlay for text readability */}
      <motion.div 
        className="fixed inset-0 bg-deep-blue-dark/20 pointer-events-none z-[1]"
        style={{ opacity: backgroundDarkness, willChange: "opacity" }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        <Layout>
          {/* Hero Section */}
          <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden -mt-[73px] pt-[73px]">
            {/* Animated decorative elements */}
            <div className="hidden md:block">
              <FloatingOrbs />
            </div>
            <RetroGridPattern />
            
            {/* Rotating ring decoration with cyan accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] pointer-events-none">
              <motion.div
                className="w-full h-full rounded-full border border-light-blue/30"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(180 100% 50% / 0.15), transparent, hsl(180 100% 50% / 0.1), transparent)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="container relative z-10 px-5 sm:px-6">
              <motion.div 
                className="max-w-4xl mx-auto text-center" 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {/* Glass pill badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 glass-dark rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 mt-4 sm:mt-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-light-blue" />
                  <span className="text-xs sm:text-sm font-medium text-white">Trusted by businesses and local communities</span>
                </motion.div>
                
                <motion.h1 
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight text-white px-2 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Grow Your Business with{" "}
                  <span className="block mt-2 sm:mt-3">
                    <span 
                      className="inline-block text-light-blue drop-shadow-lg"
                      style={{
                        fontFamily: "'Righteous', cursive",
                        fontSize: "1.25em",
                        letterSpacing: "0.06em",
                        textShadow: "0 4px 20px hsl(180 100% 50% / 0.4)"
                      }}
                    >
                      AUREX AGENCY
                    </span>
                    <motion.div 
                      className="h-1 sm:h-1.5 rounded-full overflow-hidden mx-auto mt-2 sm:mt-3 bg-gradient-to-r from-light-blue/20 via-light-blue to-light-blue/20"
                      style={{ width: "80%", maxWidth: "320px" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2 font-medium"
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.2)"
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  We help businesses create systems and loyalty programs to boost ROI and scale your business.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <AppointmentDialog>
                    <Button variant="accent" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                      Schedule an Appointment
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </AppointmentDialog>
                  <Button variant="outline" size="lg" className="glass-dark border-white/30 text-white hover:bg-white/10 hover:border-white/50 w-full sm:w-auto text-sm sm:text-base" asChild>
                    <Link to="/town-loyalty">Town Loyalty</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Decorative bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-blue/40 to-transparent" />
          </section>

          {/* Stats Bar with Glass Effect */}
          <section className="py-8 sm:py-12 relative">
            <div className="container px-4 sm:px-6">
              <motion.div 
                className="glass-dark rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-light-blue/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                  {stats.map(stat => (
                    <StaggerItem key={stat.label} className="text-center">
                      <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1 text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 sm:py-20 lg:py-28 relative overflow-hidden">
            <div className="container relative z-10 px-4 sm:px-6">
              <ScrollReveal className="text-center mb-10 sm:mb-14 lg:mb-18">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  Everything You Need to <span className="text-light-blue">Thrive</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto px-2">
                  From loyalty rewards to automated marketing, we provide the tools to grow your business and keep customers coming back.
                </p>
              </ScrollReveal>
              <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <StaggerItem key={feature.title}>
                    <motion.div 
                      className="glass-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full border border-light-blue/20 group"
                      whileHover={{ 
                        y: -8,
                        borderColor: "hsl(180 100% 50% / 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-light-blue/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-light-blue/30 transition-colors">
                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-light-blue" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-12 sm:py-20 lg:py-28 relative overflow-hidden">
            <div className="container px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                <ScrollReveal direction="left">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                    Solutions Built for <span className="text-light-blue">Local Success</span>
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8">
                    Whether you're a single business or an entire downtown district, we have the perfect solution to boost customer loyalty and streamline your operations.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {["Town-wide loyalty programs that benefit every local business", "Individual business loyalty & rewards systems", "Automated marketing and customer follow-ups", "Easy-to-use dashboards and analytics"].map((item, index) => (
                      <motion.li 
                        key={item} 
                        className="flex items-start gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-light-blue mt-0.5 shrink-0" />
                        <span className="text-sm sm:text-base text-white">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button variant="accent" size="default" className="w-full sm:w-auto" asChild>
                      <Link to="/town-loyalty">Town Programs</Link>
                    </Button>
                    <Button variant="outline" size="default" className="glass-dark border-white/30 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                      <Link to="/for-businesses">For Businesses</Link>
                    </Button>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="glass-dark rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-light-blue/20 relative">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                      <motion.div 
                        className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-light-blue/15"
                        whileHover={{ scale: 1.02, borderColor: "hsl(180 100% 50% / 0.3)" }}
                      >
                        <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-light-blue mb-3 sm:mb-4" />
                        <div className="font-display text-xl sm:text-2xl font-bold text-white">250+</div>
                        <div className="text-xs sm:text-sm text-white/60">Partner Businesses</div>
                      </motion.div>
                      <motion.div 
                        className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-light-blue/15"
                        whileHover={{ scale: 1.02, borderColor: "hsl(180 100% 50% / 0.3)" }}
                      >
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 text-light-blue mb-3 sm:mb-4" />
                        <div className="font-display text-xl sm:text-2xl font-bold text-white">50K+</div>
                        <div className="text-xs sm:text-sm text-white/60">Active Members</div>
                      </motion.div>
                      <motion.div 
                        className="col-span-2 glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-light-blue/15"
                        whileHover={{ scale: 1.02, borderColor: "hsl(180 100% 50% / 0.3)" }}
                      >
                        <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-light-blue mb-3 sm:mb-4" />
                        <div className="font-display text-xl sm:text-2xl font-bold text-white">$2.5M+</div>
                        <div className="text-xs sm:text-sm text-white/60">Local Revenue Generated</div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-blue/40 to-transparent" />
            
            <div className="container relative z-10 px-4 sm:px-6 pt-8 sm:pt-10">
              <ScrollReveal className="text-center mb-10 sm:mb-14">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  Loved by <span className="text-light-blue">Local Businesses</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 px-2">
                  Hear from business owners who've transformed their customer relationships.
                </p>
              </ScrollReveal>
              <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto pb-8 sm:pb-10">
                {testimonials.map(testimonial => (
                  <StaggerItem key={testimonial.author}>
                    <motion.div 
                      className="glass-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full border border-light-blue/20"
                      whileHover={{ borderColor: "hsl(180 100% 50% / 0.4)" }}
                    >
                      <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-light-blue text-light-blue" 
                          />
                        ))}
                      </div>
                      <blockquote className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed text-white">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-white">{testimonial.author}</div>
                        <div className="text-white/60 text-xs sm:text-sm">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-blue/40 to-transparent" />
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-20 lg:py-28 relative overflow-hidden">
            <div className="container px-4 sm:px-6">
              <ScrollReveal>
                <motion.div 
                  className="glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-20 text-center border border-light-blue/30 relative overflow-hidden"
                  whileHover={{ borderColor: "hsl(180 100% 50% / 0.5)" }}
                >
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-light-blue/20 to-transparent rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-tl from-light-blue/20 to-transparent rounded-tl-full" />
                  
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 relative z-10 drop-shadow-lg">
                    Ready to <span className="text-light-blue">Grow Your Business</span>?
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-10 max-w-2xl mx-auto relative z-10 px-2">
                    Schedule a free consultation call and see how Aurex Agency can help you build stronger scalable systems, increase customer lifetime value, and allow you to focus on working on your business.
                  </p>
                  <div className="flex justify-center relative z-10">
                    <AppointmentDialog>
                      <Button variant="accent" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                        Schedule an Appointment
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
