"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const features = [
    {
        name: "Full Agent Lifecycle Evaluation",
        others: false,
        supaeval: true,
    },
    {
        name: "Continuous Benchmarking",
        others: false,
        supaeval: true,
    },
    {
        name: "Platform-Computed Metrics",
        others: false,
        supaeval: true,
    },
    {
        name: "Enterprise-Grade Reliability",
        others: true,
        supaeval: true,
    },
    {
        name: "Retrieval & Tool Usage Analysis",
        others: false,
        supaeval: true,
    },
    {
        name: "No Code Changes Required",
        others: false,
        supaeval: true,
    },
]

export function DifferentiationSection() {
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
                        Why <span className="text-indigo-500">SupaEval</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        See how we compare to traditional logging and monitoring tools.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm">
                    <div className="grid grid-cols-3 p-6 border-b border-[var(--border)] bg-[var(--secondary)]/30">
                        <div className="font-semibold text-[var(--muted-foreground)]">Feature</div>
                        <div className="text-center font-semibold text-[var(--muted-foreground)]">Others</div>
                        <div className="text-center font-bold text-indigo-500">SupaEval</div>
                    </div>

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`grid grid-cols-3 p-6 items-center ${index !== features.length - 1 ? "border-b border-[var(--border)]" : ""
                                } hover:bg-[var(--secondary)]/20 transition-colors`}
                        >
                            <div className="font-medium">{feature.name}</div>
                            <div className="flex justify-center">
                                {feature.others ? (
                                    <Check className="h-5 w-5 text-[var(--muted-foreground)]" />
                                ) : (
                                    <X className="h-5 w-5 text-[var(--muted-foreground)]/50" />
                                )}
                            </div>
                            <div className="flex justify-center">
                                {feature.supaeval ? (
                                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    </div>
                                ) : (
                                    <X className="h-5 w-5 text-red-500" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
