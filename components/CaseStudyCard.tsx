import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/schema";
import { PhaseTrace } from "./PhaseTrace";

export function CaseStudyCard({ meta }: { meta: CaseStudyMeta }) {
  return (
    <Link href={`/work/${meta.slug}`} className="card">
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
