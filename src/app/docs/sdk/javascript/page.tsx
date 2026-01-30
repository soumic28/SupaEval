import { CodeBlock } from "@/app/docs/_components/code-block";
import { Tabs } from "@/app/docs/_components/tabs";
import { Callout } from "@/app/docs/_components/callout";

export default function JavaScriptSDKPage() {
    const installNpmCode = `npm install @supaeval/js-sdk`;
    const installYarnCode = `yarn add @supaeval/js-sdk`;
    const installPnpmCode = `pnpm add @supaeval/js-sdk`;

    const quickStartCode = `import { SupaEval } from '@supaeval/js-sdk';

// Initialize the client
const client = new SupaEval({
  apiKey: process.env.SUPAEVAL_API_KEY
});

// Create a dataset
const dataset = await client.datasets.create({
  name: 'my-evaluation-dataset',
  description: 'Test dataset for agent evaluation'
});

// Add test cases
await dataset.addItems([
  {
    input: 'What is the capital of France?',
    expectedOutput: 'Paris',
    metadata: { difficulty: 'easy' }
  },
  {
    input: 'Explain quantum computing',
    expectedOutput: 'Quantum computing uses quantum bits...',
    metadata: { difficulty: 'hard' }
  }
]);

// Run evaluation
const evaluation = await client.evaluations.create({
  datasetId: dataset.id,
  agentEndpoint: 'https://your-agent.api/chat',
  metrics: ['accuracy', 'relevance', 'faithfulness']
});

// Get results
const results = await evaluation.getResults();
console.log(\`Overall Score: \${results.overallScore}\`);
console.log(\`Pass Rate: \${results.passRate}%\`);`;

    const browserCode = `<!-- Include via CDN -->
<script src="https://cdn.supaeval.com/js-sdk@latest/index.min.js"></script>

<script>
  const client = new SupaEval.SupaEval({
    apiKey: 'your_api_key'
  });

  // Use the client
  async function runEvaluation() {
    const evaluation = await client.evaluations.create({
      datasetId: 'dataset_123',
      agentEndpoint: 'https://your-agent.api/chat'
    });
    
    const results = await evaluation.getResults();
    console.log(results);
  }
</script>`;

    const typeScriptCode = `import { SupaEval, type Evaluation, type Dataset } from '@supaeval/js-sdk';

const client = new SupaEval({
  apiKey: process.env.SUPAEVAL_API_KEY!
});

// TypeScript types are fully supported
const dataset: Dataset = await client.datasets.create({
  name: 'typed-dataset',
  description: 'Dataset with TypeScript types'
});

const evaluation: Evaluation = await client.evaluations.create({
  datasetId: dataset.id,
  agentEndpoint: 'https://your-agent.api/chat',
  metrics: ['accuracy', 'relevance']
});`;

    const streamingCode = `// Stream evaluation results
const stream = await client.evaluations.stream({
  datasetId: 'dataset_123',
  agentEndpoint: 'https://your-agent.api/chat'
});

for await (const result of stream) {
  console.log('Progress:', result.progress);
  console.log('Current Score:', result.currentScore);
  
  if (result.completed) {
    console.log('Final Score:', result.finalScore);
    break;
  }
}`;

    return (
        <>
            <h1 id="javascript-sdk">JavaScript SDK</h1>
            <p>
                The SupaEval JavaScript SDK works seamlessly in Node.js and modern browsers, providing a
                powerful and type-safe way to integrate agent evaluation into your JavaScript and TypeScript applications.
            </p>

            <Callout variant="tip" title="TypeScript Support">
                The SDK is written in TypeScript and includes full type definitions for an excellent developer experience.
            </Callout>

            <h2 id="installation">Installation</h2>
            <p>Install the SupaEval JavaScript SDK using your preferred package manager:</p>

            <Tabs
                tabs={[
                    {
                        label: "npm",
                        value: "npm",
                        content: <CodeBlock code={installNpmCode} language="bash" />
                    },
                    {
                        label: "yarn",
                        value: "yarn",
                        content: <CodeBlock code={installYarnCode} language="bash" />
                    },
                    {
                        label: "pnpm",
                        value: "pnpm",
                        content: <CodeBlock code={installPnpmCode} language="bash" />
                    }
                ]}
            />

            <h2 id="authentication">Authentication</h2>
            <p>
                You'll need an API key to use the SupaEval SDK. Get your API key from the{" "}
                <a href="https://app.supaeval.com/settings/api-keys">SupaEval dashboard</a>.
            </p>

            <Callout variant="warning" title="Keep your API key secure">
                Never expose your API key in client-side code. Use environment variables and server-side
                API routes for browser applications.
            </Callout>

            <h2 id="quick-start">Quick Start</h2>
            <p>
                Here's a complete example showing how to create a dataset, add test cases, and run an evaluation:
            </p>
            <CodeBlock code={quickStartCode} language="javascript" />

            <h2 id="browser-usage">Browser Usage</h2>
            <p>
                You can use the SDK in the browser via CDN or as an ES module:
            </p>
            <CodeBlock code={browserCode} language="html" />

            <Callout variant="danger" title="Security Warning">
                For browser usage, implement a server-side proxy to protect your API key. Never include
                your API key directly in client-side code.
            </Callout>

            <h2 id="typescript">TypeScript Support</h2>
            <p>
                The SDK provides full TypeScript support with comprehensive type definitions:
            </p>
            <CodeBlock code={typeScriptCode} language="typescript" />

            <h2 id="streaming">Streaming Results</h2>
            <p>
                Stream evaluation results in real-time for better UX:
            </p>
            <CodeBlock code={streamingCode} language="javascript" />

            <h2 id="key-features">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Tree Shakeable</h3>
                    <p className="text-sm text-muted-foreground">
                        Only bundle what you use for minimal bundle size
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Promise-based</h3>
                    <p className="text-sm text-muted-foreground">
                        Modern async/await syntax for clean, readable code
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">Automatic Retries</h3>
                    <p className="text-sm text-muted-foreground">
                        Built-in retry logic with configurable backoff
                    </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <h3 className="font-semibold mb-2 text-base">ESM & CommonJS</h3>
                    <p className="text-sm text-muted-foreground">
                        Works with both module systems seamlessly
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
                    <a href="/docs/sdk/python">Explore the Python SDK</a>
                </li>
            </ul>
        </>
    );
}
