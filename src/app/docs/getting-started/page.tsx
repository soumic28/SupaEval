import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";

export default function GettingStartedPage() {
    return (
        <>
            <h1 id="introduction">Introduction</h1>
            <p>
                Welcome to SupaEval! This guide will help you understand what SupaEval is, how it works,
                and why it's essential for building reliable AI agents.
            </p>

            <h2 id="what-is-supaeval">What is SupaEval?</h2>
            <p>
                SupaEval is a <strong>quality intelligence platform</strong> for AI agents. Unlike traditional
                evaluation tools that only measure final outputs, SupaEval provides deep insights across
                every layer of your agent system:
            </p>

            <ul>
                <li><strong>Retrieval Quality</strong> - How well your agent finds relevant information</li>
                <li><strong>Reasoning Accuracy</strong> - How well it processes and interprets data</li>
                <li><strong>Tool Usage</strong> - How effectively it uses available tools</li>
                <li><strong>Generation Quality</strong> - How well it produces final outputs</li>
            </ul>

            <Callout variant="tip" title="Why Agent-Specific Evaluation Matters">
                LLM evaluation tools focus on final answers. But agents fail in many ways: bad retrieval,
                incorrect tool calls, poor reasoning chains. SupaEval helps you find and fix these issues.
            </Callout>

            <h2 id="core-concepts">Core Concepts</h2>

            <h3 id="datasets">Datasets</h3>
            <p>
                Collections of test cases used to evaluate your agent. Datasets can include prompts,
                multi-turn conversations, expected outputs, and metadata like difficulty or domain.
            </p>

            <h3 id="evaluations">Evaluations</h3>
            <p>
                Runs that execute your agent against a dataset and measure performance using specified metrics.
                Evaluations are reproducible and can be compared over time.
            </p>

            <h3 id="metrics">Metrics</h3>
            <p>
                Quantitative measures of agent performance computed by SupaEval (not by you). Includes:
            </p>
            <ul>
                <li>Retrieval metrics (Precision@K, Recall@K, nDCG)</li>
                <li>Generation metrics (relevance, faithfulness, hallucination detection)</li>
                <li>Task success rates</li>
                <li>Latency and cost tracking</li>
            </ul>

            <h3 id="benchmarks">Benchmarks</h3>
            <p>
                Named evaluation runs against fixed datasets that enable comparison between agent versions,
                prompt changes, or model swaps.
            </p>

            <h2 id="how-it-works">How It Works</h2>

            <div className="my-8 space-y-4">
                <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-secondary/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-600 flex items-center justify-center font-bold">
                        1
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Connect Your Agent</h4>
                        <p className="text-sm text-muted-foreground">
                            Provide an API endpoint or integrate using our SDK. No changes to your agent code required.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-secondary/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-600 flex items-center justify-center font-bold">
                        2
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Upload or Select Dataset</h4>
                        <p className="text-sm text-muted-foreground">
                            Use our benchmark datasets or upload your own custom test cases.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-secondary/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-600 flex items-center justify-center font-bold">
                        3
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Run Evaluation</h4>
                        <p className="text-sm text-muted-foreground">
                            SupaEval executes your agent, captures intermediate steps, and computes metrics.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-secondary/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-600 flex items-center justify-center font-bold">
                        4
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Analyze Results</h4>
                        <p className="text-sm text-muted-foreground">
                            View detailed dashboards showing where your agent succeeds and fails, with actionable insights.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="key-features">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="font-semibold mb-2 text-base">Model Agnostic</h3>
                    <p className="text-sm text-muted-foreground">
                        Works with any LLM, framework, or agent architecture
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="font-semibold mb-2 text-base">No Code Changes</h3>
                    <p className="text-sm text-muted-foreground">
                        Evaluate existing agents without modifying internals
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="font-semibold mb-2 text-base">Reproducible</h3>
                    <p className="text-sm text-muted-foreground">
                        Deterministic reruns for consistent benchmarking
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="font-semibold mb-2 text-base">Enterprise Ready</h3>
                    <p className="text-sm text-muted-foreground">
                        SOC 2 compliant with advanced security features
                    </p>
                </div>
            </div>

            <Callout variant="success" title="Ready to get started?">
                Follow our <Link href="/docs/getting-started/quickstart" className="text-indigo-600 hover:underline">
                    Quickstart Guide
                </Link> to run your first evaluation in under 5 minutes.
            </Callout>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/getting-started/quickstart" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Quickstart Guide</h4>
                        <p className="text-sm text-muted-foreground">Get up and running in 5 minutes</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-indigo-600 transition-colors" />
                </Link>

                <Link href="/docs/sdk/python" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Python SDK</h4>
                        <p className="text-sm text-muted-foreground">Integrate with Python applications</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-indigo-600 transition-colors" />
                </Link>

                <Link href="/docs/sdk/javascript" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">JavaScript SDK</h4>
                        <p className="text-sm text-muted-foreground">Build with Node.js and browsers</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-indigo-600 transition-colors" />
                </Link>
            </div>
        </>
    );
}
