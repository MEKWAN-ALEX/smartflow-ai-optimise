import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Brain, Camera, Activity, Zap } from "lucide-react";

export const SolutionOverview = () => {
  const solutionSteps = [
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Real-time traffic monitoring through advanced camera networks",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Machine learning algorithms analyze traffic patterns and predict optimal flows",
      step: "02"
    },
    {
      icon: Activity,
      title: "Reinforcement Learning",
      description: "Adaptive signal timing optimization based on real-time conditions",
      step: "03"
    },
    {
      icon: Zap,
      title: "Smart Deployment",
      description: "Instant signal adjustments across synchronized traffic networks",
      step: "04"
    }
  ];

  return (
    <Section className="bg-card">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">Intelligent Solution Architecture</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI-powered system combines computer vision, machine learning, and reinforcement learning 
          to create a self-optimizing traffic management network
        </p>
      </div>
      
      <div className="relative">
        {/* Connection lines */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center z-10">
                  {step.step}
                </div>
                
                <Card className="card-gradient border-navy-border p-6 smooth-transition hover:scale-105 hover:glow-effect relative">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Central flow diagram */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-hero-gradient border border-accent/20">
          <div className="text-accent font-semibold">Input:</div>
          <div className="text-sm">Traffic Data</div>
          <div className="text-accent">→</div>
          <div className="text-sm">AI Analysis</div>
          <div className="text-accent">→</div>
          <div className="text-sm">Signal Optimization</div>
          <div className="text-accent">→</div>
          <div className="text-primary font-semibold">Output: Reduced Congestion</div>
        </div>
      </div>
    </Section>
  );
};