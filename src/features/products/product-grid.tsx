"use client";

import { motion } from "framer-motion";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product-card";

interface ProductGridProps {
  products: Product[];
  compact?: boolean;
}

export function ProductGrid({ products, compact = false }: ProductGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.05 } },
      }}
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact={compact} />
      ))}
    </motion.div>
  );
}
