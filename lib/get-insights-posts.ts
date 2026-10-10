import config from "@payload-config";
import { getPayload } from "payload";

export async function getInsightsPosts() {
  const payload = await getPayload({
    config,
  });

  const result = await payload.find({
    collection: "posts",
    sort: "-publishedAt",
    limit: 50,
    depth: 1,
  });

  return result.docs.map((post) => {
    const featuredImage =
      post.featuredImage &&
      typeof post.featuredImage === "object"
        ? post.featuredImage
        : null;

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      category: null,
      excerpt: post.excerpt,
      featured: post.featured ?? false,
      publishedAt: post.publishedAt ?? null,

      featuredImage: featuredImage
        ? {
            url: featuredImage.url ?? null,
            alt: featuredImage.alt ?? null,
          }
        : null,
    };
  });
}
