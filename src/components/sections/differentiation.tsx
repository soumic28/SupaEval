"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const comparisonData = [
    {
        capability: "Test coverage",
        manual: "100–300 prompts",
        deepeval: "Bring your own",
        langsmith: "Traces only",
        internal: "Custom, limited",
        supaeval: "Thousands, auto-generated",
    },
    {
        capability: "Root cause identification",
        manual: "No",
        deepeval: "No (final answer only)",
        langsmith: "Shows traces, not quality",
        internal: "Maybe, after months",
        supaeval: "Automated, per layer",
    },
    {
        capability: "Setup time",
        manual: "Ongoing manual",
        deepeval: "Weeks",
        langsmith: "Days (observability only)",
        internal: "2–3 months",
        supaeval: "1 week",
    },
    {
        capability: "Annual cost",
        manual: "High (Time)",
        deepeval: "Tool + Time",
        langsmith: "Tool + Time",
        internal: "$300–500K/year",
        supaeval: "$50–100 per run",
    },
    {
        capability: "Fix suggestions",
        manual: "No",
        deepeval: "No",
        langsmith: "No",
        internal: "No",
        supaeval: "Yes, AI-powered",
    },
    {
        capability: "Framework lock-in",
        manual: "N/A",
        deepeval: "Some",
        langsmith: "Significant",
        internal: "N/A",
        supaeval: "None — any framework",
    },
]

export function DifferentiationSection() {
    return (
        <section className="py-24 bg-[var(--secondary)]/10" id="pricing">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        What you're doing now <br />
                        <span className="text-indigo-500 text-2xl md:text-4xl">vs. SupaEval</span>
                    </motion.h2>
                </div>

                <ScrollReveal delay={0.2} width="100%">
                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0A0A0A] shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs xl:text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-[var(--border)] bg-white/[0.02]">
                                        <th className="p-4 font-semibold text-white w-[15%]">Capability</th>
                                        <th className="p-4 font-medium text-slate-500 w-[15%]">Manual Testing</th>
                                        <th className="p-4 font-medium text-slate-500 w-[15%]">DeepEval / Ragas</th>
                                        <th className="p-4 font-medium text-slate-500 w-[15%]">LangSmith / DD</th>
                                        <th className="p-4 font-medium text-slate-500 w-[15%]">Build Internally</th>
                                        <th className="p-4 font-bold text-indigo-400 bg-indigo-500/10 w-[25%] border-l border-indigo-500/20">SupaEval</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--border)]">
                                    {comparisonData.map((row, index) => (
                                        <tr key={index} className="group hover:bg-white/[0.01] transition-colors">
                                            <td className="p-4 font-medium text-slate-200">{row.capability}</td>
                                            <td className="p-4 text-slate-500">{row.manual}</td>
                                            <td className="p-4 text-slate-500">{row.deepeval}</td>
                                            <td className="p-4 text-slate-500">{row.langsmith}</td>
                                            <td className="p-4 text-slate-500">{row.internal}</td>
                                            <td className="p-4 font-medium bg-indigo-500/[0.03] group-hover:bg-indigo-500/[0.05] transition-colors border-l border-indigo-500/20 text-indigo-100">
                                                {row.supaeval}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Mobile/Tablet Card View */}
                    <div className="lg:hidden space-y-6">
                        {comparisonData.map((row, index) => (
                            <div key={index} className="rounded-2xl border border-[var(--border)] bg-[#0A0A0A] p-6 shadow-lg">
                                <h3 className="font-bold text-white mb-6 text-lg border-b border-white/5 pb-2">{row.capability}</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Manual</span>
                                        <p className="text-sm text-slate-400">{row.manual}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Open Source</span>
                                        <p className="text-sm text-slate-400">{row.deepeval}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-500 block">LangSmith</span>
                                        <p className="text-sm text-slate-400">{row.langsmith}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Internal</span>
                                        <p className="text-sm text-slate-400">{row.internal}</p>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                    <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold block mb-1">SupaEval</span>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                                        <span className="text-sm font-semibold text-indigo-100">{row.supaeval}</span>
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
