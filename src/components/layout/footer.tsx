import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--background)]">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500" />
                            <span className="text-lg font-bold tracking-tight">SupaEval</span>
                        </Link>
                        <p className="text-sm text-[var(--muted-foreground)] max-w-xs mb-6">
                            Evaluation is infrastructure. Quality intelligence for AI agents.
                        </p>
                        <div className="text-sm text-[var(--muted-foreground)]">
                            &copy; {new Date().getFullYear()} SupaEval Inc. All rights reserved.
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Features</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Blog</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                            <li><Link href="#" className="hover:text-[var(--foreground)]">About</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Legal</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
