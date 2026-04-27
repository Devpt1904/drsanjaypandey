import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precision in Surgery | The Elite Consultant",
  description: "Premium personal branding website for a senior medical professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased h-full`}>
      <body className="min-h-full font-sans text-[#475569] bg-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
