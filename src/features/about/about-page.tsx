"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const values = [
  { icon: Sparkles, title: "Tampilan elegan", description: "Nuansa visual yang clean agar produk terasa lebih nyaman dijelajahi." },
  { icon: TrendingUp, title: "Struktur rapi", description: "Susunan halaman dibuat agar pengguna mudah berpindah dari satu kategori ke kategori lain." },
  { icon: ShieldCheck, title: "Pilihan yang jelas", description: "Informasi produk disusun untuk membantu pengguna memahami kecocokan dengan cepat." },
];

export function AboutPage() {
  return (
    <div className="space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[34px] border border-[#efe4de] bg-white p-8 shadow-[0_24px_70px_rgba(122,86,69,0.08)]">
        <SectionHeading
          eyebrow="About MyBeautySkin"
          title="Platform untuk menemukan produk yang tepat"
          description="MyBeautySkin membantu pengguna menjelajah produk berdasarkan kebutuhan kulit, rambut, dan rutinitas harian dengan tampilan yang mudah dipahami."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.article key={value.title} whileHover={{ y: -8 }} className="group rounded-[28px] border border-[#efe4de] bg-[#fffaf8] p-6 transition-shadow duration-300 hover:border-[#e4cfc6] hover:shadow-[0_24px_54px_rgba(122,86,69,0.14)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#9d6f78] to-[#c79b86] text-white shadow-[0_10px_24px_rgba(157,111,120,0.28)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-2xl text-[#221816]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f5b54]">{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[34px] bg-[#1f1a17] p-8 text-white shadow-[0_24px_70px_rgba(31,26,23,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c6b6]">Kenapa halaman ini terasa nyaman</p>
          <h2 className="mt-4 font-display text-4xl">Informasi produk disusun agar pencarian terasa cepat dan tidak membingungkan.</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Konten disajikan dengan alur yang sederhana supaya pengguna bisa fokus pada produk, kategori, dan kebutuhan yang ingin diprioritaskan.
          </p>
        </div>

        <div className="rounded-[34px] border border-[#efe4de] bg-white p-8 shadow-[0_24px_70px_rgba(122,86,69,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b37e6e]">Dirancang untuk berkembang</p>
          <div className="mt-5 space-y-4 text-sm text-[#6f5b54]">
            {[
              "Katalog produk, kategori, dan ulasan disusun agar mudah diperluas",
              "Alur rekomendasi dibuat supaya hasil yang tampil lebih relevan dengan kebutuhan",
              "Wishlist dapat dipakai untuk menyimpan produk favorit",
              "Pencarian produk bisa berkembang dari filter sederhana ke saran yang lebih personal",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl bg-[#fff7f4] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b37e6e]" />
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
