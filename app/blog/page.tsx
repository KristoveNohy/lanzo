import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogTags } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Blog"
          title="Insights on web, automation, and digital growth"
          description="CMS-ready structure with MDX content placeholders."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {blogTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-4 py-1 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {post.tags.join(" · ")}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{post.description}</p>
              <p className="mt-4 text-xs text-slate-500">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
