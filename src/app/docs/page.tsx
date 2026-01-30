"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Database, Gauge, Shield, Zap } from "lucide-react";
import { HolographicCard } from "@/components/ui/holographic-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { docsNavigation } from "@/lib/docs-data";

export default function DocsPage() {
    return (
        <div className="max-w-6xl mx-auto py-8 px-4 sm:py-12">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-indigo-600 backdrop-blur-md mb-4 sm:mb-6"
                >
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Documentation
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-4"
                >
                    Welcome to <span className="text-gradient-primary">SupaEval</span> Docs
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
                >
                    Everything you need to integrate, evaluate, and improve your AI agents with quality intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
                >
                    <Link href="/docs/getting-started/quickstart" className="w-full sm:w-auto">
                        <MagneticButton className="w-full sm:w-auto">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                    </Link>
                    <Link href="/docs/sdk/python" className="w-full sm:w-auto">
                        <MagneticButton variant="secondary" className="w-full sm:w-auto">
                            View SDK Docs
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                {[
                    {
                        icon: <Zap className="w-6 h-6" />,
                        title: "Quick Start",
                        description: "Get up and running in 5 minutes",
                        href: "/docs/getting-started/quickstart",
                        color: "indigo"
                    },
                    {
                        icon: <Code2 className="w-6 h-6" />,
                        title: "Python SDK",
                        description: "Integrate with Python applications",
                        href: "/docs/sdk/python",
                        color: "violet"
                    },
                    {
                        icon: <Code2 className="w-6 h-6" />,
                        title: "JavaScript SDK",
                        description: "Build with Node.js and browsers",
                        href: "/docs/sdk/javascript",
                        color: "purple"
                    },
                    {
                        icon: <Database className="w-6 h-6" />,
                        title: "Dataset Management",
                        description: "Upload and manage evaluation datasets",
                        href: "/docs/evaluation/datasets",
                        color: "blue"
                    },
                    {
                        icon: <Gauge className="w-6 h-6" />,
                        title: "Metrics & Scoring",
                        description: "Understand evaluation metrics",
                        href: "/docs/evaluation/metrics",
                        color: "cyan"
                    },
                    {
                        icon: <Shield className="w-6 h-6" />,
                        title: "Security",
                        description: "Enterprise security features",
                        href: "/docs/platform/security",
                        color: "green"
                    }
                ].map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                    >
                        <Link href={item.href}>
                            <HolographicCard className="h-full p-6 hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer">
                                <div className={`inline-flex p-3 rounded-lg bg-${item.color}-500/10 text-${item.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </HolographicCard>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Documentation Sections */}
            <div className="space-y-12">
                {docsNavigation.map((section, sectionIndex) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + sectionIndex * 0.1 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {section.items.map((item) => (
                                <Link key={item.href} href={item.href}>
                                    <div className="p-4 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-indigo-500/30 transition-all group">
                                        <h3 className="font-semibold mb-1 group-hover:text-indigo-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
