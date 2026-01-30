"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { docsNavigation } from "@/lib/docs-data";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const pathname = usePathname();
    const [expandedSections, setExpandedSections] = useState<string[]>(
        docsNavigation.map(section => section.title)
    );

    const toggleSection = (title: string) => {
        setExpandedSections(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    return (
        <nav className="w-full h-full overflow-y-auto pb-8">
            <div className="space-y-6">
                {docsNavigation.map((section) => {
                    const isExpanded = expandedSections.includes(section.title);

                    return (
                        <div key={section.title}>
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-foreground hover:text-indigo-500 transition-colors group"
                            >
                                <span>{section.title}</span>
                                {isExpanded ? (
                                    <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 transition-transform" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 transition-transform" />
                                )}
                            </button>

                            {/* Section Items */}
                            <AnimatePresence initial={false}>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-2 space-y-1 pl-3 border-l-2 border-border">
                                            {section.items.map((item) => {
                                                const isActive = pathname === item.href;

                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={cn(
                                                            "block px-3 py-2 text-sm rounded-md transition-all relative",
                                                            isActive
                                                                ? "text-indigo-600 bg-indigo-500/10 font-medium"
                                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                                        )}
                                                    >
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="activeNavItem"
                                                                className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-600 rounded-full"
                                                                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                                                            />
                                                        )}
                                                        <span className="relative">{item.title}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
