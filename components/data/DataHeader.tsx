import Link from "next/link";

export default function DataHeader() {
  return (
    <header className="nav data-nav">
      <div className="wrap nav__inner">
        <Link href="/data" className="nav__brand mono">
          Adam Yassine
          <span className="nav__brand-sub">DATA &amp; ANALYTICS</span>
        </Link>

        <nav aria-label="Data primary">
          <ul className="nav__links mono">
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="/resume/adam-yassine-data-resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li className="nav__light">
              <Link href="/">Product work →</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
