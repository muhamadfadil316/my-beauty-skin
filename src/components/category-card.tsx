import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flower2, Sparkles, Wind, type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  accent: string;
}

const iconMap: Record<string, LucideIcon> = {
  Skincare: Droplets,
  Bodycare: Flower2,
  Haircare: Wind,
  Makeup: Sparkles,
};

export function CategoryCard({ title, description, accent }: CategoryCardProps) {
  const Icon = iconMap[title] ?? Sparkles;

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/70 bg-linear-to-br ${accent} p-6 shadow-[0_16px_50px_rgba(182,144,132,0.14)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(182,144,132,0.26)]`}
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/40 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/55" />
      <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
      <div className="relative flex h-full min-h-55 flex-col justify-between">
        <div className="space-y-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#688d7b] shadow-[0_10px_24px_rgba(157,111,120,0.18)] ring-1 ring-white/60 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
            <Icon className="h-6 w-6" />
          </span>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b47b6c]">Category</p>
            <h3 className="font-display text-2xl text-[#1a2b22]">{title}</h3>
            <p className="max-w-xs text-sm leading-7 text-[#6c5b55]">{description}</p>
          </div>
        </div>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2b22] transition-all duration-300 group-hover:gap-3">
          Explore collection
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/70 shadow-sm transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
