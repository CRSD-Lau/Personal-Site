// ─── Root Page (Server Component) ────────────────────────────────────────────
// This is the main single-page layout. Each section is imported as a separate
// component. To customize content, edit each section file in /sections/.

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Impact from "@/sections/Impact";
import WorkingStyle from "@/sections/WorkingStyle";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      {/* Scroll progress bar — fixed top-0, z-[60], sits above the nav */}
      <ScrollProgress />

      {/* Navigation — fixed to visual viewport so address-bar collapse never shifts it */}
      <Navigation />

      {/* Placeholder reserves flow space for the fixed nav (52px) */}
      <div style={{ height: "52px" }} aria-hidden="true" />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Impact />
        <WorkingStyle />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
