"use client"

import { motion } from "framer-motion"
import { AlertCircle, EyeOff, Ruler, TrendingDown } from "lucide-react"
import { HolographicCard } from "@/components/ui/holographic-card"

const problems = [
    {
        title: "Surface-Level Evaluation",
        description: "Teams only evaluate final answers, missing critical failures in retrieval, reasoning, or tool usage steps.",
        icon: TrendingDown,
    },
    {
        title: "Black Box Context",
        description: "No visibility into what context was retrieved or how the agent decided to use specific tools.",
        icon: EyeOff,
    },
    {
        title: "No Standard Benchmarks",
        description: "Lack of standardized datasets makes it impossible to compare performance across different models or versions.",
        icon: Ruler,
    },
    {
        title: "Silent Regressions",
        description: "Updates to prompts or models often cause silent regressions that aren't caught until production.",
        icon: AlertCircle,
    },
]

export function ProblemSection() {
    return (
        <section className="py-24 bg-[var(--secondary)]/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Evaluating AI Agents Is <br />
                        <span className="text-red-400">Broken Today</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        Most teams are flying blind, relying on manual testing or basic metrics that don&apos;t capture the complexity of agentic workflows.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <HolographicCard className="h-full border-[var(--border)] bg-[var(--secondary)]/20 hover:border-red-500/30 transition-colors">
                                <div className="p-6">
                                    <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                                        <problem.icon className="h-6 w-6 text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                                    <p className="text-[var(--muted-foreground)]">
                                        {problem.description}
                                    </p>
                                </div>
                            </HolographicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
