import { CALENDLY_URL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative py-16 bg-black border-t border-white/[0.04]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-[-0.03em] text-white mb-2">
              clawdad
            </p>
            <p className="text-neutral-600 text-sm font-light">
              Done-for-you AI agent deployment.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#agent-showcase"
              className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Configs
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Process
            </a>
            <a
              href="#faq"
              className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href={CALENDLY_URL}
              className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/[0.04]">
          <p className="text-neutral-700 text-xs">
            &copy; {new Date().getFullYear()} Clawdad. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-neutral-700 hover:text-neutral-500 transition-colors text-xs"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-neutral-700 hover:text-neutral-500 transition-colors text-xs"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
