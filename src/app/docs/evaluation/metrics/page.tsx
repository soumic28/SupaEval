import { BarChart3, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";

export default function MetricsPage() {
    return (
        <>
            <h1 id="metrics-and-scoring">Metrics & Scoring</h1>
            <p>
                SupaEval computes comprehensive metrics to evaluate different aspects of your AI agent's
                performance. All metrics are calculated automatically during evaluation runs.
            </p>

            <h2 id="retrieval-metrics">Retrieval Metrics</h2>
            <p>
                Measure how well your agent finds and ranks relevant information.
            </p>

            <div className="space-y-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="text-base font-semibold mb-2">Precision@K</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                        Measures what fraction of the top K retrieved documents are relevant.
                    </p>
                    <code className="text-xs bg-slate-900/80 text-slate-300 px-2 py-1 rounded">
                        Precision@K = (# relevant docs in top K) / K
                    </code>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="text-base font-semibold mb-2">Recall@K</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                        Measures what fraction of all relevant documents are in the top K results.
                    </p>
                    <code className="text-xs bg-slate-900/80 text-slate-300 px-2 py-1 rounded">
                        Recall@K = (# relevant docs in top K) / (total relevant docs)
                    </code>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="text-base font-semibold mb-2">nDCG (Normalized Discounted Cumulative Gain)</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Measures ranking quality, giving higher weight to relevant documents at top positions.
                        Ranges from 0 to 1, where 1 is perfect ranking.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="text-base font-semibold mb-2">MRR (Mean Reciprocal Rank)</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Measures how high the first relevant document appears in the ranking.
                        Higher is better (1.0 = first result is relevant).
                    </p>
                </div>
            </div>

            <h2 id="generation-metrics">Generation Metrics</h2>
            <p>
                Evaluate the quality of generated text outputs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Target className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Relevance</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        How well the generated output addresses the input query. Scored 0-1 using LLM-as-judge.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <BarChart3 className="w-5 h-5 text-violet-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Faithfulness</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Measures factual accuracy relative to source documents. Detects contradictions and unsupported claims.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Zap className="w-5 h-5 text-yellow-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Hallucination Score</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Identifies statements not grounded in provided context. Lower is better.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Answer Similarity</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Semantic similarity to expected output using embedding-based comparison.
                    </p>
                </div>
            </div>

            <Callout variant="info" title="LLM-as-Judge">
                SupaEval uses advanced LLM-based evaluation for metrics like relevance and faithfulness.
                This provides nuanced scoring beyond simple string matching.
            </Callout>

            <h2 id="task-metrics">Task Metrics</h2>
            <p>
                Operational metrics for production monitoring.
            </p>

            <ul>
                <li><strong>Success Rate</strong> - Percentage of queries successfully completed</li>
                <li><strong>Latency</strong> - Average response time (p50, p95, p99)</li>
                <li><strong>Token Usage</strong> - Input and output tokens per query</li>
                <li><strong>Cost</strong> - Estimated API costs based on token usage</li>
            </ul>

            <h2 id="custom-metrics">Custom Metrics</h2>
            <p>
                Need domain-specific evaluation? Contact us about custom metric development for your use case.
            </p>

            <Callout variant="tip" title="Metric Selection">
                Choose metrics aligned with your goals:
                <ul className="mt-2 space-y-1 mb-0">
                    <li>• RAG systems: Precision@K, relevance, faithfulness</li>
                    <li>• Chatbots: Relevance, answer similarity, task success</li>
                    <li>• Production: Latency, cost, success rate</li>
                </ul>
            </Callout>

            <h2 id="interpreting-scores">Interpreting Scores</h2>
            <p>
                Most metrics are normalized 0-1 where higher is better (except hallucination score).
            </p>
            <ul>
                <li><strong>0.9-1.0</strong> - Excellent performance</li>
                <li><strong>0.7-0.9</strong> - Good performance</li>
                <li><strong>0.5-0.7</strong> - Acceptable, room for improvement</li>
                <li><strong>&lt;0.5</strong> - Needs significant improvement</li>
            </ul>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/evaluation/running" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Running Evaluations</h4>
                        <p className="text-sm text-muted-foreground">Apply metrics to your evaluations</p>
                    </div>
                </Link>

                <Link href="/docs/platform/benchmarks" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Benchmarks</h4>
                        <p className="text-sm text-muted-foreground">Track metrics over time</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
