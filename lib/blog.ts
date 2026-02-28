import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostFrontMatter {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post extends PostFrontMatter {
  slug: string;
  content: string;
}

export type PostMeta = Omit<Post, "content">;

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return { slug, ...(data as PostFrontMatter) };
    })
    .filter((post) => !post.draft)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontMatter = data as PostFrontMatter;
    if (frontMatter.draft) return null;
    return { slug, content, ...frontMatter };
  } catch {
    return null;
  }
}
