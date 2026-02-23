"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CALENDLY_URL } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-[-0.03em] text-white">
          clawdad
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#agent-showcase" className="text-sm text-neutral-500 hover:text-white transition-colors">
            Configs
          </a>
          <a href="#how-it-works" className="text-sm text-neutral-500 hover:text-white transition-colors">
            Process
          </a>
          <a href="#faq" className="text-sm text-neutral-500 hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        <Button href={CALENDLY_URL} size="sm">
          Book Discovery Call
        </Button>
      </div>
    </motion.nav>
  );
}
