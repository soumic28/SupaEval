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
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-hidden rounded-xl border border-[var(--border)] bg-[#0A0A0A]">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-[var(--border)]">
                                    <th className="p-6 font-semibold text-base text-white w-1/3">Feature</th>
                                    <th className="p-6 font-medium text-[var(--muted-foreground)] w-1/3">Traditional Eval</th>
                                    <th className="p-6 font-bold text-indigo-400 bg-indigo-500/10 w-1/3 border-l border-indigo-500/20">SupaEval</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--border)]">
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="p-6 font-medium text-white">{row.feature}</td>
                                        <td className="p-6 text-[var(--muted-foreground)]">
                                            <div className="flex items-start gap-3">
                                                <X className="h-5 w-5 text-red-500/70 shrink-0 mt-0.5" />
                                                <span>{row.traditional}</span>
                                            </div>
                                        </td>
                                        <td className="p-6 font-medium bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors border-l border-indigo-500/20">
                                            <div className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                                                <span className="text-indigo-100">{row.supaeval}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                        {comparisonData.map((row, index) => (
                            <div key={index} className="rounded-xl border border-[var(--border)] bg-[#0A0A0A] p-5">
                                <h3 className="font-semibold text-white mb-4 text-lg">{row.feature}</h3>

                                <div className="space-y-4">
                                    <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                        <div className="flex items-start gap-3 text-sm text-[var(--muted-foreground)]">
                                            <X className="h-4 w-4 text-red-500/70 shrink-0 mt-0.5" />
                                            <span>{row.traditional}</span>
                                        </div>
                                    </div>

                                    <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                        <div className="flex items-start gap-3 text-sm font-medium text-indigo-100">
                                            <Check className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                                            <span>{row.supaeval}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
