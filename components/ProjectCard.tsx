import type { Project } from "@/data/projects";
import { ArrowRightIcon } from "./Icons";
import ProjectPreview from "./ProjectPreview";

type ProjectCardProps = {
  project: Project;
  index: number;
  priority?: boolean;
};

export default function ProjectCard({ project, index, priority = false }: ProjectCardProps) {
  return (
    <article
      className="project-card project-card--featured"
      aria-labelledby={`project-${project.slug}-${index}-title`}
    >
      <div className="project-card__visual">
        <ProjectPreview project={project} priority={priority} />
      </div>
      <div className="project-card__body">
        <div className="project-card__heading">
          <p>{project.eyebrow}</p>
          <h3 id={`project-${project.slug}-${index}-title`}>{project.title}</h3>
          <span>{project.cardSummary}</span>
        </div>
        <dl className="project-card__evidence">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <p className="project-card__snapshot">Evidence snapshot: {project.audit.date}</p>
        <ul aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a className="project-card__link" href={`/works/${project.slug}`}>
          Read case study <ArrowRightIcon />
        </a>
      </div>
    </article>
  );
}
