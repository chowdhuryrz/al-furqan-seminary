import { Metadata } from "next";
import { El_Messiri, Inter } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
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
      <body className={`${elMessiri.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
