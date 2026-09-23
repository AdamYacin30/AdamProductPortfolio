import Image from "next/image";

const projects = [
  { title: "Vehicle Valuation Usage Dashboard", tool: "POWER BI", caption: "TODO caption", date: "Sept–Nov 2025" },
  { title: "Consumer Analytics Dashboard", tool: "POWER BI", caption: "TODO caption", date: "Jan–Feb 2026" },
  { title: "Browser Extension Product Analytics", tool: "TABLEAU", caption: "TODO caption", date: "Oct 2025" },
  { title: "iOS App Value Metrics Dashboard", tool: "POWER BI", caption: "TODO caption", date: "Nov–Dec 2025" },
  { title: "Manufacturing Operations Performance", tool: "POWER BI", caption: "Plant-level Excel data unified into a single performance report; DAX measures standardized dataset and reduced errors.", date: "Jun 2025" },
  { title: "Excel Automation Dashboard", tool: "EXCEL / VBA", caption: "TODO caption", date: "TBD" },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={p.title} className="project-card">
            <div className="project__frame">
              <Image src={`/og/placeholder-${(i % 3) + 1}.png`} alt={`Screenshot: ${p.title}`} width={800} height={500} />
            </div>
            <p className="mono project__tool">{p.tool}</p>
            <h3 className="project__title">{p.title}</h3>
            <p className="project__caption">{p.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
