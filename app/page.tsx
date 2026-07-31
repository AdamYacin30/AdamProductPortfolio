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
        <p className="eyebrow hero__kicker">Product Manager</p>
        <h1 className="hero__name">Adam Yassine</h1>
        <p className="hero__positioning">{site.positioning}</p>
        <p className="hero__role mono">
          Computer Science, Western University · {site.location}
        </p>
      </section>

      <section className="wrap section" aria-labelledby="work-h">
        <div className="section__head">
          <h2 id="work-h" className="section__title">
            Selected work
          </h2>
          <Link href="/writing" className="section__note mono">
            Selected work blog →
          </Link>
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
              <div className="postlist__link">
                <span className="postlist__title">{p.meta.title}</span>
                <span className="postlist__excerpt">{p.meta.excerpt}</span>
                <span className="postlist__date mono">{formatDate(p.meta.date)}</span>
              </div>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="postlist__item mono" style={{ color: "var(--slate)" }}>
              Posts coming soon.
            </li>
          )}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="contact-h">
        <div className="section__head">
          <h2 id="contact-h" className="section__title">
            Contact
          </h2>
          <p className="section__note mono">Available for product roles</p>
        </div>
        <div className="card">
          <p>
            <strong>{site.name}</strong>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>Phone: {site.phone}</p>
          <p>{site.location}</p>
        </div>
      </section>
    </>
  );
}
