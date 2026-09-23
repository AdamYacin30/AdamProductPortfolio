import type { Metadata } from "next";
import "./styles.css";
import DataHeader from "@/components/data/DataHeader";
import DataFooter from "@/components/data/DataFooter";

export const metadata: Metadata = {
  title: "Data — Adam Yassine — Data & Analytics",
  description:
    "Data analytics portfolio — pipelines, dashboards, and analysis that informed product decisions. SQL, Python, Azure Synapse, Power BI.",
  openGraph: {
    title: "Data — Adam Yassine — Data & Analytics",
    description:
      "Data analytics portfolio — pipelines, dashboards, and analysis that informed product decisions. SQL, Python, Azure Synapse, Power BI.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://adamyassine.ca"}/data`,
    siteName: "Adam Yassine",
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://adamyassine.ca"}/og/data.png`, alt: "Data portfolio — Adam Yassine" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: "/data" },
};

export function generateViewport() {
  return {
    themeColor: "#101418",
  };
}

export default function DataLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="dark" className="data-root">
      <DataHeader />
      <main className="wrap data__main">{children}</main>
      <DataFooter />
    </div>
  );
}
