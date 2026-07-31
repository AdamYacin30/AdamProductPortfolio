import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adam Yassine has moved from engineering and analytics to product ownership and AI product management, with a focus on clear decisions and durable outcomes.",
};

export default function AboutPage() {
  return (
    <div className="wrap page">
      <header className="page__header">
        <p className="eyebrow">About</p>
        <h1 className="page__title">How I got to product and how I work</h1>
      </header>

      <div className="prose page__prose">
        <p>
          I started in software development. Across roles in AI tooling, travel, financial research, and compliance software, I kept moving toward the part that mattered most: deciding what to build, for whom, and why.
        </p>
        <p>
          That shift led me through data. At Carfax, I built analytics that showed which features actually drove usage, then worked with product teams on what the roadmap should do with that signal. At Hivo, I owned product decisions for a marketplace expansion across Canada and the MENA region, working across payments, compliance, localization, and launch strategy. At Carfax, I now lead the company&apos;s first agentic AI product from 0 to 1.
        </p>
        <p>
          I work best at the boundary between technical detail and product judgment. I care about clear evaluation, careful scope, and decisions that are measurable rather than assumed.
        </p>

        <h2>Background</h2>
        <ul>
          <li>B.Sc. in Computer Science, Western University.</li>
          <li>IBM AI Product Manager Professional Certificate, in progress.</li>
          <li>Founder of Wallstopia.</li>
          <li>{site.location}.</li>
        </ul>
      </div>
    </div>
  );
}
