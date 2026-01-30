import { CodeBlock } from "@/app/docs/_components/code-block";
import { Tabs } from "@/app/docs/_components/tabs";
import { Callout } from "@/app/docs/_components/callout";

export default function PythonSDKPage() {
    const installCode = `pip install supaeval`;

    const quickStartCode = `from supaeval import SupaEval

# Initialize the client
client = SupaEval(api_key="your_api_key")

# Create a dataset
dataset = client.datasets.create(
    name="my-evaluation-dataset",
    description="Test dataset for agent evaluation"
)

# Add test cases
dataset.add_items([
    {
        "input": "What is the capital of France?",
        "expected_output": "Paris",
        "metadata": {"difficulty": "easy"}
    },
    {
        "input": "Explain quantum computing",
        "expected_output": "Quantum computing uses quantum bits...",
        "metadata": {"difficulty": "hard"}
    }
])

# Run evaluation
evaluation = client.evaluations.create(
    dataset_id=dataset.id,
    agent_endpoint="https://your-agent.api/chat",
    metrics=["accuracy", "relevance", "faithfulness"]
)

# Get results
results = evaluation.get_results()
print(f"Overall Score: {results.overall_score}")
print(f"Pass Rate: {results.pass_rate}%")`;

    const authCode = `from supaeval import SupaEval

# Option 1: API Key in code
client = SupaEval(api_key="sk_live_...")

# Option 2: Environment variable
# Set SUPAEVAL_API_KEY in your environment
client = SupaEval()

# Option 3: Custom configuration
client = SupaEval(
    api_key="sk_live_...",
    base_url="https://api.supaeval.com",
    timeout=30
)`;

    const asyncCode = `import asyncio
from supaeval import AsyncSupaEval

async def main():
    client = AsyncSupaEval(api_key="your_api_key")
    
    # Async evaluation
    evaluation = await client.evaluations.create(
        dataset_id="dataset_123",
        agent_endpoint="https://your-agent.api/chat"
    )
    
    # Wait for completion
    results = await evaluation.wait_for_completion()
    print(results)

asyncio.run(main())`;

    return (
        <>
            <h1 id="python-sdk">Python SDK</h1>
            <p>
                The SupaEval Python SDK provides a simple and intuitive interface to integrate agent evaluation
                into your Python applications. Perfect for data scientists, ML engineers, and backend developers.
            </p>

            <Callout variant="tip" title="Prerequisites">
                Python 3.8 or higher is required. We recommend using a virtual environment to manage dependencies.
            </Callout>

            <h2 id="installation">Installation</h2>
            <p>Install the SupaEval Python SDK using pip:</p>
            <CodeBlock code={installCode} language="bash" />

            <h2 id="authentication">Authentication</h2>
            <p>
                You'll need an API key to use the SupaEval SDK. Get your API key from the{" "}
                <a href="https://app.supaeval.com/settings/api-keys">SupaEval dashboard</a>.
            </p>
            <CodeBlock code={authCode} language="python" />

            <Callout variant="warning" title="Keep your API key secure">
                Never commit your API key to version control. Use environment variables or a secrets manager
                in production environments.
            </Callout>

            <h2 id="quick-start">Quick Start</h2>
            <p>
                Here's a complete example showing how to create a dataset, add test cases, and run an evaluation:
            </p>
            <CodeBlock code={quickStartCode} language="python" />

            <h2 id="async-support">Async Support</h2>
            <p>
                The SDK provides full async/await support for non-blocking operations:
            </p>
            <CodeBlock code={asyncCode} language="python" />

            <h2 id="key-features">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Type Hints</h3>
                    <p className="text-sm text-muted-foreground">
                        Full type annotations for better IDE support and fewer bugs
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Async/Await</h3>
                    <p className="text-sm text-muted-foreground">
                        Native async support for high-performance applications
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Automatic Retries</h3>
                    <p className="text-sm text-muted-foreground">
                        Built-in retry logic with exponential backoff
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Streaming Support</h3>
                    <p className="text-sm text-muted-foreground">
                        Stream evaluation results as they become available
                    </p>
                </div>
            </div>

            <h2 id="next-steps">Next Steps</h2>
            <ul>
                <li>
                    <a href="/docs/evaluation/datasets">Learn about Dataset Management</a>
                </li>
                <li>
                    <a href="/docs/evaluation/metrics">Understand Metrics and Scoring</a>
                </li>
                <li>
                    <a href="/docs/sdk/rest-api">Explore the REST API</a>
                </li>
            </ul>
        </>
    );
}
