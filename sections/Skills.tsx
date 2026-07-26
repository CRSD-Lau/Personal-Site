import { capabilityGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="expertise" className="section expertise" aria-labelledby="expertise-title">
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">04 / Expertise</p>
            <h2 id="expertise-title" className="section-title">
              Delivery leadership with technical depth.
            </h2>
          </div>
          <p className="section-description">
            I lead technical delivery with experience across insurance operations and platforms.
          </p>
        </header>

        <div className="capability-matrix">
          {capabilityGroups.map((group) => (
            <article className="capability-row" key={group.id}>
              <div className="capability-row__index" aria-hidden="true">
                {group.index}
              </div>
              <div className="capability-row__heading">
                <p>{group.level}</p>
                <h3>{group.name}</h3>
                <span>{group.summary}</span>
              </div>
              <ul className="capability-row__list">
                {group.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
