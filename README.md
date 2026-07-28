# adamyassine.dev — PM portfolio

Personal product-management portfolio for Adam Yassine. Static, content-driven,
built to read as an AI / technical PM.

## Stack

- **Next.js 15** (App Router, TypeScript) with `output: export` — fully static.
- **Tailwind v4** + a small CSS custom-property design system ("trace").
- **MDX** content in `content/`, frontmatter validated at build with **zod**.
- Self-hosted fonts via `next/font` (Bricolage Grotesque, Source Serif 4, IBM Plex Mono).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run og         # regenerate public/og/*.png after editing case-study titles
```

## Add content — one file, no code changes

- **Case study:** add `content/case-studies/<slug>.mdx`. Body is authored with the
  section components `<Context> <Problem> <WhatIDid> <Decision> <Outcome> <Differently>`.
  Frontmatter (title, role, org, timeframe, teamSize, whatThisShows, tags, `phases`,
  `confidential`, `order`, cardProblem, metaDescription) is validated by
  `lib/schema.ts`. Set `confidential: true` to auto-render the confidentiality note.
- **Post:** add `content/writing/<slug>.mdx` with title, slug, date, excerpt, tags.
  Set `draft: true` to keep it out of the index and sitemap.

## Design tokens

Defined once in `app/globals.css` (`--ink --paper --slate --rule --trace-a --trace-b`).
Everything derives from them. The signature **phase trace** is `components/PhaseTrace.tsx`.

## Deploy

Static export → any static host. Vercel: framework preset "Next.js", it detects the
export automatically. OG images are committed static files; no runtime image service.
