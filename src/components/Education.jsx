import { GraduationCap } from "lucide-react";
import { education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="section section-anchor"
      aria-labelledby="education-title"
    >
      <div className="container experience-layout">
        <SectionHeading
          number="05"
          label="ACADEMIC BACKGROUND"
          title={<span id="education-title">Education.</span>}
        >
          The academic foundations behind my development journey.
        </SectionHeading>
        <div className="experience-timeline">
          {education.map((item) => (
            <article className="experience-card" key={item.id}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="experience-meta">
                <span>
                  <GraduationCap size={16} aria-hidden="true" />
                  Education
                </span>
                <span>{item.duration}</span>
              </div>
              <h3>{item.degree}</h3>
              <p className="experience-organization">{item.institution}</p>
              {item.graduation && (
                <dl className="education-graduation">
                  <dt>Graduation</dt>
                  <dd>{item.graduation}</dd>
                </dl>
              )}
              {item.description && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
