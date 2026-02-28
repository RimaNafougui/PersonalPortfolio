import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, data engineering, and AI from Rima Nafougui.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogHeader />
      <main className="pt-24 min-h-screen">
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif italic text-coffee">
              Notes
            </h1>
            <div className="h-px w-24 bg-gold" />
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-coffee/50 pt-2">
              Writing on engineering &amp; craft
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <p className="text-coffee/40 text-sm font-bold uppercase tracking-widest">
                No posts yet
              </p>
              <p className="text-coffee/30 text-xs">
                Posts are being drafted — check back soon.
              </p>
            </div>
          ) : (
            <ul>
              {posts.map((post, i) => (
                <li key={post.slug}>
                  {i > 0 && <div className="h-px w-full bg-gold/20" />}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-10"
                  >
                    <div className="flex flex-col gap-3">
                      <time className="text-[10px] uppercase tracking-[0.3em] text-coffee/40 font-bold">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <p className="text-2xl md:text-3xl font-serif italic text-coffee group-hover:text-cartier transition-colors duration-300 leading-snug">
                        {post.title}
                      </p>
                      <p className="text-sm text-coffee/60 leading-relaxed">
                        {post.summary}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2 flex-wrap mt-1">
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
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
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
