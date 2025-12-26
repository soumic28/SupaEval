"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-noise">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] opacity-50 mix-blend-screen animate-pulse" />
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] opacity-50 mix-blend-screen animate-pulse delay-1000" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[var(--muted-foreground)] backdrop-blur-md mb-8 shadow-lg shadow-indigo-500/10"
                >
                    <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                    Universal Agent Evaluation Platform
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                    Quality Intelligence for <br />
                    <span className="text-gradient-primary font-light">AI Agents</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Test, benchmark, and continuously improve AI agents across retrieval, reasoning, tools, and generation — without changing your agent code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                        Get Started Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                        View Demo
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[var(--muted-foreground)]"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                        <span>Model-agnostic</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                        <span>Reproducible benchmarks</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                        <span>Enterprise-ready security</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                        <span>SDK & API-first</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
