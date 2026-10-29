import { Code2, Database, Workflow } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    icon: Code2,
    title: "Thoughtful interfaces",
    text: "Clear, responsive experiences that make complex things feel simple.",
  },
  {
    icon: Workflow,
    title: "Connected systems",
    text: "APIs and backend logic that bring the whole application together.",
  },
  {
    icon: Database,
    title: "Purposeful foundations",
    text: "Well-structured data and maintainable code that can grow with a product.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section section-anchor"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div>
          <SectionHeading
            number="01"
            label="ABOUT ME"
            title={
              <span id="about-title">
                Curiosity drives me.
                <br />
                <span className="muted-heading">
                  Building keeps me learning.
                </span>
              </span>
            }
          />
          <div className="about-copy">
            <p>{profile.introduction}</p>
            <p>
              My goal is to grow into a well-rounded full-stack developer:
              someone who understands both how a product looks and how it works.
              I’m drawn to frontend development, backend systems, APIs, and
              databases — and how they fit together.
            </p>
          </div>
          <a href="#skills" className="text-link">
            Explore my toolkit <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="interest-list">
          {interests.map(({ icon: Icon, title, text }, index) => (
            <div className="interest-item" key={title}>
              <span className="interest-icon">
                <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="interest-number">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
