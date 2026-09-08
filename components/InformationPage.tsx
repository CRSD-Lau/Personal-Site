import Navigation from "./Navigation";
import Footer from "@/sections/Footer";

export default function InformationPage({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="information-page shell" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
