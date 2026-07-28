import Link from "next/link";
import { site } from "@/lib/site";
import { getCaseStudies, getPosts, formatDate } from "@/lib/content";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export default function Home() {
  const studies = getCaseStudies();
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow hero__kicker">AI / Technical Product Manager</p>
        <h1 className="hero__name">Adam Yassine</h1>
        <p className="hero__positioning">{site.positioning}</p>
        <p className="hero__role mono">
          {site.role} · Final-year CS, Western University
        </p>
      </section>

      <section className="wrap section" aria-labelledby="work-h">
        <div className="section__head">
          <h2 id="work-h" className="section__title">
            Selected work
          </h2>
          <p className="section__note mono">Three decisions worth defending</p>
        </div>
        <div className="cards">
          {studies.map((c) => (
            <CaseStudyCard key={c.meta.slug} meta={c.meta} />
          ))}
        </div>
      </section>

      <section className="wrap section" aria-labelledby="writing-h">
        <div className="section__head">
          <h2 id="writing-h" className="section__title">
            Writing
          </h2>
          <Link href="/writing" className="section__note mono">
            All posts →
          </Link>
        </div>
        <ul className="postlist">
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
            <li className="postlist__item mono" style={{ color: "var(--slate)" }}>
              Posts coming soon.
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
