import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealFooter from "@/components/RevealFooter";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Creator Management Agency`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.name} | Creator Management Agency`,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-10 flex-1 bg-ink shadow-[0_40px_60px_-20px_rgba(0,0,0,0.85)]">{children}</main>
        <RevealFooter>
          <Footer />
        </RevealFooter>
      </body>
    </html>
  );
}
