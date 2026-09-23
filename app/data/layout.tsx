import type { Metadata } from "next";
import "./styles.css";
import DataHeader from "@/components/data/DataHeader";
import DataFooter from "@/components/data/DataFooter";

export const metadata: Metadata = {
  title: "Data — Adam Yassine — Data & Analytics",
  description:
    "Data analytics portfolio — pipelines, dashboards, and analysis that informed product decisions. SQL, Python, Azure Synapse, Power BI.",
  themeColor: "#101418",
  alternates: { canonical: "/data" },
};

export default function DataLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="dark" className="data-root">
      <DataHeader />
      <main className="wrap data__main">{children}</main>
      <DataFooter />
    </div>
  );
}
