"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import type { ProblemData } from "@/types";

interface ProblemProps {
  data: ProblemData;
}

export function Problem({ data }: ProblemProps) {
  return (
    <SectionWrapper id="problem" glow="top">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-20"
      >
        <p className="section-label mb-6">{data.sectionLabel}</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 max-w-3xl leading-[0.95]">
          {data.headlineWhite}
          <br />
          <span className="text-neutral-500">{data.headlineGray}</span>
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl max-w-lg font-light">
          {data.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.painPoints.map((point, index) => (
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
