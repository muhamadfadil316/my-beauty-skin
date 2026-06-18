"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function   ContactPage() {
  return (
    <div className="space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[34px] border border-[#efe4de] bg-white p-8 shadow-[0_24px_70px_rgba(122,86,69,0.08)]">
        <SectionHeading
          eyebrow="Contact"
          title="Hubungi MyBeautySkin"
          description="Punya pertanyaan soal produk, kategori, atau rekomendasi? Kirim pesan melalui form ini."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form whileHover={{ y: -2 }} className="space-y-4 rounded-[30px] bg-[#fffaf8] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-[#eadfd9] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d6b7ab] focus:ring-2 focus:ring-[#f2d6cd]" placeholder="Nama Anda" />
              <input className="rounded-2xl border border-[#eadfd9] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d6b7ab] focus:ring-2 focus:ring-[#f2d6cd]" placeholder="Alamat email" />
            </div>
            <input className="w-full rounded-2xl border border-[#eadfd9] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d6b7ab] focus:ring-2 focus:ring-[#f2d6cd]" placeholder="Topik pesan" />
            <textarea rows={6} className="w-full rounded-2xl border border-[#eadfd9] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d6b7ab] focus:ring-2 focus:ring-[#f2d6cd]" placeholder="Tulis pesan Anda" />
            <Button type="button" className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              Kirim Pesan
            </Button>
          </motion.form>

          <div className="space-y-5">
            <div className="rounded-[30px] border border-[#efe4de] bg-[#fffaf8] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b37e6e]">Media sosial</p>
              <div className="mt-4 flex flex-wrap gap-3 text-[#6f5b54]">
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#eadfd9] bg-white px-4 py-2 transition hover:text-[#221816]"><Instagram className="h-4 w-4" />Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#eadfd9] bg-white px-4 py-2 transition hover:text-[#221816]"><Facebook className="h-4 w-4" />Facebook</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#eadfd9] bg-white px-4 py-2 transition hover:text-[#221816]"><Youtube className="h-4 w-4" />YouTube</a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-[30px] border border-[#efe4de] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e4cfc6] hover:shadow-[0_20px_44px_rgba(122,86,69,0.12)]">
                <Mail className="h-6 w-6 text-[#b37e6e] transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#b37e6e]">Email</p>
                <p className="mt-2 text-sm text-[#6f5b54]">mybeautyskin@gmail.com</p>
              </div>
              <div className="group rounded-[30px] border border-[#efe4de] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e4cfc6] hover:shadow-[0_20px_44px_rgba(122,86,69,0.12)]">
                <Phone className="h-6 w-6 text-[#b37e6e] transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#b37e6e]">Telepon</p>
                <p className="mt-2 text-sm text-[#6f5b54]">+62 000 0000 000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
