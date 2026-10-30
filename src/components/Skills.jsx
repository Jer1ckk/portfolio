import { skills } from "../data/skills";
import { tools } from "../data/tools";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-26 max-nav:py-20 max-mobile:py-[65px] border-t border-t-[#202027] bg-[#0e0e13] scroll-mt-[25px]"
      aria-labelledby="skills-title"
    >
      <div className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)]">
        <div className="flex justify-between items-end gap-6 max-mobile:items-start">
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
          <span className="text-[#a1a1aa] text-[12px] pb-[7px] whitespace-nowrap [&_span]:ml-[10px] [&_span]:text-violet
            max-mobile:hidden">
            Always a work in progress <span aria-hidden="true">↗</span>
          </span>
        </div>
        <p className="content-note font-mono text-[#9994a7] text-[10px] leading-[1.8] mt-7 max-mobile:text-[9px]
          max-mobile:mt-6">
          Editable sample toolkit. Confirm the technologies you’ve used before
          publishing.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-5
          [&.tools-grid]:grid-cols-[repeat(auto-fit,_minmax(min(100%,_190px),_1fr))] max-compact:gap-3
          max-nav:grid-cols-[1fr_1fr] max-nav:gap-4 max-mobile:gap-3 max-narrow:grid-cols-1">
          {skills.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
        <div className="mt-[42px] [&_>_h3]:text-[20px] [&_>_h3]:font-medium [&_>_h3]:tracking-[-0.5px] [&_>_p]:mt-2
          [&_>_p]:text-[#a1a1aa] [&_>_p]:text-[12px] [&_>_p]:leading-[1.8]" aria-labelledby="tools-title">
          <h3 id="tools-title">Developer tools</h3>
          <p>The tools behind my development workflow.</p>
          <div className="tools-grid grid grid-cols-4 gap-4 mt-5
            [&.tools-grid]:grid-cols-[repeat(auto-fit,_minmax(min(100%,_190px),_1fr))] max-compact:gap-3
            max-nav:grid-cols-[1fr_1fr] max-nav:gap-4 max-mobile:gap-3 max-narrow:grid-cols-1">
            {tools.map((group) => (
              <SkillCard key={group.id} group={group} isTool />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
