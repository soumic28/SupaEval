import { GitCompare, Target, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";
import { CodeBlock } from "@/app/docs/_components/code-block";

export default function BenchmarksPage() {
    const pythonExample = `from supaeval import SupaEval

client = SupaEval(api_key="your_api_key")

# Create a benchmark
benchmark = client.benchmarks.create(
    name="production_qa_v1",
    dataset_id="dataset_123",
    metrics=["relevance", "faithfulness", "precision_at_5"],
    description="Standard QA benchmark for production releases"
)

# Run benchmark
result = client.benchmarks.run(
    benchmark_id=benchmark.id,
    agent_endpoint="https://your-agent.com/api/query",
    version_tag="v2.1.0"
)

print(f"Benchmark score: {result.overall_score}")
print(f"vs baseline: {result.vs_baseline}%")`;

    return (
        <>
            <h1 id="benchmarks">Benchmarks</h1>
            <p>
                Benchmarks are standardized evaluation configurations that enable consistent comparison
                of agent performance across versions, configurations, and time.
            </p>

            <h2 id="what-are-benchmarks">What Are Benchmarks?</h2>
            <p>
                A benchmark combines:
            </p>
            <ul>
                <li><strong>Fixed Dataset</strong> - Same test cases for each run</li>
                <li><strong>Standard Metrics</strong> - Consistent measurement criteria</li>
                <li><strong>Version Tracking</strong> - Historical performance records</li>
                <li><strong>Baseline Comparison</strong> - Measure improvement over time</li>
            </ul>

            <Callout variant="info" title="Why Benchmarks?">
                Benchmarks provide objective, reproducible measurements. Use them to track progress,
                validate releases, and compare different approaches.
            </Callout>

            <h2 id="creating-benchmarks">Creating Benchmarks</h2>
            <CodeBlock code={pythonExample} language="python" />

            <h2 id="benchmark-types">Benchmark Types</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Target className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Internal Benchmarks</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Custom datasets specific to your domain and use case. Track internal progress.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Award className="w-5 h-5 text-violet-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Public Benchmarks</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Industry-standard datasets (coming soon). Compare against other agents.
                    </p>
                </div>
            </div>

            <h2 id="versioning">Version Tracking</h2>
            <p>
                Each benchmark run is tagged with a version identifier:
            </p>
            <ul>
                <li>Git commit SHA</li>
                <li>Semantic version (v1.0.0)</li>
                <li>Custom labels (production, staging, experimental)</li>
            </ul>

            <p>
                This enables tracking performance across releases and identifying regressions.
            </p>

            <h2 id="benchmark-leaderboards">Benchmark Leaderboards</h2>
            <p>
                View all runs of a benchmark in a leaderboard showing:
            </p>
            <ul>
                <li>Overall score and ranking</li>
                <li>Per-metric breakdown</li>
                <li>Version and timestamp</li>
                <li>Configuration differences</li>
            </ul>

            <Callout variant="success" title="Best Practice">
                Run benchmarks before each production deployment. Set minimum score thresholds as
                deployment gates to prevent regressions.
            </Callout>

            <h2 id="comparing-results">Comparing Results</h2>
            <p>
                The comparison view shows:
            </p>
            <ul>
                <li><strong>Delta Metrics</strong> - Percentage change from baseline</li>
                <li><strong>Statistical Significance</strong> - Whether improvements are meaningful</li>
                <li><strong>Per-Case Differences</strong> - Which test cases improved or regressed</li>
                <li><strong>Confidence Intervals</strong> - Uncertainty in measurements</li>
            </ul>

            <h2 id="continuous-benchmarking">Continuous Benchmarking</h2>
            <p>
                Integrate benchmarks into your CI/CD pipeline:
            </p>
            <ul>
                <li>Run automatically on pull requests</li>
                <li>Block merges if scores drop below threshold</li>
                <li>Generate reports in PR comments</li>
                <li>Track trends in your monitoring dashboard</li>
            </ul>

            <h2 id="benchmark-insights">Benchmark Insights</h2>
            <p>
                Beyond raw scores, benchmarks reveal:
            </p>
            <ul>
                <li>Which types of queries your agent handles well</li>
                <li>Common failure modes to address</li>
                <li>Cost vs. quality tradeoffs</li>
                <li>Latency improvements or regressions</li>
            </ul>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/evaluation/running" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Running Evaluations</h4>
                        <p className="text-sm text-muted-foreground">Learn how to execute benchmark runs</p>
                    </div>
                </Link>

                <Link href="/docs/platform/dashboard" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Dashboard</h4>
                        <p className="text-sm text-muted-foreground">View benchmark results and trends</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
