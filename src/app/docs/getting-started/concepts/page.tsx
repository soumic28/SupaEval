import { BookOpen, Database, FileText } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";

export default function ConceptsPage() {
    return (
        <>
            <h1 id="core-concepts">Core Concepts</h1>
            <p>
                Understanding the key concepts in SupaEval will help you effectively evaluate and improve your AI agents.
            </p>

            <h2 id="datasets">Datasets</h2>
            <p>
                A <strong>dataset</strong> is a collection of test cases used to evaluate your agent. Each dataset contains:
            </p>
            <ul>
                <li><strong>Test Cases</strong> - Individual evaluation scenarios</li>
                <li><strong>Prompts</strong> - Input queries or instructions</li>
                <li><strong>Expected Outputs</strong> - Reference answers (optional)</li>
                <li><strong>Metadata</strong> - Additional context like difficulty, domain, or tags</li>
            </ul>

            <div className="my-6 p-6 rounded-lg border border-border bg-secondary/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-600" />
                    Dataset Structure
                </h4>
                <p className="text-sm text-muted-foreground mb-0">
                    Datasets can be created from CSV/JSON files, programmatically via SDK, or using our web interface.
                </p>
            </div>

            <h2 id="evaluations">Evaluations</h2>
            <p>
                An <strong>evaluation</strong> is a run that executes your agent against a dataset and measures performance
                using specified metrics.
            </p>

            <h3 id="evaluation-types">Types of Evaluations</h3>
            <ul>
                <li><strong>Ad-hoc Evaluations</strong> - Quick one-off tests during development</li>
                <li><strong>Continuous Evaluations</strong> - Automated runs on code changes</li>
                <li><strong>Benchmark Evaluations</strong> - Standardized comparisons over time</li>
            </ul>

            <h2 id="metrics">Metrics</h2>
            <p>
                <strong>Metrics</strong> are quantitative measures computed by SupaEval to assess different aspects of
                agent performance.
            </p>

            <h3 id="retrieval-metrics">Retrieval Metrics</h3>
            <ul>
                <li><strong>Precision@K</strong> - Accuracy of top K retrieved documents</li>
                <li><strong>Recall@K</strong> - Coverage of relevant documents in top K</li>
                <li><strong>nDCG</strong> - Normalized discounted cumulative gain</li>
                <li><strong>MRR</strong> - Mean reciprocal rank</li>
            </ul>

            <h3 id="generation-metrics">Generation Metrics</h3>
            <ul>
                <li><strong>Relevance</strong> - How well the output addresses the query</li>
                <li><strong>Faithfulness</strong> - Accuracy relative to source documents</li>
                <li><strong>Hallucination Detection</strong> - Identifies fabricated information</li>
                <li><strong>Answer Similarity</strong> - Comparison to expected output</li>
            </ul>

            <h3 id="task-metrics">Task Metrics</h3>
            <ul>
                <li><strong>Success Rate</strong> - Percentage of correctly completed tasks</li>
                <li><strong>Latency</strong> - Response time per query</li>
                <li><strong>Cost</strong> - Token usage and API costs</li>
            </ul>

            <Callout variant="info" title="Automatic Metric Computation">
                SupaEval computes all metrics automatically during evaluation runs. You don't need to
                implement scoring logic yourself.
            </Callout>

            <h2 id="benchmarks">Benchmarks</h2>
            <p>
                <strong>Benchmarks</strong> are named evaluation runs against fixed datasets that enable consistent
                comparison between:
            </p>
            <ul>
                <li>Different agent versions</li>
                <li>Prompt variations</li>
                <li>Model changes</li>
                <li>Configuration updates</li>
            </ul>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/getting-started/quickstart" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Quickstart Guide</h4>
                        <p className="text-sm text-muted-foreground">Create your first evaluation</p>
                    </div>
                </Link>

                <Link href="/docs/evaluation/datasets" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Dataset Management</h4>
                        <p className="text-sm text-muted-foreground">Learn how to create and manage datasets</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
