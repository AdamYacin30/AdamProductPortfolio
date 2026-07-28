// Generates static OG images (public/og/<slug>.png + default.png) from case-study
// frontmatter. Run once locally: `npm run og`. Output is committed and served as
// plain static files — nothing regenerates on deploy, so no runtime OG dependency.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = process.cwd();
const CASE_DIR = path.join(ROOT, "content", "case-studies");
const OUT_DIR = path.join(ROOT, "public", "og");

const INK = "#101418";
const PAPER = "#F2F4F3";
const SLATE = "#5A6470";
const A = "#5B4BE0";
const B = "#12876F";
const NEUTRAL = "#C7CCCA";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Naive monospace word-wrap by character budget.
function wrap(text, max) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max) {
      if (line) lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines;
}

function svg({ eyebrow, title, footer }) {
  const titleLines = wrap(title, 26);
  const titleFont = 58;
  const startY = 300 - (titleLines.length - 1) * (titleFont * 0.6);
  const titleTspans = titleLines
    .map((l, i) => `<text x="80" y="${startY + i * (titleFont * 1.12)}" class="title">${esc(l)}</text>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <style>
    text { font-family: "IBM Plex Mono", Consolas, "Courier New", monospace; }
    .eyebrow { fill: ${SLATE}; font-size: 24px; letter-spacing: 6px; }
    .title { fill: ${INK}; font-size: ${titleFont}px; font-weight: 600; letter-spacing: -1px; }
    .footer { fill: ${SLATE}; font-size: 24px; }
    .name { fill: ${INK}; font-size: 22px; }
  </style>
  <rect width="1200" height="630" fill="${PAPER}"/>
  <text x="80" y="96" class="eyebrow">${esc(eyebrow.toUpperCase())}</text>
  ${titleTspans}
  <g>
    <rect x="80" y="516" width="60" height="10" fill="${A}"/>
    <rect x="146" y="516" width="34" height="10" fill="${B}"/>
    <rect x="186" y="516" width="20" height="10" fill="${NEUTRAL}"/>
  </g>
  <text x="80" y="556" class="footer">${esc(footer)}</text>
  <text x="1120" y="556" text-anchor="end" class="name">Adam Yassine</text>
</svg>`;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = fs.readdirSync(CASE_DIR).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const { data } = matter(fs.readFileSync(path.join(CASE_DIR, file), "utf8"));
    const markup = svg({
      eyebrow: data.whatThisShows ?? "Case study",
      title: data.title,
      footer: `${data.role} · ${data.org}`,
    });
    const out = path.join(OUT_DIR, `${data.slug}.png`);
    await sharp(Buffer.from(markup)).png().toFile(out);
    console.log("wrote", path.relative(ROOT, out));
  }
  // Site default
  const def = svg({
    eyebrow: "AI / Technical Product Manager",
    title: "Adam Yassine builds AI products people keep using.",
    footer: "Associate Product Manager · Carfax",
  });
  await sharp(Buffer.from(def)).png().toFile(path.join(OUT_DIR, "default.png"));
  console.log("wrote public/og/default.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
