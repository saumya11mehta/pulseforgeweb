import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from '@/components/ThemeProvider';
import { Roboto } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  alternates: {
    canonical: "https://pulseforgeapp.com",
  },
  openGraph: {
    type: "website",
    url: "https://pulseforgeapp.com",
    title: "PulseForge - Advanced Workout Tracking App",
    description: "Track your workouts, set goals, and achieve fitness success with PulseForge.",
    siteName: "PulseForge",
    images: [
      {
        url: "https://pulseforgeapp.com/logo.svg",
        width: 112,
        height: 112,
        alt: "PulseForge Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "PulseForge - Advanced Workout Tracking App",
    description: "Track your workouts, set goals, and achieve fitness success with PulseForge.",
    images: ["https://pulseforgeapp.com/logo.svg"],
  }
};

// Schema.org JSON-LD data
type JsonLdData = {
  "@context": string;
  "@type": string;
  [key: string]: string | number | boolean | object;
};

const organizationJsonLd: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PulseForge",
  "url": "https://pulseforgeapp.com",
  "logo": "https://pulseforgeapp.com/logo.svg"
};

// Safe way to stringify the JSON-LD data
function safeJsonLd(data: JsonLdData) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

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
        </ThemeProvider>
        <Analytics />
        <SpeedInsights/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(organizationJsonLd)
          }}
        />
      </body>
    </html>
  );
}
