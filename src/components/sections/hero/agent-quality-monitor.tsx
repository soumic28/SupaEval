"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

const metrics = [
    { label: "INTENT ROUTING", value: 45, color: "bg-red-500", textColor: "text-red-400" },
    { label: "DOC HIT RATE", value: 65, color: "bg-amber-500", textColor: "text-amber-400" },
    { label: "RETRIEVAL PRECISION", value: 70, color: "bg-amber-500", textColor: "text-amber-400" },
    { label: "CHUNKING QUALITY", value: 91, color: "bg-emerald-500", textColor: "text-emerald-400" },
    { label: "FINAL ANSWER", value: 76, color: "bg-amber-500", textColor: "text-amber-400" },
]

export function AgentQualityMonitor() {
    return (
        <div className="max-w-2xl mx-auto bg-[#0a0a1a] border border-white/10 rounded-2xl p-6 md:p-8 text-left shadow-2xl shadow-indigo-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] md:text-xs text-slate-500 tracking-[0.2em] uppercase font-semibold">
                    // AGENT QUALITY MONITOR — PROD
                </span>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="font-mono text-[10px] md:text-xs text-emerald-500 font-bold tracking-widest uppercase">
                        LIVE
                    </span>
                </div>
            </div>

            <div className="space-y-5 mb-8">
                {metrics.map((metric, idx) => (
                    <div key={metric.label} className="grid grid-cols-[120px_1fr_40px] md:grid-cols-[160px_1fr_50px] items-center gap-4">
                        <span className="font-mono text-[10px] md:text-xs text-slate-400 font-medium tracking-wider">
                            {metric.label}
                        </span>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${metric.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`h-full ${metric.color} rounded-full`}
                            />
                        </div>
                        <span className={`font-mono text-[10px] md:text-xs font-bold text-right ${metric.textColor}`}>
                            {metric.value}%
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                <div className="mt-0.5">
                    <Zap className="h-4 w-4 text-indigo-400 fill-indigo-400/20" />
                </div>
                <div>
                    <h4 className="font-mono text-[10px] md:text-xs text-indigo-300 font-bold tracking-widest uppercase mb-1">
                        ROOT CAUSE IDENTIFIED
                    </h4>
                    <p className="text-xs md:text-sm text-indigo-100/70 leading-relaxed">
                        It's not hallucination. Your intent layer needs improvement. Retrieval & model layers are healthy.
                    </p>
                </div>
            </div>
        </div>
    )
}
