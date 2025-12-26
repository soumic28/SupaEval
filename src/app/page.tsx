import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { PillarsSection } from "@/components/sections/pillars";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { DifferentiationSection } from "@/components/sections/differentiation";
import { SecuritySection } from "@/components/sections/security";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <HowItWorksSection />
      <DifferentiationSection />
      <SecuritySection />
      <CTASection />
    </div>
  );
}
