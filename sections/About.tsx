import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="shell about__layout">
        <div className="about__identity">
          <p className="eyebrow">The person behind the work</p>
          <h2 id="about-title" className="section-title">
            A wider
            <br />
            perspective.
          </h2>
          <div className="about__signature" aria-hidden="true">
            Neil Mitchell
          </div>
        </div>
        <div className="about__story">
          <p className="about__lead">{profile.aboutLead}</p>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="about__facts">
            {profile.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
