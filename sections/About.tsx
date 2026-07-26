import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">01 / About</p>
            <h2 id="about-title" className="section-title">
              {profile.aboutHeading}
            </h2>
          </div>
          <p className="section-index" aria-hidden="true">
            01
          </p>
        </header>

        <div className="about__editorial">
          <div className="about__lead">
            <p>
              Business context is not separate from technical execution. It shapes the priorities,
              constraints, and decisions that determine whether good work reaches production.
            </p>
          </div>

          <div className="about__copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="career-arc" aria-labelledby="career-arc-title">
          <div className="career-arc__header">
            <h3 id="career-arc-title">Career progression</h3>
            <span>April 2019 to Present</span>
          </div>
          <ol className="career-arc__path">
            {profile.progression.map((chapter, index) => (
              <li
                key={chapter}
                className={index === profile.progression.length - 1 ? "is-current" : ""}
              >
                <span className="career-arc__node" aria-hidden="true" />
                <span className="career-arc__index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{chapter}</strong>
              </li>
            ))}
          </ol>
        </div>

        <dl className="fact-strip">
          {profile.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
          <div className="fact-strip__statement">
            <dt>Context connected</dt>
            <dd>Business + Technical</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
