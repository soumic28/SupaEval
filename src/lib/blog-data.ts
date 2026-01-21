export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-supaeval",
    title: "Introducing SupaEval: Quality Intelligence for AI Agents",
    excerpt:
      "We are thrilled to announce the launch of SupaEval, the first comprehensive platform designed to test, benchmark, and continuously improve AI agents.",
    date: "October 24, 2025",
    author: "Sarah Chen",
    readTime: "5 min read",
    category: "Product",
    content: `
      <p>We are thrilled to announce the launch of SupaEval, the first comprehensive platform designed to test, benchmark, and continuously improve AI agents.</p>
      <h2>Why SupaEval?</h2>
      <p>As AI agents become more autonomous, ensuring their quality and reliability is paramount. Traditional testing methods fall short when dealing with the non-deterministic nature of LLMs.</p>
      <p>SupaEval provides a suite of tools to evaluate agents across multiple dimensions:</p>
      <ul>
        <li><strong>Retrieval Accuracy:</strong> Measure how well your agent finds relevant information.</li>
        <li><strong>Reasoning Capabilities:</strong> Assess the logical steps your agent takes to reach a conclusion.</li>
        <li><strong>Tool Usage:</strong> Verify that your agent uses external tools correctly and efficiently.</li>
        <li><strong>Generation Quality:</strong> Evaluate the fluency, coherence, and safety of generated responses.</li>
      </ul>
      <h2>Getting Started</h2>
      <p>Sign up today and start evaluating your agents with our easy-to-use interface and powerful API.</p>
    `,
  },
  {
    slug: "optimizing-rag-pipelines",
    title: "Optimizing RAG Pipelines: A Deep Dive",
    excerpt:
      "Learn how to improve the performance of your Retrieval-Augmented Generation pipelines with advanced techniques and best practices.",
    date: "November 12, 2025",
    author: "David Miller",
    readTime: "8 min read",
    category: "Engineering",
    content: `
      <p>Retrieval-Augmented Generation (RAG) is a powerful technique for grounding LLMs in external data. However, building a performant RAG pipeline is challenging.</p>
      <h2>Key Strategies</h2>
      <h3>1. Chunking Strategies</h3>
      <p>The way you chunk your documents significantly impacts retrieval quality. Experiment with different chunk sizes and overlap to find the sweet spot for your data.</p>
      <h3>2. Hybrid Search</h3>
      <p>Combine keyword search (BM25) with semantic search (embeddings) to capture both exact matches and conceptual similarities.</p>
      <h3>3. Reranking</h3>
      <p>Use a cross-encoder model to rerank the retrieved results, ensuring the most relevant chunks are passed to the LLM.</p>
      <h2>Measuring Success</h2>
      <p>Use SupaEval to benchmark your RAG pipeline's precision and recall, and iterate based on data-driven insights.</p>
    `,
  },
  {
    slug: "future-of-agentic-ai",
    title: "The Future of Agentic AI: Trends to Watch",
    excerpt:
      "Explore the emerging trends in the world of autonomous AI agents and what they mean for the future of software development.",
    date: "December 05, 2025",
    author: "Emily Zhang",
    readTime: "6 min read",
    category: "Industry",
    content: `
      <p>Agentic AI is rapidly evolving, moving from simple chatbots to autonomous systems capable of executing complex tasks.</p>
      <h2>Emerging Trends</h2>
      <ul>
        <li><strong>Multi-Agent Systems:</strong> Agents collaborating to solve problems that are too complex for a single model.</li>
        <li><strong>Embodied AI:</strong> Agents interacting with the physical world through robotics and sensors.</li>
        <li><strong>Long-term Memory:</strong> Agents that can remember past interactions and learn from experience over extended periods.</li>
      </ul>
      <h2>Challenges Ahead</h2>
      <p>Safety, alignment, and interpretability remain key challenges as we push the boundaries of what AI agents can do.</p>
    `,
  },
];
