import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";
import { PhaseTrace } from "@/components/PhaseTrace";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const { meta } = study;
  return {
    title: meta.title,
    description: meta.metaDescription,
    openGraph: {
      title: `${meta.title} — ${site.name}`,
      description: meta.metaDescription,
      url: `${site.url}/work/${meta.slug}`,
      images: [`/og/${meta.slug}.png`],
    },
  };
}

const CONFIDENTIALITY =
  "Product specifics and outcome metrics are covered by confidentiality. Happy to walk through the details in conversation.";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const { content } = await compileMDX({
    source: study.body,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  const { meta } = study;

  return (
    <article className="wrap cs">
      <p className="cs__back mono">
        <Link href="/">← Adam Yassine</Link>
      </p>

      <header className="cs__header">
        <p className="eyebrow">{meta.whatThisShows}</p>
        <h1 className="cs__title">{meta.title}</h1>
        <p className="cs__meta mono">
          {meta.role} · {meta.org} · {meta.timeframe} · {meta.teamSize}
        </p>
        <ul className="cs__tags mono" aria-label="Context tags">
          {meta.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>

      <div className="cs__trace">
        <PhaseTrace phases={meta.phases} />
      </div>

      <div className="cs__body">{content}</div>

      {meta.confidential && (
        <p className="cs__confidential mono" role="note">
          {CONFIDENTIALITY}
        </p>
      )}

      <nav className="cs__foot mono" aria-label="Other work">
        <Link href="/work/carfax-agentic-ai">Carfax agentic AI</Link>
        <Link href="/work/hivo-expansion">Hivo expansion</Link>
        <Link href="/work/carfax-analytics">Carfax analytics</Link>
      </nav>
    </article>
  );
}
