"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { TextScramble } from "@/components/ui/text-scramble"
import { OrbEffect } from "@/components/ui/orb-effect"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-noise">
            {/* Background Orbs */}
            <OrbEffect />

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <ScrollReveal width="100%">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[var(--muted-foreground)] backdrop-blur-md mb-8 shadow-lg shadow-indigo-500/10"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                        Universal Agent Evaluation Platform
                    </motion.div>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Quality Intelligence for <br />
                        <span className="text-gradient-primary font-light">
                            <TextScramble text="AI Agents" />
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.2}>
                    <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-10 leading-relaxed">
                        Test, benchmark, and continuously improve AI agents across retrieval, reasoning, tools, and generation — without changing your agent code.
                    </p>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <MagneticButton className="w-full sm:w-auto h-12 px-8 text-base">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                            View Demo
                        </Button>
                    </div>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.4}>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[var(--muted-foreground)]">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                            <span>Model-agnostic</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                            <span>Reproducible benchmarks</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                            <span>Enterprise-ready security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                            <span>SDK & API-first</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
