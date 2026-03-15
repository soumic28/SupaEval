"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Zap, Target, Sparkles, MessageSquare, CheckCircle, Edit3 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView, animate } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextScramble } from "@/components/ui/text-scramble";
import { OrbEffect } from "@/components/ui/orb-effect";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HolographicCard } from "@/components/ui/holographic-card";

// Count Up Component
const CountUp = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, count, delay]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const PMFPartnerPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-noise overflow-hidden pb-16 pt-24 md:pt-32 lg:pt-40 bg-white"
    >
      {/* Background Orbs with Mouse Follow */}
      <motion.div
        style={{
          x: useTransform(smoothMouseX, (v) => v * 0.05),
          y: useTransform(smoothMouseY, (v) => v * 0.05)
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <OrbEffect />
      </motion.div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Topbar / Tag with Live Indicator */}
        {/* <ScrollReveal width="100%">
          <div className="flex justify-center mb-8 md:mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-slate-200 rounded-full bg-white/80 backdrop-blur-md text-sm text-slate-600 shadow-lg shadow-indigo-500/5 group cursor-pointer"
            >
              <div className="flex items-center gap-2 pr-3 border-r border-slate-200">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-indigo-600">LIVE</span>
              </div>
              <span className="group-hover:text-indigo-600 transition-colors">Met us at AI Startup Festival?</span>
            </motion.div>
          </div>
        </ScrollReveal> */}

        {/* Letter Section - NOW FIRST */}
        <ScrollReveal width="100%" delay={0.2}>
          <HolographicCard className="p-6 sm:p-10 md:p-16 relative overflow-hidden border-slate-200 bg-white/50 mb-16 md:mb-20 lg:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900">This is a personal invite.</h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12">
              <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>Hi — I’m building <strong className="text-indigo-600 font-bold italic tracking-tight">SupaEval</strong>.</p>
                <p>Too many AI products are launched without a reliable way to know if quality is improving, breaking, or drifting over time.</p>
                <p className="text-pretty">Our mission is simple: <strong className="relative inline-block group">
                  <span className="relative z-10 text-indigo-700 font-bold">make every AI agent work with 90%+ quality.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-1 left-0 w-full h-3 bg-indigo-500/10 -z-0 origin-left"
                  />
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-indigo-400/30"
                  />
                </strong></p>
                <p>We’re looking for a few PMF partners who want early access, a direct voice in the roadmap, and a close feedback loop with the founder.</p>

                <div className="pt-4 md:pt-6">
                  <div className="text-slate-900 font-bold text-xl tracking-tight mb-1">— Founder, SupaEval</div>
                  <div className="text-indigo-600/50 font-mono text-xs font-bold font-serif italic text-lg ">Imran, Founder SupaEval</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "You get", value: "Early access to the platform", icon: CheckCircle },
                  { label: "You shape", value: "The future roadmap", icon: Edit3 },
                  { label: "We ask", value: "Candid product feedback", icon: MessageSquare },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10, backgroundColor: "rgba(248, 250, 252, 1)", borderColor: "rgba(199, 210, 254, 0.5)" }}
                    className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all cursor-default group"
                  >
                    <div className="flex items-center gap-3 mb-1.5 md:mb-2 text-indigo-600 font-bold tracking-widest text-[10px] md:text-xs uppercase">
                      <item.icon className="h-3 w-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                      {item.label}
                    </div>
                    <div className="text-lg md:text-xl font-bold text-slate-900">{item.value}</div>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <MagneticButton className="w-full h-12 md:h-14 text-base md:text-lg font-bold shadow-xl shadow-indigo-500/10 group">
                    <a href="https://calendly.com/yourlink" className="flex items-center justify-center w-full">
                      Become a PMF partner
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </HolographicCard>
        </ScrollReveal>

        {/* Hero Section - NOW SECOND */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-6 md:gap-8 mb-16 md:mb-20 lg:mb-32">
          {/* Main Hero Card */}
          <ScrollReveal width="100%" delay={0.3}>
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
              <HolographicCard className="p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[450px] md:min-h-[500px] border-slate-200 bg-white/50 shadow-2xl shadow-indigo-500/5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6 w-fit"
                >
                  <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                  Message from the Founder
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900">
                  Make every{" "}
                  <span className="text-gradient-primary">
                    <TextScramble text="AI agent" />
                  </span>{" "}
                  work with <span className="relative inline-block">
                    <span className="text-indigo-600">
                      <CountUp value={90} suffix="%+" delay={0.5} /> quality
                    </span>
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-1 bg-indigo-500/20 rounded-full overflow-hidden"
                    >
                      <motion.span
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-1/3"
                      />
                    </motion.span>
                  </span>.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mb-8 md:mb-10 leading-relaxed text-pretty">
                  We’re building SupaEval to help teams ship reliable AI agents, copilots, and RAG systems — with confidence, not guesswork.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
                  {[
                    { text: "Early access", icon: Zap },
                    { text: "Direct roadmap input", icon: Target },
                    { text: "Fast founder access", icon: Mail }
                  ].map((benefit, idx) => (
                    <motion.span
                      key={benefit.text}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(238, 242, 255, 1)", borderColor: "rgba(199, 210, 254, 1)" }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[13px] md:text-sm font-medium hover:text-indigo-600 transition-all cursor-default"
                    >
                      <benefit.icon className="h-3 w-3" />
                      {benefit.text}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                  <MagneticButton className="w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-indigo-500/20 group">
                    <a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Book a 15-min call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </MagneticButton>
                  <MagneticButton variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base border-slate-200 bg-white shadow-sm">
                    <a href="mailto:imran@supaeval.com" className="flex items-center text-slate-900 font-medium">
                      imran@supaeval.com
                    </a>
                  </MagneticButton>
                </div>

                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 w-fit shadow-md shadow-slate-200/50 cursor-pointer"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                        S
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      </motion.div>
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-sm tracking-tight">Founder, SupaEval</div>
                      <div className="text-slate-500 text-xs font-medium">Direct Partnership</div>
                    </div>
                  </motion.div>
                </div>
              </HolographicCard>
            </motion.div>
          </ScrollReveal>

          {/* Side Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            <ScrollReveal width="100%" delay={0.4}>
              <HolographicCard className="p-6 md:p-8 group border-slate-200 bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-indigo-600 text-[10px] md:text-xs uppercase tracking-widest font-bold">Now inviting</h3>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Mail className="h-4 w-4 text-indigo-400 opacity-50" />
                  </motion.div>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4 text-slate-900">
                  <CountUp value={5} suffix=" PMF Partners" delay={0.7} />
                </p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  An elite cohort of AI teams to help shape the next stage of our quality intelligence platform.
                </p>
                <div className="mt-6 md:mt-8 flex items-center text-indigo-600 font-bold text-sm group-hover:gap-2 transition-all cursor-pointer">
                  Apply Today <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </HolographicCard>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.5}>
              <HolographicCard className="p-6 md:p-8 border-slate-200 bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-indigo-600 text-[10px] md:text-xs uppercase tracking-widest font-bold">Ideal Cohort</h3>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="h-4 w-4 text-indigo-400 opacity-50" />
                  </motion.div>
                </div>
                <div className="space-y-4 mb-4">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                    {["AI Agents", "Copilots", "RAG Apps"].map((text, i) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.2 }}
                      >
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-4 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-indigo-500"
                  />
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2"
                  />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  If you’re building production-grade AI systems, this partnership is designed for you.
                </p>
              </HolographicCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Footer info */}
        <ScrollReveal width="100%" delay={0.7}>
          <div className="mt-16 md:mt-20 py-8 border-t border-slate-100 text-center text-slate-500 text-xs md:text-sm">
            <p className="font-medium">Join the next generation of AI teams building with confidence.</p>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
              Questions? Reach out at <Mail className="h-4 w-4 inline text-indigo-400 animate-bounce" /> <a href="mailto:imran@supaeval.com" className="text-indigo-600 font-bold hover:underline underline-offset-4 tracking-tight">imran@supaeval.com</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PMFPartnerPage;
