"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { processSteps } from "@/lib/data";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" glow="top">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-20"
      >
        <p className="section-label mb-6">04 / How It Works</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 max-w-3xl leading-[0.95]">
          From Call to
          <br />
          <span className="text-neutral-500">Running Agents</span>
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl max-w-lg font-light">
          A clear, predictable process. No surprises, no scope creep — just
          working agents on your infrastructure.
        </p>
      </motion.div>

      {/* 2x2 grid with connector lines */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Vertical connector */}
        <div
          className="hidden sm:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(249,115,22,0.08) 20%, rgba(249,115,22,0.08) 80%, transparent)",
          }}
        />
        {/* Horizontal connector */}
        <div
          className="hidden sm:block absolute top-1/2 left-8 right-8 h-px -translate-y-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(249,115,22,0.08) 20%, rgba(249,115,22,0.08) 80%, transparent)",
          }}
        />

        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="gradient-border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-[48px] md:text-[56px] font-bold leading-none tracking-[-0.04em] text-white/[0.07] select-none">
                {step.number}
              </p>
              <span className="bg-accent-muted text-accent rounded-full px-3 py-1 text-xs font-medium">
                {step.price}
                {step.priceNote && (
                  <span className="text-accent/60 ml-1">
                    {step.priceNote}
                  </span>
                )}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="text-neutral-500 text-[14px] leading-relaxed font-light">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
