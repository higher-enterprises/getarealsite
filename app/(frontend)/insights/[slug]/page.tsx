import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import config from "@payload-config";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";

import Header from "@/components/navigation/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Media = {
  id: string | number;
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
};

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const payload = await getPayload({
    config,
  });

  const result = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 2,
    draft: false,
  });

  const post = result.docs[0];

  if (!post) {
    return {
      title: "Article | RealSite",
    };
  }

  return {
    title: `${post.title} | RealSite`,
    description: post.excerpt,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const payload = await getPayload({
    config,
  });

  const result = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 2,
    draft: false,
  });

  const post = result.docs[0];

  if (!post) {
    notFound();
  }

  /* =========================================================
     RESOLVE FEATURED IMAGE

     Payload can return either:
     - the populated media object
     - the media ID

     This handles both.
  ========================================================= */

  let featuredImage: Media | null = null;

  if (post.featuredImage) {
    if (typeof post.featuredImage === "object") {
      featuredImage = post.featuredImage as Media;
    } else {
      try {
        const media = await payload.findByID({
          collection: "media",
          id: post.featuredImage,
        });

        featuredImage = media as Media;
      } catch (error) {
        console.error("Unable to load featured image:", error);
      }
    }
  }

  const featuredImageURL = featuredImage?.url || null;

  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.publishedAt))
    : null;

  return (
    <main className="min-h-screen bg-[#030811] text-white">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <div className="relative z-[1000]">
        <Header />
      </div>

      {/* =========================================================
          ARTICLE HERO
          FEATURED IMAGE AS BACKGROUND
      ========================================================= */}

      <section
        className="relative min-h-[650px] overflow-hidden bg-[#030811] bg-cover bg-center bg-no-repeat"
        style={
          featuredImageURL
            ? {
                backgroundImage: `url("${featuredImageURL}")`,
              }
            : undefined
        }
      >

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-[#030811]/55" />

        {/* LEFT FADE */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/85 via-[42%] to-[#030811]/20" />

        {/* BOTTOM FADE */}

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#030811] via-[#030811]/60 to-transparent" />

        {/* BLUE BRAND GLOW */}

        <div className="pointer-events-none absolute left-[20%] top-[-250px] h-[700px] w-[800px] rounded-full bg-[#3048ff]/10 blur-[200px]" />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1500px] items-center px-7 py-20 sm:px-10 lg:px-14">

          <div className="w-full max-w-[1050px]">

            {/* BACK LINK */}

            <Link
              href="/#insights"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 transition hover:text-[#526cff]"
            >
              <span>←</span>
              Back to Insights
            </Link>

            {/* CATEGORY */}

            <div className="mt-12">
              <span className="inline-flex rounded-full border border-[#526cff]/50 bg-[#101a56]/50 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8c9aff] backdrop-blur-md">
                Insights
              </span>
            </div>

            {/* TITLE */}

            <h1 className="mt-7 max-w-[1050px] text-[42px] font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-[54px] lg:text-[68px] xl:text-[76px]">
              {post.title}
            </h1>

            {/* EXCERPT */}

            {post.excerpt && (
              <p className="mt-7 max-w-[850px] text-lg font-light leading-8 text-white/70 sm:text-xl">
                {post.excerpt}
              </p>
            )}

            {/* META */}

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/45">

              {publishedDate && (
                <span>{publishedDate}</span>
              )}

              {publishedDate && (
                <span className="text-[#526cff]">
                  •
                </span>
              )}

              <span>RealSite Insights</span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ARTICLE BODY
      ========================================================= */}

      <section>

        <div className="mx-auto grid max-w-[1500px] gap-12 px-7 pb-28 pt-14 sm:px-10 lg:grid-cols-[180px_minmax(0,820px)_1fr] lg:px-14 lg:pb-36 lg:pt-16">

          {/* =====================================================
              LEFT RAIL
          ===================================================== */}

          <aside className="hidden lg:block">

            <div className="sticky top-32">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#526cff]">
                RealSite Insights
              </p>

              <div className="mt-5 h-px w-12 bg-[#526cff]" />

              <p className="mt-5 max-w-[150px] text-sm font-light leading-6 text-white/35">
                Ideas and strategies for building a stronger digital business.
              </p>

            </div>

          </aside>

          {/* =====================================================
              ARTICLE CONTENT
          ===================================================== */}

          <article
            className="
              min-w-0
              text-[17px]
              font-light
              leading-8
              text-white/72

              [&_p]:mb-7
              [&_p]:text-white/72

              [&_h1]:mb-7
              [&_h1]:mt-12
              [&_h1]:text-5xl
              [&_h1]:font-light
              [&_h1]:leading-tight
              [&_h1]:tracking-[-0.035em]
              [&_h1]:text-white

              [&_h2]:mb-6
              [&_h2]:mt-14
              [&_h2]:text-4xl
              [&_h2]:font-light
              [&_h2]:leading-tight
              [&_h2]:tracking-[-0.035em]
              [&_h2]:text-white

              [&_h3]:mb-5
              [&_h3]:mt-10
              [&_h3]:text-2xl
              [&_h3]:font-normal
              [&_h3]:tracking-[-0.02em]
              [&_h3]:text-white

              [&_h4]:mb-4
              [&_h4]:mt-8
              [&_h4]:text-xl
              [&_h4]:font-medium
              [&_h4]:text-white

              [&_strong]:font-medium
              [&_strong]:text-white

              [&_a]:text-[#6f82ff]
              [&_a]:underline
              [&_a]:underline-offset-4
              hover:[&_a]:text-[#91a0ff]

              [&_ul]:mb-8
              [&_ul]:ml-6
              [&_ul]:list-disc
              [&_ul]:space-y-3

              [&_ol]:mb-8
              [&_ol]:ml-6
              [&_ol]:list-decimal
              [&_ol]:space-y-3

              [&_blockquote]:my-12
              [&_blockquote]:border-l-2
              [&_blockquote]:border-[#526cff]
              [&_blockquote]:pl-8
              [&_blockquote]:text-2xl
              [&_blockquote]:font-light
              [&_blockquote]:leading-10
              [&_blockquote]:text-white
            "
          >

            {/* ===================================================
                FEATURED IMAGE
                FIRST IMAGE ABOVE ARTICLE CONTENT
            =================================================== */}

            {featuredImageURL && (
              <div className="mb-12 overflow-hidden rounded-2xl">
                <img
                  src={featuredImageURL}
                  alt={featuredImage?.alt || post.title}
                  className="block h-auto w-full object-cover"
                />
              </div>
            )}

            {/* ===================================================
                PAYLOAD ARTICLE CONTENT
            =================================================== */}

            <RichText data={post.content} />

          </article>

          {/* =====================================================
              RIGHT RAIL
          ===================================================== */}

          <aside className="hidden xl:block">

            <div className="sticky top-32 rounded-2xl border border-white/10 bg-white/[0.025] p-7">

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Build Something Real
              </p>

              <h3 className="mt-5 text-2xl font-light leading-8">
                Ready to turn the strategy into a real site?
              </h3>

              <p className="mt-4 text-sm font-light leading-6 text-white/45">
                Plan, build and grow a digital presence designed around your real business.
              </p>

              <Link
                href="/plan/site-evaluation"
                className="mt-7 inline-flex rounded-lg bg-[#3048ff] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#4057ff]"
              >
                Get A Real Site
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}