import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-26 max-nav:py-20 max-mobile:py-[65px] border-t border-t-[#202027] bg-[#0e0e13] scroll-mt-[25px]"
      aria-labelledby="experience-title"
    >
      <div
        className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)] grid grid-cols-[0.9fr_1.1fr] gap-25 items-center
        [&_.text-link]:mt-[23px] max-compact:gap-[55px] max-nav:gap-[38px] max-mobile:grid-cols-1
        max-mobile:gap-[35px] max-mobile:[&_.text-link]:mt-[15px]"
      >
        <div>
          <SectionHeading
            label="THE JOURNEY"
            title={<span id="experience-title">Learning by doing.</span>}
          >
            A place for hands-on experience, meaningful contributions, and
            lessons along the way.
          </SectionHeading>
          <a
            href="#projects"
            className="text-link px-0 py-[5px] inline-flex items-center gap-2 min-h-9 text-[#b7a1f4] text-[12px]
            font-medium bg-none border-0 [transition:color_180ms] hover:text-[#ddd0ff] [&_>_span]:text-[17px]"
          >
            Explore personal project examples{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-col gap-6 pl-7 border-l border-l-[#393044]">
          {experience.map((item) => (
            <article
              className="px-[26px] py-[26px] max-mobile:px-[22px] max-mobile:py-[22px] relative border border-[#302a3b]
              bg-[#15131b] rounded-[10px] [&_h3]:text-[17px] [&_h3]:font-medium [&_h3]:mt-[22px]
              [&_>_p:not(.experience-organization)]:text-[#a1a1aa]
              [&_>_p:not(.experience-organization)]:text-[12px]
              [&_>_p:not(.experience-organization)]:leading-[1.9] [&_>_p:not(.experience-organization)]:mt-4"
              key={item.id}
            >
              <span
                className="w-[9px] h-[9px] rounded-full bg-[#a78bfa] shadow-[0_0_0_6px_#20182d] absolute top-[34px]
                left-[-34px]"
                aria-hidden="true"
              />
              <div
                className="flex justify-between items-center flex-wrap gap-[10px] text-[#a99bbd] text-[9px]
                [&_>_span:first-child]:inline-flex [&_>_span:first-child]:items-center
                [&_>_span:first-child]:gap-[6px] [&_>_span:last-child]:text-[#9e96aa]
                [&_>_span:last-child]:font-mono [&_>_span:last-child]:text-[8px]"
              >
                <span>
                  <BriefcaseBusiness size={14} aria-hidden="true" />
                  {item.type}
                </span>
                <span>{item.duration}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="experience-organization text-[12px] text-[#b3a8c4] mt-[7px]">
                {item.organization}
              </p>
              <p>{item.description}</p>
              {item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-[7px] mt-[21px] max-mobile:gap-[6px] max-mobile:mt-[18px]">
                  {item.technologies.map((technology) => (
                    <span
                      className="px-[9px] py-[5px] max-mobile:px-[7px] max-mobile:py-1 text-[10px] border border-[#34323f]
                      bg-[#1c1b25] text-[#d1cdd9] rounded-[5px] leading-[1.5] max-mobile:text-[9px]"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
