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
        <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-12">
            <div className="container mx-auto px-3 sm:px-4 md:px-6">
                <div className="flex gap-4 sm:gap-6 lg:gap-8 relative">
                    {/* Mobile Sidebar Toggle */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="fixed bottom-6 left-6 z-50 lg:hidden p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
                        aria-label="Toggle sidebar"
                    >
                        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop Sidebar - Only show on large screens */}
                    <aside className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)] w-64 flex-shrink-0">
                        <Sidebar />
                    </aside>

                    {/* Mobile Sidebar Overlay */}
                    <AnimatePresence>
                        {sidebarOpen && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSidebarOpen(false)}
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                                />
                                {/* Drawer */}
                                <motion.aside
                                    initial={{ x: "-100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="fixed left-0 top-0 bottom-0 w-72 bg-background/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto border-r border-indigo-500/20"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h2 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                                                Documentation
                                            </h2>
                                            <button
                                                onClick={() => setSidebarOpen(false)}
                                                className="p-2 rounded-lg hover:bg-secondary/80 transition-colors"
                                                aria-label="Close sidebar"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <Sidebar />
                                    </div>
                                </motion.aside>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0 w-full">
                        <article className="prose prose-slate max-w-none lg:max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:p-0 prose-pre:bg-transparent prose-ul:my-4 prose-li:my-1">
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
