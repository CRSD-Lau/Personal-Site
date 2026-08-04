import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDownRightIcon } from "@/components/Icons";
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
          <Link className="back-link" href="/works">
            <span aria-hidden="true">←</span> All works
          </Link>
          <div className="case-study__hero-layout">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1 id="case-study-title">{project.title}</h1>
              <p className="case-study__summary">{project.summary}</p>
            </div>
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

      <section className="case-study__problem section" aria-labelledby="case-problem-title">
        <div className="shell case-study__section-head case-study__section-head--split">
          <div>
            <p className="eyebrow">Problem</p>
            <h2 id="case-problem-title">{project.problem.heading}</h2>
          </div>
          <p>{project.problem.description}</p>
        </div>
      </section>

      <section className="case-study__metrics section" aria-labelledby="case-metrics-title">
        <div className="shell">
          <header className="case-study__section-head">
            <p className="eyebrow">Measured scope</p>
            <h2 id="case-metrics-title">Evidence, not live counters.</h2>
            <p>
              These are fixed results from the published audit snapshot, rather than current GitHub
              statistics.
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

      <section className="case-study__flow section" aria-labelledby="case-flow-title">
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

      <section className="case-study__skills section" aria-labelledby="case-skills-title">
        <div className="shell case-study__skills-layout">
          <div>
            <p className="eyebrow">Transferable practice</p>
            <h2 id="case-skills-title">What this demonstrates.</h2>
          </div>
          <ul>
            {project.transferableSkills.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-study__governance section" aria-labelledby="case-governance-title">
        <div className="shell case-study__governance-frame">
          <div>
            <p className="eyebrow">Attribution and responsible use</p>
            <h2 id="case-governance-title">Open-source work carries obligations.</h2>
            <p>{project.attribution}</p>
            <p>{project.responsibleUse}</p>
          </div>
          <div className="case-study__actions">
            <a href={project.links.repository} target="_blank" rel="noreferrer">
              View repository <ArrowDownRightIcon />
            </a>
            <a href={project.links.releases} target="_blank" rel="noreferrer">
              Latest release <ArrowDownRightIcon />
            </a>
            <a href={project.links.license} target="_blank" rel="noreferrer">
              {project.licenseLabel} licence <ArrowDownRightIcon />
            </a>
            <a href={project.links.compliance} target="_blank" rel="noreferrer">
              Compliance notes <ArrowDownRightIcon />
            </a>
            <a href={project.links.upstream} target="_blank" rel="noreferrer">
              Original project <ArrowDownRightIcon />
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
