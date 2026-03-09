"use client"

import { motion, useInView } from "framer-motion"
import { Check, X } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect, useRef } from "react"

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
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: "start", loop: false },
        [Autoplay({ delay: 4000, stopOnInteraction: true, playOnInit: false })]
    )
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return

        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        })
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const autoplay = emblaApi.plugins().autoplay
        if (!autoplay) return

        if (isInView) {
            autoplay.play()
        } else {
            autoplay.stop()
            autoplay.reset() // Reset the timer when leaving view
        }
    }, [emblaApi, isInView])

    return (
        <section ref={sectionRef} className="py-12 md:py-24 bg-[var(--secondary)]/10" id="pricing">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        What you're doing now <br />
                        <span className="text-indigo-500 font-bold">vs. SupaEval</span>
                    </motion.h2>
                </div>

                <ScrollReveal delay={0.2} width="100%">
                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0A0A0A] shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs xl:text-sm border-collapse min-w-[800px]">
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

                    {/* Mobile Narrative Carousel View */}
                    <div className="lg:hidden -mx-4 md:-mx-6">
                        <div className="overflow-hidden px-4 md:px-6" ref={emblaRef}>
                            <div className="flex touch-pan-y">
                                {comparisonData.map((row, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 pr-4 first:pl-0 last:pr-0">
                                        <div className="h-full rounded-2xl border border-[var(--border)] bg-[#0A0A0A] overflow-hidden shadow-lg flex flex-col">
                                            <div className="p-6 border-b border-white/5 bg-white/[0.02]">
                                                <h3 className="font-bold text-white text-xl">{row.capability}</h3>
                                            </div>

                                            <div className="p-6 flex-grow flex flex-col justify-center space-y-8">
                                                {/* The "Before" Context */}
                                                <div className="relative">
                                                    <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-red-500/50 rounded-full"></div>
                                                    <span className="text-[10px] uppercase tracking-widest text-red-400/80 font-bold block mb-3 flex items-center gap-2">
                                                        <X className="h-3 w-3" /> The Status Quo
                                                    </span>

                                                    <div className="space-y-4">
                                                        {row.manual !== "N/A" && (
                                                            <div>
                                                                <span className="text-[10px] uppercase text-slate-500 block mb-1">Manual Testing</span>
                                                                <p className="text-sm text-slate-300 font-medium">{row.manual}</p>
                                                            </div>
                                                        )}
                                                        {row.internal !== "N/A" && (
                                                            <div>
                                                                <span className="text-[10px] uppercase text-slate-500 block mb-1">Building Internally</span>
                                                                <p className="text-sm text-slate-300 font-medium">{row.internal}</p>
                                                            </div>
                                                        )}
                                                        {(row.deepeval !== "N/A" || row.langsmith !== "N/A") && (
                                                            <div>
                                                                <span className="text-[10px] uppercase text-slate-500 block mb-1">General Tools (Ragas/Langsmith)</span>
                                                                <p className="text-sm text-slate-300 font-medium">
                                                                    {row.deepeval !== "N/A" ? row.deepeval : row.langsmith}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* The "After" / SupaEval Context */}
                                                <div className="relative mt-8 p-5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                                    <div className="absolute -left-[1px] top-4 bottom-4 w-1 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                                    <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold block mb-2 flex items-center gap-2">
                                                        <Check className="h-3 w-3" /> With SupaEval
                                                    </span>
                                                    <p className="text-lg font-semibold text-indigo-50">{row.supaeval}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {comparisonData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${index === selectedIndex ? "w-8 bg-indigo-950" : "w-1.5 bg-white/20"
                                        }`}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    {index === selectedIndex && isInView && (
                                        <motion.div
                                            className="absolute top-0 bottom-0 left-0 bg-indigo-500 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 4, ease: "linear" }}
                                            key={`progress-${selectedIndex}`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                        <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-2">
                            <span className="animate-pulse">←</span> Swipe to compare <span className="animate-pulse">→</span>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
