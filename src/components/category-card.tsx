import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  accent: string;
}

export function CategoryCard({ title, description, accent }: CategoryCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/70 bg-linear-to-br ${accent} p-6 shadow-[0_16px_50px_rgba(182,144,132,0.12)]`}
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/40 blur-3xl" />
      <div className="relative flex h-full min-h-55 flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b47b6c]">Category</p>
          <h3 className="font-display text-2xl text-[#221816]">{title}</h3>
          <p className="max-w-xs text-sm leading-7 text-[#6c5b55]">{description}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#221816] transition group-hover:translate-x-1">
          Explore collection
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
}
 
