import Link from "next/link";
import { getArticles, strapiArticleToBlogPost } from "@/lib/strapi";
import { Calendar, Clock } from "lucide-react";
import { HolographicCard } from "@/components/ui/holographic-card";
import { BlogPost } from "@/lib/blog-data";

export default async function BlogPage() {
    // Fetch articles from Strapi
    let posts: BlogPost[] = [];

    try {
        const response = await getArticles({
            pageSize: 100,
            sort: 'publishedAt:desc'
        });
        // Filter out articles with null/empty slugs to avoid /blog/null URLs
        posts = response.data
            .filter(article => article.slug)
            .map(strapiArticleToBlogPost);
    } catch (error) {
        console.error('Error fetching articles from Strapi:', error);
        // Fallback: you could import and use static blogPosts here if needed
        posts = [];
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Latest <span className="text-indigo-500">Insights</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        News, updates, and engineering deep dives from the SupaEval team.
                    </p>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center text-muted-foreground py-12">
                        <p className="text-lg">No blog posts found. Add some content in Strapi!</p>
                        <a
                            href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://supaeval-strapi.azurewebsites.net'}/admin`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 hover:underline mt-4 inline-block"
                        >
                            Go to Strapi Admin →
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={post.slug}>
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <HolographicCard className="h-full border-border bg-secondary/20 hover:border-indigo-500/30 transition-colors duration-300 flex flex-col">
                                        <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                                        </div>
                                        <div className="p-8 flex flex-col flex-1">
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
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
