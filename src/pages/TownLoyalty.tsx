import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
      <section className="hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Serving North Mississippi Communities</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Town-Wide Loyalty Programs
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Unite your downtown businesses with a shared loyalty program that keeps customers shopping local and coming back for more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Towns Choose Smart Loyalty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unified loyalty program creates a rising tide that lifts all local businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 subtle-gradient">
        <div className="container">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. We guide you through every step.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step, index) => (
                <div 
                  key={step.title}
                  className="bg-card rounded-2xl p-6 shadow-soft relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 pr-16">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                EVERYTHING INCLUDED
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                A Complete Solution for Your Community
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
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <div className="bg-card rounded-2xl p-8 shadow-strong">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">12 Towns</div>
                    <div className="text-muted-foreground">Already thriving</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Tupelo", "Oxford", "Corinth", "Starkville"].map((town) => (
                    <div key={town} className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {town}, MS
                    </div>
                  ))}
                  <div className="text-sm text-muted-foreground pt-2">
                    + 8 more communities across North MS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Ready to Unite Your Town?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a call with our team to learn how a town-wide loyalty program can transform your local economy.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
