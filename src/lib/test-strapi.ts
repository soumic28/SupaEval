/**
 * Test Strapi Integration
 *
 * This script tests the connection to Strapi and fetches sample data.
 * Run with: node --loader ts-node/esm src/lib/test-strapi.ts
 * Or create a test page in your Next.js app to call these functions.
 */

import { getArticles, getAuthors, getCategories, getStrapiURL } from "./strapi";

export async function testStrapiConnection() {
  console.log("🔍 Testing Strapi Integration...\n");

  // Test 1: Check Strapi URL
  console.log("1. Strapi URL:", getStrapiURL());

  try {
    // Test 2: Fetch articles
    console.log("\n2. Fetching articles...");
    const articlesResponse = await getArticles({ pageSize: 5 });
    console.log(`   ✅ Found ${articlesResponse.data.length} articles`);

    if (articlesResponse.data.length > 0) {
      console.log("   Sample article:", {
        title: articlesResponse.data[0].title,
        slug: articlesResponse.data[0].slug,
      });
    }

    // Test 3: Fetch authors
    console.log("\n3. Fetching authors...");
    const authorsResponse = await getAuthors();
    console.log(`   ✅ Found ${authorsResponse.data.length} authors`);

    // Test 4: Fetch categories
    console.log("\n4. Fetching categories...");
    const categoriesResponse = await getCategories();
    console.log(`   ✅ Found ${categoriesResponse.data.length} categories`);

    console.log("\n✅ All tests passed! Strapi integration is working.");
    return true;
  } catch (error) {
    console.error("\n❌ Strapi integration test failed:", error);
    console.log("\nTroubleshooting:");
    console.log(
      "1. Make sure Strapi is running: npm run dev (in strapi directory)",
    );
    console.log(
      "2. Check that NEXT_PUBLIC_STRAPI_API_URL is set in .env.local",
    );
    console.log("3. Verify Strapi is accessible at:", getStrapiURL());
    return false;
  }
}

// Example: How to use in a Next.js page or component
export async function exampleUsage() {
  // Fetch articles for a blog page
  const articles = await getArticles({
    pageSize: 10,
    sort: "publishedAt:desc",
  });

  // Use in your component
  return articles.data.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.description,
    // ... map other fields
  }));
}
