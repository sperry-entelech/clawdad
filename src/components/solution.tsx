"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";

export function Solution() {
  return (
    <SectionWrapper id="solution" glow="accent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="section-label mb-6">02 / The Solution</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95]">
          We Are
          <br />
          <span className="text-accent">The Bridge.</span>
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed mb-16">
          Clawdad takes your workflow and turns it into a production-grade
          OpenClaw agent system — configured, secured, and running on your
          infrastructure.
        </p>
      </motion.div>

      {/* Bridge visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0"
      >
        {/* Your Workflow */}
        <div className="gradient-border px-8 py-6 text-center min-w-[200px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2">
            Your Workflow
          </p>
          <p className="text-white font-semibold tracking-[-0.02em]">
            Ideas & Processes
          </p>
        </div>

        {/* Connector arrow */}
        <div className="flex items-center px-4">
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-neutral-800 to-accent/40" />
          <svg
            className="w-4 h-4 text-accent/60 -ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        {/* Clawdad */}
        <div className="gradient-border gradient-border-accent px-8 py-6 text-center min-w-[200px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent/60 mb-2">
            Clawdad
          </p>
          <p className="text-accent-light font-semibold tracking-[-0.02em]">
            Configure & Deploy
          </p>
        </div>

        {/* Connector arrow */}
        <div className="flex items-center px-4">
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-accent/40 to-neutral-800" />
          <svg
            className="w-4 h-4 text-accent/60 -ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        {/* Running Agents */}
        <div className="gradient-border px-8 py-6 text-center min-w-[200px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2">
            Your Business
          </p>
          <p className="text-white font-semibold tracking-[-0.02em]">
            Running Agents
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
