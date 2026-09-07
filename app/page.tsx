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
import Works from "@/sections/Works";
import { profile, siteMetadata, siteUrl } from "@/data/profile";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
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
  sameAs: [profile.social.linkedin, profile.social.github],
  knowsAbout: [
    "Applied AI/ML engineering delivery",
    "Project management",
    "Insurance technology",
    "Guidewire",
    "Kanban",
    "Production readiness",
  ],
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteMetadata.name,
      url: siteUrl,
      inLanguage: "en-CA",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      name: siteMetadata.title,
      description: siteMetadata.description,
      url: siteUrl,
      image: `${siteUrl}${siteMetadata.socialImage.path}`,
      inLanguage: "en-CA",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
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
        <Works />
        <Approach />
        <Skills />
        <Impact />
        <Contact />
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
