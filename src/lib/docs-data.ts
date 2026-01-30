// Nested navigation item structure supporting unlimited depth
export interface DocItem {
  title: string;
  href?: string; // Optional - parent items can be non-clickable
  description?: string;
  items?: DocItem[]; // Recursive nesting
}

export interface DocSection {
  title: string;
  icon?: string;
  items: DocItem[];
}

export const docsNavigation: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Quick Introduction",
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

// Helper function to find an item by href (recursive search)
export function findItemByHref(
  items: DocItem[],
  href: string,
): DocItem | undefined {
  for (const item of items) {
    if (item.href === href) return item;
    if (item.items) {
      const found = findItemByHref(item.items, href);
      if (found) return found;
    }
  }
  return undefined;
}

// Get all items from all sections (flattened)
export function getAllItems(): DocItem[] {
  const allItems: DocItem[] = [];

  function collectItems(items: DocItem[]) {
    for (const item of items) {
      allItems.push(item);
      if (item.items) collectItems(item.items);
    }
  }

  docsNavigation.forEach((section) => collectItems(section.items));
  return allItems;
}

// Find item by href across all sections
export function getPageByHref(href: string): DocItem | undefined {
  for (const section of docsNavigation) {
    const found = findItemByHref(section.items, href);
    if (found) return found;
  }
  return undefined;
}

// Get section containing the href
export function getSectionByHref(href: string): DocSection | undefined {
  for (const section of docsNavigation) {
    const found = findItemByHref(section.items, href);
    if (found) return section;
  }
  return undefined;
}

// Check if an item contains a href in its tree (for active path detection)
export function isInActivePath(item: DocItem, targetHref: string): boolean {
  if (item.href === targetHref) return true;
  if (item.items) {
    return item.items.some((child) => isInActivePath(child, targetHref));
  }
  return false;
}

// Get all pages with href in sequential order
export function getAllPages(): DocItem[] {
  const pages: DocItem[] = [];

  function collectPages(items: DocItem[]) {
    for (const item of items) {
      if (item.href) {
        pages.push(item);
      }
      if (item.items) {
        collectPages(item.items);
      }
    }
  }

  docsNavigation.forEach((section) => collectPages(section.items));
  return pages;
}

// Get previous and next pages for navigation
export function getAdjacentPages(currentHref: string): {
  previous: DocItem | null;
  next: DocItem | null;
} {
  const allPages = getAllPages();
  const currentIndex = allPages.findIndex((page) => page.href === currentHref);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? allPages[currentIndex - 1] : null,
    next:
      currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
  };
}
