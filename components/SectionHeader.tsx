import React from "react";

export default function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="section-header wrap">
      <div className="section-header__eyebrow mono">{eyebrow}</div>
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
}

