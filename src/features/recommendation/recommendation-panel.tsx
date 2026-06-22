"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, WandSparkles } from "lucide-react";
import { getRecommendationByQuery } from "@/services/recommendation.service";
import { useDebounce } from "@/hooks/use-debounce";
import { Button, LinkButton } from "@/components/ui/button";
import { ProductGrid } from "@/features/products/product-grid";

const examples = ["kulit berjerawat", "kulit kering", "kulit sensitif", "rambut rontok"];

export function RecommendationPanel() {
  const [query, setQuery] = useState("kulit berjerawat");
  const debouncedQuery = useDebounce(query, 150);

  const result = useMemo(() => getRecommendationByQuery(debouncedQuery), [debouncedQuery]);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[34px] border border-[#e2ede7] bg-white p-6 shadow-[0_24px_70px_rgba(122,86,69,0.08)]"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[28px] bg-linear-to-br from-[#e3ede7] via-white to-[#f0f6f3] p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d] shadow-sm">
              <WandSparkles className="h-4 w-4" />
              Pencarian Rekomendasi
            </div>
            <h1 className="font-display text-4xl text-gradient md:text-5xl">Temukan produk berdasarkan kebutuhan Anda</h1>
            <p className="max-w-xl text-sm leading-7 text-[#5a6e62]">
              Masukkan kondisi atau kebutuhan yang ingin Anda prioritaskan, lalu lihat produk yang paling relevan untuk rutinitas harian.
            </p>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Kebutuhan</span>
              <div className="flex gap-3 rounded-[22px] border border-[#dae8e0] bg-white p-2 shadow-sm">
                <Search className="ml-3 mt-3 h-5 w-5 text-[#819c8d]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full bg-transparent px-1 py-3 text-sm outline-none"
                  placeholder="Contoh: kulit berjerawat, kulit kering, rambut rontok"
                />
              </div>
            </label>

            <div className="flex flex-wrap gap-2">
              {examples.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setQuery(example)}
                  className="rounded-full border border-[#dae8e0] bg-white px-4 py-2 text-sm text-[#5a6e62] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b0cbbd] hover:bg-[#f0f6f3] hover:text-[#4c6b5b] hover:shadow-sm"
                >
                  {example}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="button" onClick={() => setQuery("kulit berjerawat")}>Coba jerawat</Button>
              <Button type="button" variant="secondary" onClick={() => setQuery("kulit kering")}>Coba hidrasi</Button>
              <LinkButton href="/products" variant="ghost">Jelajahi produk</LinkButton>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#e2ede7] bg-[#f6f9f7] p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#819c8d]">
                <Sparkles className="h-4 w-4" />
                Result
              </div>
              <h2 className="mt-3 font-display text-3xl text-gradient">{result.label}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5a6e62]">{result.reason}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {result.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#60796b] shadow-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e2ede7] bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#819c8d]">Produk yang cocok</p>
              <p className="mt-2 text-sm text-[#5a6e62]">Produk yang sesuai akan muncul di sini berdasarkan kata kunci yang Anda pilih.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="space-y-5">
        <ProductGrid products={result.products} compact />
      </section>
    </div>
  );
}
