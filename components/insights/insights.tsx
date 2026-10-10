"use client";

import { useMemo } from "react";

import FeaturedPost from "./featured-post";
import InsightsCard from "./insights-card";
import Newsletter from "./newsletter";

import type { InsightPost } from "./types";
export type { InsightPost } from "./types";

type InsightsProps = {
  posts?: InsightPost[];
};

export default function Insights({
  posts = [],
}: InsightsProps) {
  const featured = useMemo(() => {
    return posts.find((post) => post.featured);
  }, [posts]);

  const regularPosts = useMemo(() => {
    return posts.filter((post) => !post.featured);
  }, [posts]);

  return (
    <section className="relative overflow-hidden bg-[#050918] py-32 text-white">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1700px] px-10">
        {/* Heading */}

        <div className="text-center">
          <p className="text-sm uppercase tracking-[.4em] text-indigo-400">
            Insights
          </p>

          <h2 className="mt-5 text-6xl font-light tracking-tight lg:text-7xl">
            Ideas. Strategies.
            <span className="text-indigo-400">
              {" "}Real Results.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl font-light leading-9 text-white/65">
            Expert perspectives, industry trends,
            practical guides and proven frameworks
            to help you build, buy, acquire,
            expand and grow your digital business.
          </p>
        </div>

        {/* Featured */}

        {featured && (
          <div className="mt-20">
            <FeaturedPost post={featured} />
          </div>
        )}

        {/* Grid */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {regularPosts.map((post) => (
            <InsightsCard
              key={post.id}
              post={post}
            />
          ))}
        </div>

        {/* Newsletter */}

        <Newsletter />
      </div>
    </section>
  );
}