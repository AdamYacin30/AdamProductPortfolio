import type { ReactNode } from "react";

// Section components are the MDX vocabulary for a case study. Authors write
// <Context>…</Context> etc.; the ordering and styling live here, not in the file.

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="cs-block">
      <p className="eyebrow cs-block__label">{label}</p>
      <div className="prose">{children}</div>
    </section>
  );
}

export const Context = ({ children }: { children: ReactNode }) => (
  <Section label="Context">{children}</Section>
);
export const Problem = ({ children }: { children: ReactNode }) => (
  <Section label="The problem">{children}</Section>
);
export const WhatIDid = ({ children }: { children: ReactNode }) => (
  <Section label="What I did">{children}</Section>
);
export const Outcome = ({ children }: { children: ReactNode }) => (
  <Section label="Outcome">{children}</Section>
);
export const Differently = ({ children }: { children: ReactNode }) => (
  <Section label="What I'd do differently">{children}</Section>
);

// The load-bearing block. Distinct treatment: accent rule, wider measure,
// mono eyebrow, raised surface. This is what the eye lands on when scrolling.
export const Decision = ({ children }: { children: ReactNode }) => (
  <section className="decision" aria-labelledby="decision-label">
    <p className="eyebrow decision__label" id="decision-label">
      The decision I&rsquo;d defend
    </p>
    <div className="prose decision__body">{children}</div>
  </section>
);

// A callout for a real tradeoff table or the rejected option, optional.
export const Rejected = ({ children }: { children: ReactNode }) => (
  <p className="decision__rejected mono">{children}</p>
);

export const mdxComponents = {
  Context,
  Problem,
  WhatIDid,
  Decision,
  Rejected,
  Outcome,
  Differently,
};
