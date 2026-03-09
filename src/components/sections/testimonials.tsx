"use client"

import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect, useRef, useMemo } from "react"

const testimonials = [
    {
        label: "Enterprise SaaS Company, 500+ employees",
        quote: (
            <>
                Every team was blaming the AI/ML team — <span className="text-indigo-500 font-bold">'the model is hallucinating.'</span> But the layer-wise data showed <span className="text-orange-400 font-medium">intent detection</span> and <span className="text-orange-400 font-medium">document retrieval</span> were the real issues. The blame game ended. Our CPO mandated an <span className="text-indigo-500 font-bold">eval-first strategy</span> across the company.
            </>
        ),
        attr: "Head of AI Engineering"
    },
    {
        label: "Fortune 500 Tech Company",
        quote: (
            <>
                We had war rooms with <span className="text-orange-400 font-medium">300 prompts</span> divided among engineers and stopwatches for latency. Half the prompts never got executed. <span className="text-indigo-500 font-bold">Automated layer-wise evaluation</span> changed the entire release process overnight.
            </>
        ),
        attr: "Principal Engineer"
    }
]

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
    const plugins = useMemo(() => [Autoplay({ delay: 4000, stopOnInteraction: true, playOnInit: false })], [])
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: "start", loop: false },
        plugins
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
            const container = emblaApi.rootNode()
            if (container && container.offsetParent !== null) {
                try {
                    autoplay.play()
                } catch (e) {
                    // Ignore autoplay errors if carousel is uninitialized
                }
            }
        } else {
            autoplay.stop()
            autoplay.reset() // Reset the timer when leaving view
        }
    }, [emblaApi, isInView])

    return (
        <section ref={sectionRef} className="py-12 md:py-24 bg-[var(--background)]">
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

                {/* Desktop Grid View */}
                <div className="hidden md:grid gap-8 max-w-5xl mx-auto grid-cols-2">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between h-full"
                        >
                            <div className="mb-6">
                                <Quote className="h-8 w-8 text-indigo-500/20 mb-4" />
                                <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">
                                    {t.label}
                                </div>
                                <p className="text-lg text-slate-300 italic leading-relaxed">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>
                            <div className="text-sm font-semibold text-slate-500">
                                — {t.attr}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Narrative Carousel View */}
                <div className="md:hidden -mx-4">
                    <div className="overflow-hidden px-4" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {testimonials.map((t, idx) => (
                                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-2 pr-2 first:pl-0 last:pr-0">
                                    <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between h-full shadow-lg">
                                        <div className="mb-6">
                                            <Quote className="h-8 w-8 text-indigo-500/20 mb-4" />
                                            <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">
                                                {t.label}
                                            </div>
                                            <p className="text-lg text-slate-300 italic leading-relaxed">
                                                &quot;{t.quote}&quot;
                                            </p>
                                        </div>
                                        <div className="text-sm font-semibold text-slate-500">
                                            — {t.attr}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
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
                </div>

            </div>
        </section>
    )
}
