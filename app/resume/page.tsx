import { site } from "@/lib/site";

export const metadata = {
  title: "Resume — Adam Yassine",
  description: "Resume of Adam Yassine — Associate Product Manager with experience in product analytics, AI agents, and data engineering.",
};

export default function ResumePage() {
  return (
    <div className="wrap prose" style={{ padding: '48px 0' }}>
      <h1>Adam Yassine</h1>
      <p className="muted">Toronto ON · <a href={`mailto:${site.email}`}>{site.email}</a> · {site.phone} · <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href={site.url} target="_blank" rel="noopener noreferrer">{new URL(site.url).host}</a></p>

      <h2>Associate Product Manager</h2>
      <p>Associate Product Manager who owned Carfax's first agentic AI product from 0 to 1 with S&P Global Mobility; Product Owner who grew marketplace host inventory 45%. Background in LLM evaluation, analytics, and fraud detection.</p>

      <h3>Education</h3>
      <p>Bachelor of Science, Specialization in Computer Science — Expected April 2027<br/>Western University, London, ON</p>

      <h3>Experience</h3>
      <h4>CARFAX Inc.</h4>
      <p><strong>Associate Product Manager – AI Agents</strong> · April 2026 – Present</p>
      <ul>
        <li>Led Carfax's first agentic AI product from 0 to 1 with S&P Global Mobility across a 20-person cross-functional team, using customer discovery to shape a phased roadmap targeting higher dealer usage and longer contract lifetimes.</li>
        <li>Built an LLM evaluation framework and automated test suite of 100+ scenarios validating AI answer quality across changes.</li>
        <li>Designed a model-routing architecture to balance cost and accuracy across model classes.</li>
        <li>Proposed a 3-agent orchestration architecture (vehicle history, market data, recommendation specialist) to improve response accuracy.</li>
      </ul>

      <p><strong>Data Product Analyst (Co-op) – Data Insights & Governance</strong> · Sept 2025 – Apr 2026</p>
      <ul>
        <li>Built 10+ self-serve Power BI and Tableau dashboards on 35B+ records; a usage dashboard tiering 1,100+ dealer accounts that supported targeted outreach and company usage OKRs.</li>
        <li>Ran cohort analysis and identified churn patterns that informed product changes reducing churn by 9% and fixing a subscription funnel revenue leak contributing to a 10% increase in MRR.</li>
        <li>Built and validated a fraud-detection business rule by profiling confirmed fraud cases in SQL against 10 years of data, improving flagging precision.</li>
      </ul>

      <h4>HIVO Inc.</h4>
      <p><strong>Product Owner (Part-time)</strong> · Dec 2025 – Mar 2026</p>
      <ul>
        <li>Partnered with the founder to launch a two-sided coworking marketplace, redesigning host onboarding to grow host inventory 45% and activation 30%.</li>
        <li>Defined MVP requirements and prioritized backlog to prepare investor demo and support a $250K seed round.</li>
        <li>Designed a Generative AI Listing Assistant to reduce new-host listing time-to-live by ~40%.</li>
      </ul>

      <h3>Projects</h3>
      <p><strong>UMDB (Creative Social Platform)</strong> — Software Developer / Growth (May 2026 – Jul 2026): Relaunched a social platform, shipping AI assistant and monetization features for 5,000+ users.</p>
      <p><strong>IRM Consulting (AI Compliance)</strong> — Software Engineer (Jul 2025 – Aug 2025): Built an AI compliance agent on Supabase, cutting report creation from weeks to minutes for 50+ clients.</p>

      <h3>Skills</h3>
      <ul>
        <li><strong>Product & Strategy:</strong> Product Strategy, Market & Customer Research, User Interviews, Go-to-Market, Agile, MVP Scoping</li>
        <li><strong>AI/ML & Agents:</strong> Agentic Systems, Multi-Agent Orchestration, LLM Evaluation, Prompt Design, RAG</li>
        <li><strong>Analytics & Data:</strong> SQL, Python, Power BI, Tableau, Snowflake, Azure Synapse, Statistical Analysis</li>
        <li><strong>Tools:</strong> Jira, Confluence, Figma, Excel, Google Analytics, Playwright, Claude Code, Cursor, Obsidian, N8N</li>
      </ul>

    </div>
  );
}
