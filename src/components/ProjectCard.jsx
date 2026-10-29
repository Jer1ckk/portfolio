import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./SocialIcons";
import ProjectArtwork from "./ProjectArtwork";

export default function ProjectCard({ project, onDetails }) {
  const remainingFeatures = Math.max(0, project.features.length - 3);

  return (
    <article className="project-card">
      <button
        className="project-artwork-button"
        aria-label={`View details for ${project.title}`}
        onClick={() => onDetails(project)}
      >
        {project.image ? (
          <img
            className="project-image"
            src={project.image}
            alt={`${project.title} application screenshot`}
            loading="lazy"
            width="640"
            height="420"
          />
        ) : (
          <ProjectArtwork type={project.artwork} title={project.title} />
        )}
        <span className="artwork-open">
          <ArrowUpRight size={19} aria-hidden="true" />
        </span>
      </button>
      <div className="project-body">
        <div className="project-eyebrow">{project.eyebrow}</div>
        <h3>
          <button onClick={() => onDetails(project)}>{project.title}</button>
        </h3>
        <p className="project-description">{project.description}</p>
        <ul className="card-features" aria-label="Project features and status">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature.name}>
              <span>{feature.name}</span>
              {/* <span className={`card-feature-status status-${feature.status}`}>
                {feature.status === "unverified"
                  ? "Unverified"
                  : feature.status === "planned"
                    ? "Planned"
                    : "Implemented"}
              </span> */}
            </li>
          ))}
        </ul>
        {remainingFeatures > 0 && (
          <button
            className="text-link more-features"
            aria-haspopup="dialog"
            aria-label={`Show ${remainingFeatures} more ${remainingFeatures === 1 ? "feature" : "features"} for ${project.title}`}
            onClick={() => onDetails(project)}
          >
            +{remainingFeatures} more{" "}
            {remainingFeatures === 1 ? "feature" : "features"}
            <ArrowUpRight size={13} aria-hidden="true" />
          </button>
        )}
        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-card-bottom">
          <div className="project-footer">
            <span className="sample-status">
              <span />
              {project.status}
            </span>
            <button
              className="text-link"
              aria-haspopup="dialog"
              onClick={() => onDetails(project)}
            >
              Show more details <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
          {(project.github || project.demo) && (
            <div className="project-real-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={15} /> Repository{" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} /> Live demo{" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
