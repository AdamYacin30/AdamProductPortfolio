import DataHeader from "@/components/data/DataHeader";
import CapabilityStrip from "@/components/data/CapabilityStrip";
import ExperienceList from "@/components/data/ExperienceList";
import { site } from "@/lib/site";

export default function DataPage() {
  return (
    <div className="data-page">
      <section className="data-hero">
        <p className="eyebrow mono">DATA &amp; ANALYTICS</p>
        <h1 className="display">Adam Yassine</h1>
        <p className="serif hero-lead">
          Data analyst turned product manager. At Carfax I built the pipelines and
          dashboards that told the roadmap what to work on next, then moved to
          the product side to own those decisions myself.
        </p>
        <p className="mono hero-meta">
          B.Sc. Computer Science, Western University, expected April 2027 · {site.location}
        </p>
      </section>

      <CapabilityStrip />

      <ExperienceList />
    </div>
  );
}
