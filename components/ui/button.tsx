import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-papaya/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-papaya text-white shadow-[0_14px_30px_rgba(255,106,0,0.28)] hover:-translate-y-0.5 hover:bg-[#ff7c24]",
        secondary:
          "border border-charcoal/10 bg-white text-charcoal hover:-translate-y-0.5 hover:border-charcoal/20 hover:bg-charcoal/[0.03]",
        dark:
          "bg-white text-soft-black hover:-translate-y-0.5 hover:bg-white/90"
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-7 text-[15px]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
