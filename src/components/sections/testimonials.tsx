"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        label: "Enterprise SaaS Company, 500+ employees",
        quote: "Every team was blaming the AI/ML team — 'the model is hallucinating.' But the layer-wise data showed intent detection and document retrieval were the real issues. The blame game ended. Our CPO mandated an eval-first strategy across the company.",
        attr: "Head of AI Engineering"
    },
    {
        label: "Fortune 500 Tech Company",
        quote: "We had war rooms with 300 prompts divided among engineers and stopwatches for latency. Half the prompts never got executed. Automated layer-wise evaluation changed the entire release process overnight.",
        attr: "Principal Engineer"
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-12 md:py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Teams that stopped <span className="text-indigo-500">guessing.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between"
                        >
                            <div className="mb-6">
                                <Quote className="h-8 w-8 text-indigo-500/20 mb-4" />
                                <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">
                                    {t.label}
                                </div>
                                <p className="text-lg text-slate-300 italic leading-relaxed">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div className="text-sm font-semibold text-slate-500">
                                — {t.attr}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
