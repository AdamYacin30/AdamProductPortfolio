export default function ExperienceList() {
  const roles = [
    {
      company: "Carfax Inc.",
      title: "Data Product Analyst",
      dates: "Sept 2025 – Apr 2026",
      bullets: [
        "Ran analytics across 35B+ records from 260K+ data sources in Python and SQL, surfacing product utilization trends that fed feature prioritization.",
        "Built and maintained Azure Synapse ETL pipelines producing analysis-ready datasets used across the organization, integrating sources across Azure and Snowflake.",
        "Built feature-level usage dashboards and ran churn cohort analysis, turning adoption findings into roadmap decisions alongside the product managers who owned them.",
      ],
    },
    {
      company: "DDB Consultants Inc.",
      title: "Business Analyst",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Built an investor-ready pitch deck targeting a $2M seed for an AI data platform in renewable energy, sized against a $15B+ addressable market.",
        "Translated 20+ industry reports and benchmarks on 8 competitors into 10+ prioritized platform requirements.",
        "Delivered 3-year financial projections and a phased North American go-to-market strategy.",
      ],
    },
    {
      company: "Magnify Access",
      title: "Data Analyst",
      dates: "May 2025 – Jun 2025",
      bullets: [
        "Restructured the W-PAS dataset to map functional accommodation needs against job demands, surfacing systemic accessibility gaps.",
        "Built and tested machine learning models predicting workplace environmental considerations from accessibility analytics.",
        "Built structured tracking frameworks for functional needs and accommodation barriers within an agile intrapreneurship cohort.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-list">
      <h2>Experience</h2>
      {roles.map((r) => (
        <article key={r.company} className="experience-entry">
          <h3 className="display">{r.company} — {r.title}</h3>
          <div className="dates mono">{r.dates}</div>
          <ul>
            {r.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
