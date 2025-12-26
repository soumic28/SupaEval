"use client"

import { motion } from "framer-motion"

const steps = [
    {
        title: "Connect your agent",
        description: "Integrate via SDK or API. We support any LLM or agent framework.",
    },
    {
        title: "Select datasets",
        description: "Choose from our standardized benchmarks or upload your own custom datasets.",
    },
    {
        title: "Define metrics",
        description: "Configure retrieval, generation, and tool usage metrics without writing code.",
    },
    {
        title: "Run evaluations",
        description: "Execute scalable, parallel evaluation runs to get results in minutes.",
    },
    {
        title: "Analyze failures",
        description: "Drill down into specific traces to understand why an agent failed.",
    },
    {
        title: "Improve and re-run",
        description: "Fix the issues, update your agent, and verify improvements immediately.",
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

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 relative">
                        {/* Central line for desktop */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block -translate-x-1/2" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col ${index % 2 === 0 ? "md:text-right md:items-end" : "md:text-left md:items-start md:col-start-2"
                                    }`}
                            >
                                {/* Dot on the line */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-indigo-500 hidden md:block z-10" />

                                <div className="flex items-center gap-4 mb-2 md:hidden">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold">{step.title}</h3>
                                </div>

                                <h3 className="text-xl font-semibold mb-2 hidden md:block">{step.title}</h3>
                                <p className="text-[var(--muted-foreground)] max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
