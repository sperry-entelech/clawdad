import { VentureStub } from "@/components/venture-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIIA — Ntelech Ventures",
  description: "Multi-tenant SaaS for Discord community monetization and management.",
};

export default function AIIAPage() {
  return (
    <VentureStub
      name="AIIA"
      tagline="community monetization infrastructure"
      description="A multi-tenant SaaS platform that gives Discord community managers the tools to build monetized experiences — REST API integration, database management, deployment infrastructure, and business modeling. Everything a community operator needs to turn engagement into revenue."
    />
  );
}
