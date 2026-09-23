import { site } from "@/lib/site";

export default function DataFooter() {
  return (
    <footer className="footer data-footer">
      <div className="wrap footer__inner">
        <p className="footer__pos mono">{site.role}</p>
        <ul className="footer__links mono">
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
          <li>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="/data">Product work →</a>
          </li>
        </ul>
        <p className="footer__fine mono">
          © {new Date().getFullYear()} Adam Yassine · Data & Analytics
        </p>
      </div>
    </footer>
  );
}
