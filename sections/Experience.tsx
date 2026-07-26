import Image from "next/image";
import {
  formatExperiencePeriod,
  sortedExperience,
  type Experience as ExperienceRecord,
} from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="shell">
        <header className="section-intro">
          <div>
            <p className="eyebrow">02 / Experience</p>
            <h2 id="experience-title" className="section-title">
              A connected path through insurance, platforms, and engineering.
            </h2>
            <p className="section-description">
              I built the operating knowledge I use today across five TD roles.
            </p>
          </div>
        </header>

        <ol className="timeline">
          {sortedExperience.map((role, index) => (
            <li
              key={role.id}
              className={`timeline__item ${role.current ? "timeline__item--current" : ""}`}
            >
              <div className="timeline__rail" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <ExperienceArticle role={role} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceArticle({ role }: { role: ExperienceRecord }) {
  return (
    <article className="experience-record">
      <div className="experience-record__meta">
        <p className="experience-record__chapter">{role.chapter}</p>
        <p className="experience-record__period">{formatExperiencePeriod(role)}</p>
        <p>{role.location}</p>
        <p>{role.employmentType}</p>
      </div>

      <div className="experience-record__body">
        <div className="experience-record__heading">
          <div>
            <h3>{role.title}</h3>
            {role.functionalArea && <p>{role.functionalArea}</p>}
          </div>
          {role.current && (
            <span className="current-badge">
              <span className="status-signal" aria-hidden="true" />
              Current role
            </span>
          )}
        </div>

        <div className="experience-record__organisation">
          <span className="experience-record__employer">
            <Image
              src="/logo.png"
              alt=""
              width={238}
              height={212}
              sizes="26px"
              className="td-employer-logo"
            />
            <strong>{role.organization}</strong>
          </span>
          {role.division && <span>{role.division}</span>}
          {role.supportingOrganization && <span>Supporting {role.supportingOrganization}</span>}
        </div>

        <p className="experience-record__summary">{role.summary}</p>

        <ul className="responsibility-list">
          {role.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>

        <ul className="tag-list" aria-label={`Capabilities used as ${role.title}`}>
          {role.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
