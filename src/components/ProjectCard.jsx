import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./SocialIcons";
import ProjectArtwork from "./ProjectArtwork";

export default function ProjectCard({ project, onDetails }) {
  const remainingFeatures = Math.max(0, project.features.length - 3);

  return (
    <article className="flex flex-col bg-[#121217] border border-[#2b2935] rounded-[11px] overflow-hidden
      [transition:transform_200ms,_border-color_200ms,_box-shadow_200ms]
      hover:[transform:translateY(-4px)] hover:border-[#524563] hover:shadow-[0_14px_40px_#0003]">
      <button
        className="px-0 py-0 shrink-0 block relative w-full bg-transparent border-0 border-b border-b-[#2b2935]
          focus-visible:outline-offset-[-5px]"
        aria-label={`View details for ${project.title}`}
        onClick={() => onDetails(project)}
      >
        {project.image ? (
          <img
            className="w-full aspect-[1.6] object-cover relative overflow-hidden block"
            src={project.image}
            alt={`${project.title} application screenshot`}
            loading="lazy"
            width="640"
            height="420"
          />
        ) : (
          <ProjectArtwork type={project.artwork} title={project.title} />
        )}
        <span className="absolute top-[12px] right-[12px] w-[29px] h-[29px] border border-[#ffffff25] rounded-full
          bg-[#11111125] grid place-items-center text-[#d7dce0]">
          <ArrowUpRight size={19} aria-hidden="true" />
        </span>
      </button>
      <div className="px-[22px] [&_h3_button]:px-0 [&_h3_button]:py-0 max-compact:px-[18px] max-mobile:px-[23px] flex
        flex-1 flex-col pt-6 pb-3 [&_h3]:text-[17px] [&_h3]:font-medium [&_h3]:mt-[11px]
        [&_h3]:tracking-[-0.45px] [&_h3_button]:border-0 [&_h3_button]:bg-none [&_h3_button]:text-left
        [&_h3_button:hover]:text-[#b99ef3] max-mobile:pt-[25px] max-mobile:pb-[13px]
        max-mobile:[&_h3]:text-[19px]">
        <div className="font-mono text-[7px] text-[#a7a0b1] tracking-[1.2px] max-mobile:text-[8px]">{project.eyebrow}</div>
        <h3>
          <button onClick={() => onDetails(project)}>{project.title}</button>
        </h3>
        <p className="text-[12px] leading-[1.85] text-[#a1a1aa] mt-3 min-h-[67px] max-mobile:min-h-0
          max-mobile:text-[13px]">{project.description}</p>
        <ul className="px-0 mx-0 [&_li]:py-[5px] list-none pt-[10px] pb-0 mt-[19px] mb-0 border-t border-t-[#2a2732]
          [&_li]:flex [&_li]:justify-between [&_li]:items-baseline [&_li]:gap-2 [&_li]:text-[#b8b1c3]
          [&_li]:text-[10px] [&_li]:leading-[1.6]" aria-label="Project features and status">
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
            className="text-link px-0 py-[5px] inline-flex items-center gap-2 min-h-9 text-[#b7a1f4] text-[10px]
              font-medium bg-none border-0 [transition:color_180ms] hover:text-[#ddd0ff] [&_>_span]:text-[17px]
              mt-1"
            aria-haspopup="dialog"
            aria-label={`Show ${remainingFeatures} more ${remainingFeatures === 1 ? "feature" : "features"} for ${project.title}`}
            onClick={() => onDetails(project)}
          >
            +{remainingFeatures} more{" "}
            {remainingFeatures === 1 ? "feature" : "features"}
            <ArrowUpRight size={13} aria-hidden="true" />
          </button>
        )}
        <div className="[&_>_span]:px-[7px] [&_>_span]:py-1 flex flex-wrap gap-[6px] mt-[19px] [&_>_span]:text-[#bcb2cd]
          [&_>_span]:bg-[#221d2b] [&_>_span]:border [&_>_span]:border-[#31283d] [&_>_span]:rounded-sm
          [&_>_span]:text-[9px] [&_>_span]:leading-[1.5] max-mobile:[&_>_span]:text-[10px]">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="mt-auto pt-[23px]">
          <div className="flex items-center justify-between gap-[10px] pt-[13px] mt-0 border-t border-t-[#2a2732]
            [&_.text-link]:text-[10px] max-mobile:[&_.text-link]:text-[11px]">
            <span className="inline-flex items-center gap-[6px] text-[#b4a6c8] text-[9px] [&_>_span]:inline-block [&_>_span]:h-1
              [&_>_span]:w-1 [&_>_span]:bg-[#aa8bda] [&_>_span]:rounded-full max-mobile:text-[10px]">
              <span />
              {project.status}
            </span>
            <button
              className="text-link px-0 py-[5px] inline-flex items-center gap-2 min-h-9 text-[#b7a1f4] text-[12px]
                font-medium bg-none border-0 [transition:color_180ms] hover:text-[#ddd0ff] [&_>_span]:text-[17px]"
              aria-haspopup="dialog"
              onClick={() => onDetails(project)}
            >
              Show more details <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
          {(project.github || project.demo) && (
            <div className="flex gap-[15px] pt-3 [&_a]:inline-flex [&_a]:gap-[5px] [&_a]:items-center [&_a]:text-[#c4b5fd]
              [&_a]:text-[11px] [&_a]:min-h-9">
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
