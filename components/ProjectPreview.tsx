import Image from "next/image";
import Link from "next/link";
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
    <Image
      src={project.preview.src}
      alt={project.preview.alt}
      width={project.preview.width}
      height={project.preview.height}
      sizes="(max-width: 820px) 100vw, 66vw"
      priority={priority}
    />
  );

  return (
    <figure className="project-preview">
      {linked ? (
        <Link href={`/works/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
          {image}
        </Link>
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
