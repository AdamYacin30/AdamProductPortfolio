import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adam Yassine — from software engineering to data analysis to product ownership to AI product management, moving toward the decisions rather than the implementation.",
};

export default function AboutPage() {
  return (
    <div className="wrap page">
      <header className="page__header">
        <p className="eyebrow">About</p>
        <h1 className="page__title">How I got to product — and how I work</h1>
      </header>

      <div className="prose page__prose">
        <p>
          I started in code. Across a run of engineering roles — AI-powered project
          tooling, an LLM travel platform, a financial-research automation tool, an
          AI compliance product — I kept noticing that the interesting part wasn&rsquo;t
          the implementation. It was the decision one layer up: what to build, for
          whom, and what to cut. So I kept moving toward it.
        </p>
        <p>
          The move went through data. As a Data Product Analyst at Carfax I built the
          analytics that told the product org which features actually carried usage —
          then found myself arguing about what the roadmap should do with that, which
          is a product job, not an analyst one. At Hivo I owned that job outright as
          Product Owner, taking a coworking marketplace into two Gulf markets on one
          codebase. Now, as Associate Product Manager at Carfax, I own the company&rsquo;s
          first agentic AI product from 0→1 with S&amp;P Global Mobility — the eval
          frameworks, the model tradeoffs, and the latency work that decide whether an
          AI product is trustworthy enough to keep.
        </p>
        <p>
          The through-line is that I kept moving toward the decisions rather than the
          implementation — and I kept the technical fluency on the way, which is what
          lets me sit between ML engineers and business stakeholders and actually own
          the tradeoffs in between.
        </p>

        {/* TODO(cert): confirm status (in progress vs complete) + expected date before publishing. */}
        <h2>Background</h2>
        <ul>
          <li>
            B.Sc. in Computer Science, Western University — expected April 2027.
          </li>
          <li>
            IBM AI Product Manager Professional Certificate — in progress.
          </li>
          <li>Founder of Wallstopia.</li>
          <li>{site.location}.</li>
        </ul>

        <h2>How I work</h2>
        <ul>
          <li>
            I make the quality of a thing measurable before I ship it — an eval, a
            budget, a cohort — so &ldquo;is this good?&rdquo; has an answer that isn&rsquo;t a vote.
          </li>
          <li>
            I&rsquo;d rather constrain a surface than inflate it. A smaller thing users
            trust beats a bigger one that disappoints.
          </li>
          <li>
            I mark a projection as a projection. A modeled number and a measured one
            are not the same claim, and treating them as one is how you lose a room.
          </li>
        </ul>
      </div>
    </div>
  );
}
