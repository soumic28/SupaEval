import { Upload, FileJson, FileText, Database } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/app/docs/_components/callout";
import { CodeBlock } from "@/app/docs/_components/code-block";
import { Tabs } from "@/app/docs/_components/tabs";

export default function DatasetsPage() {
    const csvExample = `prompt,expected_output,metadata
"What is the capital of France?","Paris","{\"difficulty\": \"easy\", \"category\": \"geography\"}"
"Explain photosynthesis","Plants convert light into energy...","{\"difficulty\": \"medium\", \"category\": \"science\"}"`;

    const jsonExample = `{
  "dataset_name": "geography_qa",
  "test_cases": [
    {
      "prompt": "What is the capital of France?",
      "expected_output": "Paris",
      "metadata": {
        "difficulty": "easy",
        "category": "geography"
      }
    },
    {
      "prompt": "What is the largest ocean?",
      "expected_output": "Pacific Ocean",
      "metadata": {
        "difficulty": "easy",
        "category": "geography"
      }
    }
  ]
}`;

    const pythonUpload = `from supaeval import SupaEval

client = SupaEval(api_key="your_api_key")

# Create dataset from file
dataset = client.datasets.create_from_file(
    name="geography_qa",
    file_path="./dataset.csv",
    description="Geography questions and answers"
)

print(f"Dataset created: {dataset.id}")`;

    const jsUpload = `import { SupaEval } from '@supaeval/js-sdk';

const client = new SupaEval({ apiKey: 'your_api_key' });

// Create dataset programmatically
const dataset = await client.datasets.create({
  name: 'geography_qa',
  description: 'Geography questions and answers',
  testCases: [
    {
      prompt: 'What is the capital of France?',
      expectedOutput: 'Paris',
      metadata: { difficulty: 'easy', category: 'geography' }
    },
    {
      prompt: 'What is the largest ocean?',
      expectedOutput: 'Pacific Ocean',
      metadata: { difficulty: 'easy', category: 'geography' }
    }
  ]
});

console.log(\`Dataset created: \${dataset.id}\`);`;

    return (
        <>
            <h1 id="dataset-management">Dataset Management</h1>
            <p>
                Datasets are collections of test cases used to evaluate your AI agents. Learn how to create,
                upload, and manage datasets in SupaEval.
            </p>

            <h2 id="dataset-formats">Dataset Formats</h2>
            <p>
                SupaEval supports multiple formats for dataset upload:
            </p>

            <h3 id="csv-format">CSV Format</h3>
            <p>
                Simple tabular format with required columns: <code>prompt</code>, and optional
                <code>expected_output</code>, <code>metadata</code> columns.
            </p>
            <CodeBlock code={csvExample} language="csv" />

            <h3 id="json-format">JSON Format</h3>
            <p>
                Structured format allowing richer metadata and nested fields.
            </p>
            <CodeBlock code={jsonExample} language="json" />

            <h2 id="creating-datasets">Creating Datasets</h2>

            <h3 id="via-sdk">Via SDK</h3>
            <Tabs
                tabs={[
                    {
                        label: "Python",
                        value: "python",
                        content: <CodeBlock code={pythonUpload} language="python" />
                    },
                    {
                        label: "JavaScript",
                        value: "javascript",
                        content: <CodeBlock code={jsUpload} language="javascript" />
                    }
                ]}
            />

            <h3 id="via-dashboard">Via Dashboard</h3>
            <ol>
                <li>Navigate to the Datasets page</li>
                <li>Click "Create Dataset"</li>
                <li>Upload CSV/JSON file or create test cases manually</li>
                <li>Add metadata and tags</li>
                <li>Save dataset</li>
            </ol>

            <Callout variant="tip" title="Best Practices">
                <ul className="space-y-1 mb-0">
                    <li>Start with 10-20 diverse test cases</li>
                    <li>Include edge cases and failure scenarios</li>
                    <li>Add metadata for filtering and analysis</li>
                    <li>Version datasets when making significant changes</li>
                </ul>
            </Callout>

            <h2 id="dataset-versioning">Dataset Versioning</h2>
            <p>
                SupaEval automatically versions datasets when you update them. This ensures:
            </p>
            <ul>
                <li>Reproducible evaluation runs</li>
                <li>Historical comparison of agent performance</li>
                <li>Rollback capability if needed</li>
            </ul>

            <h2 id="managing-datasets">Managing Datasets</h2>

            <h3 id="listing-datasets">Listing Datasets</h3>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <Database className="w-5 h-5 text-indigo-600 mb-2" />
                    <h4 className="font-semibold mb-1 text-sm">Filter by Tags</h4>
                    <p className="text-xs text-muted-foreground mb-0">Organize datasets using custom tags</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/20">
                    <FileText className="w-5 h-5 text-violet-600 mb-2" />
                    <h4 className="font-semibold mb-1 text-sm">Search by Name</h4>
                    <p className="text-xs text-muted-foreground mb-0">Quickly find datasets by name or description</p>
                </div>
            </div>

            <h2 id="next-steps">Next Steps</h2>
            <div className="space-y-3 mt-6">
                <Link href="/docs/evaluation/running" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-indigo-500/30 hover:bg-secondary/20 transition-all group">
                    <div>
                        <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">Running Evaluations</h4>
                        <p className="text-sm text-muted-foreground">Use your datasets to evaluate agents</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
