"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { AgentCard } from "./ui/agent-card";
import { Button } from "./ui/button";
import { agentConfigs, CALENDLY_URL } from "@/lib/data";

export function AgentShowcase() {
  return (
    <SectionWrapper id="agent-showcase" glow="accent-top">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-20"
      >
        <p className="section-label mb-6">03 / Agent Configs</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 max-w-4xl leading-[0.95]">
          Pre-Built Configs.
          <br />
          <span className="text-neutral-500">Fully Custom Deployments.</span>
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl max-w-xl font-light">
          Pick a starting config or tell us your workflow. Every deployment is
          tailored to your business during the discovery call.
        </p>
      </motion.div>

      {/* 2x2 Agent card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {agentConfigs.map((config, index) => (
          <AgentCard key={config.id} config={config} index={index} />
        ))}
      </div>

      {/* Custom deployment banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="gradient-border gradient-border-highlight p-8 md:p-10 text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent/60 mb-3">
          Custom Builds
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-[-0.02em] mb-3">
          Don&apos;t see your use case?
        </h3>
        <p className="text-neutral-500 text-[15px] font-light mb-6 max-w-lg mx-auto">
          We design custom agent architectures for any workflow. The discovery
          call maps your exact needs — pre-built configs are a starting point,
          not a limitation.
        </p>
        <Button href={CALENDLY_URL} variant="outline" size="default">
          Describe Your Use Case
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
