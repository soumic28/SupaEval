"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAdjacentPages } from "@/lib/docs-data";

export function DocNavigation() {
    const pathname = usePathname();
    const { previous, next } = getAdjacentPages(pathname);

    // Don't render if there's no previous or next page
    if (!previous && !next) {
        return null;
    }

    return (
        <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Previous Button */}
                {previous ? (
                    <Link
                        href={previous.href!}
                        className="group flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-indigo-500/30 transition-all duration-200 touch-manipulation"
                    >
                        <div className="flex-shrink-0 mt-0.5">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                                Previous
                            </div>
                            <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-indigo-600 transition-colors">
                                {previous.title}
                            </div>
                            {previous.description && (
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-1">
                                    {previous.description}
                                </div>
                            )}
                        </div>
                    </Link>
                ) : (
                    <div /> // Empty div to maintain grid layout when there's no previous
                )}

                {/* Next Button */}
                {next && (
                    <Link
                        href={next.href!}
                        className="group flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-indigo-500/30 transition-all duration-200 touch-manipulation sm:text-right"
                    >
                        <div className="flex-1 min-w-0 sm:order-1">
                            <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                                Next
                            </div>
                            <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-indigo-600 transition-colors">
                                {next.title}
                            </div>
                            {next.description && (
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-1">
                                    {next.description}
                                </div>
                            )}
                        </div>
                        <div className="flex-shrink-0 mt-0.5 sm:order-2">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
