import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, BarChart3, MapPin, Activity, TrendingUp, AlertCircle } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <Section className="bg-background">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">Control Dashboard</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive traffic management interface for city administrators
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Main dashboard mockup */}
        <Card className="card-gradient border-accent/20 p-8 mb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left sidebar - Controls */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">Traffic Control Center</h3>
              
              <div className="space-y-3">
                <Card className="bg-navy-light border-navy-border p-4">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">System Status</div>
                      <div className="text-xs text-muted-foreground">All systems operational</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-navy-border p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm font-medium">Active Intersections</div>
                      <div className="text-xs text-muted-foreground">127 monitored zones</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-navy-border p-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="text-sm font-medium">Alerts</div>
                      <div className="text-xs text-muted-foreground">2 high congestion areas</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Center - Live map */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Live Traffic Map</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Real-time</Button>
                  <Button variant="outline" size="sm">Historical</Button>
                </div>
              </div>
              
              {/* Mock map interface */}
              <Card className="bg-navy-light border-navy-border h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative z-10 text-center space-y-2">
                  <Monitor className="w-12 h-12 text-muted-foreground mx-auto" />
                  <div className="text-muted-foreground">Interactive Traffic Map</div>
                  <div className="text-xs text-muted-foreground">Real-time congestion visualization</div>
                </div>
                
                {/* Mock traffic indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse delay-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-1000" />
                </div>
              </Card>
            </div>
          </div>
        </Card>
        
        {/* Bottom metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="card-gradient border-navy-border p-6 text-center">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Traffic Efficiency</div>
          </Card>
          
          <Card className="card-gradient border-navy-border p-6 text-center">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">12 min</div>
            <div className="text-sm text-muted-foreground">Avg. Response Time</div>
          </Card>
          
          <Card className="card-gradient border-navy-border p-6 text-center">
            <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">2.3k</div>
            <div className="text-sm text-muted-foreground">Vehicles/Hour</div>
          </Card>
          
          <Card className="card-gradient border-navy-border p-6 text-center">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">127</div>
            <div className="text-sm text-muted-foreground">Connected Signals</div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg glow-effect"
          >
            Access Full Dashboard
          </Button>
        </div>
      </div>
    </Section>
  );
};