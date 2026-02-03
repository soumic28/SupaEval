import {
  StrapiResponse,
  StrapiCollectionResponse,
  StrapiArticle,
  StrapiAuthor,
  StrapiCategory,
  StrapiMedia,
} from "@/types/strapi";

/**
 * Get the full Strapi API URL
 */
export function getStrapiURL(path: string = ""): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  return `${baseUrl}${path}`;
}

/**
 * Get the full URL for a Strapi media file
 */
export function getStrapiMedia(url: string | undefined | null): string | null {
  if (!url) return null;

  // If the URL is already absolute, return it
  if (url.startsWith("http")) {
    return url;
  }

  // Otherwise, prepend the Strapi URL
  return getStrapiURL(url);
}

/**
 * Generic fetch wrapper for Strapi API
 */
export async function fetchAPI<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // Ensure we always get fresh data from Strapi
  };

  // Add API token if available
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    defaultOptions.headers = {
      ...defaultOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const url = getStrapiURL(path);

  try {
    const response = await fetch(url, mergedOptions);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Strapi API error: ${response.status} ${response.statusText}. ${
          errorData.error?.message || ""
        }`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Strapi API fetch error:", error);
    throw error;
  }
}

/**
 * Fetch all articles with optional filters
 */
export async function getArticles(params?: {
  page?: number;
  pageSize?: number;
  sort?: string;
  filters?: Record<string, any>;
}): Promise<StrapiCollectionResponse<StrapiArticle>> {
  const queryParams = new URLSearchParams();

  if (params?.page)
    queryParams.append("pagination[page]", params.page.toString());
  if (params?.pageSize)
    queryParams.append("pagination[pageSize]", params.pageSize.toString());
  if (params?.sort) queryParams.append("sort", params.sort);

  // Strapi v5 populate syntax - use populate=* to get all relations
  queryParams.append("populate", "*");

  const query = queryParams.toString();
  const path = `/api/articles${query ? `?${query}` : ""}`;

  return fetchAPI<StrapiCollectionResponse<StrapiArticle>>(path);
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlug(
  slug: string,
): Promise<StrapiResponse<StrapiArticle> | null> {
  const queryParams = new URLSearchParams();
  queryParams.append("filters[slug][$eq]", slug);
  queryParams.append("populate", "*");

  const path = `/api/articles?${queryParams.toString()}`;

  try {
    const response =
      await fetchAPI<StrapiCollectionResponse<StrapiArticle>>(path);

    if (response.data && response.data.length > 0) {
      return {
        data: response.data[0],
        meta: response.meta,
      };
    }

    return null;
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch all authors
 */
export async function getAuthors(): Promise<
  StrapiCollectionResponse<StrapiAuthor>
> {
  const queryParams = new URLSearchParams();
  queryParams.append("populate", "*");

  return fetchAPI<StrapiCollectionResponse<StrapiAuthor>>(
    `/api/authors?${queryParams.toString()}`,
  );
}

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<
  StrapiCollectionResponse<StrapiCategory>
> {
  return fetchAPI<StrapiCollectionResponse<StrapiCategory>>("/api/categories");
}

/**
 * Example: Convert Strapi article to your app's BlogPost format
 */
export function strapiArticleToBlogPost(article: StrapiArticle): {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
} {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.description || "",
    date: new Date(article.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: article.author
      ? (article.author as any).name || "Unknown Author"
      : "Unknown Author",
    readTime: "5 min read", // You can calculate this based on content length
    category: (article.category as any)?.name || "Uncategorized",
    image:
      getStrapiMedia((article.cover as any)?.url) || "/images/placeholder.png",
    content: "", // You would need to process the blocks field for this
  };
}
