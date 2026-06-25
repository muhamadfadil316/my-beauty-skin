"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const values = [
  { icon: Sparkles, title: "Tampilan elegan", description: "Visual clean yang nyaman dijelajahi." },
  { icon: TrendingUp, title: "Struktur rapi", description: "Mudah berpindah antar kategori." },
  { icon: ShieldCheck, title: "Pilihan yang jelas", description: "Informasi produk yang cepat dipahami." },
];

export function AboutPage() {
  return (
    <div className="space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[34px] border border-[#e2ede7] bg-white p-8 shadow-[0_24px_70px_rgba(122,86,69,0.08)]">
        <SectionHeading
          eyebrow="About MyBeautySkin"
          title="Platform untuk menemukan produk yang tepat"
          description="Menjelajah produk berdasarkan kebutuhan kulit, rambut, dan rutinitas harian."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.article key={value.title} whileHover={{ y: -8 }} className="group rounded-[28px] border border-[#e2ede7] bg-[#f8faf9] p-6 transition-shadow duration-300 hover:border-[#cde0d5] hover:shadow-[0_24px_54px_rgba(122,86,69,0.14)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#688d7b] to-[#c79b86] text-white shadow-[0_10px_24px_rgba(157,111,120,0.28)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-2xl text-[#1a2b22]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5a6e62]">{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[34px] bg-[#688d7b] p-8 text-white shadow-[0_24px_70px_rgba(31,26,23,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b2d4c3]">Kenapa terasa nyaman</p>
          <h2 className="mt-4 font-display text-4xl">Pencarian produk yang cepat.</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Alur sederhana, fokus pada produk dan kebutuhan yang diprioritaskan.
          </p>
        </div>

        <div className="rounded-[34px] border border-[#e2ede7] bg-white p-8 shadow-[0_24px_70px_rgba(122,86,69,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#819c8d]">Dirancang untuk berkembang</p>
          <div className="mt-5 space-y-4 text-sm text-[#5a6e62]">
            {[
              "Katalog, kategori, dan ulasan mudah diperluas",
              "Rekomendasi yang relevan dengan kebutuhan",
              "Wishlist untuk menyimpan produk favorit",
              "Pencarian dari filter sederhana ke saran personal",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl bg-[#fff7f4] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#819c8d]" />
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
