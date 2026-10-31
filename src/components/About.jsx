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
      className="py-26 max-nav:py-20 max-mobile:py-[65px] border-t border-t-[#202027] scroll-mt-[25px]"
      aria-labelledby="about-title"
    >
      <div
        className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)] grid grid-cols-[1.1fr_1fr] gap-25 items-center
        max-compact:gap-[55px] max-nav:gap-[38px] max-mobile:grid-cols-1 max-mobile:gap-[35px]"
      >
        <div>
          <SectionHeading
            label="ABOUT ME"
            title={
              <span id="about-title">
                Curiosity drives me.
                <br />
                <span className="text-[#8f8f9d]">
                  Building keeps me learning.
                </span>
              </span>
            }
          />
          <div
            className="mt-6 text-[#a1a1aa] text-[13px] leading-[1.95] [&_p_+_p]:mt-4 [&_+_.text-link]:mt-5
            max-mobile:text-[13px]"
          >
            <p>{profile.introduction}</p>
            <p>
              My goal is to grow into a well-rounded full-stack developer:
              someone who understands both how a product looks and how it works.
              I’m drawn to frontend development, backend systems, APIs, and
              databases — and how they fit together.
            </p>
          </div>
          <a
            href="#skills"
            className="text-link px-0 py-[5px] inline-flex items-center gap-2 min-h-9 text-[#b7a1f4] text-[12px]
            font-medium bg-none border-0 [transition:color_180ms] hover:text-[#ddd0ff] [&_>_span]:text-[17px]"
          >
            Explore my toolkit <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="border-t border-t-[#282830]">
          {interests.map(({ icon: Icon, title, text }, index) => (
            <div
              className="px-0 py-[27px] max-mobile:py-[22px] flex items-start gap-[18px] border-b border-b-[#282830]
              [&_h3]:text-[13px] [&_h3]:font-medium [&_h3]:mt-[2px] [&_p]:text-[#a1a1aa] [&_p]:text-[12px]
              [&_p]:leading-[1.8] [&_p]:mt-[7px] [&_p]:max-w-[270px] max-mobile:[&_p]:max-w-[unset]"
              key={title}
            >
              <span
                className="grid place-items-center w-[43px] h-[43px] rounded-[9px] bg-[#17131f] border border-[#30243f]
                text-violet shrink-0"
              >
                <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="ml-auto text-[#9790a1] font-mono text-[9px] pt-[3px]">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
