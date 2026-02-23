"use client";

import { motion } from "framer-motion";
import { proofPoints } from "@/lib/data";

export function ProofPoints() {
  return (
    <section className="relative py-16 md:py-20 bg-black border-y border-white/[0.04]">
      <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-bold text-white tracking-[-0.03em] mb-1">
                {point.metric}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 font-medium">
                {point.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
