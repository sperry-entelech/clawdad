"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import type { QualifierData } from "@/types";

interface QualifierProps {
  data: QualifierData;
}

export function Qualifier({ data }: QualifierProps) {
  return (
    <SectionWrapper id="qualifier" glow="top">
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

      {/* Industry badge pills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {data.industries.map((industry, index) => (
          <motion.span
            key={industry}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="rounded-full border border-white/[0.08] hover:border-accent/50 px-4 py-2 text-sm text-neutral-400 hover:text-white transition-all duration-300 cursor-default"
          >
            {industry}
          </motion.span>
        ))}
      </motion.div>

      {/* Criteria checklist card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="gradient-border p-8 md:p-10 max-w-2xl"
      >
        <ul className="space-y-4">
          {data.criteria.map((criterion, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-white/70 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-neutral-300 text-[15px] font-light leading-relaxed">
                {criterion.text}
              </span>
            </li>
          ))}
        </ul>

        {data.antiQualifier && (
          <p className="text-neutral-600 text-sm font-light mt-8 pt-6 border-t border-white/[0.04]">
            {data.antiQualifier}
          </p>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
