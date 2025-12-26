"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Database, FileJson, Layers, Lightbulb, Settings2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
    {
        title: "Datasets",
        icon: Database,
        description: "Standardized, versioned datasets",
    },
    {
        title: "Config",
        icon: Settings2,
        description: "Declarative evaluation setup",
    },
    {
        title: "Execution",
        icon: Layers,
        description: "Scalable, deterministic runs",
    },
    {
        title: "Scoring",
        icon: FileJson,
        description: "Multi-layered metric computation",
    },
    {
        title: "Insights",
        icon: BarChart3,
        description: "Root-cause analysis",
    },
    {
        title: "Improvement",
        icon: Lightbulb,
        description: "Feedback loops & RLHF",
    },
]

export function SolutionSection() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        A Complete Evaluation Platform <br />
                        <span className="text-indigo-500">Not Just Metrics</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        SupaEval provides the infrastructure to run repeatable evaluations, produce comparable benchmarks, and generate actionable insights for your AI agents.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 hidden lg:block" />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {steps.map((step, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} width="100%">
                                <div className="relative flex flex-col items-center text-center group">
                                    <div className="relative z-10 h-24 w-24 rounded-2xl bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                                        <step.icon className="h-10 w-10 text-[var(--muted-foreground)] group-hover:text-indigo-500 transition-colors" />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-[var(--muted-foreground)]">
                                        {step.description}
                                    </p>

                                    {/* Arrow for mobile/tablet flow */}
                                    {index < steps.length - 1 && (
                                        <div className="lg:hidden absolute top-12 -right-4 text-[var(--muted-foreground)]/30 transform translate-x-1/2">
                                            <ArrowRight className="h-6 w-6" />
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
