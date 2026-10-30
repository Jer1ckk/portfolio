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
      className="px-8 py-8 mx-auto my-auto max-mobile:px-[22px] max-mobile:py-[22px] fixed inset-0
        w-[min(730px,_calc(100%_-_36px))] max-h-[calc(100dvh_-_48px)] border border-[#51415f] rounded-[14px]
        bg-[#15121c] text-[#f5f5f7] shadow-[0_25px_120px_#0009] overscroll-contain
        [&::backdrop]:bg-[#050509ce] [&::backdrop]:[backdrop-filter:blur(6px)] [&_h2]:text-[29px]
        [&_h2]:font-medium [&_h2]:tracking-[-1px] [&_h2]:mt-[15px] max-mobile:max-h-[calc(100dvh_-_30px)]
        max-mobile:w-[calc(100%_-_24px)] max-mobile:[&_h2]:text-[26px]"
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
      <div className="flex items-center justify-between gap-3 [&_.eyebrow]:text-[9px] max-mobile:[&_.eyebrow]:text-[8px]">
        <p className="eyebrow font-mono flex items-center gap-3 text-[#b6a0f4] text-[11px] font-medium tracking-[1.9px]
          leading-[1.6] [&_>_span:first-child:not(.label-line)]:text-[#9790a1] max-mobile:text-[9px]
          max-mobile:tracking-[1.5px]">
          PROJECT NOTES / {project.category.toUpperCase()}
        </p>
        <button
          ref={closeButtonRef}
          className="w-10 h-10 inline-flex items-center justify-center bg-[#18181f] border border-[#31313e] rounded-lg
            hover:bg-[#22212c]"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X size={22} />
        </button>
      </div>
      <h2 id="dialog-title">{project.title}</h2>
      <p className="mt-[14px] text-[13px] text-[#b6b0c0] leading-[1.8]">{project.description}</p>
      <div className="[&_>_span]:px-[7px] [&_>_span]:py-1 flex flex-wrap gap-[6px] mt-[19px] [&_>_span]:text-[#bcb2cd]
        [&_>_span]:bg-[#221d2b] [&_>_span]:border [&_>_span]:border-[#31283d] [&_>_span]:rounded-sm
        [&_>_span]:text-[9px] [&_>_span]:leading-[1.5] max-mobile:[&_>_span]:text-[10px]">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <h3 className="mt-[25px] text-[13px] font-medium">Features & implementation status</h3>
      <ul className="px-0 py-0 mx-0 [&_>_li]:px-0 [&_>_li]:py-3 list-none mt-3 mb-6 [&_>_li]:flex
        [&_>_li]:justify-between [&_>_li]:gap-[15px] [&_>_li]:items-center [&_>_li]:border-b
        [&_>_li]:border-b-[#302939] [&_>_li]:text-[12px] max-mobile:[&_>_li]:text-[11px]">
        {project.features.map((feature) => (
          <li key={feature.name}>
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-[1fr_1fr] gap-[23px] mb-[25px] max-mobile:grid-cols-1 max-mobile:gap-5">
        {sections.map(([title, value]) => (
          <div className="[&_h3]:font-medium [&_h3]:text-[#e0d9e9] [&_h3]:text-[12px] [&_p]:text-[#aaa0b8] [&_p]:text-[11px]
            [&_p]:leading-[1.9] [&_p]:mt-2 [&_p.placeholder-copy]:text-[#ada0bc] [&_p.placeholder-copy]:italic" key={title}>
            <h3>{title}</h3>
            <p className={!value ? "placeholder-copy" : ""}>
              {value || "[Add verified project details]"}
            </p>
          </div>
        ))}
      </div>
      <div className="[&_h3]:font-medium [&_h3]:text-[#e0d9e9] [&_h3]:text-[12px] [&_p]:text-[#aaa0b8] [&_p]:text-[11px]
        [&_p]:leading-[1.9] [&_p]:mt-2 [&_p.placeholder-copy]:text-[#ada0bc] [&_p.placeholder-copy]:italic">
        <h3>Screenshots</h3>
        {project.image ? (
          <img
            className="block w-full h-auto mt-3 rounded-lg"
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
      <div className="flex items-center flex-wrap gap-4 mt-[27px] pt-5 border-t border-t-[#302939]
        max-mobile:gap-[9px_20px]">
        {project.github ? (
          <a
            className="px-5 py-3 max-narrow:px-[15px] min-h-[45px] rounded-[7px] inline-flex justify-center items-center
              gap-[17px] text-[12px] font-semibold
              [transition:background_180ms,_border-color_180ms,_transform_180ms]
              hover:[transform:translateY(-2px)] max-narrow:gap-3 bg-[#15151b] border border-[#34343f]
              text-[#e0dfe6] hover:bg-[#20202a] hover:border-[#666070]"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} /> GitHub repository
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="px-0 py-2 text-[10px] text-[#a89ab8]">Repository URL not added</span>
        )}
        {project.demo ? (
          <a
            className="px-5 py-3 max-narrow:px-[15px] min-h-[45px] rounded-[7px] inline-flex justify-center items-center
              gap-[17px] text-[12px] font-semibold
              [transition:background_180ms,_border-color_180ms,_transform_180ms]
              hover:[transform:translateY(-2px)] max-narrow:gap-3 bg-[#8050df] text-white border border-[#9966f5]
              shadow-[0_4px_16px_#8b5cf615] hover:bg-accent hover:border-[#b494fc]"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo <ArrowUpRight size={17} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="px-0 py-2 text-[10px] text-[#a89ab8]">Live demo URL not added</span>
        )}
      </div>
    </dialog>
  );
}
