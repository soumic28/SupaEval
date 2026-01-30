"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Extract all h2 and h3 headings from the page
        const elements = document.querySelectorAll("article h2, article h3");
        const headingElements = Array.from(elements).map((elem) => ({
            id: elem.id,
            text: elem.textContent || "",
            level: parseInt(elem.tagName.substring(1))
        }));
        setHeadings(headingElements);

        // Set up intersection observer for scroll spy
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0px -80% 0px" }
        );

        elements.forEach((elem) => observer.observe(elem));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) return null;

    return (
        <div className="w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto hidden xl:block">
            <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground mb-4">On This Page</p>
                <nav className="space-y-2">
                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className={cn(
                                "block text-sm transition-colors",
                                heading.level === 3 && "pl-4",
                                activeId === heading.id
                                    ? "text-indigo-600 font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });
                            }}
                        >
                            {heading.text}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
