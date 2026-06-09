"use client";

import { motion } from "framer-motion";
import { CategoryCard } from "@/components/category-card";

interface CategoryGridProps {
  categories: Array<{
    title: string;
    description: string;
    accent: string;
    slug: string;
  }>;
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.slug}
          title={category.title}
          description={category.description}
          accent={category.accent}
        />
      ))}
    </motion.div>
  );
}
