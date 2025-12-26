import Link from "next/link"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Navbar() {
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
                    <MagneticButton className="h-9 px-4 text-sm">Get Started</MagneticButton>
                </div>
            </div>
        </header>
    )
}
