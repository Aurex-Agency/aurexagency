import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Store, 
  Smartphone, 
  Gift,
  BarChart3,
  Repeat,
  MessageSquare,
  CheckCircle2,
  Star,
  Mail,
  Calendar,
  FileText,
  Users,
  Clock,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { BlueDivider } from "@/components/ui/decorative-elements";

const features = [
  {
    icon: Smartphone,
    title: "Digital Punch Cards",
    description: "Replace paper punch cards with a digital solution customers love. Never lose a card again.",
  },
  {
    icon: Gift,
    title: "Custom Rewards",
    description: "Create rewards that match your brand. Free items, discounts, exclusive experiences—you decide.",
  },
  {
    icon: BarChart3,
    title: "Customer Insights",
    description: "Know who your best customers are and what keeps them coming back.",
  },
  {
    icon: Repeat,
    title: "Automated Campaigns",
    description: "Birthday rewards, win-back campaigns, and visit reminders—all on autopilot.",
  },
  {
    icon: MessageSquare,
    title: "SMS & Email Marketing",
    description: "Reach customers where they are with targeted messages that drive visits.",
  },
  {
    icon: Store,
    title: "Easy Integration",
    description: "Works with your existing POS or standalone. Setup takes minutes, not weeks.",
  },
];

const automations = [
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated newsletters, promotional campaigns, and personalized follow-ups that nurture customer relationships.",
  },
  {
    icon: MessageSquare,
    title: "SMS Campaigns",
    description: "Text message marketing with high open rates. Perfect for time-sensitive offers and reminders.",
  },
  {
    icon: Calendar,
    title: "Appointment Reminders",
    description: "Reduce no-shows with automated appointment confirmations and reminders via text or email.",
  },
  {
    icon: FileText,
    title: "Review Requests",
    description: "Automatically request reviews from happy customers to build your online reputation.",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "Target the right customers with the right message based on their behavior and preferences.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track campaign performance and customer engagement with easy-to-understand dashboards.",
  },
];

const useCases = [
  {
    title: "Restaurants & Cafes",
    description: "Automated birthday offers, slow-day promotions, and post-visit follow-ups that keep tables full.",
    benefits: ["Birthday campaign automation", "Slow-day flash sales", "Review generation"],
  },
  {
    title: "Retail Stores",
    description: "Win back lapsed customers, announce new arrivals, and reward your VIPs automatically.",
    benefits: ["New arrival announcements", "VIP early access", "Inventory clearance alerts"],
  },
  {
    title: "Service Businesses",
    description: "Never miss a follow-up. Automate appointment reminders, service due notices, and satisfaction surveys.",
    benefits: ["Appointment reminders", "Service due notifications", "Post-service surveys"],
  },
  {
    title: "Health & Wellness",
    description: "Keep clients engaged with class reminders, membership renewal notices, and wellness tips.",
    benefits: ["Class/session reminders", "Membership renewals", "Progress check-ins"],
  },
];

const pricing = [
  {
    name: "Loyalty Program",
    price: "300",
    setupFee: "300",
    description: "Build lasting customer relationships",
    features: [
      "Digital loyalty cards",
      "Custom rewards program",
      "Customer database & insights",
      "Automated campaigns",
      "SMS & email marketing",
      "Dedicated support",
    ],
  },
  {
    name: "Custom Automations",
    price: "Custom",
    popular: true,
    description: "Scale your business with tailored solutions",
    features: [
      "Business process automation",
      "Custom workflow design",
      "Integration with your tools",
      "Growth strategy consulting",
      "Ongoing optimization",
      "Priority support",
    ],
  },
];

export default function ForBusinesses() {
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
              <Store className="w-4 h-4 text-light-blue" />
              <span className="text-sm font-medium text-white">Built for Local Businesses</span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Loyalty & <span className="text-light-blue">Automations</span> for Your Business
              <motion.div 
                className="h-1 sm:h-1.5 rounded-full overflow-hidden mx-auto mt-4 bg-light-blue"
                style={{ width: "60%", maxWidth: "300px" }}
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
              Turn first-time visitors into lifelong customers with loyalty programs and smart automations that save you time and grow your business.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <AppointmentDialog>
                <Button variant="accent" size="xl">
                  Schedule an Appointment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </AppointmentDialog>
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-light-blue/30 text-white hover:bg-white/20 hover:border-light-blue/50">
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <BlueDivider className="absolute bottom-0" />
        </div>
      </section>

      {/* Time Savings Stats */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(195 85% 35%) 0%, hsl(200 75% 30%) 100%)" }}>
        <div className="container px-4">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center">
            <StaggerItem>
              <div className="w-16 h-16 rounded-2xl bg-deep-blue flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-light-blue" />
              </div>
              <div className="font-display text-3xl font-bold text-white mb-2">10+ Hours</div>
              <p className="text-white/70">Saved per week on average</p>
            </StaggerItem>
            <StaggerItem>
              <div className="w-16 h-16 rounded-2xl bg-deep-blue flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageSquare className="w-8 h-8 text-light-blue" />
              </div>
              <div className="font-display text-3xl font-bold text-white mb-2">50,000+</div>
              <p className="text-white/70">Messages sent automatically monthly</p>
            </StaggerItem>
            <StaggerItem>
              <div className="w-16 h-16 rounded-2xl bg-deep-blue flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart3 className="w-8 h-8 text-light-blue" />
              </div>
              <div className="font-display text-3xl font-bold text-white mb-2">3x</div>
              <p className="text-white/70">Average increase in engagement</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Loyalty Features */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(200 75% 30%) 0%, hsl(210 70% 25%) 100%)" }}>
        <div className="container relative z-10 px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Everything You Need to Build <span className="text-light-blue">Loyalty</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Powerful features that work together to keep customers coming back.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-light-blue/20"
                  whileHover={{ y: -4, borderColor: "hsl(180 100% 45% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-blue flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-6 h-6 text-light-blue" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 70% 25%) 0%, hsl(220 65% 22%) 100%)" }}>
        <div className="container relative z-10 px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-light-blue" />
              <span className="text-sm font-medium text-light-blue">Save 10+ Hours Every Week</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful <span className="text-light-blue">Automation</span> Tools
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Put your marketing and customer communication on autopilot.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation) => (
              <StaggerItem key={automation.title}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-light-blue/20"
                  whileHover={{ y: -4, borderColor: "hsl(180 100% 45% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-blue flex items-center justify-center mb-4 shadow-lg">
                    <automation.icon className="w-6 h-6 text-light-blue" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {automation.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {automation.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(220 65% 22%) 0%, hsl(225 60% 20%) 100%)" }}>
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Built for <span className="text-light-blue">Every Industry</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our solutions are tailored to the unique needs of your business type.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-light-blue/20"
                  whileHover={{ borderColor: "hsl(180 100% 45% / 0.4)" }}
                >
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-light-blue shrink-0" />
                        <span className="text-sm text-white">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(225 60% 20%) 0%, hsl(228 55% 18%) 100%)" }}>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                Set It Up Once, Let It <span className="text-light-blue">Run Forever</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our platform is designed for busy business owners. No technical skills required.
              </p>
              <ul className="space-y-4">
                {[
                  "Choose from pre-built automation templates",
                  "Customize messages to match your brand voice",
                  "Set your triggers and timing preferences",
                  "Launch and watch your engagement grow",
                  "Adjust and optimize based on real results",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-deep-blue flex items-center justify-center shrink-0 shadow-lg">
                      <span className="text-light-blue font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/20">
                <div className="bg-white/5 rounded-2xl p-6 mb-4 border border-light-blue/15">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-deep-blue flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-light-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Birthday Campaign</div>
                      <div className="text-sm text-light-blue">Active • 127 sent this month</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/70">
                    Automatically sends birthday offers 3 days before customer birthdays
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 mb-4 border border-light-blue/15">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-deep-blue flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-light-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Win-Back Campaign</div>
                      <div className="text-sm text-light-blue">Active • 89 sent this month</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/70">
                    Re-engages customers who haven't visited in 30+ days
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-light-blue/15">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-deep-blue flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-light-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Review Request</div>
                      <div className="text-sm text-light-blue">Active • 234 sent this month</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/70">
                    Requests reviews 24 hours after a positive interaction
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(228 55% 18%) 0%, hsl(230 50% 16%) 100%)" }}>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                Real Results for <span className="text-light-blue">Real Businesses</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our clients see measurable improvements in customer retention, visit frequency, and average spend.
              </p>
              <StaggerContainer className="grid grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-light-blue/20">
                    <div className="font-display text-3xl font-bold text-light-blue">+35%</div>
                    <div className="text-sm text-white/70">Repeat Visits</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-light-blue/20">
                    <div className="font-display text-3xl font-bold text-light-blue">+28%</div>
                    <div className="text-sm text-white/70">Avg. Order Value</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-light-blue/20">
                    <div className="font-display text-3xl font-bold text-light-blue">92%</div>
                    <div className="text-sm text-white/70">Customer Satisfaction</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-light-blue/20">
                    <div className="font-display text-3xl font-bold text-light-blue">4.9x</div>
                    <div className="text-sm text-white/70">ROI Average</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-light-blue/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-light-blue text-light-blue" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed text-white">
                  "We implemented Aurex Agency 6 months ago and our repeat customer rate went from 22% to 38%. The automated birthday campaigns alone bring in an extra $2,000/month."
                </blockquote>
                <div>
                  <div className="font-semibold text-white">Jennifer Martinez</div>
                  <div className="text-white/60 text-sm">Owner, Bella's Boutique • Oxford, MS</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(230 50% 16%) 0%, hsl(230 45% 14%) 100%)" }}>
        <div className="container relative z-10 px-4">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, <span className="text-light-blue">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((plan) => (
              <StaggerItem key={plan.name}>
                <motion.div 
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative h-full border ${
                    plan.popular ? 'border-light-blue shadow-lg' : 'border-light-blue/20'
                  }`}
                  whileHover={{ borderColor: "hsl(180 100% 45% / 0.5)" }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-deep-blue text-light-blue px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Let's Talk
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-white/60 text-sm mt-1">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    {plan.price === "Custom" ? (
                      <span className="font-display text-4xl font-bold text-white">Custom Pricing</span>
                    ) : (
                      <>
                        <span className="font-display text-4xl font-bold text-light-blue">${plan.price}</span>
                        <span className="text-white/60">/month</span>
                        {plan.setupFee && (
                          <div className="text-sm text-white/50 mt-1">+ ${plan.setupFee} setup fee</div>
                        )}
                      </>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-light-blue mt-0.5 shrink-0" />
                        <span className="text-sm text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "accent" : "outline"} 
                    className={`w-full ${plan.popular ? '' : 'bg-white/10 backdrop-blur-sm border-light-blue/30 text-white hover:bg-white/20'}`}
                    asChild
                  >
                    <Link to="/contact">{plan.price === "Custom" ? "Contact Us" : "Get Started"}</Link>
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(230 45% 14%) 0%, hsl(230 84% 42%) 100%)" }}>
        <BlueDivider className="absolute top-0 left-0 right-0" />
        <div className="container text-center relative z-10 px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to <span className="text-light-blue">Grow Your Business?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss how we can help you build customer loyalty and scale your operations.
            </p>
            <AppointmentDialog>
              <Button variant="accent" size="xl">
                Schedule Your Appointment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </AppointmentDialog>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
