"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./_components/sidebar";
import { TableOfContents } from "./_components/table-of-contents";
import { AnimatePresence, motion } from "framer-motion";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background pt-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex gap-8 relative">
                    {/* Mobile Sidebar Toggle */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="fixed bottom-6 right-6 z-50 lg:hidden p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
                        aria-label="Toggle sidebar"
                    >
                        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block">
                        <Sidebar />
                    </aside>

                    {/* Mobile Sidebar Overlay */}
                    <AnimatePresence>
                        {sidebarOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSidebarOpen(false)}
                                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                                />
                                <motion.aside
                                    initial={{ x: "-100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100%" }}
                                    transition={{ type: "spring", damping: 20 }}
                                    className="fixed left-0 top-24 bottom-0 w-64 bg-background border-r border-border z-40 lg:hidden overflow-y-auto p-4"
                                >
                                    <Sidebar />
                                </motion.aside>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <article className="prose prose-slate max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']">
                            {children}
                        </article>
                    </main>

                    {/* Table of Contents */}
                    <aside className="hidden xl:block">
                        <TableOfContents />
                    </aside>
                </div>
            </div>
        </div>
    );
}
