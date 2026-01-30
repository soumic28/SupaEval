"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, X, FileText, BookOpen, Newspaper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { docsNavigation, DocItem, getAllItems } from "@/lib/docs-data";
import { cn } from "@/lib/utils";

interface SearchResult {
    title: string;
    description?: string;
    href: string;
    type: "doc" | "blog" | "page";
}

export function DocSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    // Ensure component is mounted before rendering portal
    useEffect(() => {
        setMounted(true);
    }, []);


    // Get all searchable content
    const getAllSearchableContent = (): SearchResult[] => {
        const items: SearchResult[] = [];

        // Add documentation pages
        const docItems = getAllItems();
        docItems.forEach((item) => {
            if (item.href) {
                items.push({
                    title: item.title,
                    description: item.description,
                    href: item.href,
                    type: "doc"
                });
            }
        });

        // Add main website pages
        items.push(
            { title: "Home", description: "Quality intelligence for AI agents", href: "/", type: "page" },
            { title: "Features", description: "Comprehensive agent evaluation features", href: "/#features", type: "page" },
            { title: "How It Works", description: "Learn how SupaEval works", href: "/#how-it-works", type: "page" },
            { title: "Pricing", description: "Flexible pricing plans", href: "/#pricing", type: "page" },
        );

        // Add blog (if you have blog posts, add them here)
        items.push(
            { title: "Blog", description: "Latest insights and updates", href: "/blog", type: "blog" }
        );

        return items;
    };

    // Handle keyboard shortcut (K key or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Open with K key or Ctrl+K
            if ((e.key === "k" && !e.metaKey && !e.ctrlKey && !e.altKey) ||
                ((e.ctrlKey || e.metaKey) && e.key === "k")) {
                // Don't trigger if user is typing in an input
                if (e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement) {
                    return;
                }
                e.preventDefault();
                setIsOpen(true);
            }

            // Close with Escape
            if (e.key === "Escape") {
                setIsOpen(false);
                setQuery("");
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Search function
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            setSelectedIndex(0);
            return;
        }

        const searchQuery = query.toLowerCase();
        const allContent = getAllSearchableContent();

        const filtered = allContent.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchQuery) ||
                item.description?.toLowerCase().includes(searchQuery) ||
                item.href.toLowerCase().includes(searchQuery)
            );
        });

        setResults(filtered.slice(0, 10)); // Limit to 10 results
        setSelectedIndex(0);
    }, [query]);

    // Handle arrow key navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % results.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
            } else if (e.key === "Enter" && results[selectedIndex]) {
                e.preventDefault();
                handleSelect(results[selectedIndex]);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, results, selectedIndex]);

    const handleSelect = (item: SearchResult) => {
        router.push(item.href);
        setIsOpen(false);
        setQuery("");
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "doc":
                return <FileText className="w-4 h-4 text-indigo-600" />;
            case "blog":
                return <Newspaper className="w-4 h-4 text-violet-600" />;
            case "page":
                return <BookOpen className="w-4 h-4 text-blue-600" />;
            default:
                return <FileText className="w-4 h-4" />;
        }
    };

    const getTypeBadge = (type: string) => {
        const styles = {
            doc: "bg-indigo-100 text-indigo-700 border-indigo-200",
            blog: "bg-violet-100 text-violet-700 border-violet-200",
            page: "bg-blue-100 text-blue-700 border-blue-200"
        };

        return (
            <span className={cn("text-xs px-2 py-0.5 rounded border font-medium", styles[type as keyof typeof styles] || styles.doc)}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
        );
    };

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 rounded-lg border border-border bg-secondary hover:bg-secondary/70 transition-all duration-200 group shadow-sm touch-manipulation"
            >
                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="flex-1 text-left text-sm text-muted-foreground">
                    <span className="hidden sm:inline">Search documentation...</span>
                    <span className="sm:hidden">Search...</span>
                </span>
                <div className="hidden sm:flex items-center gap-1">
                    {/* <kbd className="px-2 py-0.5 text-xs font-medium bg-white border border-border text-muted-foreground rounded shadow-sm">
                        Ctrl
                    </kbd> */}
                    <kbd className="px-2 py-0.5 text-xs font-medium bg-white border border-border text-muted-foreground rounded shadow-sm">
                        K
                    </kbd>
                </div>
            </button>

            {/* Search Modal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99999]"
                            />

                            {/* Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="fixed top-[10vh] sm:top-[15vh] left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-2xl z-[100000]"
                            >
                                <div className="bg-white border border-border rounded-xl sm:rounded-xl rounded-lg shadow-2xl overflow-hidden">
                                    {/* Search Input */}
                                    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 border-b border-border bg-white">
                                        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                                        <input
                                            type="text"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Search..."
                                            className="flex-1 bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground outline-none"
                                            autoFocus
                                        />
                                        {query && (
                                            <button
                                                onClick={() => setQuery("")}
                                                className="p-1.5 sm:p-1 hover:bg-secondary rounded transition-colors flex-shrink-0 touch-manipulation"
                                            >
                                                <X className="w-4 h-4 text-muted-foreground" />
                                            </button>
                                        )}
                                        <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-medium bg-secondary border border-border text-muted-foreground rounded flex-shrink-0">
                                            ESC
                                        </kbd>
                                    </div>

                                    {/* Results */}
                                    <div className="max-h-[50vh] sm:max-h-[400px] overflow-y-auto bg-white">
                                        {query && results.length === 0 && (
                                            <div className="px-4 py-12 text-center text-sm text-muted-foreground bg-white">
                                                No results found for "{query}"
                                            </div>
                                        )}

                                        {results.length > 0 && (
                                            <div className="py-2 bg-white">
                                                {results.map((item, index) => (
                                                    <button
                                                        key={item.href}
                                                        onClick={() => handleSelect(item)}
                                                        className={cn(
                                                            "w-full px-3 sm:px-4 py-3 sm:py-3 text-left transition-all flex items-start gap-2 sm:gap-3 border-l-2 touch-manipulation active:scale-[0.98]",
                                                            index === selectedIndex
                                                                ? "bg-indigo-50 border-indigo-500"
                                                                : "bg-white border-transparent hover:bg-secondary/50 active:bg-secondary/50"
                                                        )}
                                                    >
                                                        <div className="mt-0.5 flex-shrink-0">
                                                            {getIcon(item.type)}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                                                                <div className="text-sm sm:text-base font-semibold text-foreground truncate">
                                                                    {item.title}
                                                                </div>
                                                                {getTypeBadge(item.type)}
                                                            </div>
                                                            {item.description && (
                                                                <div className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                                                                    {item.description}
                                                                </div>
                                                            )}
                                                            <div className="text-xs text-indigo-600 mt-0.5 sm:mt-1 truncate">
                                                                {item.href}
                                                            </div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {!query && (
                                            <div className="px-3 sm:px-4 py-8 sm:py-12 text-center bg-white">
                                                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground/30 mx-auto mb-2 sm:mb-3" />
                                                <p className="text-sm sm:text-base text-muted-foreground font-medium mb-1">
                                                    <span className="hidden sm:inline">Search across entire website</span>
                                                    <span className="sm:hidden">Start searching</span>
                                                </p>
                                                <p className="text-xs sm:text-sm text-muted-foreground/70">
                                                    <span className="hidden sm:inline">Documentation, blog posts, and main pages</span>
                                                    <span className="sm:hidden">Docs, blog & pages</span>
                                                </p>
                                                <p className="hidden sm:block text-xs text-muted-foreground/70 mt-3">
                                                    Press <kbd className="px-1.5 py-0.5 bg-secondary rounded border border-border text-xs">↑</kbd> <kbd className="px-1.5 py-0.5 bg-secondary rounded border border-border text-xs">↓</kbd> to navigate
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
