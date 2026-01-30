import { Play, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";
import { CodeBlock } from "@/app/docs/_components/code-block";

export default function RunningEvaluationsPage() {
    const pythonExample = `from supaeval import SupaEval

client = SupaEval(api_key="your_api_key")

# Run evaluation
evaluation = client.evaluations.create(
    dataset_id="dataset_123",
    agent_endpoint="https://your-agent.com/api/query",
    metrics=["relevance", "faithfulness", "retrieval_precision"],
    config={
        "timeout": 30,
        "max_retries": 3
    }
)

# Check status
print(f"Evaluation ID: {evaluation.id}")
print(f"Status: {evaluation.status}")

# Wait for completion
result = client.evaluations.wait_for_completion(evaluation.id)
print(f"Average relevance: {result.metrics.relevance.mean}")`;

    const jsExample = `import { SupaEval } from '@supaeval/js-sdk';

const client = new SupaEval({ apiKey: 'your_api_key' });

// Run evaluation
const evaluation = await client.evaluations.create({
  datasetId: 'dataset_123',
  agentEndpoint: 'https://your-agent.com/api/query',
  metrics: ['relevance', 'faithfulness', 'retrieval_precision'],
  config: {
    timeout: 30,
    maxRetries: 3
  }
});

console.log(\`Evaluation ID: \${evaluation.id}\`);

// Poll for results
const result = await client.evaluations.waitForCompletion(evaluation.id);
console.log(\`Average relevance: \${result.metrics.relevance.mean}\`);`;

    return (
        <>
            <h1 id="running-evaluations">Running Evaluations</h1>
            <p>
                Learn how to configure and execute evaluations to measure your AI agent's performance.
            </p>

            <h2 id="evaluation-configuration">Evaluation Configuration</h2>
            <p>
                When creating an evaluation, you need to specify:
            </p>
            <ul>
                <li><strong>Dataset</strong> - The test cases to run</li>
                <li><strong>Agent Endpoint</strong> - URL or SDK reference to your agent</li>
                <li><strong>Metrics</strong> - Which measurements to compute</li>
                <li><strong>Configuration</strong> - Timeout, retries, and other settings</li>
            </ul>

            <h2 id="creating-evaluation">Creating an Evaluation</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="space-y-2">
                    <h3 className="text-base font-semibold">Python</h3>
                    <CodeBlock code={pythonExample} language="python" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-base font-semibold">JavaScript</h3>
                    <CodeBlock code={jsExample} language="javascript" />
                </div>
            </div>

            <Callout variant="info" title="Async Execution">
                Evaluations run asynchronously. Use <code>wait_for_completion</code> to poll for results,
                or configure webhooks for notifications when evaluations complete.
            </Callout>

            <h2 id="evaluation-metrics">Available Metrics</h2>
            <p>
                Choose from SupaEval's comprehensive metric library:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h4 className="font-semibold mb-2 text-sm">Retrieval Metrics</h4>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-0">
                        <li>• precision_at_k</li>
                        <li>• recall_at_k</li>
                        <li>• ndcg</li>
                        <li>• mrr</li>
                    </ul>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h4 className="font-semibold mb-2 text-sm">Generation Metrics</h4>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-0">
                        <li>• relevance</li>
                        <li>• faithfulness</li>
                        <li>• hallucination_score</li>
                        <li>• answer_similarity</li>
                    </ul>
                </div>
            </div>

            <h2 id="monitoring-progress">Monitoring Progress</h2>
            <p>
                Track evaluation progress in real-time:
            </p>
            <ul>
                <li><strong>Dashboard View</strong> - Visual progress indicators</li>
                <li><strong>SDK Polling</strong> - Programmatic status checks</li>
                <li><strong>Webhooks</strong> - Automated notifications</li>
            </ul>

            <h2 id="evaluation-results">Understanding Results</h2>
            <p>
                After completion, evaluation results include:
            </p>
            <ul>
                <li>Aggregate metrics (mean, median, std dev)</li>
                <li>Per-test-case scores</li>
                <li>Failure analysis</li>
                <li>Latency and cost breakdown</li>
            </ul>

            <Callout variant="success" title="Optimization Tip">
                Run small evaluations (10-20 test cases) during development for quick feedback.
                Use larger datasets for final validation before deployment.
            </Callout>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/evaluation/metrics" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Metrics & Scoring</h4>
                        <p className="text-sm text-muted-foreground">Deep dive into evaluation metrics</p>
                    </div>
                </Link>

                <Link href="/docs/platform/dashboard" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Dashboard Overview</h4>
                        <p className="text-sm text-muted-foreground">Analyze results in the dashboard</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
