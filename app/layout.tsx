import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { profile, siteMetadata, siteUrl } from "@/data/profile";
import "./globals.css";

const socialImage = {
  url: new URL(siteMetadata.socialImage.path, siteUrl).toString(),
  width: siteMetadata.socialImage.width,
  height: siteMetadata.socialImage.height,
  alt: siteMetadata.socialImage.alt,
};

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  keywords: [
    "Applied AI/ML Engineering",
    "AI Engineering Delivery",
    "Project Management",
    "TD Bank Group",
    "TD Insurance",
    "Kanban",
    "Production Readiness",
    "Insurance Technology",
    "Guidewire",
    "Saint John New Brunswick",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    url: "/",
    title: siteMetadata.title,
    description: siteMetadata.socialDescription,
    siteName: siteMetadata.name,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.socialDescription,
    images: [socialImage],
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
    { media: "(prefers-color-scheme: light)", color: "#f2f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#091012" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", saved === "dark" || (!saved && prefersDark));
    } catch (error) {}
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-preference" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
