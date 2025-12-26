"use client"

import { MagneticButton } from "@/components/ui/magnetic-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <ScrollReveal width="100%">
                    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-indigo-950/20 px-6 py-24 text-center shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                Ready to evaluate your agents?
                            </h2>
                            <p className="text-lg text-[var(--muted-foreground)] mb-10">
                                Join forward-thinking engineering teams building reliable AI agents with SupaEval.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <MagneticButton className="h-12 px-8 text-base">
                                    Start for free
                                </MagneticButton>
                                <MagneticButton variant="secondary" className="h-12 px-8 text-base">
                                    Book a demo
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
