import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/sections/About";
import Approach from "@/sections/Approach";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Impact from "@/sections/Impact";
import Skills from "@/sections/Skills";
import { profile, siteUrl } from "@/data/profile";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/profile.webp`,
  jobTitle: profile.roleTitle,
  description: profile.introduction,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint John",
    addressRegion: "New Brunswick",
    addressCountry: "CA",
  },
  worksFor: {
    "@type": "Organization",
    name: "TD Bank Group",
  },
  sameAs: [profile.social.linkedin],
  knowsAbout: [
    "Applied AI/ML engineering delivery",
    "Project management",
    "Insurance technology",
    "Guidewire",
    "Kanban",
    "Production readiness",
  ],
};

export default function Home() {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollProgress />
      <Navigation />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Approach />
        <Skills />
        <Impact />
        <Contact />
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
