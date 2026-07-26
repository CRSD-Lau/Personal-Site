import SystemGraph from "@/components/SystemGraph";
import { ArrowDownRightIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="shell hero__layout">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            <span className="status-signal" aria-hidden="true" />
            Career portfolio
          </p>

          <div className="hero__heading-group">
            <h1 id="hero-title" className="hero__name">
              {profile.name}
            </h1>
            <p className="hero__role">{profile.headline}</p>
          </div>

          <p className="hero__positioning">{profile.positioning}</p>
          <p className="hero__introduction">{profile.introduction}</p>

          <dl className="hero__context">
            <div>
              <dt>Organisation</dt>
              <dd>{profile.organizationContext}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{profile.supportingContext}</dd>
            </div>
          </dl>

          <div className="hero__actions">
            <a className="button button--primary" href="#experience">
              Trace the career path
              <ArrowDownRightIcon />
            </a>
            <a
              className="button button--quiet"
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            {profile.resume.available && (
              <a
                className="button button--quiet"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
                <ArrowDownRightIcon />
              </a>
            )}
          </div>
        </div>

        <SystemGraph />
      </div>

      <a className="hero__scroll-cue" href="#about">
        <span>Explore the portfolio</span>
        <ArrowDownRightIcon />
      </a>
    </section>
  );
}
