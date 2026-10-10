
export type InsightPost = {
  id: string | number;
  title: string;
  slug?: string;
  category: string;
  excerpt: string;
  featured?: boolean;
  image: string;
  author: string;
  date: string;
  readTime: string;
  publishedAt?: string | null;

  featuredImage?: {
    url?: string | null;
    alt?: string | null;
  } | null;
};
