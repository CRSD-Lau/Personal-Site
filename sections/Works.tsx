import ProjectCard from "@/components/ProjectCard";
import { ArrowDownRightIcon } from "@/components/Icons";
import { projects } from "@/data/projects";

export default function Works() {
  return (
    <section id="works" className="section works" aria-labelledby="works-title">
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">Selected independent work</p>
            <h2 id="works-title" className="section-title">
              The thinking.
              <br />
              The work to back it up.
            </h2>
          </div>
          <p className="section-description">
            Outside my professional role, I build. These projects make my approach visible, from
            technical decisions to release readiness and responsible delivery.
          </p>
        </header>

        <div className="works__featured">
          {projects.slice(0, 1).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="works__collection-link">
          <p>Independent projects. Documented decisions. Practical delivery.</p>
          {/* Native navigation supports static hosts without RSC rewrite rules. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/works">
            Explore all work <ArrowDownRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
