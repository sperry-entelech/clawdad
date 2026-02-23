"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CALENDLY_URL } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated dot grid background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Amber center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(249,115,22,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-label mb-8">Done-for-you AI agent deployment</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.92] mb-6">
            We deploy the agents.
            <br />
            <span className="text-accent">You close the deals.</span>
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Pre-configured OpenClaw agent systems for your business.
            <br className="hidden md:block" />
            Setup in days, not months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={CALENDLY_URL} size="lg">
            Book Discovery Call ($150)
          </Button>
          <Button href="#agent-showcase" variant="outline" size="lg">
            Browse Agent Configs
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
