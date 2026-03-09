import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { PillarsSection } from "@/components/sections/pillars";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DifferentiationSection } from "@/components/sections/differentiation";
import { SecuritySection } from "@/components/sections/security";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PillarsSection />
      <DifferentiationSection />
      {/* SecuritySection is kept as a value-add from the original codebase */}
      <SecuritySection />
      <CTASection />
    </div>
  );
}
