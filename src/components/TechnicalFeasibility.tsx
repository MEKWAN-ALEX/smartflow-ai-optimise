import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Wifi, Camera, Cpu, Cloud, Smartphone, Network } from "lucide-react";

export const TechnicalFeasibility = () => {
  const technologies = [
    {
      icon: Camera,
      title: "Camera Networks",
      description: "High-resolution traffic monitoring cameras with edge computing capabilities",
      status: "Deployable"
    },
    {
      icon: Wifi,
      title: "IoT Sensors",
      description: "Vehicle detection sensors and environmental monitoring devices",
      status: "Ready"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Real-time processing at traffic intersections for instant decision making",
      status: "Available"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platform for AI model training and traffic pattern analysis",
      status: "Implemented"
    },
    {
      icon: Network,
      title: "5G Connectivity",
      description: "Ultra-low latency communication between traffic systems and control centers",
      status: "Compatible"
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Real-time traffic updates and route optimization for commuters",
      status: "Enabled"
    }
  ];

  return (
    <Section className="bg-card">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">Technical Infrastructure</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Built on proven technologies with seamless integration into existing urban infrastructure
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <Card 
              key={index}
              className="card-gradient border-navy-border p-6 smooth-transition hover:scale-105 hover:glow-effect"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                    {tech.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{tech.title}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Integration highlight */}
      <div className="mt-16">
        <Card className="card-gradient border-accent/20 p-8 text-center">
          <div className="space-y-4">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
              <Network className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Seamless Integration</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our solution integrates with existing traffic management systems, requiring minimal 
              infrastructure changes while delivering maximum impact. Compatible with standard 
              traffic signals, SCADA systems, and municipal control centers.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};