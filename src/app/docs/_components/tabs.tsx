"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
    label: string;
    value: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value);

    const activeTabData = tabs.find(tab => tab.value === activeTab);

    return (
        <div className={cn("w-full", className)}>
            {/* Tab Headers */}
            <div className="flex items-center gap-1 mb-4 p-1 bg-secondary/50 rounded-lg border border-border w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                            activeTab === tab.value
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {activeTab === tab.value && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-background border border-indigo-500/30 rounded-md shadow-sm"
                                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {activeTabData?.content}
            </motion.div>
        </div>
    );
}
