import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Zap, 
  Clock,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  Users,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

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

export default function Automations() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Save 10+ Hours Every Week</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Automations
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Put your marketing and customer communication on autopilot. Focus on what you do best while we handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-2">10+ Hours</div>
              <p className="text-muted-foreground">Saved per week on average</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-2">50,000+</div>
              <p className="text-muted-foreground">Messages sent automatically monthly</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-success" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-2">3x</div>
              <p className="text-muted-foreground">Average increase in engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powerful Automation Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate your customer communications and marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation) => (
              <div 
                key={automation.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-4">
                  <automation.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {automation.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {automation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for Every Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our automation solutions are tailored to the unique needs of your business type.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div 
                key={useCase.title}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Set It Up Once, Let It Run Forever
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our automation platform is designed for busy business owners. No technical skills required.
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
                    <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
              <div className="bg-card rounded-2xl p-6 shadow-medium mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Birthday Campaign</div>
                    <div className="text-sm text-success">Active • 127 sent this month</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically sends birthday offers 3 days before customer birthdays
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-medium mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Win-Back Campaign</div>
                    <div className="text-sm text-success">Active • 89 sent this month</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Re-engages customers who haven't visited in 30+ days
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-medium">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Review Request</div>
                    <div className="text-sm text-success">Active • 234 sent this month</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Requests reviews 24 hours after a positive interaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how automation can save you time and grow your business.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Book Your Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
