import { deliveryStages, workingPrinciples } from "@/data/approach";

export default function Approach() {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-title">
      <div className="shell">
        <header className="section-intro section-intro--inverse">
          <div>
            <p className="eyebrow">03 / Approach</p>
            <h2 id="approach-title" className="section-title">
              Structure is how complicated work becomes achievable.
            </h2>
          </div>
          <p className="section-description">
            A practical sequence for moving from a business objective toward implementation and
            operational readiness.
          </p>
        </header>

        <div className="delivery-map" aria-labelledby="delivery-map-title">
          <div className="delivery-map__status">
            <span id="delivery-map-title">How I work</span>
            <span>A practical working sequence</span>
          </div>
          <ol className="delivery-map__stages">
            {deliveryStages.map((stage) => (
              <li key={stage.index}>
                <span className="delivery-map__index">{stage.index}</span>
                <span className="delivery-map__node" aria-hidden="true" />
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="principles">
          <h3>Working principles</h3>
          <ol>
            {workingPrinciples.map((principle, index) => (
              <li key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{principle.title}</h4>
                  <p>{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
