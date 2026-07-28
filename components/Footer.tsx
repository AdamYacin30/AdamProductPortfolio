import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
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
            <a href={site.resumePath} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <p className="footer__fine mono">
          © {new Date().getFullYear()} Adam Yassine · Built in Next.js · {site.location}
        </p>
      </div>
    </footer>
  );
}
