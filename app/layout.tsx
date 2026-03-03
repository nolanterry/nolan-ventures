import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcline — Vertical SaaS for Underserved Industries",
  description:
    "Building compliance-grade software at indie prices. FenceCalc, ShieldAI, and more.",
  openGraph: {
    title: "Arcline",
    description:
      "Building vertical SaaS for underserved industries. Compliance-grade software at indie prices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
