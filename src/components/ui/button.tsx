import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(
          `
        w-auto
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        hover:opacity-75
        transition
        inline-flex items-center justify-center
        gap-x-2
    `,
          className,
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
