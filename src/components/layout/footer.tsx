"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ComingSoonModal } from "@/components/ui/coming-soon-modal"

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalFeature, setModalFeature] = useState("")

    const handleComingSoon = (feature: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        setModalFeature(feature)
        setIsModalOpen(true)
    }

    return (
        <>
            <footer className="border-t border-[var(--border)] bg-[var(--background)]">
                <div className="container mx-auto px-4 py-12 md:px-6">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-2 lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <Image src="/logos/icon-on-black.svg" alt="SupaEval Logo" width={32} height={32} className="h-8 w-8 rounded-md" />
                                <span className="text-xl font-bold tracking-tight">
                                    <span className="text-foreground">supa</span>
                                    <span className="text-blue-600">eval</span>
                                </span>
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
                                <li><Link href="/#features" className="hover:text-[var(--foreground)]">Features</Link></li>
                                <li><a href="#" onClick={handleComingSoon("Integrations")} className="hover:text-[var(--foreground)] cursor-pointer">Integrations</a></li>
                                <li><Link href="/#pricing" className="hover:text-[var(--foreground)]">Pricing</Link></li>
                                <li><a href="#" onClick={handleComingSoon("Changelog")} className="hover:text-[var(--foreground)] cursor-pointer">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-4">Resources</h3>
                            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                                <li><Link href="/docs" className="hover:text-[var(--foreground)]">Documentation</Link></li>
                                <li><a href="#" onClick={handleComingSoon("API Reference")} className="hover:text-[var(--foreground)] cursor-pointer">API Reference</a></li>
                                <li><Link href="/blog" className="hover:text-[var(--foreground)]">Blog</Link></li>
                                <li><a href="#" onClick={handleComingSoon("Community")} className="hover:text-[var(--foreground)] cursor-pointer">Community</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-4">Company</h3>
                            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                                <li><a href="#" onClick={handleComingSoon("About Us")} className="hover:text-[var(--foreground)] cursor-pointer">About</a></li>
                                <li><a href="#" onClick={handleComingSoon("Careers")} className="hover:text-[var(--foreground)] cursor-pointer">Careers</a></li>
                                <li><a href="#" onClick={handleComingSoon("Legal Terms")} className="hover:text-[var(--foreground)] cursor-pointer">Legal</a></li>
                                <li><a href="#" onClick={handleComingSoon("Contact Form")} className="hover:text-[var(--foreground)] cursor-pointer">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <ComingSoonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                featureName={modalFeature}
            />
        </>
    )
}
