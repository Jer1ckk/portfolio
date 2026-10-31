import { GraduationCap } from "lucide-react";
import { education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="py-26 max-nav:py-20 max-mobile:py-[65px] border-t border-t-[#202027] scroll-mt-[25px]"
      aria-labelledby="education-title"
    >
      <div
        className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)] grid grid-cols-[0.9fr_1.1fr] gap-25 items-center
        max-compact:gap-[55px] max-nav:gap-[38px] max-mobile:grid-cols-1 max-mobile:gap-[35px]"
      >
        <SectionHeading
          label="ACADEMIC BACKGROUND"
          title={<span id="education-title">Education.</span>}
        >
          The academic foundations behind my development journey.
        </SectionHeading>
        <div className="flex flex-col gap-6 pl-7 border-l border-l-[#393044]">
          {education.map((item) => (
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
                  <GraduationCap size={16} aria-hidden="true" />
                  Education
                </span>
                <span>{item.duration}</span>
              </div>
              <h3>{item.degree}</h3>
              <p className="experience-organization text-[12px] text-[#b3a8c4] mt-[7px]">
                {item.institution}
              </p>
              {item.graduation && (
                <dl
                  className="mx-0 [&_dd]:mx-0 [&_dd]:my-0 flex flex-wrap gap-[6px_12px] mt-[18px] mb-0 pt-4 border-t
                  border-t-[#302a3b] text-[11px] leading-[1.8] [&_dt]:text-[#a1a1aa] [&_dd]:text-[#c4b5dd]"
                >
                  <dt>Graduation</dt>
                  <dd>{item.graduation}</dd>
                </dl>
              )}
              {item.description && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
