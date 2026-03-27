"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface VentureStubProps {
  name: string;
  tagline: string;
  description: string;
  githubUrl?: string;
}

export function VentureStub({ name, tagline, description, githubUrl }: VentureStubProps) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 50%, rgba(255,255,255,0.03), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center text-center max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-3">
            {name}
          </h1>
          <p className="text-neutral-500 text-sm tracking-wide font-light">
            {tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="gradient-border p-8 md:p-10 max-w-lg w-full mb-10"
        >
          <p className="text-neutral-400 text-[15px] leading-relaxed font-light text-left">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-transparent text-white border border-white/[0.12] hover:border-white/[0.25] hover:bg-white/[0.03] transition-all duration-300"
            >
              View on GitHub
            </a>
          )}
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-neutral-100 transition-all duration-300"
          >
            Partner With Us
          </a>
        </motion.div>

        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease }}
          className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
        >
          &larr; back to Ntelech
        </motion.a>
      </div>
    </main>
  );
}
