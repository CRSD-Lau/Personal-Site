import type { ProjectStage } from "@/data/projects";

type ProjectReleaseFlowProps = {
  stages: readonly ProjectStage[];
  label: string;
};

export default function ProjectReleaseFlow({ stages, label }: ProjectReleaseFlowProps) {
  return (
    <ol className="project-release-flow" aria-label={label}>
      {stages.map((stage, index) => (
        <li key={stage.title}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-release-flow__node" aria-hidden="true" />
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}
