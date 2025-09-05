import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Clock, Car, TrendingUp, AlertTriangle } from "lucide-react";

export const ProblemStatement = () => {
  const problems = [
    {
      icon: Clock,
      title: "Extended Commute Times",
      description: "Urban commuters lose 2+ hours daily in traffic congestion"
    },
    {
      icon: TrendingUp,
      title: "Rising Fuel Costs",
      description: "Inefficient traffic flow increases fuel consumption by 40%"
    },
    {
      icon: Car,
      title: "Increased Emissions",
      description: "Traffic jams contribute to 35% of urban carbon emissions"
    },
    {
      icon: AlertTriangle,
      title: "Economic Impact",
      description: "Traffic congestion costs cities billions annually in lost productivity"
    }
  ];

  return (
    <Section className="bg-background">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">The Urban Traffic Crisis</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Modern cities face unprecedented traffic challenges that demand intelligent solutions
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <Card 
              key={index}
              className="card-gradient border-navy-border p-6 smooth-transition hover:scale-105 hover:glow-effect"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};