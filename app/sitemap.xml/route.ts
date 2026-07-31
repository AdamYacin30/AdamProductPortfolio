import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { getCaseStudies, getPosts } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/about", "/writing"];
  const work = getCaseStudies().map((c) => `  <url><loc>${base}/work/${c.meta.slug}/</loc><lastmod>${new Date().toISOString()}</lastmod></url>`);
  const posts = getPosts().map((p) => `  <url><loc>${base}/writing/${p.meta.slug}/</loc><lastmod>${new Date(p.meta.date).toISOString()}</lastmod></url>`);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticRoutes
    .map((path) => `  <url><loc>${base}${path}/</loc><lastmod>${new Date().toISOString()}</lastmod></url>`)
    .join("\n")}\n${work.join("\n")}\n${posts.join("\n")}\n</urlset>\n`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
