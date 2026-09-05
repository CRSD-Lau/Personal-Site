import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@/components/Icons";
import ProjectGrowthChart from "@/components/ProjectGrowthChart";
import ProjectPreview from "@/components/ProjectPreview";
import ProjectReleaseFlow from "@/components/ProjectReleaseFlow";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteUrl } from "@/data/profile";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const title = `${project.title} | Neil Mitchell`;
  return {
    title,
    description: project.cardSummary,
    alternates: { canonical: `/works/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/works/${project.slug}`,
      title,
      description: project.cardSummary,
      images: [
        {
          url: project.preview.src,
          width: project.preview.width,
          height: project.preview.height,
          alt: project.preview.alt,
        },
      ],
    },
    twitter: {
      title,
      description: project.cardSummary,
      images: [{ url: project.preview.src, alt: project.preview.alt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectUrl = `${siteUrl}/works/${project.slug}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: projectUrl,
    author: { "@type": "Person", name: "Neil Mitchell", url: siteUrl },
    dateCreated: project.date,
    dateModified: project.audit.isoDate,
    description: project.cardSummary,
    about: {
      "@type": "SoftwareSourceCode",
      name: project.title,
      codeRepository: project.links.repository,
      license: project.links.license,
      isBasedOn: project.links.upstream,
    },
  };

  return (
    <main id="main-content" className="case-study" tabIndex={-1}>
      <section className="case-study__hero" aria-labelledby="case-study-title">
        <div className="shell">
          {/* Native navigation supports static hosts without RSC rewrite rules. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="back-link" href="/works">
            <span aria-hidden="true">←</span> All works
          </a>
          <div className="case-study__hero-layout">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1 id="case-study-title">{project.title}</h1>
            </div>
            <div className="case-study__hero-intro">
              <p className="case-study__summary">{project.summary}</p>
              <ul className="case-study__technologies" aria-label="Project technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a className="case-study__start" href="#case-problem">
                Inside the project <ArrowRightIcon />
              </a>
            </div>
          </div>
          <div className="case-study__cover">
            <ProjectPreview project={project} linked={false} priority />
          </div>
          <dl className="case-study__facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Evidence snapshot</dt>
              <dd>{project.audit.date}</dd>
            </div>
            <div>
              <dt>Audited commit</dt>
              <dd>{project.audit.commit}</dd>
            </div>
          </dl>
        </div>
      </section>

      <nav className="case-study__contents" aria-label="In this case study">
        <div className="shell">
          <span>Inside the project</span>
          <a href="#case-problem">The challenge</a>
          <a href="#case-results">The evidence</a>
          <a href="#case-delivery">The approach</a>
          <a href="#case-governance">Attribution &amp; source</a>
        </div>
      </nav>

      <section
        id="case-problem"
        className="case-study__problem section"
        aria-labelledby="case-problem-title"
      >
        <div className="shell">
          <div className="case-study__section-head case-study__section-head--split">
            <div>
              <p className="eyebrow">Problem / The challenge</p>
              <h2 id="case-problem-title">{project.problem.heading}</h2>
            </div>
            <p>{project.problem.description}</p>
          </div>
          <div className="case-study__contribution">
            <div>
              <p className="eyebrow">My contribution</p>
              <h3>What this demonstrates.</h3>
              <p>{project.role}</p>
            </div>
            <ul>
              {project.transferableSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="case-results"
        className="case-study__metrics section"
        aria-labelledby="case-metrics-title"
      >
        <div className="shell">
          <header className="case-study__section-head">
            <p className="eyebrow">Measured scope</p>
            <h2 id="case-metrics-title">A closer look at the work.</h2>
            <p>
              Fixed results from the {project.audit.date} audit snapshot. These measures describe
              the documented scope of the project and are not live GitHub statistics.
            </p>
          </header>
          <dl className="case-study__metric-grid">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd className="case-study__metric-value">{metric.value}</dd>
                <dd>{metric.context}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="case-delivery"
        className="case-study__flow section"
        aria-labelledby="case-flow-title"
      >
        <div className="shell">
          <header className="case-study__section-head case-study__section-head--split">
            <div>
              <p className="eyebrow">Delivery approach</p>
              <h2 id="case-flow-title">A release pipeline built around evidence.</h2>
            </div>
            <p>
              The work connects local product behaviour with release engineering, hardware
              validation, supply-chain evidence, and responsible use.
            </p>
          </header>
          <ProjectReleaseFlow
            stages={project.stages}
            label={`${project.title} release and governance flow`}
          />
        </div>
      </section>

      <section className="case-study__evidence section" aria-labelledby="case-evidence-title">
        <div className="shell case-study__evidence-layout">
          <ProjectGrowthChart
            baselineCode={project.audit.baselineCode}
            currentCode={project.audit.currentCode}
            date={project.audit.date}
          />
          <div className="case-study__methodology">
            <p className="eyebrow">Method</p>
            <h2 id="case-evidence-title">Context makes the measure useful.</h2>
            <p>{project.audit.methodology}</p>
            <p>
              The project is a Windows-focused derivative, not a claim of sole authorship. The case
              study uses original diagrams and a summary of repository evidence only.
            </p>
          </div>
        </div>
      </section>

      <section
        id="case-governance"
        className="case-study__governance section"
        aria-labelledby="case-governance-title"
      >
        <div className="shell case-study__governance-frame">
          <div>
            <p className="eyebrow">Attribution and responsible use</p>
            <h2 id="case-governance-title">Open-source work carries obligations.</h2>
            <p>{project.attribution}</p>
            <p>{project.responsibleUse}</p>
          </div>
          <div className="case-study__actions">
            <a href={project.links.repository} target="_blank" rel="noreferrer">
              View repository
            </a>
            <a href={project.links.releases} target="_blank" rel="noreferrer">
              Latest release
            </a>
            <a href={project.links.license} target="_blank" rel="noreferrer">
              {project.licenseLabel} licence
            </a>
            <a href={project.links.compliance} target="_blank" rel="noreferrer">
              Compliance notes
            </a>
            <a href={project.links.upstream} target="_blank" rel="noreferrer">
              Original project
            </a>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
