import Image from "next/image";

const projects = [
  { title: "Vehicle Valuation Usage", tool: "Power BI, Carfax", caption: "Placeholder: project details and outcomes.", date: "Sept–Nov 2025", image: "/og/Valuation Usage Dashboard.png", todo: true },
  { title: "Quick View Browser Extension Funnel", tool: "Tableau, Carfax", caption: "Placeholder: funnel and retention findings.", date: "Oct 2025", image: "/og/Browser Extension Dashboard.png", todo: true },
  { title: "Financial Research Automation", tool: "Python + AI, Encore Financial", caption: "Automated research and reporting (Jun–Sep 2025).", date: "Jun–Sep 2025", image: "/og/market summary dashboard.png", todo: true },
  { title: "{{TODO: public project}}", tool: "Public data + SQL", caption: "Placeholder—full numbers, SQL and notebooks will be published here.", date: "TBD", image: "/og/placeholder-3.png", github: "https://github.com/your-repo" },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={p.title} className="project-card">
            <div className="project__frame">
              <div className="project__media">
                <Image src={p.image} alt={p.title} fill style={{ objectFit: 'contain', objectPosition: 'center top' }} />
              </div>
            </div>
            <p className="mono project__tool">{p.tool}</p>
            <h3 className="project__title">{p.title}</h3>
            <p className="project__caption">{p.caption}</p>
            {p.github && (
              <div className="project__links"><a href={p.github} target="_blank" rel="noopener noreferrer">View code</a></div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
