import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { RoiMath } from "@/components/roi-math";
import { Qualifier } from "@/components/qualifier";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { reactivationPage } from "@/lib/niches/reactivation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: reactivationPage.meta.title,
  description: reactivationPage.meta.description,
  openGraph: {
    title: reactivationPage.meta.title,
    description: reactivationPage.meta.description,
    type: "website",
  },
};

export default function ReactivationPage() {
  return (
    <main>
      <Navbar minimal ctaLabel="Book a Call" />
      <Hero data={reactivationPage.hero} />
      <Problem data={reactivationPage.problem} />
      {reactivationPage.howItWorks && (
        <HowItWorks data={reactivationPage.howItWorks} />
      )}
      {reactivationPage.roiMath && (
        <RoiMath data={reactivationPage.roiMath} />
      )}
      {reactivationPage.qualifier && (
        <Qualifier data={reactivationPage.qualifier} />
      )}
      <CTA data={reactivationPage.cta} />
      <Footer
        minimal
        tagline="lead reactivation. appointments on your calendar."
      />
    </main>
  );
}
