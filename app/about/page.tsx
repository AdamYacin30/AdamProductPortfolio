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
          That shift led me through data. At Carfax, I built analytics across 35B+ records using Azure Synapse and Power BI, showing which features actually drove usage, then worked with product teams on what the roadmap should do with that signal.
        </p>
        <p>
          At Hivo, I owned product decisions for a marketplace expansion across Canada and the MENA region, working across payments, compliance, localization, and launch strategy.
        </p>
        <p>
          At Carfax, I now lead the company&apos;s first agentic AI product from 0 to 1, including building the LLM evaluation framework and designing model-routing architecture.
        </p>
        <p>
          I work best at the boundary between technical detail and product judgment. I care about clear evaluation, careful scope, and decisions that are measurable rather than assumed.
        </p>

        <h2>Background</h2>
        <ul>
          <li>B.Sc. in Computer Science, Western University, expected April 2027.</li>
          <li>Duke AI Product Management Specialization, in progress.</li>
          <li>Founder of Wallstopia.</li>
          <li>{site.location}.</li>
        </ul>

        <h2>Tools &amp; Technologies</h2>
        <div>
          <h3>Languages</h3>
          <ul>
            <li>Python, Java, C, C++, C#, JavaScript, TypeScript, HTML, CSS, SQL</li>
          </ul>

          <h3>AI &amp; ML</h3>
          <ul>
            <li>Agentic Systems, LLM Evaluation, Model Selection/Routing, Prompt Design, RAG, Inference Cost &amp; Latency Trade-offs, LLM Fine-Tuning, NLP</li>
          </ul>

          <h3>Data &amp; Analytics</h3>
          <ul>
            <li>Power BI, Tableau, Snowflake, Azure Synapse, ETL Pipelines, Product Analytics, Query optimization, Data Modeling, Data Quality Frameworks, Advanced Excel (Pivot Tables, VLOOKUPs)</li>
          </ul>

          <h3>Product</h3>
          <ul>
            <li>Product Roadmapping, PRDs, User Stories, Feature Prioritization, Go-to-Market Strategy, Stakeholder Management, Backlog Management, User Research, Competitor Benchmarking, Market Sizing</li>
          </ul>

          <h3>Collaboration Tools</h3>
          <ul>
            <li>Jira, Confluence, Notion, Slack, Figma, Git/GitHub, CI/CD (GitHub Actions)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
