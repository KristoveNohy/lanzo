import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { SectionHeading } from "@/components/ui/section-heading";
import { mdxComponents } from "@/components/mdx-components";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.description
  };
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const posts = getAllPosts();
  const postExists = posts.find((item) => item.slug === params.slug);
  if (!postExists) {
    notFound();
  }
  const { meta, body } = getPostBySlug(params.slug);
  const { content } = await compileMDX({
    source: body,
    components: mdxComponents
  });

  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow={meta.tags.join(" · ")}
          title={meta.title}
          description={meta.description}
        />
        <p className="mt-4 text-sm text-slate-500">{meta.date}</p>
        <article className="mt-8 space-y-4">{content}</article>
      </div>
    </div>
  );
}
