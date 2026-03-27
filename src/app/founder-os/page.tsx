import { VentureStub } from "@/components/venture-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder OS — Ntelech Ventures",
  description: "AI-native operating system for solo founders using Claude as their co-pilot.",
};

export default function FounderOSPage() {
  return (
    <VentureStub
      name="Founder OS"
      tagline="AI-native infrastructure for solo founders"
      description="A ready-to-clone system that turns Claude Pro into a reliable business co-pilot through persistent context, project configurations, and reusable skills. Pre-built projects for strategic planning, day-to-day operations, client work, and research — so you never re-explain your business to your AI again."
      githubUrl="https://github.com/sperry-entelech/ai-founder-os"
    />
  );
}
