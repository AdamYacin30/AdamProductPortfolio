import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/work/hivo-expansion", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link href="/" className="nav__brand mono">
          Adam Yassine
          <span className="nav__brand-sub">AI / Technical PM</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav__links mono">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={site.resumePath} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
