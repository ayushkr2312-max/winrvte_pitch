import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google"; // Import fonts
import localFont from "next/font/local";
import "./globals.css";

// Configure fonts
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Wide range for imposing headers
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

// Configure Good Timing (Local Font)
const goodTiming = localFont({
  src: [
    {
      path: '../../public/fonts/good-timing-bd.otf',
      weight: '700', // It's a bold font file (bd)
      style: 'normal',
    },
  ],
  variable: '--font-good-timing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "WINRVTE | Elite Esports Data Infrastructure",
  description: "Tier 1 Infrastructure. Tier 3 Budget. Stop running your business on vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kanit.variable} ${inter.variable} ${goodTiming.variable} antialiased bg-obsidian text-white overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
