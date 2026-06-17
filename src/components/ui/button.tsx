"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variantMap: Record<Variant, string> = {
  primary:
    "bg-[#9d6f78] text-white shadow-[0_12px_30px_rgba(157,111,120,0.16)] hover:-translate-y-0.5 hover:bg-[#b9858d]",
  secondary:
    "bg-white text-[#9d6f78] border border-[#eadfd9] shadow-sm hover:-translate-y-0.5 hover:border-[#d9c8bf]",
  ghost: "bg-transparent text-[#9d6f78] hover:bg-[#f9f2ef]",
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
