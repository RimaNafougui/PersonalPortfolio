import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-bold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-cartier/10 text-cartier border border-cartier/20 hover:bg-cartier hover:text-almond hover:border-cartier",
        secondary:
          "bg-gold/10 text-coffee/50 border border-gold/20",
        outline:
          "border border-gold/30 text-coffee/60 bg-transparent",
        solid:
          "bg-cartier text-almond border border-cartier",
      },
      size: {
        default: "text-[10px] px-2.5 py-0.5 rounded-full h-5",
        sm:      "text-[9px] px-2 py-0 rounded-full h-5",
        lg:      "text-xs px-3 py-1 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
