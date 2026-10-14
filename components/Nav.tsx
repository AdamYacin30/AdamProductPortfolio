"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

const MENU_ID = "nav-menu";
// Matches the CSS breakpoint where the links collapse into the toggle.
const DESKTOP = "(min-width: 601px)";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // A tap on a link navigates without unmounting the nav, so close it here.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    // Rotating to landscape can cross the breakpoint while the panel is open,
    // which would otherwise leave it stuck open behind the desktop layout.
    const mq = window.matchMedia(DESKTOP);
    const onBreakpoint = () => {
      if (mq.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    mq.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      mq.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const resume = (
    <a href={site.resumePath} target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <header className="nav" ref={headerRef}>
      <div className="wrap nav__inner">
        <Link href="/" className="nav__brand mono">
          Adam Yassine
          <span className="nav__brand-sub">AI / Technical PM</span>
        </Link>

        <nav className="nav__desktop" aria-label="Primary">
          <ul className="nav__links mono">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>{resume}</li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls={MENU_ID}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__burger" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {/* `hidden` keeps the links out of the tab order while closed. On desktop
          CSS hides this outright and the row above takes over. */}
      <nav className="nav__panel" id={MENU_ID} aria-label="Mobile" hidden={!open}>
        <ul className="mono">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li>{resume}</li>
        </ul>
      </nav>
    </header>
  );
}
