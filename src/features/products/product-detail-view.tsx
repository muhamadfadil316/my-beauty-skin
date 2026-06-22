"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Sparkles, Heart, Check, Star } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";
import { LinkButton, Button } from "@/components/ui/button";
import { ProductGrid } from "@/features/products/product-grid";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const [wishlist, setWishlist] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="overflow-hidden rounded-[34px] border border-[#e2ede7] bg-white p-6 shadow-[0_24px_70px_rgba(122,86,69,0.12)]"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-[#eaf2ee] via-white to-[#e2ede7] p-8">
            <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-white/70 blur-3xl" />
            <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-[#cce4d8]/60 blur-3xl" />
            <div className="relative mx-auto flex min-h-140 max-w-md items-center justify-center rounded-[30px] border border-white/70 bg-white/60 p-8">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-3xl object-cover shadow-beauty"
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 rounded-[34px] border border-[#e2ede7] bg-white p-7 shadow-[0_24px_70px_rgba(122,86,69,0.08)]"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">
              <Sparkles className="h-4 w-4" />
              {product.category}
            </div>
            <h1 className="font-display text-4xl text-gradient md:text-5xl">{product.name}</h1>
            <p className="text-sm uppercase tracking-[0.24em] text-[#6b7e73]">{product.brand}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ebf4ef] px-4 py-2 font-semibold text-[#60796b] ring-1 ring-[#dae8e0]">
              <Star className="h-4 w-4 fill-current text-[#e0a04f]" />
              {product.rating.toFixed(1)} rating
            </span>
            <span className="rounded-full bg-linear-to-r from-[#688d7b] to-[#8fb8a2] px-4 py-2 font-semibold text-white shadow-[0_8px_20px_rgba(157,111,120,0.28)]">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-base leading-8 text-[#5a6e62]">{product.description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#f2f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Skin Type</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.skinType.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-[#5a6e62]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[#f2f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Concern</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.concern.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-[#5a6e62]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-[#e2ede7] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Ingredients</p>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((item) => (
                <span key={item} className="rounded-full bg-[#eaf2ee] px-3 py-1 text-sm text-[#5a6e62]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#e2ede7] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Usage</p>
            <p className="mt-3 text-sm leading-7 text-[#5a6e62]">{product.usage}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="button" onClick={() => setWishlist((value) => !value)} className="min-w-40">
              <Heart className={`h-4 w-4 ${wishlist ? "fill-current" : ""}`} />
              {wishlist ? "Saved to Wishlist" : "Wishlist"}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setShared((value) => !value)} className="min-w-40">
              {shared ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              {shared ? "Link Copied" : "Share"}
            </Button>
            <LinkButton href="/products" variant="ghost" className="min-w-40">
              Back to Products
            </LinkButton>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-4 sm:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Related Products</p>
            <h2 className="font-display text-3xl text-gradient">Products with similar concern</h2>
          </div>
        </div>
        <ProductGrid products={relatedProducts} compact />
      </section>
    </div>
  );
}
