import SystemGraph from "@/components/SystemGraph";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="shell hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="status-signal" aria-hidden="true" />
            Neil Mitchell / Career portfolio
          </p>
          <h1 id="hero-title" className="hero__statement">
            <span className="sr-only">{profile.name}. </span>
            {profile.heroStatement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__role">{profile.headline}</p>
          <p className="hero__introduction">{profile.heroSummary}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#experience">
              Explore my experience
            </a>
            {profile.resume.available && (
              <a
                className="button button--quiet"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View résumé
              </a>
            )}
          </div>
          <a className="hero__work-link" href="#works">
            Or see what I build <span aria-hidden="true">→</span>
          </a>
        </div>
        <SystemGraph />
      </div>
      <div className="shell hero__footer">
        <p>
          {profile.organizationContext}
          <span>{profile.supportingContext}</span>
        </p>
        <p className="hero__location">{profile.location}</p>
      </div>
    </section>
  );
}
