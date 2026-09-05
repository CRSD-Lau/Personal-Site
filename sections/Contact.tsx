import CopyEmailButton from "@/components/CopyEmailButton";
import { ArrowRightIcon, LinkedInIcon } from "@/components/Icons";
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
            <a className="contact__email" href={`mailto:${profile.social.email}`}>
              {profile.social.email}
              <ArrowRightIcon />
            </a>
          </div>
        </div>
        <div className="contact__actions">
          <a
            className="contact-action"
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            <span>Connect on LinkedIn</span>
          </a>
          <CopyEmailButton email={profile.social.email} />
          {profile.resume.available && (
            <a
              className="contact-action"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label={`View résumé, updated ${profile.resume.lastUpdated}`}
            >
              <span>View résumé</span>
            </a>
          )}
          <span className="contact__note">{profile.status}</span>
        </div>
        <p className="contact__disclaimer">
          This is a personal portfolio and does not represent an official TD Bank Group or TD
          Insurance website.
        </p>
      </div>
    </section>
  );
}
