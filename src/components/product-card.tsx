import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <motion.article whileHover={{ y: -8 }} className="h-full">
      <Link
        href={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#efe4de] bg-white shadow-[0_18px_40px_rgba(122,86,69,0.08)] transition duration-300 hover:shadow-[0_24px_60px_rgba(122,86,69,0.14)]"
      >
        <div className="relative overflow-hidden bg-linear-to-br from-[#f9ece8] via-[#fff8f6] to-[#f8efe6] p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_45%)]" />
          <div className="relative flex aspect-4/3 items-center justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[0_18px_40px_rgba(120,77,61,0.12)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, 260px"
                className="object-cover"
              />
            </div>
          </div>
          {product.bestSeller ? (
            <span className="absolute left-4 top-4 rounded-full bg-[#1f1a17] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              Bestseller
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b88a7b]">
              {product.category}
            </p>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className={`font-display text-xl text-[#221816] ${compact ? "line-clamp-1" : ""}`}>
                  {product.name}
                </h3>
                <p className="text-sm text-[#7b6962]">{product.brand}</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[#fff2ec] px-3 py-1 text-xs font-semibold text-[#8b5d51]">
                <Star className="h-3.5 w-3.5 fill-current" />
                {product.rating.toFixed(1)}
              </div>
            </div>
          </div>

          <p className="line-clamp-3 text-sm leading-7 text-[#6f5b54]">{product.description}</p>

          <div className="mt-auto flex items-center justify-between border-t border-[#f3e7e1] pt-4">
            <span className="text-lg font-semibold text-[#221816]">
              {formatPrice(product.price)}
            </span>
            <span className="rounded-full bg-[#faf4f1] px-3 py-1 text-xs font-medium text-[#8a7169] transition group-hover:bg-[#f5e7e1]">
              View detail
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
