import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PostBody from "@/components/blog/PostBody";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <BlogHeader />
      <main className="pt-24 min-h-screen">
        <article className="py-24 px-6 md:px-12 lg:px-24">
          <div className="mb-12 space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-coffee/50 hover:text-cartier transition-colors font-bold"
            >
              <ArrowLeft size={10} strokeWidth={2.5} />
              All posts
            </Link>

            <div className="space-y-4 pt-2">
              <time className="block text-[10px] uppercase tracking-[0.3em] text-coffee/40 font-bold">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-coffee leading-tight">
                {post.title}
              </h1>
              <p className="text-base text-coffee/60 leading-relaxed border-l-2 border-cartier/30 pl-4 italic">
                {post.summary}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-cartier/60 font-bold border border-cartier/20 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="h-px w-full bg-gold/30" />
          </div>

          <PostBody content={post.content} />
        </article>
      </main>
      <Footer
        t={{
          rights: "All rights reserved",
          badge: "Open to opportunities",
        }}
      />
    </>
  );
}
