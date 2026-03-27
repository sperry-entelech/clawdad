import { OfferingStub } from "@/components/offering-stub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Dashboards — Ntelech",
  description: "Operations visibility without the $120K hire.",
};

export default function OpsPage() {
  return (
    <OfferingStub
      label="operations"
      headline="operations visibility without the $120K hire."
      description="you know you need a RevOps manager. you also know you can't justify the salary yet. we build the dashboards, automate the reporting, and give you the visibility you need — without the headcount."
      replaces="RevOps manager · $90–120K/yr"
    />
  );
}
