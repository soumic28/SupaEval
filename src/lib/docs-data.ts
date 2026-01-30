export interface DocPage {
  title: string;
  href: string;
  description?: string;
}

export interface DocSection {
  title: string;
  items: DocPage[];
}

export const docsNavigation: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/getting-started",
        description: "Learn about SupaEval and core concepts",
      },
      {
        title: "Quickstart",
        href: "/docs/getting-started/quickstart",
        description: "Get up and running in 5 minutes",
      },
      {
        title: "Core Concepts",
        href: "/docs/getting-started/concepts",
        description: "Understand datasets, evaluations, and metrics",
      },
    ],
  },
  {
    title: "SDK Integration",
    items: [
      {
        title: "Python SDK",
        href: "/docs/sdk/python",
        description: "Integrate SupaEval with Python applications",
      },
      {
        title: "JavaScript SDK",
        href: "/docs/sdk/javascript",
        description: "Integrate SupaEval with Node.js and browsers",
      },
      {
        title: "REST API",
        href: "/docs/sdk/rest-api",
        description: "Direct API integration for any language",
      },
    ],
  },
  {
    title: "Evaluation",
    items: [
      {
        title: "Dataset Management",
        href: "/docs/evaluation/datasets",
        description: "Upload and manage evaluation datasets",
      },
      {
        title: "Running Evaluations",
        href: "/docs/evaluation/running",
        description: "Configure and execute evaluations",
      },
      {
        title: "Metrics & Scoring",
        href: "/docs/evaluation/metrics",
        description: "Understand evaluation metrics",
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        title: "Dashboard",
        href: "/docs/platform/dashboard",
        description: "Navigate the SupaEval dashboard",
      },
      {
        title: "Benchmarks",
        href: "/docs/platform/benchmarks",
        description: "Create and compare benchmarks",
      },
      {
        title: "Security",
        href: "/docs/platform/security",
        description: "Enterprise security features",
      },
    ],
  },
];

export function getPageByHref(href: string): DocPage | undefined {
  for (const section of docsNavigation) {
    const page = section.items.find((item) => item.href === href);
    if (page) return page;
  }
  return undefined;
}

export function getSectionByHref(href: string): DocSection | undefined {
  for (const section of docsNavigation) {
    if (section.items.some((item) => item.href === href)) {
      return section;
    }
  }
  return undefined;
}
