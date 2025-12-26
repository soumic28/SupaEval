"use client"

import { motion } from "framer-motion"
import { FileCheck, Lock, Server, ShieldCheck } from "lucide-react"
import { HolographicCard } from "@/components/ui/holographic-card"

const features = [
    {
        title: "Secure Agent Invocation",
        description: "We invoke your agents securely via encrypted channels. Your API keys and secrets are stored in a vault.",
        icon: Lock,
    },
    {
        title: "Tenant Isolation",
        description: "Strict logical separation of data. Your datasets and evaluation results are never accessible by other tenants.",
        icon: Server,
    },
    {
        title: "No Training on Data",
        description: "We guarantee that your data is never used to train our models or any third-party models.",
        icon: ShieldCheck,
    },
    {
        title: "Audit-Friendly",
        description: "Comprehensive logs of every evaluation run, including who ran it, what config was used, and the results.",
        icon: FileCheck,
    },
]

export function SecuritySection() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Enterprise-Grade <span className="text-indigo-500">Trust</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--muted-foreground)]"
                    >
                        Built for security-conscious teams. We take data privacy and security seriously.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <HolographicCard className="h-full border-[var(--border)] bg-[var(--secondary)]/20">
                                <div className="p-6">
                                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <feature.icon className="h-5 w-5 text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-[var(--muted-foreground)]">
                                        {feature.description}
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
