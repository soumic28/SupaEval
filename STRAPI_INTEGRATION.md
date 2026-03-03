# Strapi Integration Guide

## Overview

This project now includes basic Strapi CMS integration. The integration layer provides reusable utilities to fetch content from Strapi in any component or page.

## Quick Start

### 1. Make Sure Strapi is Running

```bash
cd strapi/my-strapi-project
npm run dev
```

Strapi will be available at: http://localhost:1337/admin

### 2. Environment Configuration

The `.env.local` file is already configured with:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### 3. Using Strapi in Your Components

#### Server Component (Recommended)

```typescript
import { getArticles, strapiArticleToBlogPost } from '@/lib/strapi';

export default async function BlogPage() {
  const response = await getArticles({ pageSize: 10 });
  const posts = response.data.map(strapiArticleToBlogPost);

  return (
    <div>
      {posts.map(post => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

#### Client Component

```typescript
'use client';
import { useEffect, useState } from 'react';
import { getArticles } from '@/lib/strapi';

export default function BlogList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(res => setArticles(res.data));
  }, []);

  return <div>{/* Render articles */}</div>;
}
```

## Available Functions

### Content Fetching

- `getArticles(params?)` - Fetch articles with optional filters
- `getArticleBySlug(slug)` - Fetch single article by slug
- `getAuthors()` - Fetch all authors
- `getCategories()` - Fetch all categories

### Utilities

- `getStrapiURL(path)` - Construct full API URLs
- `getStrapiMedia(url)` - Get full media file URLs
- `strapiArticleToBlogPost(article)` - Convert Strapi format to app format

## TypeScript Types

All Strapi responses are fully typed. Import from `@/types/strapi`:

- `StrapiArticle`
- `StrapiAuthor`
- `StrapiCategory`
- `StrapiMedia`
- `StrapiResponse<T>`
- `StrapiCollectionResponse<T>`

## Testing the Integration

Create a test page at `app/test-strapi/page.tsx`:

```typescript
import { testStrapiConnection } from '@/lib/test-strapi';

export default async function TestPage() {
  await testStrapiConnection();
  return <div>Check console for results</div>;
}
```

## Next Steps

1. **Populate Content in Strapi**
   - Go to http://localhost:1337/admin
   - Create articles, authors, and categories
   - Upload images

2. **Choose Sections to Integrate**
   - Blog pages
   - Documentation
   - Other content sections

3. **Replace Static Data**
   - See examples in `src/lib/blog-data.ts`
   - Uncomment the integration code when ready

## Files Reference

- **Configuration**: `.env.local`
- **Types**: `src/types/strapi.ts`
- **API Layer**: `src/lib/strapi.ts`
- **Test Utils**: `src/lib/test-strapi.ts`
- **Example**: `src/lib/blog-data.ts`

## Troubleshooting

**Error: Failed to fetch**

- Make sure Strapi is running on port 1337
- Check `.env.local` has correct URL

**Error: Cannot find module**

- Restart Next.js dev server to load new files

**No data returned**

- Populate content in Strapi admin panel first
- Check API permissions in Strapi (Settings → Roles → Public)
