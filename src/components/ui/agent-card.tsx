"use client";

import { motion } from "framer-motion";
import { PipelineFlow } from "./pipeline-flow";
import type { AgentConfig } from "@/types";

interface AgentCardProps {
  config: AgentConfig;
  index: number;
}

export function AgentCard({ config, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`gradient-border ${
        config.featured ? "gradient-border-accent" : ""
      } p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col`}
    >
      {/* Badges row */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
            config.featured
              ? "bg-accent-muted text-accent"
              : "bg-white/[0.04] text-neutral-500 border border-white/[0.06]"
          }`}
        >
          {config.agentCount} agents
        </span>
        <span className="text-[11px] text-neutral-600">
          {config.setupTime} setup
        </span>
      </div>

      {/* Name + tagline */}
      <h3
        className={`text-lg font-semibold tracking-[-0.02em] mb-2 ${
          config.featured ? "text-accent-light" : "text-white"
        }`}
      >
        {config.name}
      </h3>
      <p className="text-neutral-500 text-[13px] leading-relaxed font-light mb-5">
        {config.tagline}
      </p>

      {/* Pipeline visualization */}
      <div className="mb-5">
        <PipelineFlow steps={config.pipeline} featured={config.featured} />
      </div>

      {/* Outcomes */}
      <ul className="space-y-2 mb-6 flex-1">
        {config.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-start gap-2 text-[13px] text-neutral-400 font-light"
          >
            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
              config.featured ? "bg-accent/60" : "bg-neutral-600"
            }`} />
            {outcome}
          </li>
        ))}
      </ul>

      {/* Proof quote */}
      <div className="pt-5 border-t border-white/[0.06]">
        <p className="text-neutral-500 text-[13px] leading-relaxed italic font-light">
          &ldquo;{config.proofQuote}&rdquo;
        </p>
        <p className="text-neutral-600 text-[11px] mt-2 font-medium">
          — {config.proofAttribution}
        </p>
      </div>
    </motion.div>
  );
}
