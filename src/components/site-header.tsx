"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/recommendation", label: "Rekomendasi" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#efe4de] bg-white/80 shadow-[0_10px_30px_rgba(122,86,69,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#efe4de] bg-white p-1 shadow-[0_8px_24px_rgba(122,86,69,0.06)] lg:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-linear-to-r from-[#9d6f78] to-[#b9858d] text-white shadow-[0_8px_20px_rgba(157,111,120,0.3)]"
                    : "text-[#6f5b54] hover:bg-[#f8f1ed] hover:text-[#8b5a62]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/recommendation"
            className="shine flex items-center gap-2 rounded-full bg-linear-to-br from-[#9d6f78] to-[#bb868e] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(157,111,120,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(157,111,120,0.4)]"
          >
            <Search className="h-4 w-4" />
            Cari Rekomendasi
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#efe4de] bg-white text-[#8b5a62] shadow-sm lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`border-t border-[#efe4de] bg-white/95 px-4 py-4 lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:px-2">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-linear-to-r from-[#9d6f78] to-[#b9858d] text-white shadow-sm"
                    : "text-[#6f5b54] hover:bg-[#f8f1ed]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
