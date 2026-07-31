import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
