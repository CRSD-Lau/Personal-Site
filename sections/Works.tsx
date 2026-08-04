import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Works() {
  return (
    <section id="works" className="section works" aria-labelledby="works-title">
      <div className="shell">
        <header className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">06 / Works</p>
            <h2 id="works-title" className="section-title">
              Independent work, held to the same delivery standard.
            </h2>
          </div>
          <p className="section-description">
            Personal projects where I can show the full system: technical scope, release evidence,
            responsible-use decisions, and what I learned by building it.
          </p>
        </header>

        <div className="works__featured">
          {projects.slice(0, 1).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
