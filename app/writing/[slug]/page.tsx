import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPosts, getPost, formatDate } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getPosts({ includeDrafts: false }).map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: `${post.meta.title} — ${site.name}`,
      description: post.meta.excerpt,
      url: `${site.url}/writing/${post.meta.slug}`,
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.body,
    options: { parseFrontmatter: false },
  });

  return (
    <article className="wrap page">
      <p className="cs__back mono">
        <Link href="/writing">← Writing</Link>
      </p>
      <header className="page__header">
        <p className="eyebrow">{formatDate(post.meta.date)}</p>
        <h1 className="page__title">{post.meta.title}</h1>
        <ul className="cs__tags mono" aria-label="Tags">
          {post.meta.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>
      <div className="prose page__prose">{content}</div>
    </article>
  );
}
