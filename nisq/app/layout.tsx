import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NISQ Vanguard — AI-Powered Cyber Risk Intelligence",
  description: "See the threats before they become risks. NISQ Vanguard delivers real-time cyber risk visibility and autonomous threat posture awareness for modern enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${syne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070a] text-slate-100 font-sans selection:bg-violet-600/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
