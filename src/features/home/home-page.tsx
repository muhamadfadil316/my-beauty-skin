"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Plus, Sparkles } from "lucide-react";
import { LinkButton, Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { mockCategories, mockFaqs, mockProducts, mockTestimonials } from "@/data/mock-products";
import { CategoryGrid } from "@/features/categories/category-grid";
import { ProductGrid } from "@/features/products/product-grid";
import { TestimonialCard } from "@/components/testimonial-card";

const heroStats = [
  { label: "Produk terkurasi", value: "30+" },
  { label: "Pola rekomendasi", value: "4" },
  { label: "Kategori utama", value: "4" },
];

const promises = [
  "Pilihan produk yang jelas",
  "Panduan sesuai kebutuhan",
  "Siap berkembang bersama katalog",
];

const featuredProducts = mockProducts.filter((product) => product.featured).slice(0, 8);

export function HomePage() {
  return (
    <div className="space-y-16 px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#eadfd9] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#b37e6e] shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d6a8a0] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9d6f78]" />
            </span>
            <Sparkles className="h-4 w-4" />
            Temukan produk yang pas
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              <span className="text-[#8b5a62]">Temukan produk yang cocok untuk </span>
              <span className="text-gradient">kulit dan rambut</span>
              <span className="text-[#8b5a62]"> Anda.</span>
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[#6f5b54] sm:text-base md:text-lg">
              MyBeautySkin membantu Anda memilih produk berdasarkan kebutuhan dan rutinitas harian.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <LinkButton href="/recommendation" className="min-w-47.5">
              Cari Rekomendasi
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="/products" variant="secondary" className="min-w-40">
              Lihat Produk
            </LinkButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-[26px] border border-[#efe4de] bg-white/85 p-5 shadow-[0_14px_30px_rgba(122,86,69,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e4cfc6] hover:shadow-[0_22px_46px_rgba(122,86,69,0.16)]">
                <p className="font-display text-2xl text-gradient sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-[#6f5b54]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {promises.map((promise) => (
              <span key={promise} className="inline-flex items-center gap-2 rounded-full border border-[#eadfd9] bg-white px-4 py-2 text-sm text-[#6f5b54] shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-[#b37e6e]" />
                {promise}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(246,213,203,0.45),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,248,245,0.75))] blur-0" />
          <div className="beauty-grid relative overflow-hidden rounded-[40px] border border-white/70 bg-white/65 p-6 shadow-[0_28px_80px_rgba(122,86,69,0.14)] backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[34px] border border-[#efe4de] bg-linear-to-br from-[#fffdfc] via-[#fff8f4] to-[#f7ebe4] p-8 shadow-[0_18px_40px_rgba(122,86,69,0.08)]">
              <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-[#f1ddd3]/45 blur-3xl" />
              <div className="absolute -bottom-14 right-2 h-44 w-44 rounded-full bg-[#e8cfc2]/45 blur-3xl" />

              <div className="relative max-w-sm space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c6b6]">Kebutuhan produk</p>
                <h2 className="font-display text-3xl leading-tight text-[#221816] sm:text-4xl">Pilihan tepat, kulit nyaman.</h2>
                
              </div>

              <div className="relative mt-10 flex items-end justify-center gap-4">
                <div className="animate-float-delayed h-28 w-24 rounded-[28px] border border-white/80 bg-white/85 shadow-[0_18px_36px_rgba(122,86,69,0.1)]" />
                <div className="animate-float h-40 w-28 rounded-[34px] border border-white/90 bg-white/92 shadow-[0_22px_46px_rgba(122,86,69,0.12)]">
                  <div className="mx-auto mt-3 h-6 w-16 rounded-full bg-linear-to-r from-[#9d6f78] to-[#bb868e]" />
                  <div className="mx-auto mt-8 h-2 w-12 rounded-full bg-[#e6c9bd]" />
                  <div className="mx-auto mt-2 h-2 w-14 rounded-full bg-[#e6c9bd]" />
                  <div className="mx-auto mt-10 h-6 w-12 rounded-full bg-[#f1ddd3]" />
                </div>
                <div className="animate-float-slow h-24 w-20 rounded-3xl border border-white/75 bg-white/75 shadow-[0_14px_30px_rgba(122,86,69,0.08)]" />
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5d51]">
                <span className="rounded-full bg-white/85 px-3 py-2 shadow-sm">Minimal</span>
                <span className="rounded-full bg-white/85 px-3 py-2 shadow-sm">Calm</span>
                <span className="rounded-full bg-white/85 px-3 py-2 shadow-sm">Curated</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6">
        <SectionHeading
          eyebrow="Kategori"
          title="Jelajahi berdasarkan kategori"
          description="Empat kategori utama untuk membantu pengguna menemukan produk yang sesuai dengan rutinitas kecantikan mereka."
        />
        <CategoryGrid categories={mockCategories} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6">
        <SectionHeading
          eyebrow="Produk populer"
          title="8 produk pilihan"
          description="Pilihan produk yang membantu memperlihatkan katalog dan nuansa penjelajahan beauty yang rapi."
          action={<LinkButton href="/products" variant="secondary">Lihat semua produk</LinkButton>}
        />
        <ProductGrid products={mockProducts.slice(0, 8)} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6">
        <SectionHeading
          eyebrow="Produk unggulan"
          title="Disorot untuk eksplorasi"
          description="Koleksi yang dipilih untuk membantu pengguna menemukan produk yang paling relevan dengan kebutuhan mereka."
        />
        <ProductGrid products={featuredProducts} compact />
      </section>

      <section className="mx-auto max-w-7xl space-y-6">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya oleh pengguna"
          description="Kutipan singkat dari sudut pandang pengguna yang ingin menemukan produk yang pas."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {mockTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan umum"
          description="Pertanyaan yang sering muncul saat memilih dan membandingkan produk kecantikan."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {mockFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-[28px] border border-[#efe4de] bg-white p-6 shadow-[0_18px_40px_rgba(122,86,69,0.08)] transition-all duration-300 hover:border-[#e4cfc6] hover:shadow-[0_24px_54px_rgba(122,86,69,0.14)] open:bg-[#fffaf8]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#8b5a62]">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-[#b37e6e] transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#6f5b54]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] border border-[#efe4de] bg-linear-to-br from-[#9d6f78] via-[#aa7a82] to-[#b9858d] px-6 py-10 text-white shadow-[0_28px_70px_rgba(157,111,120,0.22)] sm:px-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#f3cfc0]/25 blur-3xl" />
          <div className="beauty-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbe4da] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Info produk
              </p>
              <h2 className="font-display text-4xl">Dapatkan inspirasi produk dan tips perawatan terbaru.</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/75">
                Masukkan email Anda untuk mendapatkan rekomendasi produk, dan tips perawatan dari MyBeautySkin.
              </p>
            </div>
            <div className="min-w-0 rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-[0_18px_40px_rgba(80,50,52,0.2)] backdrop-blur-sm sm:min-w-105">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-white/40 focus:bg-white/15" placeholder="Alamat email" />
                <Button type="button" className="bg-[#fff6f1] text-[#8b5a62] hover:bg-white">Gabung</Button>
              </div>
              <p className="mt-3 px-1 text-xs text-white/60">Tanpa spam. Berhenti berlangganan kapan saja.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
