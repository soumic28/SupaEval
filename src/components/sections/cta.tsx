"use client"

import { MagneticButton } from "@/components/ui/magnetic-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { MouseEvent, useEffect, useRef, useState } from "react"

export function CTASection() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isHovering, setIsHovering] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (isHovering) return

        let animationFrameId: number
        const startTime = Date.now()

        const animate = () => {
            if (!sectionRef.current) return

            const { width, height } = sectionRef.current.getBoundingClientRect()
            const centerX = width / 2
            const centerY = height / 2
            const radius = Math.min(width, height) / 3 // Adjust radius as needed
            const speed = 0.0005 // Adjust speed as needed

            const elapsed = Date.now() - startTime
            const angle = elapsed * speed

            const x = centerX + Math.cos(angle) * radius
            const y = centerY + Math.sin(angle) * radius

            mouseX.set(x)
            mouseY.set(y)

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
    }, [isHovering, mouseX, mouseY])

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        setIsHovering(true)
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }

    return (
        <section
            ref={sectionRef}
            className="py-24 relative overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base Dot Pattern (Dimmed) */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 h-full w-full bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"
                    style={{ maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)' }}
                />
            </div>

            {/* Highlight Dot Pattern (Revealed by Mouse) */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    maskImage: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            black,
                            transparent
                        )
                    `,
                    WebkitMaskImage: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            black,
                            transparent
                        )
                    `,
                }}
            >
                <div className="absolute inset-0 h-full w-full bg-[radial-gradient(var(--primary)_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
            </motion.div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <ScrollReveal width="100%">
                    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--secondary)]/30 px-6 py-24 text-center shadow-2xl">
                        {/* Inner subtle gradient for the card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-transparent" />

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
