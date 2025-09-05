import { TrafficHero } from "@/components/TrafficHero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionOverview } from "@/components/SolutionOverview";
import { KeyOutcomes } from "@/components/KeyOutcomes";
import { TechnicalFeasibility } from "@/components/TechnicalFeasibility";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TrafficHero />
      <ProblemStatement />
      <SolutionOverview />
      <KeyOutcomes />
      <TechnicalFeasibility />
      <DashboardPreview />
      <Footer />
    </div>
  );
};

export default Index;
