import { BarChart2, LineChart, PieChart, TrendingUp, Filter, Eye } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";

export default function DashboardPage() {
    return (
        <>
            <h1 id="dashboard-overview">Dashboard Overview</h1>
            <p>
                The SupaEval dashboard provides a comprehensive view of your evaluation results, trends,
                and agent performance metrics.
            </p>

            <h2 id="key-sections">Key Dashboard Sections</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <BarChart2 className="w-5 h-5 text-indigo-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Evaluations Overview</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        View all your evaluation runs, filter by status, dataset, or date range.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <TrendingUp className="w-5 h-5 text-violet-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Performance Trends</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Track metric improvements over time with interactive charts.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <PieChart className="w-5 h-5 text-blue-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Success Breakdown</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Visualize pass/fail rates and error categories across test cases.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <LineChart className="w-5 h-5 text-green-600 mb-2" />
                    <h3 className="text-base font-semibold mb-2">Cost Analytics</h3>
                    <p className="text-sm text-muted-foreground mb-0">
                        Monitor token usage and API costs per evaluation.
                    </p>
                </div>
            </div>

            <h2 id="evaluation-details">Evaluation Details Page</h2>
            <p>
                Click any evaluation to see detailed results:
            </p>
            <ul>
                <li><strong>Aggregate Metrics</strong> - Mean, median, and distribution of scores</li>
                <li><strong>Test Case Results</strong> - Individual scores for each test case</li>
                <li><strong>Failure Analysis</strong> - Common failure patterns and error messages</li>
                <li><strong>Latency Distribution</strong> - Response time percentiles (p50, p95, p99)</li>
                <li><strong>Agent Traces</strong> - Step-by-step execution logs</li>
            </ul>

            <Callout variant="tip" title="Quick Filters">
                Use dashboard filters to quickly find evaluations by dataset, date range, or performance
                threshold. Save common filters for easy access.
            </Callout>

            <h2 id="comparison-view">Comparison View</h2>
            <p>
                Compare multiple evaluations side-by-side to:
            </p>
            <ul>
                <li>Measure improvement after code changes</li>
                <li>Compare different prompts or models</li>
                <li>A/B test agent configurations</li>
                <li>Track regression during development</li>
            </ul>

            <h2 id="exporting-results">Exporting Results</h2>
            <p>
                Export evaluation data for external analysis:
            </p>
            <ul>
                <li><strong>CSV Export</strong> - Tabular data for spreadsheet analysis</li>
                <li><strong>JSON Export</strong> - Structured data for programmatic processing</li>
                <li><strong>PDF Reports</strong> - Formatted reports for stakeholders</li>
            </ul>

            <h2 id="dashboard-customization">Dashboard Customization</h2>
            <p>
                Personalize your dashboard:
            </p>
            <ul>
                <li>Pin favorite datasets or evaluations</li>
                <li>Create custom metric widgets</li>
                <li>Set up alerts for performance thresholds</li>
                <li>Configure default views and filters</li>
            </ul>

            <Callout variant="info" title="Real-time Updates">
                The dashboard automatically refreshes as evaluations complete. Enable notifications
                to get alerts when important evaluations finish.
            </Callout>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/platform/benchmarks" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Benchmarks</h4>
                        <p className="text-sm text-muted-foreground">Create standardized performance benchmarks</p>
                    </div>
                </Link>

                <Link href="/docs/evaluation/running" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Running Evaluations</h4>
                        <p className="text-sm text-muted-foreground">Learn how to create evaluations to analyze in the dashboard</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
