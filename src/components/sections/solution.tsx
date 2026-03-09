"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const supaMetrics = [
    { label: "INTENT ROUTING", value: 45, color: "bg-red-500", textColor: "text-red-400", highlight: true },
    { label: "DOC HIT RATE", value: 65, color: "bg-amber-500", textColor: "text-amber-400" },
    { label: "RETRIEVAL PRECISION", value: 70, color: "bg-amber-500", textColor: "text-amber-400" },
    { label: "CHUNKING QUALITY", value: 91, color: "bg-emerald-500", textColor: "text-emerald-400" },
    { label: "FINAL ANSWER", value: 76, color: "bg-amber-500", textColor: "text-amber-400" },
]

export function SolutionSection() {
    return (
        <section className="py-12 md:py-24 bg-[var(--background)] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Your final answer scores <span className="text-indigo-500">76%.</span> <br />
                        Your intent routing is at <span className="text-red-500">45%.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        Final-answer tools say "looks fine." SupaEval pinpoints the issue.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {/* Left Panel: Traditional Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <div className="mb-10">
                            <h3 className="inline-block px-4 py-2 rounded-lg border border-white/10 bg-black/20 text-xs md:text-sm font-bold text-slate-400 tracking-wider uppercase">
                                What other tools see
                            </h3>
                        </div>

                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <span className="text-6xl font-bold text-emerald-500/80 mb-2">76%</span>
                            <span className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">Final Answer</span>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-sm">
                                <Check className="h-4 w-4" />
                                All looks good!
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel: SupaEval */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl border border-indigo-500/30 bg-indigo-500/5 shadow-2xl shadow-indigo-500/10"
                    >
                        <div className="mb-10">
                            <h3 className="inline-block px-4 py-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-xs md:text-sm font-bold text-indigo-400 tracking-wider uppercase shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                                What SupaEval sees
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {supaMetrics.map((metric, idx) => (
                                <div
                                    key={metric.label}
                                    className={`relative p-3 rounded-xl transition-colors duration-500 ${metric.highlight ? 'bg-red-500/10 border border-red-500/20' : ''}`}
                                >
                                    <div className="grid grid-cols-[110px_1fr_40px] items-center gap-4">
                                        <span className={`font-mono text-[9px] font-medium tracking-wider ${metric.highlight ? 'text-red-300' : 'text-slate-400'}`}>
                                            {metric.label}
                                        </span>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                                                className={`h-full ${metric.color} rounded-full`}
                                            />
                                        </div>
                                        <span className={`font-mono text-[10px] font-bold text-right ${metric.textColor}`}>
                                            {metric.value}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold italic text-lg shadow-lg">
                        It's not hallucination. Your <span className="text-indigo-500 font-bold">intent layer</span> needs improvement.
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
