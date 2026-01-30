"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents() {
    const pathname = usePathname();
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Small delay to ensure DOM is fully rendered
        const extractHeadings = () => {
            // Extract all h2 and h3 headings from the article
            const elements = document.querySelectorAll("article h2[id], article h3[id]");

            if (elements.length === 0) {
                setHeadings([]);
                return;
            }

            const headingElements = Array.from(elements).map((elem) => ({
                id: elem.id,
                text: elem.textContent || "",
                level: parseInt(elem.tagName.substring(1))
            }));

            setHeadings(headingElements);

            // Set initial active ID to first heading
            if (headingElements.length > 0 && !activeId) {
                setActiveId(headingElements[0].id);
            }
        };

        // Extract headings after a small delay to ensure content is loaded
        const timer = setTimeout(extractHeadings, 100);

        return () => clearTimeout(timer);
    }, [pathname]); // Re-run when pathname changes

    useEffect(() => {
        if (headings.length === 0) return;

        // Set up intersection observer for scroll spy
        const observerOptions = {
            rootMargin: "-100px 0px -66% 0px",
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Find the first intersecting entry
            const intersectingEntries = entries.filter(entry => entry.isIntersecting);

            if (intersectingEntries.length > 0) {
                // Sort by position and take the topmost one
                intersectingEntries.sort((a, b) => {
                    return a.boundingClientRect.top - b.boundingClientRect.top;
                });
                setActiveId(intersectingEntries[0].target.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all heading elements
        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]); // Re-run when headings change

    // Don't render if no headings
    if (headings.length === 0) {
        return null;
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Scroll with offset for fixed header
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveId(id);
        }
    };

    return (
        <div className="w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto hidden xl:block">
            <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    On This Page
                </p>
                <nav className="space-y-1 relative">
                    {/* Background border */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border" />

                    {headings.map((heading) => {
                        const isActive = activeId === heading.id;

                        return (
                            <a
                                key={heading.id}
                                href={`#${heading.id}`}
                                onClick={(e) => handleClick(e, heading.id)}
                                className={cn(
                                    "block text-sm transition-all duration-200 py-1.5 relative border-l-2",
                                    heading.level === 2 && "pl-4",
                                    heading.level === 3 && "pl-6",
                                    isActive
                                        ? "text-indigo-600 font-medium border-indigo-600"
                                        : "text-muted-foreground hover:text-foreground border-transparent hover:border-border"
                                )}
                            >
                                {heading.text}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
