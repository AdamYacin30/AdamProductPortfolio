import type { Phase } from "@/lib/schema";

const FILL: Record<Phase["series"], string> = {
  a: "var(--trace-a)",
  b: "var(--trace-b)",
  neutral: "var(--trace-neutral)",
};

// The one bold element on the site: a project waterfall. Segment widths are
// proportional to phase weights. Pure CSS — renders without JS, prints, and
// carries a text alternative for assistive tech.
export function PhaseTrace({
  phases,
  mini = false,
  className = "",
}: {
  phases: Phase[];
  mini?: boolean;
  className?: string;
}) {
  const total = phases.reduce((sum, p) => sum + p.weight, 0);
  const label = `Project phases: ${phases
    .map((p) => `${p.label} ${Math.round((p.weight / total) * 100)}%`)
    .join(", ")}`;

  return (
    <figure className={`trace ${mini ? "trace--mini" : ""} ${className}`.trim()} aria-label={label}>
      <div className="trace__bar" role="img" aria-label={label}>
        {phases.map((p, i) => (
          <span
            key={i}
            className="trace__seg"
            style={{ flexGrow: p.weight, background: FILL[p.series] }}
          />
        ))}
      </div>
      {!mini && (
        <figcaption className="trace__labels mono" aria-hidden="true">
          {phases.map((p, i) => (
            <span key={i} className="trace__label" style={{ flexGrow: p.weight }}>
              <span className="trace__tick" style={{ background: FILL[p.series] }} />
              {p.label}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}
