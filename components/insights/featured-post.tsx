"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { InsightPost } from "./types";

type Props = {
  post: InsightPost;
};

export default function FeaturedPost({
  post,
}: Props) {
  const imageUrl =
    post.featuredImage?.url || post.image || "";

  const imageAlt =
    post.featuredImage?.alt || post.title;

  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.publishedAt))
    : post.date || null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#070b1d] transition duration-500 hover:-translate-y-2 hover:border-indigo-500">

      <Link
        href={`/insights/${post.slug || post.id}`}
        className="block"
      >

        <div className="relative h-[360px] overflow-hidden">

          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#070b1d] via-black/10 to-transparent" />

          <div className="absolute left-6 top-6 rounded-md bg-indigo-600 px-4 py-2 text-xs uppercase tracking-[.25em]">
            Featured
          </div>

        </div>

        <div className="p-8">

          <p className="text-sm uppercase tracking-[.25em] text-indigo-300">
            {post.category}
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight">
            {post.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between">

            <div>
              {publishedDate && (
                <p className="text-sm text-white/45">
                  {publishedDate}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 text-indigo-400 transition group-hover:gap-4">
              Read More
              <ArrowRight size={18} />
            </div>

          </div>

        </div>

      </Link>

    </article>
  );
}