"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { docsNavigation, DocItem, isInActivePath } from "@/lib/docs-data";
import { cn } from "@/lib/utils";
import { DocSearch } from "./doc-search";

// Recursive navigation item component
function NavItem({
    item,
    pathname,
    depth = 0
}: {
    item: DocItem;
    pathname: string;
    depth?: number;
}) {
    const hasChildren = item.items && item.items.length > 0;
    const isActive = item.href === pathname;
    const isInPath = isInActivePath(item, pathname);

    // Auto-expand if this item is in the active path
    const [isExpanded, setIsExpanded] = useState(isInPath);

    // Update expansion when pathname changes
    useEffect(() => {
        if (isInPath) setIsExpanded(true);
    }, [isInPath]);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    // Calculate indentation based on depth
    const paddingLeft = `${depth * 0.75 + 0.75}rem`;

    return (
        <div>
            {/* Item Link/Button */}
            {item.href ? (
                <Link
                    href={item.href}
                    className={cn(
                        "flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-all group",
                        isActive
                            ? "text-indigo-600 bg-indigo-50 font-medium"
                            : "text-foreground hover:text-indigo-600 hover:bg-secondary/50"
                    )}
                    style={{ paddingLeft }}
                >
                    <span className="flex items-center gap-2">
                        {item.title}
                    </span>
                    {hasChildren && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                toggleExpanded();
                            }}
                            className="p-0.5"
                        >
                            {isExpanded ? (
                                <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                            ) : (
                                <ChevronRight className="w-3.5 h-3.5 transition-transform" />
                            )}
                        </button>
                    )}
                </Link>
            ) : (
                <button
                    onClick={toggleExpanded}
                    className={cn(
                        "flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-all group",
                        isInPath
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                    style={{ paddingLeft }}
                >
                    <span>{item.title}</span>
                    {hasChildren && (
                        isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                        ) : (
                            <ChevronRight className="w-3.5 h-3.5 transition-transform" />
                        )
                    )}
                </button>
            )}

            {/* Nested Items */}
            {hasChildren && (
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="mt-0.5 space-y-0.5">
                                {item.items!.map((childItem) => (
                                    <NavItem
                                        key={childItem.href || childItem.title}
                                        item={childItem}
                                        pathname={pathname}
                                        depth={depth + 1}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
}

export function Sidebar() {
    const pathname = usePathname();
    const [expandedSections, setExpandedSections] = useState<string[]>(
        docsNavigation.map((section) => section.title)
    );

    const toggleSection = (title: string) => {
        setExpandedSections((prev) =>
            prev.includes(title)
                ? prev.filter((t) => t !== title)
                : [...prev, title]
        );
    };

    return (
        <nav className="w-full h-full overflow-y-auto pb-8 pr-3">
            <div className="space-y-6">
                {/* Search Component */}
                <div className="mb-6">
                    <DocSearch />
                </div>

                {docsNavigation.map((section) => {
                    const isExpanded = expandedSections.includes(section.title);

                    return (
                        <div key={section.title}>
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-indigo-600 transition-colors group"
                            >
                                <span>{section.title}</span>
                                {isExpanded ? (
                                    <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                                ) : (
                                    <ChevronRight className="w-3.5 h-3.5 transition-transform" />
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
                                        <div className="mt-1 space-y-0.5">
                                            {section.items.map((item) => (
                                                <NavItem
                                                    key={item.href || item.title}
                                                    item={item}
                                                    pathname={pathname}
                                                    depth={0}
                                                />
                                            ))}
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
