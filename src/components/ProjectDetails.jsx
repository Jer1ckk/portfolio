import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Github } from "./SocialIcons";

export default function ProjectDetails({ project, onClose }) {
  const ref = useRef(null);
  const closeButtonRef = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeButtonRef.current.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  const sections = [
    ["Problem", project.problem],
    ["Solution", project.solution],
    ["My contribution", project.contribution],
    ["Architecture & decisions", project.architecture],
    ["Database & API integration", project.database],
    ["Challenges & solutions", project.challenges],
  ];

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const focusable = [
          ...event.currentTarget.querySelectorAll(
            'button:not([disabled]), a[href], [tabindex="0"]',
          ),
        ];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <div className="dialog-heading">
        <p className="eyebrow">
          PROJECT NOTES / {project.category.toUpperCase()}
        </p>
        <button
          ref={closeButtonRef}
          className="icon-button"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X size={22} />
        </button>
      </div>
      <h2 id="dialog-title">{project.title}</h2>
      <p className="dialog-intro">{project.description}</p>
      <div className="project-tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <h3 className="detail-heading">Features & implementation status</h3>
      <ul className="feature-list">
        {project.features.map((feature) => (
          <li key={feature.name}>
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <div className="detail-grid">
        {sections.map(([title, value]) => (
          <div className="detail-block" key={title}>
            <h3>{title}</h3>
            <p className={!value ? "placeholder-copy" : ""}>
              {value || "[Add verified project details]"}
            </p>
          </div>
        ))}
      </div>
      <div className="detail-block">
        <h3>Screenshots</h3>
        {project.image ? (
          <img
            className="detail-screenshot"
            src={project.image}
            alt={`${project.title} application screenshot`}
            loading="lazy"
          />
        ) : (
          <p className="placeholder-copy">
            [Add real application screenshots. Card artwork is illustrative.]
          </p>
        )}
      </div>
      <div className="dialog-links">
        {project.github ? (
          <a
            className="button button-secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} /> GitHub repository
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="missing-link">Repository URL not added</span>
        )}
        {project.demo ? (
          <a
            className="button button-primary"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo <ArrowUpRight size={17} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="missing-link">Live demo URL not added</span>
        )}
      </div>
    </dialog>
  );
}
