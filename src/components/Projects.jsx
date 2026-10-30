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
      className="py-26 max-nav:py-20 max-mobile:py-[65px] border-t border-t-[#202027] scroll-mt-[25px]"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)]">
        <div className="flex justify-between items-end gap-6 max-mobile:items-start">
          <SectionHeading
            number="03"
            label="SELECTED WORK"
            title={<span id="projects-title">Ideas, brought into focus.</span>}
          >
            A closer look at the products and problems behind the code.
          </SectionHeading>
          <span className="mono font-mono text-[9px] tracking-[1px] text-[#8e859f] mb-[7px] max-mobile:hidden">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
        <div className="flex justify-between items-center gap-4 mt-[35px] mb-[25px] max-nav:items-start max-nav:flex-col
          max-nav:gap-3 max-mobile:mt-6 max-mobile:gap-[15px]">
          <div
            className="flex flex-wrap gap-[5px] max-mobile:gap-[3px]"
            role="group"
            aria-label="Filter projects by type"
          >
            {filters.map((item) => (
              <button
                key={item}
                className="min-h-9 border border-transparent rounded-[6px] px-[13px] py-2 text-[11px] text-[#a1a1aa]
                  bg-transparent transition-[color,background] duration-180 hover:text-[#e8e2f6] hover:bg-[#1a1722]
                  aria-pressed:text-[#c7b2fc] aria-pressed:bg-[#21192f] aria-pressed:border-[#47315f]
                  aria-pressed:hover:text-[#c7b2fc] aria-pressed:hover:bg-[#21192f] max-mobile:min-h-[42px]
                  max-mobile:px-3 max-narrow:px-[9px]"
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
        <div className="grid grid-cols-3 gap-[22px] max-compact:gap-4 max-nav:grid-cols-[1fr_1fr] max-nav:gap-5
          max-mobile:grid-cols-1 max-mobile:gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetails={setSelected}
            />
          ))}
        </div>
        <p className="max-mobile:px-5 text-center text-[#92909e] text-[11px] leading-[1.8] mt-8 max-mobile:text-[10px]">
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
