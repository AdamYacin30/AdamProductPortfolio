import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Teardowns and notes on shipping AI products — evaluation, constraints, and product decisions by Adam Yassine.",
};

export default function WritingIndex() {
  const posts = getPosts();
  return (
    <div className="wrap page">
      <header className="page__header">
        <p className="eyebrow">Writing</p>
        <h1 className="page__title">Notes on shipping AI products</h1>
      </header>

      <ul className="postlist postlist--index">
        {posts.map((p) => (
          <li key={p.meta.slug} className="postlist__item">
            <Link href={`/writing/${p.meta.slug}`} className="postlist__link">
              <span className="postlist__title">{p.meta.title}</span>
              <span className="postlist__excerpt">{p.meta.excerpt}</span>
              <span className="postlist__date mono">{formatDate(p.meta.date)}</span>
            </Link>
          </li>
        ))}
        {posts.length === 0 && (
          <li className="postlist__item mono" style={{ color: "var(--slate)", padding: "1.15rem 0" }}>
            Posts coming soon.
          </li>
        )}
      </ul>
    </div>
  );
}
