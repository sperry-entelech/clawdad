"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";

const painPoints = [
  {
    number: "01",
    title: "10–40 Hours of Setup",
    description:
      "Node.js, CLI tools, API keys, skill files, security configuration — OpenClaw is powerful, but the setup curve filters out 95% of non-technical founders before a single agent runs.",
  },
  {
    number: "02",
    title: "Security Risks",
    description:
      "Misconfigured agents leak API keys, overrun rate limits, and expose sensitive data. One wrong permission and your agent has access to everything — with no guardrails.",
  },
  {
    number: "03",
    title: "95% Never Launch",
    description:
      "The power is there. The documentation is there. But the bridge between \"this looks amazing\" and \"I have agents running my business\" — that bridge doesn't exist. Until now.",
  },
];

export function Problem() {
  return (
    <SectionWrapper id="problem" glow="top">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-20"
      >
        <p className="section-label mb-6">01 / The Problem</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 max-w-3xl leading-[0.95]">
          The Power Is There.
          <br />
          <span className="text-neutral-500">The Bridge Isn&apos;t.</span>
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl max-w-lg font-light">
          OpenClaw can automate your entire business. But getting it set up?
          That&apos;s where founders get stuck.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {painPoints.map((point, index) => (
          <motion.div
            key={point.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="gradient-border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
          >
            <span className="text-[11px] font-mono text-neutral-600 tracking-wider mb-8 block">
              {point.number}
            </span>
            <h3 className="text-xl font-semibold mb-4 text-white tracking-[-0.02em]">
              {point.title}
            </h3>
            <p className="text-neutral-500 text-[15px] leading-relaxed font-light">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
