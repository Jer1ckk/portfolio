import {
  Braces,
  Code,
  Database,
  GitBranch,
  Monitor,
  Network,
  Palette,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";

const icons = {
  frontend: Monitor,
  backend: Braces,
  database: Database,
  tools: Wrench,
  mobile: Smartphone,
  "git-branch": GitBranch,
  code: Code,
  network: Network,
  workflow: Workflow,
  palette: Palette,
};

export default function SkillCard({ group, isTool = false }) {
  const Icon = icons[group.icon] ?? Wrench;
  const Heading = isTool ? "h4" : "h3";

  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
        {/* <span className="mono">
          {isTool ? "TOOLKIT" : group.confirmed ? "CONFIRMED" : "SAMPLE"}
        </span> */}
      </div>
      <Heading className="skill-card-title">{group.name}</Heading>
      <p>{group.description}</p>
      <div className="skill-tags">
        {group.technologies.map((technology) => (
          <span className="badge" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
