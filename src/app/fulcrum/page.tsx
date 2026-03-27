import { VentureStub } from "@/components/venture-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fulcrum — Ntelech Ventures",
  description: "Designated driver management platform for Greek life organizations.",
};

export default function FulcrumPage() {
  return (
    <VentureStub
      name="Fulcrum"
      tagline="designated driver management for Greek life"
      description="A purpose-built SaaS platform that automates designated driver coordination through intelligent dispatch, real-time GPS tracking, and operational analytics for Greek organizations. Multi-portal architecture — Coordinator, Driver, Rider, and Admin — with live ETA updates and compliance dashboards."
      githubUrl="https://github.com/sperry-entelech/fulcrum"
    />
  );
}
