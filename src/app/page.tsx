import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { PillarsSection } from "@/components/sections/pillars";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DifferentiationSection } from "@/components/sections/differentiation";
import { SecuritySection } from "@/components/sections/security";
import { CTASection } from "@/components/sections/cta";
import { AgentFlow } from "@/components/ui/agent-flow";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemSection />
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-2xl">
        <AgentFlow />
      </section>
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

