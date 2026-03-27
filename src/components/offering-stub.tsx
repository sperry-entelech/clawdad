"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface OfferingStubProps {
  label: string;
  headline: string;
  description: string;
  replaces: string;
}

export function OfferingStub({ label, headline, description, replaces }: OfferingStubProps) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(255,255,255,0.03), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center text-center max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-6">
            {label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
            {headline}
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed mb-4 max-w-xl mx-auto">
            {description}
          </p>
          <p className="text-neutral-700 text-sm font-light mb-12">
            replaces: {replaces}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-neutral-100 transition-all duration-300"
          >
            Book a Call
          </a>
          <a
            href="/"
            className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            &larr; back to Ntelech
          </a>
        </motion.div>
      </div>
    </main>
  );
}
