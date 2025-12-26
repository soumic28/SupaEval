"use client"

import { motion } from "framer-motion"
import { BarChart, BrainCircuit, Database, GitBranch, Zap } from "lucide-react"
import { HolographicCard } from "@/components/ui/holographic-card"

const pillars = [
    {
        title: "Data Foundation",
        description: "Standardized, versioned datasets for AI evaluation. Manage prompts, conversations, and multi-turn tasks in one place.",
        icon: Database,
    },
    {
        title: "Evaluation Definition",
        description: "Declarative configs without code changes. Define metrics, judges, and pass/fail criteria in a version-controlled format.",
        icon: GitBranch,
    },
    {
        title: "Execution & Benchmarking",
        description: "Scalable, deterministic evaluation runs. Run thousands of tests in parallel with reproducible results.",
        icon: Zap,
    },
    {
        title: "Insights & Dashboards",
        description: "Root-cause analysis across agent layers. Drill down from overall scores to specific retrieval or generation failures.",
        icon: BarChart,
    },
    {
        title: "Learning & Optimization",
        description: "Feedback loops and RLHF-ready outputs. Turn evaluation insights into training data for continuous improvement.",
        icon: BrainCircuit,
    },
]

export function PillarsSection() {
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
                        The <span className="text-indigo-500">SupaEval</span> Platform
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        Five pillars of quality intelligence to ensure your agents are production-ready.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
