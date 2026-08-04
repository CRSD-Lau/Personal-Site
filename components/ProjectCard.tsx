import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowDownRightIcon } from "./Icons";
import ProjectPreview from "./ProjectPreview";

type ProjectCardProps = {
  project: Project;
  index: number;
  priority?: boolean;
};

export default function ProjectCard({ project, index, priority = false }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} priority={priority} />
      <div className="project-card__body">
        <p className="project-card__index">{String(index + 1).padStart(2, "0")}</p>
        <div className="project-card__heading">
          <p>{project.eyebrow}</p>
          <h3>{project.title}</h3>
          <span>{project.cardSummary}</span>
        </div>
        <ul aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link className="project-card__link" href={`/works/${project.slug}`}>
          Read case study <ArrowDownRightIcon />
        </Link>
      </div>
    </article>
  );
}
