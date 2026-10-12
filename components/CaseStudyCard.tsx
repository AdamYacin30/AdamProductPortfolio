import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/schema";
import { getTagClassName } from "@/lib/tagStyles";
import { PhaseTrace } from "./PhaseTrace";
import CaseStudyAnimation, { type CaseStudyAnimationVariant } from "./CaseStudyAnimation";

const caseStudyLinks: Record<string, string> = {
  "carfax-agentic-ai": "https://prism-existence-de2.notion.site/Building-Carfax-s-First-Agentic-AI-Product-a501851387bc4588831d1bf8f36f199a",
  "hivo-expansion": "https://prism-existence-de2.notion.site/Solving-Cold-Start-in-a-Two-Sided-Marketplace-6325d79ad9c9449ab7b9876a31345a62",
  "carfax-analytics": "https://prism-existence-de2.notion.site/Monetizing-the-Workflow-Not-the-Network-A-Product-Strategy-Case-Study-805deed8859241d4956d26b02abdf6e4",
  "spacebeacon-voice-travel-platform": "https://prism-existence-de2.notion.site/Building-the-Backbone-of-a-Voice-First-Travel-Platform-dc98e394fa6e4b579e1d04d4f0c1d04c",
  "templating-trust-ai-policy-generator": "https://prism-existence-de2.notion.site/Templating-Trust-An-AI-Policy-Generator-for-ISO-and-SOC-Compliance-b9a113bac13d49049c4385b99933f592",
};

// The arrow sits inline after the title's last word so it reads as part of the
// sentence; keeping the two in one nowrap span stops the arrow orphaning onto
// a line of its own.
function splitTitle(title: string) {
  const i = title.trimEnd().lastIndexOf(" ");
  return i === -1 ? { lead: "", last: title } : { lead: title.slice(0, i), last: title.slice(i + 1) };
}

export function CaseStudyCard({
  meta,
  animation,
}: {
  meta: CaseStudyMeta;
  animation?: CaseStudyAnimationVariant;
}) {
  const href = caseStudyLinks[meta.slug] ?? "/writing";
  const { lead, last } = splitTitle(meta.title);

  return (
    <Link
      href={href}
      className={animation ? "card card--anim" : "card"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card__body">
        <div className="card__head">
          <h3 className="card__title">
            {lead ? `${lead} ` : ""}
            <span className="card__titleEnd">
              {last}
              <span className="card__arrow mono" aria-hidden="true">
                →
              </span>
            </span>
          </h3>
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
              <span key={t} className={getTagClassName(t)}>{t}</span>
            ))}
          </span>
        </div>
      </div>
      {animation && <CaseStudyAnimation variant={animation} />}
    </Link>
  );
}
