import AnimatedCounter from "@/components/AnimatedCounter";
import { impactMetrics, impactStories } from "@/data/impact";

export default function Impact() {
  return (
    <section id="impact" className="section impact" aria-labelledby="impact-title">
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">05 / Impact</p>
            <h2 id="impact-title" className="section-title">
              A record of delivery at TD.
            </h2>
          </div>
          <p className="section-description">
            Selected measures and career highlights from work across TD Insurance and TD Bank Group.
          </p>
        </header>

        <dl className="metric-field">
          {impactMetrics.map((metric, index) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd className="metric-field__value">
                <AnimatedCounter value={metric.value} delay={index * 90} />
              </dd>
              <dd className="metric-field__context">{metric.context}</dd>
            </div>
          ))}
        </dl>

        <div className="impact-ledger">
          <div className="impact-ledger__header">
            <h3>Selected work and recognition</h3>
            <span>Current focus and career highlights</span>
          </div>
          {impactStories.map((story) => (
            <article key={story.id} className="impact-story">
              <p className="impact-story__marker">{story.marker}</p>
              <div>
                <h4>{story.title}</h4>
                <p>{story.description}</p>
              </div>
              <ul>
                {story.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
