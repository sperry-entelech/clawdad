import { VentureStub } from "@/components/venture-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echelon — Ntelech Ventures",
  description: "Supervised autonomy infrastructure with real-time monitoring and deployment automation.",
};

export default function EchelonPage() {
  return (
    <VentureStub
      name="Echelon"
      tagline="supervised autonomy infrastructure"
      description="A multi-agent platform for deploying, monitoring, and managing autonomous systems across market analysis, web research, media processing, and automated workflows. Real-time monitoring, mind map visualization of reasoning chains, and automated deployment pipelines — built for teams that need autonomy they can actually trust."
    />
  );
}
