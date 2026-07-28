import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  caseStudyFrontmatter,
  postFrontmatter,
  type CaseStudyMeta,
  type PostMeta,
} from "./schema";

const CASE_DIR = path.join(process.cwd(), "content", "case-studies");
const POST_DIR = path.join(process.cwd(), "content", "writing");

function readMdxDir(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { file, data, content };
    });
}

export type CaseStudy = { meta: CaseStudyMeta; body: string };
export type Post = { meta: PostMeta; body: string };

export function getCaseStudies(): CaseStudy[] {
  return readMdxDir(CASE_DIR)
    .map(({ file, data, content }) => {
      const parsed = caseStudyFrontmatter.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in content/case-studies/${file}:\n${parsed.error.toString()}`
        );
      }
      return { meta: parsed.data, body: content };
    })
    .sort((a, b) => a.meta.order - b.meta.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.meta.slug === slug);
}

export function getPosts({ includeDrafts = false } = {}): Post[] {
  return readMdxDir(POST_DIR)
    .map(({ file, data, content }) => {
      const parsed = postFrontmatter.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in content/writing/${file}:\n${parsed.error.toString()}`
        );
      }
      return { meta: parsed.data, body: content };
    })
    .filter((p) => includeDrafts || !p.meta.draft)
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts({ includeDrafts: true }).find((p) => p.meta.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}
