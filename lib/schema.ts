import { z } from "zod";

// Frontmatter contracts. Validated at build — a malformed file fails the build
// instead of shipping broken content.

export const phaseSchema = z.object({
  label: z.string(),
  weight: z.number().positive(),
  // Which series colour: "a" (--trace-a), "b" (--trace-b), or "neutral".
  series: z.enum(["a", "b", "neutral"]).default("neutral"),
});

export const caseStudyFrontmatter = z.object({
  title: z.string(),
  slug: z.string(),
  role: z.string(),
  org: z.string(),
  timeframe: z.string(),
  teamSize: z.string(),
  whatThisShows: z.string(),
  tags: z.array(z.string()).min(1),
  phases: z.array(phaseSchema).min(1),
  confidential: z.boolean().default(false),
  order: z.number(),
  // One-line problem framing for the home-page card.
  cardProblem: z.string(),
  metaDescription: z.string(),
});

// YAML parses an unquoted date into a JS Date; normalise either form to yyyy-mm-dd.
const isoDate = z.preprocess((v) => {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v;
}, z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "date must be yyyy-mm-dd"));

export const postFrontmatter = z.object({
  title: z.string(),
  slug: z.string(),
  date: isoDate,
  excerpt: z.string(),
  tags: z.array(z.string()).min(1),
  draft: z.boolean().default(false),
});

export type Phase = z.infer<typeof phaseSchema>;
export type CaseStudyMeta = z.infer<typeof caseStudyFrontmatter>;
export type PostMeta = z.infer<typeof postFrontmatter>;
