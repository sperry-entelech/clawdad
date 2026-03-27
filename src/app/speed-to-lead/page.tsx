import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { RoiMath } from "@/components/roi-math";
import { Qualifier } from "@/components/qualifier";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { speedToLeadPage } from "@/lib/niches/speed-to-lead";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: speedToLeadPage.meta.title,
  description: speedToLeadPage.meta.description,
  openGraph: {
    title: speedToLeadPage.meta.title,
    description: speedToLeadPage.meta.description,
    type: "website",
  },
};

export default function SpeedToLeadPage() {
  return (
    <main>
      <Navbar minimal ctaLabel="Book a Call" />
      <Hero data={speedToLeadPage.hero} />
      <Problem data={speedToLeadPage.problem} />
      {speedToLeadPage.howItWorks && (
        <HowItWorks data={speedToLeadPage.howItWorks} />
      )}
      {speedToLeadPage.roiMath && (
        <RoiMath data={speedToLeadPage.roiMath} />
      )}
      {speedToLeadPage.qualifier && (
        <Qualifier data={speedToLeadPage.qualifier} />
      )}
      <CTA data={speedToLeadPage.cta} />
      <Footer
        minimal
        tagline="speed to lead. every second counts."
      />
    </main>
  );
}
