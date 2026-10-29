import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section-anchor section-tinted"
      aria-labelledby="experience-title"
    >
      <div className="container experience-layout">
        <div>
          <SectionHeading
            number="04"
            label="THE JOURNEY"
            title={<span id="experience-title">Learning by doing.</span>}
          >
            A place for hands-on experience, meaningful contributions, and
            lessons along the way.
          </SectionHeading>
          <a href="#projects" className="text-link">
            Explore personal project examples{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="experience-timeline">
          {experience.map((item) => (
            <article className="experience-card" key={item.id}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="experience-meta">
                <span>
                  <BriefcaseBusiness size={14} aria-hidden="true" />
                  {item.type}
                </span>
                <span>{item.duration}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="experience-organization">{item.organization}</p>
              <p>{item.description}</p>
              {item.technologies.length > 0 && (
                <div className="skill-tags">
                  {item.technologies.map((technology) => (
                    <span className="badge" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              )}
              <span className="experience-placeholder">
                Your next chapter goes here.
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
