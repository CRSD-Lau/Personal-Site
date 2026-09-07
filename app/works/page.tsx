import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteMetadata, siteUrl, worksMetadata } from "@/data/profile";

export const metadata: Metadata = {
  title: worksMetadata.title,
  description: worksMetadata.description,
  alternates: { canonical: "/works" },
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    siteName: siteMetadata.name,
    url: "/works",
    title: worksMetadata.title,
    description: worksMetadata.description,
    images: [
      {
        url: worksMetadata.socialImage.path,
        width: worksMetadata.socialImage.width,
        height: worksMetadata.socialImage.height,
        alt: worksMetadata.socialImage.alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: worksMetadata.title,
    description: worksMetadata.description,
    images: [{ url: worksMetadata.socialImage.path, alt: worksMetadata.socialImage.alt }],
  },
};

export default function WorksPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/works#collection`,
    name: "Works by Neil Mitchell",
    url: `${siteUrl}/works`,
    description: worksMetadata.description,
    image: `${siteUrl}${worksMetadata.socialImage.path}`,
    inLanguage: "en-CA",
    isPartOf: { "@id": `${siteUrl}/#website` },
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteMetadata.name,
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${siteUrl}/works/${project.slug}`,
      })),
    },
  };

  return (
    <main id="main-content" className="works-page" tabIndex={-1}>
      <section className="works-hero" aria-labelledby="works-title">
        <div className="shell works-hero__layout">
          <div>
            <p className="eyebrow">Independent work</p>
            <h1 id="works-title">
              Ideas, made
              <br />
              <span>practical.</span>
            </h1>
          </div>
          <div className="works-hero__intro">
            <p>
              A closer look at the things I build, the decisions behind them, and the evidence that
              supports the result.
            </p>
            <span>Personal projects outside my professional role.</span>
          </div>
        </div>
      </section>

      <section className="works-collection section" aria-labelledby="works-collection-title">
        <div className="shell">
          <header className="works-collection__label">
            <h2 id="works-collection-title">Selected case studies</h2>
            <span>{String(projects.length).padStart(2, "0")} / In focus</span>
          </header>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
