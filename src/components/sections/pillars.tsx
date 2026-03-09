"use client"

import { motion } from "framer-motion"
import { BarChart, BrainCircuit, Database, GitBranch, Zap } from "lucide-react"
import { HolographicCard } from "@/components/ui/holographic-card"

const pillars = [
    {
        title: "Layer-By-Layer Evaluation",
        description: "Evaluate every layer independently — retrieval precision, intent routing accuracy, chunking quality, generation faithfulness, tool use correctness. Know exactly WHY the final answer is wrong.",
        icon: Zap,
    },
    {
        title: "Synthetic Data Pipeline",
        description: "Generate thousands of diverse test cases from 200 seed prompts. PDFs, HTML, tables, images — all document types. First run takes hours, not the months it takes to build manually.",
        icon: Database,
    },
    {
        title: "Fix Suggestions",
        description: "When a layer fails, SupaEval generates actionable fixes — prompt improvements, few-shot examples, system instruction changes. Don't just find the problem — start solving it.",
        icon: BrainCircuit,
    },
    {
        title: "Real-Time Production Monitoring",
        description: "Evaluate quality metrics on live traces. Failed metrics automatically expand your test dataset. Catch regressions before customers do.",
        icon: BarChart,
    },
]

export function PillarsSection() {
    return (
        <section className="py-12 md:py-24 bg-[var(--secondary)]/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Everything you need to <span className="text-secondary">evaluate AI agents.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        Purpose-built for quality. Not observability with eval bolted on.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <HolographicCard className="h-full border-[var(--border)] bg-[var(--secondary)]/20">
                                <div className="p-6">
                                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <pillar.icon className="h-5 w-5 text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                                    <p className="text-[var(--muted-foreground)]">
                                        {pillar.description}
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
