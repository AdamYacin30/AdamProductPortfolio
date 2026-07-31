import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/schema";
import { PhaseTrace } from "./PhaseTrace";

const caseStudyLinks: Record<string, string> = {
  "carfax-agentic-ai": "https://prism-existence-de2.notion.site/Building-Carfax-s-First-Agentic-AI-Product-a501851387bc4588831d1bf8f36f199a",
  "hivo-expansion": "https://prism-existence-de2.notion.site/Solving-Cold-Start-in-a-Two-Sided-Marketplace-6325d79ad9c9449ab7b9876a31345a62",
  "carfax-analytics": "https://prism-existence-de2.notion.site/Monetizing-the-Workflow-Not-the-Network-A-Product-Strategy-Case-Study-805deed8859241d4956d26b02abdf6e4",
};

export function CaseStudyCard({ meta }: { meta: CaseStudyMeta }) {
  const href = caseStudyLinks[meta.slug] ?? "/writing";

  return (
    <Link href={href} className="card" target="_blank" rel="noopener noreferrer">
      <div className="card__head">
        <h3 className="card__title">{meta.title}</h3>
        <span className="card__arrow mono" aria-hidden="true">
          →
        </span>
      </div>
      <p className="card__problem">{meta.cardProblem}</p>
      <div className="card__trace">
        <PhaseTrace phases={meta.phases} mini />
      </div>
      <div className="card__foot mono">
        <span>
          {meta.role} · {meta.timeframe}
        </span>
        <span className="card__tags">
          {meta.tags.slice(0, 2).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </span>
      </div>
    </Link>
  );
}
