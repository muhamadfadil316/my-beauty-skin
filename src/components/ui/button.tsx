"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a2c9b6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf9]";

const variantMap: Record<Variant, string> = {
  primary:
    "shine bg-linear-to-br from-[#688d7b] via-[#a8757d] to-[#8fb8a2] text-white shadow-[0_14px_34px_rgba(157,111,120,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(157,111,120,0.38)]",
  secondary:
    "bg-white/85 text-[#688d7b] border border-[#dae8e0] shadow-[0_8px_22px_rgba(122,86,69,0.08)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-[#d9c8bf] hover:bg-white",
  ghost: "bg-transparent text-[#688d7b] hover:bg-[#f9f2ef]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variantMap[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
}

export function LinkButton({ href, variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variantMap[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export default Button;
