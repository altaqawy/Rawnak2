import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = { title: "Rawnak Store" };

export default function StorePage() {
  return <SiteShell><ComingSoon title="Rawnak Store" /></SiteShell>;
}
