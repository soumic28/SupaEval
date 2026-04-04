"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Zap, Target, Sparkles, MessageSquare, CheckCircle, Edit3 } from "lucide-react";
import { motion, useTransform, useMotionValue, useInView, animate } from "framer-motion";
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

const HighlightPhrase = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        aria-hidden="true"
        animate={{
          opacity: [0.35, 0.75, 0.35],
          scale: [0.96, 1.02, 0.96],
        }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-[-0.2em] inset-y-[0.05em] rounded-[1.2rem] bg-gradient-to-r from-cyan-300/30 via-indigo-300/45 to-sky-300/30 blur-xl"
      />
      <motion.span
        aria-hidden="true"
        animate={{ x: ["-30%", "120%"] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[0.45em] w-[45%] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm"
      />
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-[0.22em] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400/80 via-indigo-500/90 to-sky-400/80 shadow-[0_0_18px_rgba(99,102,241,0.45)]"
      />
    </span>
  );
};

const PMFPartnerPage = () => {
  return (
    <div className="relative min-h-screen bg-noise overflow-hidden pb-16 pt-24 md:pt-32 lg:pt-40 bg-white">
      <motion.div className="absolute inset-0 pointer-events-none">
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
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[-10%] top-2 h-32 w-[60%] rounded-full bg-gradient-to-r from-cyan-200/30 via-indigo-300/35 to-sky-200/25 blur-3xl"
            />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900">
              This is a <HighlightPhrase>personal invite</HighlightPhrase>.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12">
              <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>Hi - I&apos;m building <strong className="text-indigo-600 font-bold italic tracking-tight">SupaEval</strong>.</p>
                <p>
                  While building <HighlightPhrase className="text-slate-900">enterprise AI agents at Microsoft</HighlightPhrase>, I saw a frustrating problem.
                </p>
                <p>When an AI agent fails in production, teams usually only see that the final response is wrong.</p>
                <p>
                  But they don&apos;t know <HighlightPhrase className="text-slate-900">where the agent actually failed</HighlightPhrase>.
                </p>
                <p><HighlightPhrase className="text-slate-900">Did the agent fail at Intent, Retrieval, Reasoning, Tool Calls, Prompts, Context, or Memory?
                </HighlightPhrase></p>
                <motion.p
                  animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 36px rgba(99,102,241,0.16)", "0 0 0 rgba(99,102,241,0)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-slate-900 font-medium rounded-2xl px-4 py-3 bg-white/60 border border-indigo-100/70"
                >
                  <HighlightPhrase>&ldquo;Debugging AI agents today is like debugging a black box.&rdquo;</HighlightPhrase>
                </motion.p>
                <p>
                  I&apos;ve been working on a way to <HighlightPhrase className="text-slate-900">pinpoint failures</HighlightPhrase> and optimize AI agents faster.
                </p>
                         <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="rounded-3xl border border-slate-200 bg-white/75 p-5 md:p-6 shadow-lg shadow-slate-200/40"
                >
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">
                    AI Agent Flow
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    {["Intent", "Retrieval", "Reasoning", "Tool", "Response"].map((step, idx) => (
                      <React.Fragment key={step}>
                        <motion.div
                          animate={
                            step === "Retrieval"
                              ? {
                                  boxShadow: [
                                    "0 0 0 rgba(239,68,68,0)",
                                    "0 0 28px rgba(239,68,68,0.28)",
                                    "0 0 0 rgba(239,68,68,0)",
                                  ],
                                }
                              : {
                                  boxShadow: [
                                    "0 0 0 rgba(99,102,241,0)",
                                    "0 0 18px rgba(99,102,241,0.12)",
                                    "0 0 0 rgba(99,102,241,0)",
                                  ],
                                }
                          }
                          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                          className={`relative rounded-2xl border px-3 py-2 text-sm font-semibold md:px-4 md:py-2.5 md:text-base ${
                            step === "Retrieval"
                              ? "border-red-300 bg-red-50 text-red-600"
                              : "border-slate-200 bg-slate-50 text-slate-700"
                          }`}
                        >
                          {step}
                          {step === "Retrieval" ? (
                            <motion.span
                              aria-hidden="true"
                              animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.06, 0.95] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-[-4px] rounded-[1.15rem] border border-red-400/50"
                            />
                          ) : null}
                        </motion.div>
                        {idx < 4 ? (
                          <motion.span
                            aria-hidden="true"
                            animate={{ opacity: [0.35, 1, 0.35], x: [0, 3, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.12 }}
                            className="text-slate-300"
                          >
                            →
                          </motion.span>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-3 ml-20 md:ml-28">
                    <motion.div
                      aria-hidden="true"
                      animate={{ opacity: [0.35, 1, 0.35], y: [0, 4, 0] }}
                      transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-2 text-2xl leading-none text-red-500"
                    >
                      ↓
                    </motion.div>
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                        className="text-2xl text-red-500"
                      >
                        ✕
                      </motion.span>
                      <motion.div
                        animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 24px rgba(99,102,241,0.18)", "0 0 0 rgba(99,102,241,0)"] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 md:text-base"
                      >
                        SupaEval finds this
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <p>That&apos;s why I&apos;m building <strong className="text-indigo-600 font-bold italic tracking-tight">SupaEval</strong>.</p>
                <p className="text-pretty">Our mission:</p>
                <p className="text-pretty">
                  <strong className="relative inline-block group">
                    <HighlightPhrase className="text-indigo-700">
                      Make every AI agent operate with 90%+ quality
                    </HighlightPhrase>
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
                  </strong>
                </p>
       
                <div className="pt-4 md:pt-6">
                  <div className="text-slate-900 font-bold text-xl tracking-tight mb-1">— Imran</div>
                  <div className="text-indigo-600/50 font-mono text-xs font-bold font-serif italic text-lg ">Building SupaEval</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="pt-4">
                  <ScrollReveal width="100%" delay={0.4}>
                    <HolographicCard className="mb-6 p-6 md:p-8 group border-slate-200 bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-indigo-600 text-[10px] md:text-xs uppercase tracking-widest font-bold">Now inviting</h3>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <Mail className="h-4 w-4 text-indigo-400 opacity-50" />
                        </motion.div>
                      </div>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 text-slate-900">
                        <CountUp value={10} suffix=" PMF Partners" delay={0.7} />
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        An elite cohort of AI teams to help shape the next stage of our quality intelligence platform.
                      </p>
                      <a
                        href="https://form.typeform.com/to/aBIYfPG8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 md:mt-8 flex items-center text-indigo-600 font-bold text-sm group-hover:gap-2 transition-all cursor-pointer"
                      >
                        Apply Today <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </HolographicCard>
                  </ScrollReveal>

                  <ScrollReveal width="100%" delay={0.45}>
                    <HolographicCard className="mb-6 p-6 md:p-8 border-red-200 bg-red-50/70 hover:bg-red-50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1">
                      <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-red-500 mb-4">
                        Limited availability
                      </div>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Only <span className="text-red-500">7</span> spots left
                      </p>
                    </HolographicCard>
                  </ScrollReveal>

                  <div className="relative mb-6">
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [0.92, 1.1, 0.92], opacity: [0.15, 0.4, 0.15] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="pointer-events-none absolute inset-[-10px] rounded-[1.4rem] border border-indigo-400/40"
                    />
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.24, 0.08] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="pointer-events-none absolute inset-[-18px] rounded-[1.7rem] border border-cyan-300/40"
                    />
                    <motion.span
                      aria-hidden="true"
                      animate={{ opacity: [0.2, 0.45, 0.2] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="pointer-events-none absolute inset-[-14px] rounded-[1.6rem] bg-gradient-to-r from-cyan-300/15 via-indigo-400/20 to-sky-300/15 blur-xl"
                    />
                    <MagneticButton className="relative w-full h-12 md:h-14 text-base md:text-lg font-bold shadow-xl shadow-indigo-500/10 group">
                      <a
                        href="https://form.typeform.com/to/aBIYfPG8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full"
                      >
                        Become a PMF partner
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </MagneticButton>
                  </div>
                  <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <MagneticButton variant="secondary" className="h-12 md:h-14 text-base md:text-lg font-bold border-slate-200 bg-white shadow-sm">
                      <a
                        href="/imran-supaeval.vcf"
                        className="flex items-center justify-center w-full text-slate-900"
                        download="Imran SupaEval.vcf"
                      >
                        Save Contact
                      </a>
                    </MagneticButton>
                    <MagneticButton variant="secondary" className="h-12 md:h-14 text-base md:text-lg font-bold border-emerald-200 bg-emerald-50 shadow-sm">
                      <a
                        href="https://wa.me/919581662613?text=Hey Team, %20%2C%20I%20would%20like%20to%20partner%20with%20SupaEval.%0A%0Aquick%20intro%20about%20me%3A%20%7B%7D%0A%0AThanks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full text-emerald-700"
                      >
                        WhatsApp Me
                      </a>
                    </MagneticButton>
                    <MagneticButton variant="secondary" className="h-12 md:h-14 text-base md:text-lg font-bold border-indigo-200 bg-indigo-50 shadow-sm sm:col-span-2">
                      <a
                        href="/customer-deck-v6.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full text-indigo-700"
                      >
                        Customer Deck
                      </a>
                    </MagneticButton>
                  </div>
                </div>

                {[
                  { label: "You get", value: "6 Months free early access to the platform", icon: CheckCircle },
                  { label: "You shape", value: "The future roadmap", icon: Edit3 },
                  { label: "All We Ask", value: "Candid product feedback", icon: MessageSquare },
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

              </div>
            </div>
          </HolographicCard>
        </ScrollReveal>

        {/* Hero Section - NOW SECOND */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-6 md:gap-8 mb-16 md:mb-20 lg:mb-32">
          {/* Main Hero Card */}
          <ScrollReveal width="100%" delay={0.3}>
            <motion.div>
              <HolographicCard className="p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[450px] md:min-h-[500px] border-slate-200 bg-white/50 shadow-2xl shadow-indigo-500/5">
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-10%", "16%", "-10%"], opacity: [0.3, 0.55, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-[-8%] top-8 h-36 w-[68%] rounded-full bg-gradient-to-r from-cyan-200/20 via-indigo-300/30 to-sky-200/20 blur-3xl"
                />
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
                    <span className="text-indigo-600 relative z-10">
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
                  <div className="relative">
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.14, 0.35, 0.14] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                      className="pointer-events-none absolute inset-[-10px] rounded-[1.3rem] border border-indigo-400/40"
                    />
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.22, 0.08] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
                      className="pointer-events-none absolute inset-[-18px] rounded-[1.6rem] border border-cyan-300/35"
                    />
                    <MagneticButton className="relative w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-indigo-500/20 group">
                      <a
                        href="https://calendly.com/imran-supaeval/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Book a 15-min call
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </MagneticButton>
                  </div>
                  <MagneticButton variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base border-slate-200 bg-white shadow-sm">
                    <a href="mailto:imran@supaeval.com" className="flex items-center text-slate-900 font-medium">
                      imran@supaeval.com
                    </a>
                  </MagneticButton>
                </div>

                {/* <div className="relative group">
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
                </div> */}
              </HolographicCard>
            </motion.div>
          </ScrollReveal>

          {/* Side Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* <ScrollReveal width="100%" delay={0.4}>
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
            </ScrollReveal> */}

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
                    {["AI Agents", "Copilots", "RAG Agents", "Multi-Agent Apps"].map((text, i) => (
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
