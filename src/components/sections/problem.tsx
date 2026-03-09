"use client"

import { motion } from "framer-motion"
import { AlertCircle, EyeOff, Ruler, TrendingDown } from "lucide-react"
import { HolographicCard } from "@/components/ui/holographic-card"

const problems = [
    {
        title: "\"Response quality is bad.\"",
        description: "Your team keeps hearing it. Customer success escalates. The CTO asks questions. But nobody can explain WHY the quality is bad — just that it is.",
        icon: TrendingDown,
    },
    {
        title: "\"The model is hallucinating.\"",
        description: "The default blame for every AI failure. But when you actually dig in, the model is often fine — it's retrieval, intent routing, or tool usage that's broken. You just can't see it.",
        icon: AlertCircle,
    },
    {
        title: "\"We can't scale this to more customers.\"",
        description: "You're fixing issues case by case. Every new customer, every model upgrade — you re-test everything manually and pray nothing breaks.",
        icon: Ruler,
    },
]

export function ProblemSection() {
    return (
        <section className="pt-16 pb-24 md:pt-20 md:pb-32 bg-[var(--secondary)]/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Sound familiar?
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <HolographicCard className="h-full border-[var(--border)] bg-[var(--secondary)]/20 hover:border-red-500/30 transition-colors">
                                <div className="p-6">
                                    <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                                        <problem.icon className="h-6 w-6 text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                                    <p className="text-[var(--muted-foreground)]">
                                        {problem.description}
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
