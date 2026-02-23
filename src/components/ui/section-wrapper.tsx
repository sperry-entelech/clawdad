import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  glow?: "top" | "center" | "accent" | "accent-top" | "none";
}

export function SectionWrapper({
  id,
  children,
  className,
  glow = "top",
}: SectionWrapperProps) {
  const glowClass = {
    top: "glow-top",
    center: "glow-center",
    accent: "glow-accent",
    "accent-top": "glow-accent-top",
    none: "",
  }[glow];

  return (
    <section id={id} className={cn("relative py-24 md:py-36 bg-black", className)}>
      {glow !== "none" && (
        <div className={cn("absolute inset-0 pointer-events-none", glowClass)} />
      )}
      <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
