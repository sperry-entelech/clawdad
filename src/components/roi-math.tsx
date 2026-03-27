"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import type { RoiMathData } from "@/types";

interface RoiMathProps {
  data: RoiMathData;
}

export function RoiMath({ data }: RoiMathProps) {
  return (
    <SectionWrapper id="roi-math" glow="accent">
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

      {/* Cascade grid: 4-col on desktop, vertical on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 items-center">
        {data.steps.map((step, index) => (
          <div key={index} className="contents">
            {/* Connector arrow (between cards, not before the first) */}
            {index > 0 && (
              <div className="flex items-center justify-center md:hidden py-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-accent/40"
                >
                  <path
                    d="M10 4L10 16M10 16L5 11M10 16L15 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="gradient-border-accent p-6 md:p-8 text-center transition-all duration-500 hover:-translate-y-1"
            >
              <p className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-2">
                {step.value}
              </p>
              <p className="text-neutral-500 text-sm font-light mb-1">
                {step.label}
              </p>
              {step.annotation && (
                <p className="text-accent/60 text-xs font-light">
                  {step.annotation}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Desktop connector arrows (overlay) */}
      <div className="hidden md:flex justify-between items-center px-[calc(25%-24px)] -mt-[88px] mb-[52px] pointer-events-none">
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-accent/40"
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      {/* Bottom line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-accent text-center text-lg md:text-xl font-medium mt-10 md:mt-12 max-w-2xl mx-auto"
      >
        {data.bottomLine}
      </motion.p>
    </SectionWrapper>
  );
}
