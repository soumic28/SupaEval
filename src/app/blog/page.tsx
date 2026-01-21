"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { HolographicCard } from "@/components/ui/holographic-card";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        Latest <span className="text-indigo-500">Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground"
                    >
                        News, updates, and engineering deep dives from the SupaEval team.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="block h-full">
                                <HolographicCard className="h-full border-border bg-secondary/20 hover:border-indigo-500/30 transition-colors duration-300">
                                    <div className="p-8 flex flex-col h-full">
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-indigo-500 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm mb-8 flex-1 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-6 border-t border-border/50">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </HolographicCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
