import { CALENDLY_URL } from "@/lib/data";

const offeringLinks = [
  { label: "Speed to Lead", href: "/speed-to-lead" },
  { label: "Reactivation", href: "/reactivation" },
  { label: "Outreach", href: "/outreach" },
  { label: "Ops", href: "/ops" },
];

interface FooterProps {
  minimal?: boolean;
  tagline?: string;
}

export function Footer({ minimal = false, tagline }: FooterProps) {
  return (
    <footer className="relative py-16 bg-black border-t border-white/[0.04]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="text-lg font-bold tracking-[-0.03em] text-white mb-2 block">
              Ntelech
            </a>
            <p className="text-neutral-600 text-sm font-light">
              {tagline || "systems that replace expensive hires."}
            </p>
          </div>

          {/* Links — hidden in minimal mode */}
          {!minimal && (
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Offerings */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-600 font-medium mb-3">
                  Offerings
                </p>
                <div className="flex flex-col gap-2">
                  {offeringLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-600 font-medium mb-3">
                  Navigate
                </p>
                <div className="flex flex-col gap-2">
                  <a href={CALENDLY_URL} className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/[0.04]">
          <p className="text-neutral-700 text-xs">
            &copy; {new Date().getFullYear()} Ntelech. All rights reserved.
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
