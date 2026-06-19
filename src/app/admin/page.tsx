import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = { title: "Rawnak Admin" };

export default function AdminPage() {
  return <SiteShell><ComingSoon title="Rawnak Admin" /></SiteShell>;
}
