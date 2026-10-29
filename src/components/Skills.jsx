import { skills } from "../data/skills";
import { tools } from "../data/tools";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section-anchor section-tinted"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="02"
            label="THE TECHNOLOGIES AND TOOLKITS"
            title={
              <span id="skills-title">
                Different tools. One connected stack.
              </span>
            }
          >
            From the first pixel to the database query.
          </SectionHeading>
          <span className="section-side-note">
            Always a work in progress <span aria-hidden="true">↗</span>
          </span>
        </div>
        <p className="content-note">
          Editable sample toolkit. Confirm the technologies you’ve used before
          publishing.
        </p>
        <div className="skills-grid">
          {skills.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
        <div className="tools-section" aria-labelledby="tools-title">
          <h3 id="tools-title">Developer tools</h3>
          <p>The tools behind my development workflow.</p>
          <div className="skills-grid tools-grid">
            {tools.map((group) => (
              <SkillCard key={group.id} group={group} isTool />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
