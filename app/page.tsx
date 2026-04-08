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
    <>
      {/* Scroll progress bar at top of viewport */}
      <ScrollProgress />

      {/* Sticky navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Impact />
        <WorkingStyle />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
