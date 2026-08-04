import type { CSSProperties } from "react";

type ProjectGrowthChartProps = {
  baselineCode: number;
  currentCode: number;
  date: string;
};

function formatCode(value: number) {
  return value.toLocaleString("en-CA");
}

export default function ProjectGrowthChart({
  baselineCode,
  currentCode,
  date,
}: ProjectGrowthChartProps) {
  const baselineHeight = Math.round((baselineCode / currentCode) * 100);

  return (
    <figure className="project-growth" aria-labelledby="growth-chart-title">
      <figcaption>
        <div>
          <p className="eyebrow">Evidence snapshot</p>
          <h2 id="growth-chart-title">A measured application growth curve.</h2>
        </div>
        <p>Clean application code from the upstream base to the audited snapshot on {date}.</p>
      </figcaption>

      <div
        className="project-growth__plot"
        role="img"
        aria-label={`Clean application code grew from ${formatCode(baselineCode)} to ${formatCode(currentCode)} lines.`}
      >
        <span className="project-growth__guide project-growth__guide--high" aria-hidden="true" />
        <span className="project-growth__guide project-growth__guide--mid" aria-hidden="true" />
        <div className="project-growth__bar">
          <span className="project-growth__bar-label">Upstream base</span>
          <strong style={{ "--bar-height": `${baselineHeight}%` } as CSSProperties}>
            <span>{formatCode(baselineCode)}</span>
          </strong>
        </div>
        <div className="project-growth__bar project-growth__bar--current">
          <span className="project-growth__bar-label">Audited snapshot</span>
          <strong style={{ "--bar-height": "100%" } as CSSProperties}>
            <span>{formatCode(currentCode)}</span>
          </strong>
        </div>
      </div>
      <p className="project-growth__note">
        The visual is an original presentation of the audit data. It measures the maintained product
        surface, not personal ownership or elapsed effort.
      </p>
    </figure>
  );
}
