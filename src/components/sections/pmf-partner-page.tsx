"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextScramble } from "@/components/ui/text-scramble";
import { OrbEffect } from "@/components/ui/orb-effect";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HolographicCard } from "@/components/ui/holographic-card";

const PMFPartnerPage = () => {
  return (
    <div className="relative min-h-screen bg-noise overflow-hidden pb-16 pt-32 md:pt-40 bg-white">
      {/* Background Orbs */}
      <OrbEffect />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Topbar / Tag */}
        <ScrollReveal width="100%">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-slate-200 rounded-full bg-white/80 backdrop-blur-md text-sm text-slate-600 shadow-lg shadow-indigo-500/5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse" />
              Met us at AI Startup Festival?
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 mb-20 lg:mb-32">
          {/* Main Hero Card */}
          <ScrollReveal width="100%" delay={0.1}>
            <HolographicCard className="p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[500px] border-slate-200 bg-white/50">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6 w-fit">
                Message from the Founder
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900">
                Make every{" "}
                <span className="text-gradient-primary">
                  <TextScramble text="AI agent" />
                </span>{" "}
                work with <span className="text-indigo-600">90%+ quality</span>.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                We’re building SupaEval to help teams ship reliable AI agents, copilots, and RAG systems — with confidence, not guesswork.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {["Early access", "Direct roadmap input", "Fast founder access"].map((benefit) => (
                  <span key={benefit} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium">
                    {benefit}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <MagneticButton className="w-full sm:w-auto h-12 px-8 text-base">
                  <a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Book a 15-min call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </MagneticButton>
                <MagneticButton variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base border-slate-200 bg-white">
                  <a href="mailto:imran@supaeval.com" className="flex items-center text-slate-900">
                    imran@supaeval.com
                  </a>
                </MagneticButton>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 w-fit">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                  S
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">Founder, SupaEval</div>
                  <div className="text-slate-500 text-xs">Direct Partnership</div>
                </div>
              </div>
            </HolographicCard>
          </ScrollReveal>

          {/* Side Cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ScrollReveal width="100%" delay={0.2}>
              <HolographicCard className="p-8 group border-slate-200 bg-white/50">
                <h3 className="text-indigo-600 text-xs uppercase tracking-widest mb-4 font-bold">Now inviting</h3>
                <p className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">5 PMF Partners</p>
                <p className="text-slate-600 leading-relaxed">
                  An elite cohort of AI teams to help shape the next stage of our quality intelligence platform.
                </p>
                <div className="mt-8 flex items-center text-indigo-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Apply Today <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </HolographicCard>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.3}>
              <HolographicCard className="p-8 border-slate-200 bg-white/50">
                <h3 className="text-indigo-600 text-xs uppercase tracking-widest mb-4 font-bold">Ideal Cohort</h3>
                <div className="space-y-4 mb-4">
                  <div className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                    AI Agents <br />
                    Copilots <br />
                    RAG Apps
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  If you’re building production-grade AI systems, this partnership is designed for you.
                </p>
              </HolographicCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Letter Section */}
        <ScrollReveal width="100%" delay={0.4}>
          <HolographicCard className="p-8 md:p-16 relative overflow-hidden border-slate-200 bg-white/50">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900">This is a personal invite.</h2>
            
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>Hi — I’m building <strong className="text-indigo-600 font-semibold italic text-xl">SupaEval</strong>.</p>
                <p>Too many AI products are launched without a reliable way to know if quality is improving, breaking, or drifting over time.</p>
                <p>Our mission is simple: <strong className="text-indigo-600 font-semibold underline decoration-indigo-400 underline-offset-8 decoration-2 text-xl">make every AI agent work with 90%+ quality.</strong></p>
                <p>We’re looking for a few PMF partners who want early access, a direct voice in the roadmap, and a close feedback loop with the founder.</p>
                
                <div className="pt-6 text-slate-900 font-bold text-xl">— Founder, SupaEval</div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "You get", value: "Early access to the platform", icon: CheckCircle },
                  { label: "You shape", value: "The future roadmap", icon: Edit3 },
                  { label: "We ask", value: "Candid product feedback", icon: MessageSquare },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="text-indigo-600 text-xs uppercase tracking-widest mb-2 font-bold">{item.label}</div>
                    <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <MagneticButton className="w-full h-14 text-lg font-bold">
                    <a href="https://calendly.com/yourlink" className="flex items-center justify-center w-full">
                      Become a PMF partner
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </HolographicCard>
        </ScrollReveal>

        {/* Footer info */}
        <ScrollReveal width="100%" delay={0.5}>
          <div className="mt-20 py-8 border-t border-slate-100 text-center text-slate-500 text-sm">
            <p>Join the next generation of AI teams building with confidence.</p>
            <p className="mt-2 flex items-center justify-center gap-1">
              Questions? Reach out at <Mail className="h-4 w-4 inline ml-1 mr-1" /> <a href="mailto:imran@supaeval.com" className="text-indigo-600 font-medium hover:underline">imran@supaeval.com</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

// Helper icons (simulating local versions for brevity, but would use Lucide in reality)
const CheckCircle = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Edit3 = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const MessageSquare = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;

export default PMFPartnerPage;
