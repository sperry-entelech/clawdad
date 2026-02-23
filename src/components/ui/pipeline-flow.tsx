"use client";

import { motion } from "framer-motion";

interface PipelineFlowProps {
  steps: string[];
  featured?: boolean;
}

export function PipelineFlow({ steps, featured }: PipelineFlowProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-1.5">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`rounded-full px-3 py-1 text-xs font-medium border ${
              featured
                ? "bg-accent-muted border-accent/20 text-accent-light"
                : "bg-white/[0.04] border-white/[0.06] text-neutral-400"
            }`}
          >
            {step}
          </motion.span>
          {index < steps.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.08 + 0.1 }}
              className={`text-xs ${featured ? "text-accent/40" : "text-neutral-700"}`}
            >
              →
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}
