"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Ship Better AI Agents <br />
                        <span className="text-indigo-500">With Confidence</span>
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] mb-10">
                        Join forward-thinking teams who use SupaEval to ensure their agents are reliable, safe, and performant.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                            Start Evaluating
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                            Talk to Sales
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
