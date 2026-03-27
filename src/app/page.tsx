"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Radial glow behind logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 48%, rgba(255,255,255,0.04), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center text-center max-w-xl w-full">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] text-white mb-8 select-none"
          style={{ textShadow: "0 0 60px rgba(255,255,255,0.06)" }}
        >
          Ntelech
        </motion.h1>

        {/* Positioning line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed mb-6 max-w-md"
        >
          We build the systems that replace the hires
          you keep making and losing.
        </motion.p>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="text-neutral-700 text-sm font-light mb-14 max-w-sm"
        >
          Operational infrastructure for service businesses.
          Productized. Deployed. Maintained.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Copyright — subtle, bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease }}
        className="absolute bottom-6 text-neutral-800 text-[11px] tracking-wide"
      >
        &copy; {new Date().getFullYear()} Ntelech LLC
      </motion.p>
    </main>
  );
}
