import type { Metadata } from "next";
import Footer from "@/sections/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  keywords: [
    "Independent Technical Projects",
    "AI/ML Delivery",
    "Release Engineering",
    "Open Source Governance",
    "Windows AI Applications",
  ],
};

export default function WorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
