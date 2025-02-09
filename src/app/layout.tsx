import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Furqan Seminary",
  description: "Islamic services for the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
