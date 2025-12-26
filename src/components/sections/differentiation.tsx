"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const comparisonData = [
    {
        feature: "Full Agent Lifecycle Evaluation",
        traditional: "Limited to specific stages",
        supaeval: "Comprehensive, end-to-end evaluation",
    },
    {
        feature: "Continuous Benchmarking",
        traditional: "Manual, ad-hoc testing",
        supaeval: "Automated, ongoing performance tracking",
    },
    {
        feature: "Platform-Computed Metrics",
        traditional: "Basic logging, manual analysis",
        supaeval: "Advanced, AI-driven metric generation",
    },
    {
        feature: "Enterprise-Grade Reliability",
        traditional: "Best-effort, often lacking scalability",
        supaeval: "Built for scale, high availability, and security",
    },
    {
        feature: "Retrieval & Tool Usage Analysis",
        traditional: "Difficult to track, no dedicated tools",
        supaeval: "Detailed insights into RAG and tool interactions",
    },
    {
        feature: "No Code Changes Required",
        traditional: "Requires significant code instrumentation",
        supaeval: "Integrates seamlessly with minimal setup",
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

                <ScrollReveal delay={0.2} width="100%">
                    <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--secondary)]/10 backdrop-blur-sm">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-[var(--border)] bg-[var(--secondary)]/30">
                                    <th className="p-4 font-medium">Feature</th>
                                    <th className="p-4 font-medium text-[var(--muted-foreground)]">Traditional Eval</th>
                                    <th className="p-4 font-bold text-indigo-400 bg-indigo-500/10">SupaEval</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--border)]">
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="hover:bg-[var(--secondary)]/20 transition-colors">
                                        <td className="p-4 font-medium">{row.feature}</td>
                                        <td className="p-4 text-[var(--muted-foreground)] flex items-center gap-2">
                                            <X className="h-4 w-4 text-red-500/70" />
                                            {row.traditional}
                                        </td>
                                        <td className="p-4 font-medium bg-indigo-500/5 flex items-center gap-2">
                                            <Check className="h-4 w-4 text-indigo-400" />
                                            {row.supaeval}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
