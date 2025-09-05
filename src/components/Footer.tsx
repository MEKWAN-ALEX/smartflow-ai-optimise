import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <Section className="bg-card border-t border-navy-border">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Hackathon Branding */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-bold text-lg">SIH</span>
            </div>
            <div>
              <div className="font-bold text-lg">Smart India Hackathon</div>
              <div className="text-sm text-muted-foreground">2025 Edition</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Building tomorrow's smart cities with AI-powered traffic solutions
          </p>
        </div>
        
        {/* Team Information */}
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">Team InnovateTraffic</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>Arjun Sharma - Team Lead & AI Developer</div>
            <div>Priya Patel - Computer Vision Engineer</div>
            <div>Raj Kumar - IoT Systems Architect</div>
            <div>Sneha Singh - UI/UX Designer</div>
          </div>
          <div className="text-xs text-muted-foreground">
            Problem Statement ID: SIH1234
          </div>
        </div>
        
        {/* Contact & Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent/30 text-accent hover:bg-accent/10"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent/30 text-accent hover:bg-accent/10"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent/30 text-accent hover:bg-accent/10"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            contact@innovatetraffic.tech
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-navy-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-muted-foreground">
          © 2025 InnovateTraffic Team. Smart India Hackathon submission.
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>Prototype Version 1.0</span>
          <div className="flex items-center space-x-1">
            <span>Powered by AI</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Section>
  );
};