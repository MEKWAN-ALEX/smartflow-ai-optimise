import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { TrendingDown, Clock, Leaf, DollarSign, Users, BarChart3 } from "lucide-react";

export const KeyOutcomes = () => {
  const outcomes = [
    {
      icon: Clock,
      metric: "10%",
      title: "Reduced Commute Time",
      description: "Average time savings per journey"
    },
    {
      icon: TrendingDown,
      metric: "25%",
      title: "Lower Traffic Congestion",
      description: "Measured reduction in bottlenecks"
    },
    {
      icon: Leaf,
      metric: "30%",
      title: "Emission Reduction",
      description: "CO2 emissions cut through efficiency"
    },
    {
      icon: DollarSign,
      metric: "20%",
      title: "Fuel Savings",
      description: "Economic benefit for commuters"
    },
    {
      icon: Users,
      metric: "95%",
      title: "User Satisfaction",
      description: "Improved travel experience"
    },
    {
      icon: BarChart3,
      metric: "40%",
      title: "System Efficiency",
      description: "Overall traffic network optimization"
    }
  ];

  return (
    <Section className="bg-background">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">Measurable Impact</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI-driven solution delivers quantifiable improvements across all key traffic metrics
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          return (
            <Card 
              key={index}
              className="card-gradient border-navy-border p-8 text-center smooth-transition hover:scale-105 hover:glow-effect group"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 smooth-transition">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent">{outcome.metric}</div>
                <h3 className="text-xl font-semibold">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Bottom highlight */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
          <BarChart3 className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold">Real-time performance monitoring and continuous optimization</span>
        </div>
      </div>
    </Section>
  );
};