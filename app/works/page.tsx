import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/profile";

export const metadata: Metadata = {
  title: "Works | Neil Mitchell",
  description:
    "Independent technical work demonstrating practical AI/ML delivery, release, and governance skills.",
  alternates: { canonical: "/works" },
  openGraph: {
    type: "website",
    url: "/works",
    title: "Works | Neil Mitchell",
    description:
      "Independent technical work demonstrating practical AI/ML delivery, release, and governance skills.",
    images: [
      {
        url: projects[0].preview.src,
        width: projects[0].preview.width,
        height: projects[0].preview.height,
        alt: projects[0].preview.alt,
      },
    ],
  },
  twitter: {
    title: "Works | Neil Mitchell",
    description:
      "Independent technical work demonstrating practical AI/ML delivery, release, and governance skills.",
    images: [{ url: projects[0].preview.src, alt: projects[0].preview.alt }],
  },
};

export default function WorksPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Works by Neil Mitchell",
    url: `${siteUrl}/works`,
    description:
      "Independent technical work demonstrating practical AI/ML delivery, release, and governance skills.",
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
