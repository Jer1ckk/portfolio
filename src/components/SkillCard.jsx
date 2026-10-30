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
    <article className="px-[22px] py-[25px] max-compact:px-[17px] max-compact:py-[22px] max-nav:px-[25px] max-nav:py-[25px]
      max-mobile:px-[17px] max-mobile:py-[21px] bg-panel border border-[#2a2933] rounded-[10px]
      [&_>_p]:mt-2 [&_>_p]:text-[#a1a1aa] [&_>_p]:text-[11px] [&_>_p]:leading-[1.8] [&_>_p]:min-h-10
      max-nav:[&_>_p]:min-h-auto max-mobile:[&_>_p]:text-[11px] max-mobile:[&_>_p]:min-h-10
      max-narrow:[&_>_p]:min-h-auto">
      <div className="flex items-center justify-between text-[#ad94e9] mb-6 [&_.mono]:text-[8px] [&_.mono]:tracking-[1px]
        [&_.mono]:text-[#9790a5] max-mobile:mb-5">
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
        {/* <span className="mono font-mono">
          {isTool ? "TOOLKIT" : group.confirmed ? "CONFIRMED" : "SAMPLE"}
        </span> */}
      </div>
      <Heading className="text-[15px] font-medium max-mobile:text-[14px]">{group.name}</Heading>
      <p>{group.description}</p>
      <div className="flex flex-wrap gap-[7px] mt-[21px] max-mobile:gap-[6px] max-mobile:mt-[18px]">
        {group.technologies.map((technology) => (
          <span className="px-[9px] py-[5px] max-mobile:px-[7px] max-mobile:py-1 text-[10px] border border-[#34323f]
            bg-[#1c1b25] text-[#d1cdd9] rounded-[5px] leading-[1.5] max-mobile:text-[9px]" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
