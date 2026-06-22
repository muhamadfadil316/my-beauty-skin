"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Grid3X3 } from "lucide-react";
import { mockProducts } from "@/data/mock-products";
import { filterProducts } from "@/utils/filter-products";
import { useDebounce } from "@/hooks/use-debounce";
import { SectionHeading } from "@/components/section-heading";
import { ProductFiltersPanel } from "@/features/products/product-filters";
import { ProductGrid } from "@/features/products/product-grid";
import type { ProductSortOption } from "@/types/product";

const categories = Array.from(new Set(mockProducts.map((product) => product.category)));
const skinTypes = Array.from(new Set(mockProducts.flatMap((product) => product.skinType)));
const concerns = Array.from(new Set(mockProducts.flatMap((product) => product.concern)));

export function ProductListingPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [skinType, setSkinType] = useState("");
  const [concern, setConcern] = useState("");
  const [sortBy, setSortBy] = useState<ProductSortOption>("featured");

  const debouncedQuery = useDebounce(query, 150);

  const products = useMemo(
    () =>
      filterProducts(mockProducts, {
        query: debouncedQuery,
        category,
        skinType,
        concern,
          sortBy,
      }),
    [debouncedQuery, category, skinType, concern, sortBy],
  );

  return (
    <div className="space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[34px] border border-[#e2ede7] bg-white p-6 shadow-[0_24px_70px_rgba(122,86,69,0.08)]">
          <SectionHeading
            eyebrow="Daftar produk"
            title="Jelajahi produk pilihan"
            description="Gunakan pencarian, kategori, jenis kulit, kebutuhan, dan urutan untuk menemukan produk yang paling relevan."
          />
        </div>

        <ProductFiltersPanel
          query={query}
          category={category}
          skinType={skinType}
          concern={concern}
          sortBy={sortBy}
          categories={categories}
          skinTypes={skinTypes}
          concerns={concerns}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          onSkinTypeChange={setSkinType}
          onConcernChange={setConcern}
          onSortChange={setSortBy}
          onReset={() => {
            setQuery("");
            setCategory("");
            setSkinType("");
            setConcern("");
            setSortBy("featured");
          }}
        />
      </section>

      <section className="mx-auto max-w-7xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-[#5a6e62]">
            <Grid3X3 className="h-5 w-5" />
            <span className="text-sm font-medium">{products.length} produk ditemukan</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#819c8d] shadow-sm">
            <Filter className="h-4 w-4" />
            Filter produk
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ProductGrid products={products} compact />
        </motion.div>
      </section>
    </div>
  );
}
