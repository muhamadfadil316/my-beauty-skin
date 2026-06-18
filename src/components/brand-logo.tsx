import { cn } from "@/lib/cn";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md";
}

export function BrandLogo({ className, showTagline = true, size = "md" }: BrandLogoProps) {
  const markSize = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const titleSize = size === "sm" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl";
  const taglineSize = size === "sm" ? "text-[10px]" : "text-[11px]";

  return (
    <div className={cn("group flex items-center gap-3", className)}>
      <div
        className={cn(
          "shine relative flex items-center justify-center rounded-2xl bg-linear-to-br from-[#9d6f78] via-[#a8757d] to-[#c79b86] text-white shadow-[0_14px_30px_rgba(157,111,120,0.32)] ring-1 ring-white/40 transition-transform duration-300 group-hover:-translate-y-0.5",
          markSize,
        )}
      >
        <span className="font-display text-sm font-bold tracking-widest sm:text-base">MBS</span>
      </div>

      <div>
        <p className={cn("font-display font-semibold text-[#221816]", titleSize)}>MyBeautySkin</p>
        {showTagline ? (
          <p className={cn("hidden uppercase tracking-[0.24em] text-[#b88a7b] sm:block", taglineSize)}>
            beauty essentials
          </p>
        ) : null}
      </div>
    </div>
  );
}