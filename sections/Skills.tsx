import { capabilityGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="expertise"
      className="section expertise expertise-refresh"
      aria-labelledby="expertise-title"
    >
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">Expertise</p>
            <h2 id="expertise-title" className="section-title">
              Leadership, with technical depth.
            </h2>
          </div>
          <p className="section-description">
            Delivery is my core practice. Insurance experience and hands-on technical work give me
            the context to ask better questions and connect the right people.
          </p>
        </header>
        <div className="expertise-board">
          {capabilityGroups.map((group) => (
            <article className="expertise-row" key={group.id}>
              <span className="expertise-row__index" aria-hidden="true">
                {group.index}
              </span>
              <div className="expertise-row__heading">
                <p className="expertise-row__level">{group.level}</p>
                <h3>{group.name}</h3>
                <p className="expertise-row__description">{group.summary}</p>
              </div>
              <ul className="expertise-row__list" aria-label={group.name + " capabilities"}>
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
