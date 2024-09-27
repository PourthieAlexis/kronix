import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Kronix",
  description: "Kronix",
  icons: {
    icon: "/images/icon_star.png",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
});

export const plus_jarkarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#111204] text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
