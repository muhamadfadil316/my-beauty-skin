import type { Metadata } from "next";
import { Outfit, Nunito } from "next/font/google";
import { PageShell } from "@/components/page-shell";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MyBeautySkin",
    template: "%s | MyBeautySkin",
  },
  description:
    "MyBeautySkin membantu pengguna menemukan produk kecantikan yang sesuai dengan kebutuhan kulit, rambut, dan rutinitas harian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${nunito.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
