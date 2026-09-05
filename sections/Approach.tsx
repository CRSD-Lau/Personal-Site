import { deliveryStages, workingPrinciples } from "@/data/approach";

export default function Approach() {
  return (
    <section
      id="approach"
      className="section approach approach-refresh"
      aria-labelledby="approach-title"
    >
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="approach-title" className="section-title">
              From complexity to clarity.
            </h2>
          </div>
          <p className="section-description">
            A clear objective. The right people. Decisions that move the work forward. This is how I
            connect business intent with delivery readiness.
          </p>
        </header>
        <div
          className="delivery-map delivery-path"
          role="group"
          aria-labelledby="delivery-map-title"
        >
          <div className="delivery-path__legend">
            <h3 id="delivery-map-title">Intent to implementation</h3>
            <span>Six connected steps</span>
          </div>
          <ol className="delivery-map__stages delivery-path__stages">
            {deliveryStages.map((stage) => (
              <li key={stage.index}>
                <span className="delivery-path__number" aria-hidden="true">
                  {stage.index}
                </span>
                <div className="delivery-path__copy">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="working-notes">
          <div className="working-notes__intro">
            <p className="eyebrow">The constants</p>
            <h3>What I bring to every project.</h3>
          </div>
          <ol className="working-notes__list">
            {workingPrinciples.map((principle, index) => (
              <li key={principle.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
