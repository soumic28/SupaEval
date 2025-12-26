"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500" />
                    <span className="text-lg font-bold tracking-tight">SupaEval</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted-foreground)]">
                    <Link href="#features" className="hover:text-[var(--foreground)] transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-[var(--foreground)] transition-colors">How it Works</Link>
                    <Link href="#pricing" className="hover:text-[var(--foreground)] transition-colors">Pricing</Link>
                    <Link href="#docs" className="hover:text-[var(--foreground)] transition-colors">Docs</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hidden sm:block">
                        Log in
                    </Link>
                    <MagneticButton className="h-9 px-4 text-sm hidden sm:flex">Get Started</MagneticButton>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-[var(--border)] bg-[var(--background)]"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                href="#features"
                                className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                How it Works
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#docs"
                                className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Docs
                            </Link>
                            <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-4">
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Log in
                                </Link>
                                <MagneticButton className="w-full justify-center">Get Started</MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
