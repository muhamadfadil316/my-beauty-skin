import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const footerLinks = [
  { href: "/products", label: "Produk" },
  { href: "/recommendation", label: "Rekomendasi" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[#e2ede7] bg-white/70 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#b0cbbd] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <BrandLogo size="sm" />
          <p className="max-w-md text-sm leading-7 text-[#5a6e62]">
            Tempat menjelajah produk kecantikan untuk kulit, rambut, dan rutinitas harian dengan tampilan yang rapi dan mudah digunakan.
          </p>
          <div className="flex items-center gap-3 text-[#7a5e56]">
            <a aria-label="Instagram" href="#" className="rounded-full border border-[#e2ede7] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-linear-to-br hover:from-[#688d7b] hover:to-[#8fb8a2] hover:text-white hover:shadow-[0_10px_24px_rgba(157,111,120,0.32)]">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" href="#" className="rounded-full border border-[#e2ede7] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-linear-to-br hover:from-[#688d7b] hover:to-[#8fb8a2] hover:text-white hover:shadow-[0_10px_24px_rgba(157,111,120,0.32)]">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Youtube" href="#" className="rounded-full border border-[#e2ede7] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-linear-to-br hover:from-[#688d7b] hover:to-[#8fb8a2] hover:text-white hover:shadow-[0_10px_24px_rgba(157,111,120,0.32)]">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a7b]">Quick Links</p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#5a6e62] transition hover:text-[#4c6b5b]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a7b]">Contact</p>
          <div className="space-y-4 text-sm text-[#5a6e62]">
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> mybeautyskin@gmail.com</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +62 000 0000 000</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e2ede7] px-4 py-5 text-center text-xs text-[#6b7e73] sm:px-6 lg:px-8">
        © 2026 MyBeautySkin. Dirancang untuk membantu pengguna menemukan produk kecantikan yang paling sesuai.
      </div>
    </footer>
  );
}
