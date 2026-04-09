import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ─── CUSTOMIZE: Update font if desired ────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ─── CUSTOMIZE: Update your name, title, description, and domain ──────────
export const metadata: Metadata = {
  // SOURCE: Neil_Mitchell_L10_Resume.PDF
  title: "Neil Mitchell — Journey Specialist, Product & Regulatory | TD Insurance",
  description:
    "Product and journey professional at TD Insurance with 6+ years of experience shaping platform requirements, leading cross-pod delivery, and driving Guidewire-based initiatives from intent to implementation.",
  keywords: [
    "product owner",
    "journey specialist",
    "TD Insurance",
    "Guidewire PolicyCenter",
    "platform product",
    "insurance",
    "product delivery",
    "backlog shaping",
    "requirements engineering",
    "New Brunswick",
  ],
  authors: [{ name: "Neil Mitchell" }],
  creator: "Neil Mitchell",
  metadataBase: new URL("https://neil-mitchell.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://neil-mitchell.netlify.app",
    title: "Neil Mitchell — Journey Specialist, Product & Regulatory",
    description:
      "Product and journey professional at TD Insurance. 6+ years of progressive platform product experience — from claims operations to Guidewire PolicyCenter ownership.",
    siteName: "Neil Mitchell",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Neil Mitchell — Journey Specialist, Product & Regulatory, TD Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neil Mitchell — Journey Specialist, Product & Regulatory",
    description: "Platform product professional at TD Insurance. Guidewire, delivery, and requirements.",
    images: ["/profile.jpg"],
    // ─── CUSTOMIZE: Add your Twitter/X handle if you have one ───────────
    creator: "@neilmitchell",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b14" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning prevents mismatch from dark mode class injection
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
