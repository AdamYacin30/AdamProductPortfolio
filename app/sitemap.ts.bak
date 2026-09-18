import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getCaseStudies, getPosts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/about", "/writing"].map((path) => ({
    url: `${base}${path}/`,
    lastModified: new Date(),
  }));
  const work = getCaseStudies().map((c) => ({
    url: `${base}/work/${c.meta.slug}/`,
    lastModified: new Date(),
  }));
  const posts = getPosts().map((p) => ({
    url: `${base}/writing/${p.meta.slug}/`,
    lastModified: new Date(p.meta.date),
  }));
  return [...staticRoutes, ...work, ...posts];
}
