import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import heroImage from "@/assets/hero-traffic-illustration.jpg";

export const TrafficHero = () => {
  return (
    <Section className="hero-gradient min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 border border-accent/20 text-sm text-accent">
                Smart India Hackathon 2025
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                AI-Driven Smart 
                <span className="accent-gradient bg-clip-text text-transparent"> Traffic Management</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Revolutionizing urban mobility with intelligent traffic optimization. 
                Reduce congestion, improve efficiency, and create smarter cities through AI-powered solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect smooth-transition"
              >
                View Prototype
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-6 text-lg smooth-transition"
              >
                Learn More
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10%</div>
                <div className="text-sm text-muted-foreground">Reduced Commute</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">30%</div>
                <div className="text-sm text-muted-foreground">Less Emissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25%</div>
                <div className="text-sm text-muted-foreground">Fuel Savings</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-effect">
              <img 
                src={heroImage} 
                alt="AI-powered smart traffic management system visualization"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </Section>
  );
};