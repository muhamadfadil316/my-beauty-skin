import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
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
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#efe4de] bg-white shadow-[0_18px_40px_rgba(122,86,69,0.08)] transition duration-300 hover:border-[#e4cfc6] hover:shadow-[0_30px_70px_rgba(122,86,69,0.18)]"
      >
        <div className="relative overflow-hidden bg-linear-to-br from-[#f9ece8] via-[#fff8f6] to-[#f8efe6] p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_48%)]" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f3d4c8]/40 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
          <div className="relative flex aspect-4/3 items-center justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[0_18px_40px_rgba(120,77,61,0.12)] transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-1">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, 260px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          {product.bestSeller ? (
            <span className="absolute left-4 top-4 rounded-full bg-linear-to-r from-[#9d6f78] to-[#bb868e] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_20px_rgba(157,111,120,0.35)]">
              Bestseller
            </span>
          ) : null}
          {product.featured && !product.bestSeller ? (
            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9d6f78] shadow-sm backdrop-blur-sm">
              Pilihan
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
                <h3 className={`font-display text-xl text-[#8b5a62] transition-colors group-hover:text-[#7a4d54] ${compact ? "line-clamp-1" : ""}`}>
                  {product.name}
                </h3>
                <p className="text-sm text-[#7b6962]">{product.brand}</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[#fff2ec] px-3 py-1 text-xs font-semibold text-[#8b5d51] ring-1 ring-[#f6ddd3]">
                <Star className="h-3.5 w-3.5 fill-current text-[#e0a04f]" />
                {product.rating.toFixed(1)}
              </div>
            </div>
          </div>

          <p className="line-clamp-3 text-sm leading-7 text-[#6f5b54]">{product.description}</p>

          <div className="mt-auto flex items-center justify-between border-t border-[#f3e7e1] pt-4">
            <span className="text-lg font-semibold text-[#8b5a62]">
              {formatPrice(product.price)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faf4f1] px-3 py-1.5 text-xs font-semibold text-[#8a7169] transition-all duration-300 group-hover:gap-2.5 group-hover:bg-[#9d6f78] group-hover:text-white">
              Lihat detail
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
