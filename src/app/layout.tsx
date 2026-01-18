import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true, // Reduces layout shift
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carabet Corneliu — Full Stack Developer",
  description:
    "I'm Carabet Corneliu, a full-stack developer building fast, accessible web apps with React, Next.js, Node.js, and Tailwind CSS.",
  keywords: [
    "Carabet Corneliu",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Web Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Carabet Corneliu — Full Stack Developer",
    description:
      "Portfolio of Corneliu Carabet, a full-stack developer creating performant, accessible web applications using React, Next.js, Node.js, and Tailwind CSS.",
    url: "https://carabetcorneliu-next.netlify.app",
    siteName: "Carabet Corneliu Portfolio",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carabet Corneliu — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carabet Corneliu — Full Stack Developer",
    description:
      "Full-stack developer specializing in fast, accessible web apps built with React, Next.js, Node.js, and Tailwind CSS.",
    images: ["/img/og-image.png"],
    creator: "@CarabetCornel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
