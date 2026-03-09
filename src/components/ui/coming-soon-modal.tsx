"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { MagneticButton } from "@/components/ui/magnetic-button"

interface ComingSoonModalProps {
    isOpen: boolean
    onClose: () => void
    featureName?: string
}

export function ComingSoonModal({ isOpen, onClose, featureName = "This feature" }: ComingSoonModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-md pointer-events-auto"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0A0A0A] p-8 shadow-2xl">
                                {/* Decorative elements */}
                                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-[80px]" />
                                <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-violet-500/20 blur-[80px]" />

                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    <X className="h-4 w-4" />
                                </button>

                                {/* Content */}
                                <div className="relative mt-2 flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                        <Image src="/logos/icon-on-black.svg" alt="SupaEval Logo" width={32} height={32} className="h-8 w-8 rounded-xl" />
                                    </div>

                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                        Coming Soon
                                    </h3>

                                    <p className="mb-8 text-sm leading-relaxed text-slate-400">
                                        <span className="font-medium text-slate-300">{featureName}</span> is currently under development. We're working hard to bring this to you soon!
                                    </p>

                                    <MagneticButton
                                        onClick={onClose}
                                        className="w-full justify-center bg-white text-black hover:bg-white/90"
                                    >
                                        Got it, thanks!
                                    </MagneticButton>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
