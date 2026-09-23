export default function CapabilityStrip() {
  const items = [
    "SQL",
    "Python",
    "Azure Synapse",
    "Snowflake",
    "Power BI",
    "Tableau",
    "DAX",
    "Excel/VBA",
  ];

  return (
    <div className="capability-strip" aria-hidden="false">
      <p className="mono">
        {items.map((it, i) => (
          <span key={it}>
            {it}
            {i < items.length - 1 ? " \u00B7 " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}
