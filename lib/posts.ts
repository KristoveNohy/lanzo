import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, file);
      const content = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(content);

      return {
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        slug
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, "utf8");
  const { data, content: body } = matter(content);

  return {
    meta: {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      tags: (data.tags as string[]) ?? [],
      slug
    },
    body
  };
}
