import { useState } from "react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const filters = ["All projects", "Full Stack", "Frontend", "Backend", "Mobile"];

export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const [selected, setSelected] = useState(null);
  const visibleProjects = projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className="section section-anchor"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="03"
            label="SELECTED WORK"
            title={<span id="projects-title">Ideas, brought into focus.</span>}
          >
            A closer look at the products and problems behind the code.
          </SectionHeading>
          <span className="project-count mono">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
        <div className="project-controls">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects by type"
          >
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "selected" : ""}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <p className="sr-only" role="status">
          Showing {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetails={setSelected}
            />
          ))}
        </div>
        <p className="projects-footnote">
          Good software starts with a real problem. These examples are ready for
          your real project stories.
        </p>
      </div>
      {selected && (
        <ProjectDetails
          key={selected.id}
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
