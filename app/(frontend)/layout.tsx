import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


import SiteFooter from "@/components/footer/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realsite",
  description:
    "Strategic websites designed to convert and built to scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030811]">
        {children}

        {/* =====================================================
            UNIVERSAL REALSITE FOOTER
        ===================================================== */}

        {/* <SiteFooter /> */}
      </body>
    </html>
  );
}