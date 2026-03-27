import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 tracking-[-0.02em] cursor-pointer",
  {
    variants: {
      variant: {
        accent:
          "bg-white text-black hover:bg-neutral-100 active:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
        outline:
          "bg-transparent text-white border border-white/[0.12] hover:border-white/[0.25] hover:bg-white/[0.03]",
        ghost:
          "bg-transparent text-neutral-400 hover:text-white hover:bg-white/[0.04]",
      },
      size: {
        default: "px-6 py-3 rounded-lg text-sm",
        lg: "px-8 py-4 rounded-xl text-base",
        sm: "px-4 py-2 rounded-md text-xs",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
