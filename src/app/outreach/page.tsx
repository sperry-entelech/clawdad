import { OfferingStub } from "@/components/offering-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Outreach — Ntelech",
  description: "Cold outreach that books meetings. We handle it.",
};

export default function OutreachPage() {
  return (
    <OfferingStub
      label="cold outreach"
      headline="cold outreach that books meetings. we handle it."
      description="you give us a target profile. we build the lists, write the sequences, send the emails, and book the meetings. your team shows up to conversations with people who want to talk."
      replaces="BDR team · $50–80K/yr"
    />
  );
}
