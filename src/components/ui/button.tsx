import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center gap-3 rounded-lg px-6 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        variant === "primary"
          ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-[0_0_32px_rgba(124,60,255,0.42)] hover:shadow-[0_0_44px_rgba(0,229,255,0.35)]"
          : "border border-white/15 bg-white/[0.03] text-white hover:border-cyan-300/60 hover:bg-cyan-300/10",
        className,
      )}
      {...props}
    />
  );
}
