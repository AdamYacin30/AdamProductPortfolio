import DataHeader from "@/components/data/DataHeader";
import CapabilityStrip from "@/components/data/CapabilityStrip";
import ExperienceList from "@/components/data/ExperienceList";
import ProjectsGrid from "@/components/data/ProjectsGrid";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

export default function DataPage() {
  return (
    <div className="data-page">
      <section className="wrap hero">
        <p className="hero__kicker mono">DATA &amp; ANALYTICS</p>
        <h1 className="hero__name">Adam Yassine</h1>
        <p className="hero__positioning">
          Data analyst turned product manager. At Carfax I built the pipelines and
          dashboards that told the roadmap what to work on next, then moved to
          the product side to own those decisions myself.
        </p>
        <p className="hero__role mono">
          B.Sc. Computer Science, Western University, expected April 2027 · {site.location}
        </p>
        <div className="hero__actions">
          <a className="btn" href="#projects">View projects</a>
          <a className="btn btn--ghost" href="/resume/adam-yassine-data-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="mono hero__email" href="mailto:adam@example.com">adam@example.com</a>
        </div>
      </section>

      <CapabilityStrip />

      <SectionHeader eyebrow="02 · PROJECTS" title="Projects" />
      <ProjectsGrid />

      <SectionHeader eyebrow="03 · PROCESS" title="How I work" />
      <section className="how-i-work">
        <div className="wrap">
          <div className="how-cards">
            <div className="card">
              <div className="card__num mono">01</div>
              <h3>Vague ask to metric definition</h3>
              <p className="muted">Clarify the business question and define measurable metrics.</p>
            </div>
            <div className="card">
              <div className="card__num mono">02</div>
              <h3>Data to finding</h3>
              <p className="muted">Transform and analyze data to surface actionable insights.</p>
            </div>
            <div className="card">
              <div className="card__num mono">03</div>
              <h3>Finding to product decision</h3>
              <p className="muted">Translate findings into clear product recommendations and experiments.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionHeader eyebrow="04 · SKILLS" title="Skills" />
      <section id="skills" className="skills-section wrap">
        <p className="skills-caption muted">Click a skill to see where I used it.</p>
        <div className="skills-list">
          <a className="skill-chip" href="#">SQL</a>
          <a className="skill-chip" href="#">Python</a>
          <a className="skill-chip" href="#">Azure Synapse</a>
          <a className="skill-chip" href="#">Snowflake</a>
          <a className="skill-chip" href="#">Power BI</a>
          <a className="skill-chip" href="#">Tableau</a>
          <a className="skill-chip" href="#">DAX</a>
          <a className="skill-chip" href="#">Excel/VBA</a>
        </div>
      </section>

      <SectionHeader eyebrow="05 · EXPERIENCE" title="Experience" />
      <ExperienceList />
    </div>
  );
}
