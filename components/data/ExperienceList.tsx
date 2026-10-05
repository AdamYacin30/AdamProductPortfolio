export default function ExperienceList() {
  const roles = [
    {
      company: "Carfax Inc.",
      title: "Data Product Analyst",
      dates: "Sept 2025 – Apr 2026",
      bullets: [
        "Built the data pipelines and product dashboards behind roadmap decisions.",
      ],
    },
    {
      company: "DDB Consultants Inc.",
      title: "Business Analyst",
      dates: "Jan 2025 – Apr 2025",
      bullets: [
        "Market sizing and financial modeling for a $2M seed raise.",
      ],
    },
    {
      company: "Magnify Access",
      title: "Data Analyst",
      dates: "May 2025 – Jun 2025",
      bullets: [
        "Restructured accessibility data and built models to predict workplace accommodation needs.",
      ],
    },
  ];

  return (
    <>
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill-chip">SQL</span>
          <span className="skill-chip">Python</span>
          <span className="skill-chip">Azure Synapse</span>
          <span className="skill-chip">Snowflake</span>
          <span className="skill-chip">Power BI</span>
          <span className="skill-chip">Tableau</span>
          <span className="skill-chip">DAX</span>
          <span className="skill-chip">Excel/VBA</span>
        </div>
      </section>

      <section id="experience" className="experience-list">
        <h2>Experience</h2>
        <div className="timeline">
          {roles.map((r) => (
            <div key={r.company} className="timeline-item">
              <div className="timeline-left">
                <div className="company">{r.company} · <span className="title muted">{r.title}</span></div>
                <div className="summary">{r.bullets[0]}</div>
              </div>
              <div className="timeline-right">{r.dates}</div>
            </div>
          ))}
        </div>
        <p className="mono"><a href="/resume" target="_blank" rel="noopener noreferrer">View full resume</a></p>
      </section>
    </>
  );
}
