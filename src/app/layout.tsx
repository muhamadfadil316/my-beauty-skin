import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import { PageShell } from "@/components/page-shell";
import "./globals.css";
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-display-font",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="id" className={`${inter.variable} ${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
