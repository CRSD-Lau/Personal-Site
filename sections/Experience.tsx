import Image from "next/image";
import {
  formatExperiencePeriod,
  sortedExperience,
  type Experience as ExperienceRecord,
} from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience career"
      aria-labelledby="experience-title"
    >
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">Career progression</p>
            <h2 id="experience-title" className="section-title">
              Five roles. One connected story.
            </h2>
          </div>
          <p className="section-description">
            From the first customer conversation to the work behind a production release. Each
            chapter at TD informs how I lead today.
          </p>
        </header>
        <ol className="career-history">
          {sortedExperience.map((role) => (
            <li key={role.id} className={role.current ? "career-history__current" : undefined}>
              {role.current ? <CurrentRole role={role} /> : <PreviousRole role={role} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Employer({ role }: { role: ExperienceRecord }) {
  return (
    <div className="career-employer">
      <span className="career-employer__name">
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
  );
}

function RoleDetails({ role }: { role: ExperienceRecord }) {
  return (
    <>
      <ul className="career-responsibilities">
        {role.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
      <ul className="career-skills" aria-label={"Capabilities used as " + role.title}>
        {role.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

function CurrentRole({ role }: { role: ExperienceRecord }) {
  return (
    <article className="career-current" aria-labelledby={role.id + "-title"}>
      <div className="career-current__context">
        <span className="career-current__badge">
          <span className="status-signal" aria-hidden="true" />
          Current chapter
        </span>
        <div className="career-current__date">
          <span>{role.startDate.slice(0, 4)}</span>
          <p>{formatExperiencePeriod(role)}</p>
        </div>
        <p className="career-current__location">
          {role.location}
          <br />
          {role.employmentType}
        </p>
        <span className="career-current__arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="career-current__body">
        <p className="career-current__chapter">{role.chapter}</p>
        <h3 id={role.id + "-title"}>{role.title}</h3>
        {role.functionalArea && <p className="career-current__focus">{role.functionalArea}</p>}
        <Employer role={role} />
        <p className="career-current__summary">{role.summary}</p>
        <RoleDetails role={role} />
      </div>
    </article>
  );
}

function PreviousRole({ role }: { role: ExperienceRecord }) {
  return (
    <details className="career-entry">
      <summary className="career-entry__summary">
        <span className="career-entry__meta">
          <span className="career-entry__years">
            {role.startDate.slice(0, 4)} <span aria-hidden="true">/</span>{" "}
            {role.endDate?.slice(0, 4)}
          </span>
          <span className="career-entry__period">{formatExperiencePeriod(role)}</span>
        </span>
        <span className="career-entry__heading">
          <span className="career-entry__chapter">{role.chapter}</span>
          <strong>{role.title}</strong>
          {role.functionalArea && (
            <span className="career-entry__focus">{role.functionalArea}</span>
          )}
          <span className="career-entry__description">{role.summary}</span>
        </span>
        <span className="career-entry__toggle">
          <span className="career-entry__toggle-icon" aria-hidden="true">
            +
          </span>
          <span className="career-entry__toggle-label">Role details</span>
        </span>
      </summary>
      <div className="career-entry__body">
        <Employer role={role} />
        <p className="career-entry__location">
          {role.location} · {role.employmentType}
        </p>
        <RoleDetails role={role} />
      </div>
    </details>
  );
}
