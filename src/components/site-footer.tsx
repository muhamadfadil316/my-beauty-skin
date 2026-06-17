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
    <footer className="border-t border-[#efe4de] bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <BrandLogo size="sm" />
          <p className="max-w-md text-sm leading-7 text-[#6f5b54]">
            Tempat menjelajah produk kecantikan untuk kulit, rambut, dan rutinitas harian dengan tampilan yang rapi dan mudah digunakan.
          </p>
          <div className="flex items-center gap-3 text-[#7a5e56]">
            <a aria-label="Instagram" href="#" className="rounded-full border border-[#efe4de] p-3 transition hover:border-[#d8c4bb] hover:bg-[#fdf7f4]">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" href="#" className="rounded-full border border-[#efe4de] p-3 transition hover:border-[#d8c4bb] hover:bg-[#fdf7f4]">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Youtube" href="#" className="rounded-full border border-[#efe4de] p-3 transition hover:border-[#d8c4bb] hover:bg-[#fdf7f4]">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a7b]">Quick Links</p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#6f5b54] transition hover:text-[#8b5a62]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a7b]">Contact</p>
          <div className="space-y-4 text-sm text-[#6f5b54]">
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> mybeautyskin@gmail.com</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +62 000 0000 000</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#efe4de] px-4 py-5 text-center text-xs text-[#8e766d] sm:px-6 lg:px-8">
        © 2026 MyBeautySkin. Dirancang untuk membantu pengguna menemukan produk kecantikan yang paling sesuai.
      </div>
    </footer>
  );
}
