import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = { title: "Rawnak App" };

export default function AppPage() {
  return <SiteShell><ComingSoon title="Rawnak App" /></SiteShell>;
}
