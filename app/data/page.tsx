import DataHeader from "@/components/data/DataHeader";
import CapabilityStrip from "@/components/data/CapabilityStrip";
import ExperienceList from "@/components/data/ExperienceList";
import ProjectsGrid from "@/components/data/ProjectsGrid";
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
      </section>

      <CapabilityStrip />

      <ExperienceList />

      <ProjectsGrid />
    </div>
  );
}
