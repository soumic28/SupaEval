"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

    return (
        <motion.nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
                isScrolled ? "pt-4" : "pt-0"
            )}
        >
            <div className={cn(
                "mx-auto transition-all duration-300 ease-in-out flex items-center justify-between px-6",
                isScrolled
                    ? "max-w-5xl w-[calc(100%-2rem)] md:w-full rounded-full border border-border bg-background/80 backdrop-blur-md py-3 shadow-lg"
                    : "container h-24 bg-transparent py-0"
            )}>
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500" />
                    <span className="text-lg font-bold tracking-tight text-foreground">SupaEval</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {["Features", "How it Works", "Pricing", "Docs"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                            className={cn(
                                "text-sm font-medium transition-all duration-300 hover:text-foreground relative group",
                                isScrolled ? "text-muted-foreground" : "text-foreground text-lg"
                            )}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Switcher */}
                    <div className="hidden sm:flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-border backdrop-blur-sm">
                        <button
                            onClick={() => {
                                document.documentElement.removeAttribute('data-theme');
                                localStorage.setItem('theme', 'default');
                            }}
                            className="px-3 py-1 text-xs font-medium rounded-full transition-all hover:bg-secondary text-muted-foreground hover:text-foreground"
                            title="Default Dark"
                        >
                            Default
                        </button>
                        <button
                            onClick={() => {
                                document.documentElement.setAttribute('data-theme', 'light');
                                localStorage.setItem('theme', 'light');
                            }}
                            className="px-3 py-1 text-xs font-medium rounded-full transition-all hover:bg-secondary text-muted-foreground hover:text-foreground"
                            title="Modern White"
                        >
                            White
                        </button>
                        <button
                            onClick={() => {
                                document.documentElement.setAttribute('data-theme', 'cream');
                                localStorage.setItem('theme', 'cream');
                            }}
                            className="px-3 py-1 text-xs font-medium rounded-full transition-all hover:bg-secondary text-muted-foreground hover:text-foreground"
                            title="Warm Cream"
                        >
                            Cream
                        </button>
                    </div>

                    <Link href="/login" className={cn(
                        "text-sm font-medium transition-colors hover:text-foreground hidden sm:block",
                        isScrolled ? "text-muted-foreground" : "text-foreground"
                    )}>
                        Log in
                    </Link>
                    <MagneticButton className="h-9 px-4 text-sm hidden sm:flex bg-foreground text-background hover:bg-foreground/90">
                        Get Started
                    </MagneticButton>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-foreground/80"
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
                        className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl absolute top-full left-0 right-0"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                href="#features"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                How it Works
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#docs"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Docs
                            </Link>
                            <div className="pt-4 border-t border-border flex flex-col gap-4">
                                {/* Mobile Theme Switcher */}
                                <div className="flex items-center justify-center gap-1 bg-secondary/50 rounded-full p-1 border border-border backdrop-blur-sm mx-auto w-full max-w-xs">
                                    <button
                                        onClick={() => {
                                            document.documentElement.removeAttribute('data-theme');
                                            localStorage.setItem('theme', 'default');
                                            setIsOpen(false);
                                        }}
                                        className="flex-1 px-3 py-2 text-xs font-medium rounded-full transition-all hover:bg-secondary text-muted-foreground hover:text-foreground text-center"
                                    >
                                        Default
                                    </button>
                                    <button
                                        onClick={() => {
                                            document.documentElement.setAttribute('data-theme', 'light');
                                            localStorage.setItem('theme', 'light');
                                            setIsOpen(false);
                                        }}
                                        className="flex-1 px-3 py-2 text-xs font-medium rounded-full transition-all hover:bg-secondary text-muted-foreground hover:text-foreground text-center"
                                    >
                                        White
                                    </button>
                                    <button
                                        onClick={() => {
                                            document.documentElement.setAttribute('data-theme', 'cream');
                                            localStorage.setItem('theme', 'cream');
                                            setIsOpen(false);
                                        }}
                                        className="flex-1 px-3 py-2 text-xs font-medium rounded-full transition-all hover:bg-secondary text-muted-foreground hover:text-foreground text-center"
                                    >
                                        Cream
                                    </button>
                                </div>

                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Log in
                                </Link>
                                <MagneticButton className="w-full justify-center bg-foreground text-background hover:bg-foreground/90">Get Started</MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
