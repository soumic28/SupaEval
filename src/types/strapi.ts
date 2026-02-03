// Strapi API Response Types
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Strapi Media/Image Types
export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

// Content Type: Category
export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Content Type: Author
export interface StrapiAuthor {
  id: number;
  documentId: string;
  name: string;
  email: string;
  avatar?: StrapiMedia;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Content Type: Article
export interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  cover?: StrapiMedia;
  author?: StrapiAuthor;
  category?: StrapiCategory;
  blocks?: any[]; // Dynamic zone - can be customized based on your blocks
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Helper type for populated responses
export interface StrapiArticlePopulated extends StrapiArticle {
  author: StrapiAuthor;
  category: StrapiCategory;
  cover: StrapiMedia;
}
