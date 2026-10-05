import { site } from "@/lib/site";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Resume — Adam Yassine",
  description: "Redirecting to resume PDF",
};

export default function ResumePage() {
  // Server-side redirect to the canonical PDF in /public/resume
  redirect(site.resumePath);
}
