import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = { title: "Rawnak Academy" };

export default function AcademyPage() {
  return <SiteShell><ComingSoon title="Rawnak Academy" /></SiteShell>;
}
