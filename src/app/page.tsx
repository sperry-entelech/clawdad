import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { AgentShowcase } from "@/components/agent-showcase";
import { ProofPoints } from "@/components/proof-points";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <AgentShowcase />
      <ProofPoints />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
