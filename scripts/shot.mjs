import { chromium } from "playwright-core";

const shots = [
  { url: "http://localhost:3000/", file: "home.png", w: 1280 },
  { url: "http://localhost:3000/work/hivo-expansion/", file: "hivo.png", w: 1280 },
  { url: "http://localhost:3000/work/carfax-agentic-ai/", file: "carfax-agentic.png", w: 1280 },
  { url: "http://localhost:3000/about/", file: "about.png", w: 1280 },
  { url: "http://localhost:3000/", file: "home-mobile.png", w: 390 },
  { url: "http://localhost:3000/work/hivo-expansion/", file: "hivo-mobile.png", w: 390 },
];

const OUT = process.env.SHOT_DIR;

const browser = await chromium.launch({ channel: "msedge" });
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: 900 }, deviceScaleFactor: 2 });
  await page.goto(s.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${s.file}`, fullPage: true });
  console.log("shot", s.file);
  await page.close();
}
await browser.close();
