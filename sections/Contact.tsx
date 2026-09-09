import CopyEmailButton from "@/components/CopyEmailButton";
import { DocumentIcon, EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="shell contact__frame">
        <div className="contact__layout">
          <div>
            <p className="eyebrow">Good work starts with a conversation</p>
            <h2 id="contact-title" className="contact__title">
              Let’s connect<span>.</span>
            </h2>
          </div>
          <div className="contact__invitation">
            <p>{profile.contact.description}</p>
            <div className="contact__actions">
              <a
                className="contact-action"
                href={`mailto:${profile.social.email}`}
                aria-label="Send me an email"
                title="Send me an email"
              >
                <EmailIcon />
              </a>
              <CopyEmailButton email={profile.social.email} />
              {profile.resume.available && (
                <a
                  className="contact-action"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View résumé, updated ${profile.resume.lastUpdated}`}
                  title="View résumé"
                >
                  <DocumentIcon />
                </a>
              )}
              <a
                className="contact-action"
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Connect on LinkedIn"
                title="Connect on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                className="contact-action"
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Neil Mitchell on GitHub"
                title="View GitHub profile"
              >
                <GitHubIcon />
              </a>
              <span className="contact__note">{profile.status}</span>
            </div>
          </div>
        </div>
        <p className="contact__disclaimer">
          This is a personal portfolio and does not represent an official TD Bank Group or TD
          Insurance website.
        </p>
      </div>
    </section>
  );
}
