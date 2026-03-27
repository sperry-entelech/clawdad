import { VentureStub } from "@/components/venture-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eve — Ntelech Ventures",
  description: "Signal delivery system for sports betting and prediction market picks.",
};

export default function EvePage() {
  return (
    <VentureStub
      name="Eve"
      tagline="sports betting signal delivery"
      description="A signal delivery platform that takes betting picks from expert analysts and delivers them to paying subscribers via Discord and Telegram. Subscription management, delivery tracking, and basic analytics — with a roadmap toward AI-powered prediction market monitoring."
      githubUrl="https://github.com/sperry-entelech/eve-1.0-plus"
    />
  );
}
