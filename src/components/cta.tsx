"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CALENDLY_URL } from "@/lib/data";

export function CTA() {
  return (
    <section className="relative py-32 md:py-44 bg-black overflow-hidden">
      {/* Accent glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-label mb-6">06 / Get Started</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95]">
            Ready to Deploy
            <br />
            <span className="text-accent">Before Your Competitors Know This Exists?</span>
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto">
            One discovery call. We&apos;ll map your workflow, recommend an
            agent architecture, and give you a straight answer on fit.
          </p>
          <Button href={CALENDLY_URL} size="lg">
            Book Your Discovery Call
          </Button>
          <p className="text-neutral-600 text-[13px] mt-4 font-light">
            30 minutes. No pitch. Currently onboarding first cohort — early access pricing available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
