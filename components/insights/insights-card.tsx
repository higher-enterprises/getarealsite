"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { InsightPost } from "./types";

type Props = {
  post: InsightPost;
};

export default function InsightsCard({
  post,
}: Props) {
  const imageUrl =
    post.featuredImage?.url || "";

  const imageAlt =
    post.featuredImage?.alt || post.title;

  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.publishedAt))
    : null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#070b1d] transition duration-500 hover:-translate-y-2 hover:border-indigo-500">

      <Link
        href={`/insights/${post.slug}`}
        className="block h-full"
      >

        <div className="relative h-[220px] overflow-hidden">

          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#070b1d] via-transparent to-transparent" />

          <div className="absolute left-5 top-5 rounded-md bg-white/10 px-3 py-2 text-xs uppercase tracking-[.25em] backdrop-blur">
            {post.category}
          </div>

        </div>

        <div className="p-6">

          <h3 className="text-3xl font-light leading-tight tracking-tight">
            {post.title}
          </h3>

          <p className="mt-5 leading-8 text-white/65">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between">

            {publishedDate ? (
              <p className="text-sm text-white/45">
                {publishedDate}
              </p>
            ) : (
              <span />
            )}

            <div className="flex items-center gap-2 text-indigo-400 transition group-hover:gap-4">
              Read More
              <ArrowRight size={16} />
            </div>

          </div>

        </div>

      </Link>

    </article>
  );
}