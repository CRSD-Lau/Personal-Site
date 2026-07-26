import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const description =
  "Project Manager II in Applied AI/ML Engineering at TD Bank Group, supporting TD Insurance. Experience across insurance, platforms, automation, and delivery.";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description,
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
    type: "profile",
    locale: "en_CA",
    url: siteUrl,
    title: `${profile.name} | ${profile.headline}`,
    description,
    siteName: `${profile.name} Portfolio`,
    firstName: "Neil",
    lastName: "Mitchell",
    images: [
      {
        url: "/profile.webp",
        width: 960,
        height: 1280,
        alt: "Portrait of Neil Mitchell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.headline}`,
    description,
    images: ["/profile.webp"],
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
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <Script id="theme-preference" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
