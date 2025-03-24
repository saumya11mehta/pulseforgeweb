import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from '@/components/ThemeProvider';
import { Roboto } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PulseForge - Advanced Workout Tracking App",
  description: "Track your workouts, set goals, and achieve fitness success with PulseForge. Available on Google Play Store.",
  keywords: ["workout tracker", "fitness app", "exercise tracker", "gym app", "PulseForge"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased min-h-screen flex flex-col`}>
      <body>
        <ThemeProvider>
          
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
