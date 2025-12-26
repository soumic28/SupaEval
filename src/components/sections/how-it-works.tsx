"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
    {
        title: "Connect your agent",
        description: "Integrate via SDK or API. We support any LLM or agent framework.",
        code: "npm install supaeval",
    },
    {
        title: "Select datasets",
        description: "Choose from our standardized benchmarks or upload your own custom datasets.",
        code: "supaeval.datasets.list()",
    },
    {
        title: "Define metrics",
        description: "Configure retrieval, generation, and tool usage metrics without writing code.",
        code: "metrics: ['accuracy', 'hallucination']",
    },
    {
        title: "Run evaluations",
        description: "Execute scalable, parallel evaluation runs to get results in minutes.",
        code: "supaeval.run({ dataset: 'v1' })",
    },
    {
        title: "Analyze failures",
        description: "Drill down into specific traces to understand why an agent failed.",
        code: "supaeval.analysis.get_failures()",
    },
    {
        title: "Improve and re-run",
        description: "Fix the issues, update your agent, and verify improvements immediately.",
        code: "supaeval.compare(run_a, run_b)",
    },
]

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        Start evaluating your agents in minutes, not weeks.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="relative p-8 rounded-3xl border border-[var(--border)] bg-[#0A0A0A] hover:border-indigo-500/30 transition-all duration-300 h-full group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                </div>

                                <div className="flex items-start justify-between mb-6">
                                    <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-[var(--muted-foreground)] mb-6 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="relative rounded-xl bg-black/50 border border-white/5 p-4 font-mono text-xs text-indigo-300/90 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer" />
                                    {step.code}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
