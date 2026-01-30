import { CodeBlock } from "@/app/docs/_components/code-block";
import { Tabs } from "@/app/docs/_components/tabs";
import { Callout } from "@/app/docs/_components/callout";

export default function QuickstartPage() {
    const pythonInstall = `pip install supaeval`;
    const pythonQuickstart = `from supaeval import SupaEval

# Initialize with your API key
client = SupaEval(api_key="sk_live_...")

# Create a simple dataset
dataset = client.datasets.create(
    name="quickstart-dataset",
    description="My first evaluation"
)

# Add a test case
dataset.add_items([{
    "input": "What is 2 + 2?",
    "expected_output": "4"
}])

# Run evaluation
evaluation = client.evaluations.create(
    dataset_id=dataset.id,
    agent_endpoint="https://your-agent.api/chat"
)

# Get results
results = evaluation.get_results()
print(f"Score: {results.overall_score}")`;

    const jsInstall = `npm install @supaeval/js-sdk`;
    const jsQuickstart = `import { SupaEval } from '@supaeval/js-sdk';

// Initialize with your API key
const client = new SupaEval({
  apiKey: 'sk_live_...'
});

// Create a simple dataset
const dataset = await client.datasets.create({
  name: 'quickstart-dataset',
  description: 'My first evaluation'
});

// Add a test case
await dataset.addItems([{
  input: 'What is 2 + 2?',
  expectedOutput: '4'
}]);

// Run evaluation
const evaluation = await client.evaluations.create({
  datasetId: dataset.id,
  agentEndpoint: 'https://your-agent.api/chat'
});

// Get results
const results = await evaluation.getResults();
console.log(\`Score: \${results.overallScore}\`);`;

    const curlCreate = `curl -X POST https://api.supaeval.com/v1/datasets \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "quickstart-dataset",
    "description": "My first evaluation"
  }'`;

    return (
        <>
            <h1 id="quickstart">Quickstart Guide</h1>
            <p>
                Get started with SupaEval in under 5 minutes. This guide will walk you through creating
                your first evaluation, from setup to viewing results.
            </p>

            <Callout variant="info" title="What you'll learn">
                By the end of this guide, you'll have created a dataset, run an evaluation, and viewed
                your first quality metrics.
            </Callout>

            <h2 id="prerequisites">Prerequisites</h2>
            <ul>
                <li>A SupaEval account (<a href="https://app.supaeval.com/signup">sign up here</a>)</li>
                <li>An API key from your <a href="https://app.supaeval.com/settings/api-keys">dashboard</a></li>
                <li>An AI agent or LLM application to evaluate</li>
            </ul>

            <h2 id="step-1">Step 1: Installation</h2>
            <p>Choose your preferred language and install the SDK:</p>

            <Tabs
                tabs={[
                    {
                        label: "Python",
                        value: "python",
                        content: (
                            <div>
                                <CodeBlock code={pythonInstall} language="bash" />
                                <p className="text-sm text-muted-foreground mt-2">
                                    Requires Python 3.8 or higher
                                </p>
                            </div>
                        )
                    },
                    {
                        label: "JavaScript",
                        value: "javascript",
                        content: (
                            <div>
                                <CodeBlock code={jsInstall} language="bash" />
                                <p className="text-sm text-muted-foreground mt-2">
                                    Works with Node.js 16+ and modern browsers
                                </p>
                            </div>
                        )
                    }
                ]}
            />

            <h2 id="step-2">Step 2: Run Your First Evaluation</h2>
            <p>
                Here's a complete example that creates a dataset, adds test cases, and runs an evaluation:
            </p>

            <Tabs
                tabs={[
                    {
                        label: "Python",
                        value: "python",
                        content: <CodeBlock code={pythonQuickstart} language="python" />
                    },
                    {
                        label: "JavaScript",
                        value: "javascript",
                        content: <CodeBlock code={jsQuickstart} language="javascript" />
                    },
                    {
                        label: "cURL",
                        value: "curl",
                        content: <CodeBlock code={curlCreate} language="bash" />
                    }
                ]}
            />

            <Callout variant="tip" title="Agent Endpoint">
                Your agent endpoint should accept POST requests with <code>{"{"}"input": "..."{"}"}</code> and
                return <code>{"{"}"output": "..."{"}"}</code>. See our <a href="/docs/evaluation/running">evaluation guide</a> for
                custom configurations.
            </Callout>

            <h2 id="step-3">Step 3: View Results</h2>
            <p>
                After running your evaluation, view detailed results in the{" "}
                <a href="https://app.supaeval.com/evaluations">SupaEval dashboard</a>:
            </p>

            <div className="my-6 p-6 rounded-lg border border-border bg-secondary/10 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="font-medium">Overall Quality Score</span>
                    <span className="text-2xl font-bold text-indigo-600">87%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pass Rate</span>
                    <span className="font-semibold">85/100 tests passed</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Average Latency</span>
                    <span className="font-semibold">1.2s</span>
                </div>
            </div>

            <h2 id="next-steps">Next Steps</h2>
            <p>Now that you've run your first evaluation, you can:</p>

            <div className="space-y-3 mt-4">
                <div className="p-4 rounded-lg border border-border bg-secondary/10">
                    <h4 className="font-semibold mb-1">📊 Explore Metrics</h4>
                    <p className="text-sm text-muted-foreground">
                        Learn about different <a href="/docs/evaluation/metrics">evaluation metrics</a> and how to interpret them
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/10">
                    <h4 className="font-semibold mb-1">📚 Manage Datasets</h4>
                    <p className="text-sm text-muted-foreground">
                        Create comprehensive <a href="/docs/evaluation/datasets">test datasets</a> for thorough evaluation
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/10">
                    <h4 className="font-semibold mb-1">🔬 Run Benchmarks</h4>
                    <p className="text-sm text-muted-foreground">
                        Compare agent versions with <a href="/docs/platform/benchmarks">benchmarks</a>
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-secondary/10">
                    <h4 className="font-semibold mb-1">🔐 Production Setup</h4>
                    <p className="text-sm text-muted-foreground">
                        Learn about <a href="/docs/platform/security">security best practices</a> for production deployments
                    </p>
                </div>
            </div>

            <Callout variant="success" title="Need help?">
                Join our <a href="https://discord.gg/supaeval">community Discord</a> or check out the{" "}
                <a href="/docs/getting-started">full documentation</a> for more details.
            </Callout>
        </>
    );
}
