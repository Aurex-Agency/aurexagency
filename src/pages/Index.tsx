import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowRight, Users, Zap, TrendingUp, Building2, Heart, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  return <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container relative">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: [0.25, 0.4, 0.25, 1]
        }}>
            <motion.div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Trusted by 500+ North MS Businesses</span>
            </motion.div>
            <motion.h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              Grow Your Business with{" "}
              <span className="relative">
                Smart Loyalty
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <motion.path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" initial={{
                  pathLength: 0
                }} animate={{
                  pathLength: 1
                }} transition={{
                  duration: 0.8,
                  delay: 0.7
                }} />
                </svg>
              </span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              We help North Mississippi businesses build lasting customer relationships through powerful loyalty programs and smart automation solutions.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Schedule an Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/town-loyalty">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border py-8">
        <div className="container">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(stat => <StaggerItem key={stat.label} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Thrive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From loyalty rewards to automated marketing, we provide the tools to grow your business and keep customers coming back.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {features.map(feature => <StaggerItem key={feature.title}>
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
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
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Solutions Built for Local Success
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
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/town-loyalty">Town Programs</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/for-businesses">For Businesses</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-6 shadow-medium">
                    <Building2 className="w-10 h-10 text-primary mb-4" />
                    <div className="font-display text-2xl font-bold text-foreground">250+</div>
                    <div className="text-sm text-muted-foreground">Partner Businesses</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-medium">
                    <Users className="w-10 h-10 text-accent mb-4" />
                    <div className="font-display text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="col-span-2 bg-card rounded-2xl p-6 shadow-medium">
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

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Loved by Local Businesses
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Hear from business owners who've transformed their customer relationships.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map(testimonial => <StaggerItem key={testimonial.author}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-primary-foreground/70 text-sm">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 lg:p-16 text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Schedule a free consultation call and see how Aurex Agency can help you build stronger scalable systems, increase customer lifetime value, and allow you to focus on working on your business.</p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Schedule an Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>;
}