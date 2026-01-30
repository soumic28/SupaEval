import { CodeBlock } from "@/app/docs/_components/code-block";
import { Callout } from "@/app/docs/_components/callout";

export default function RestAPIPage() {
  const authHeaderCode = `Authorization: Bearer sk_live_your_api_key_here`;

  const createDatasetCode = `POST /api/v1/datasets
Content-Type: application/json

{
  "name": "my-evaluation-dataset",
  "description": "Test dataset for agent evaluation",
  "metadata": {
    "domain": "general",
    "language": "en"
  }
}`;

  const createDatasetResponse = `{
  "id": "dataset_abc123",
  "name": "my-evaluation-dataset",
  "description": "Test dataset for agent evaluation",
  "created_at": "2024-01-30T10:00:00Z",
  "item_count": 0,
  "metadata": {
    "domain": "general",
    "language": "en"
  }
}`;

  const addItemsCode = `POST /api/v1/datasets/{dataset_id}/items
Content-Type: application/json

{
  "items": [
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
  ]
}`;

  const runEvaluationCode = `POST /api/v1/evaluations
Content-Type: application/json

{
  "dataset_id": "dataset_abc123",
  "agent_endpoint": "https://your-agent.api/chat",
  "metrics": ["accuracy", "relevance", "faithfulness"],
  "config": {
    "timeout": 30,
    "retry_count": 3
  }
}`;

  const evaluationResponse = `{
  "id": "eval_xyz789",
  "dataset_id": "dataset_abc123",
  "status": "running",
  "created_at": "2024-01-30T10:05:00Z",
  "progress": 0.0,
  "estimated_completion": "2024-01-30T10:10:00Z"
}`;

  const getResultsCode = `GET /api/v1/evaluations/{evaluation_id}/results`;

  const resultsResponse = `{
  "evaluation_id": "eval_xyz789",
  "status": "completed",
  "overall_score": 0.87,
  "pass_rate": 85.5,
  "metrics": {
    "accuracy": 0.90,
    "relevance": 0.88,
    "faithfulness": 0.83
  },
  "completed_at": "2024-01-30T10:09:30Z",
  "total_items": 100,
  "passed_items": 85,
  "failed_items": 15
}`;

  const errorResponse = `{
  "error": {
    "code": "invalid_request",
    "message": "Dataset not found",
    "param": "dataset_id",
    "type": "invalid_request_error"
  }
}`;

  return (
    <>
      <h1 id="rest-api">REST API</h1>
      <p>
        The SupaEval REST API provides direct HTTP access to all platform features. Use this for
        custom integrations, languages without an official SDK, or webhook-based workflows.
      </p>

      <Callout variant="info" title="Base URL">
        All API requests should be made to: <code>https://api.supaeval.com</code>
      </Callout>

      <h2 id="authentication">Authentication</h2>
      <p>
        Authenticate your API requests using Bearer token authentication. Include your API key in the
        Authorization header:
      </p>
      <CodeBlock code={authHeaderCode} language="http" />

      <Callout variant="warning" title="Rate Limits">
        API requests are rate limited to 1000 requests per minute. Contact support for higher limits.
      </Callout>

      <h2 id="datasets">Datasets</h2>

      <h3 id="create-dataset">Create Dataset</h3>
      <p>Create a new evaluation dataset:</p>
      <CodeBlock code={createDatasetCode} language="http" />

      <p>Response:</p>
      <CodeBlock code={createDatasetResponse} language="json" />

      <h3 id="add-items">Add Items to Dataset</h3>
      <p>Add test cases to an existing dataset:</p>
      <CodeBlock code={addItemsCode} language="http" />

      <h2 id="evaluations">Evaluations</h2>

      <h3 id="create-evaluation">Create Evaluation</h3>
      <p>Start a new evaluation run:</p>
      <CodeBlock code={runEvaluationCode} language="http" />

      <p>Response:</p>
      <CodeBlock code={evaluationResponse} language="json" />

      <h3 id="get-results">Get Results</h3>
      <p>Retrieve evaluation results:</p>
      <CodeBlock code={getResultsCode} language="http" />

      <p>Response:</p>
      <CodeBlock code={resultsResponse} language="json" />

      <h2 id="error-handling">Error Handling</h2>
      <p>
        The API uses standard HTTP status codes. Errors return JSON with details:
      </p>
      <CodeBlock code={errorResponse} language="json" />

      <div className="my-6 p-4 rounded-lg border border-border bg-secondary/20">
        <h3 className="font-semibold mb-3">Common Status Codes</h3>
        <ul className="space-y-2 text-sm">
          <li><code>200</code> - Success</li>
          <li><code>201</code> - Resource created</li>
          <li><code>400</code> - Bad request (invalid parameters)</li>
          <li><code>401</code> - Unauthorized (invalid API key)</li>
          <li><code>404</code> - Resource not found</li>
          <li><code>429</code> - Rate limit exceeded</li>
          <li><code>500</code> - Internal server error</li>
        </ul>
      </div>

      <h2 id="pagination">Pagination</h2>
      <p>
        List endpoints support pagination using <code>limit</code> and <code>offset</code> parameters:
      </p>
      <CodeBlock code={`GET /api/v1/datasets?limit=20&offset=0`} language="http" />

      <h2 id="next-steps">Next Steps</h2>
      <ul>
        <li>
          <a href="/docs/sdk/python">Use the Python SDK</a> for easier integration
        </li>
        <li>
          <a href="/docs/sdk/javascript">Use the JavaScript SDK</a> for Node.js apps
        </li>
        <li>
          <a href="/docs/evaluation/metrics">Learn about evaluation metrics</a>
        </li>
      </ul>
    </>
  );
}
