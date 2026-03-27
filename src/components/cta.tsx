"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import type { CTAData } from "@/types";

interface CTAProps {
  data: CTAData;
}

export function CTA({ data }: CTAProps) {
  return (
    <section className="relative py-32 md:py-44 bg-black overflow-hidden">
      {/* Accent glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-label mb-6">{data.sectionLabel}</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95]">
            {data.headlineWhite}
            <br />
            <span className="text-accent">{data.headlineAccent}</span>
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto">
            {data.description}
          </p>
          <Button href={data.buttonHref} size="lg">
            {data.buttonLabel}
          </Button>
          <p className="text-neutral-600 text-[13px] mt-4 font-light">
            {data.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
