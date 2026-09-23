export default function ExperienceList() {
  const roles = [
    {
      company: "Carfax Inc.",
      title: "Data Product Analyst",
      dates: "Sept 2025 – Apr 2026",
      bullets: [
        "Analyzed 35B+ records to identify feature usage drivers → informed roadmap prioritization.",
        "Built Azure Synapse ETL pipelines to produce analysis-ready datasets, reducing time-to-insight.",
        "Delivered feature-level dashboards and churn cohorts → translated into concrete roadmap actions.",
      ],
    },
    {
      company: "DDB Consultants Inc.",
      title: "Business Analyst",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Prepared investor pitch and TAM analysis supporting a $2M seed target.",
        "Synthesized 20+ reports into prioritized product requirements.",
        "Built 3-year financial model and phased GTM plan for North America.",
      ],
    },
    {
      company: "Magnify Access",
      title: "Data Analyst",
      dates: "May 2025 – Jun 2025",
      bullets: [
        "Reformatted W-PAS to map accommodations → surfaced enterprise accessibility gaps.",
        "Built ML models predicting workplace environment needs from accessibility signals.",
        "Implemented tracking frameworks to operationalize accommodation data in product workflows.",
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
              <li key={i} className="impact">{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
