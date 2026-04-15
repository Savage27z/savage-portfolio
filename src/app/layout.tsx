import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAVAGE✰ | Developer & Builder",
  description:
    "Developer & Builder. Shipping crypto tools, DeFi bots, and automation from the edge of Web3.",
  keywords: [
    "developer",
    "web3",
    "solana",
    "crypto",
    "defi",
    "builder",
    "python",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
