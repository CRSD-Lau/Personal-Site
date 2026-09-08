import ResponsiveImage from "./ResponsiveImage";

import type { Project } from "@/data/projects";

type ProjectPreviewProps = {
  project: Project;
  linked?: boolean;
  priority?: boolean;
};

export default function ProjectPreview({
  project,
  linked = true,
  priority = false,
}: ProjectPreviewProps) {
  const image = (
    <ResponsiveImage
      base={project.preview.displayBase}
      widths={[400, 640, 960, 1280]}
      alt={project.preview.alt}
      width={project.preview.width}
      height={project.preview.height}
      sizes={
        linked
          ? "(max-width: 820px) 90vw, (max-width: 1422px) 53vw, 746px"
          : "(max-width: 1422px) 90vw, 1280px"
      }
      preload={priority}
    />
  );

  return (
    <figure className="project-preview">
      {linked ? (
        <a href={`/works/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
          {image}
        </a>
      ) : (
        <div>{image}</div>
      )}
      <figcaption>
        <span>Repository social preview</span>
        <span>{project.preview.credit}</span>
      </figcaption>
    </figure>
  );
}
