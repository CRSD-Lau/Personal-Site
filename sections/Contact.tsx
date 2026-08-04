import CopyEmailButton from "@/components/CopyEmailButton";
import { ArrowDownRightIcon, EmailIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Contact() {
  const emailHref = `mailto:${profile.social.email}`;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="shell contact__frame">
        <div className="contact__status">
          <span className="status-signal" aria-hidden="true" />
          <span>Professional conversations</span>
          <strong>Welcome</strong>
        </div>

        <div className="contact__layout">
          <div>
            <p className="eyebrow">07 / Contact</p>
            <h2 id="contact-title" className="contact__title">
              {profile.contact.heading}
            </h2>
            <p className="contact__description">{profile.contact.description}</p>
            <p className="contact__availability">{profile.status}</p>
          </div>

          <div className="contact__topics">
            <h3>Conversation topics</h3>
            <ul>
              {profile.contact.topics.map((topic, index) => (
                <li key={topic}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact__actions">
          <a className="contact-action contact-action--primary" href={emailHref}>
            <EmailIcon />
            <span>
              <small>Email</small>
              {profile.social.email}
            </span>
            <ArrowDownRightIcon />
          </a>
          <a
            className="contact-action"
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
            <ArrowDownRightIcon />
          </a>
          <CopyEmailButton email={profile.social.email} />
          {profile.resume.available ? (
            <a
              className="resume-status resume-status--available"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.resume.notice}, updated ${profile.resume.lastUpdated}`}
            >
              <span>Résumé</span>
              <strong>{profile.resume.notice}</strong>
              <small>Updated {profile.resume.lastUpdated}</small>
              <ArrowDownRightIcon />
            </a>
          ) : (
            <div className="resume-status" aria-label={profile.resume.notice}>
              <span>Résumé</span>
              <strong>{profile.resume.notice}</strong>
              <small>Last public copy: {profile.resume.lastUpdated}</small>
            </div>
          )}
        </div>

        <p className="contact__disclaimer">
          This is a personal portfolio and does not represent an official TD Bank Group or TD
          Insurance website.
        </p>
      </div>
    </section>
  );
}
