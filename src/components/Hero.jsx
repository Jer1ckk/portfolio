import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Layers3,
  Terminal,
} from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

// Keep the editor's repeated rows and responsive line numbers consistent.
function CodeLine({ number, children }) {
  return (
    <div
      className="flex whitespace-pre [&_b]:text-[#b298e9] [&_b]:font-normal [&_i]:text-[#a8c3a4] [&_i]:not-italic
      [&_em]:text-[#c5bfcf] [&_em]:not-italic"
    >
      <span
        className="w-[38px] shrink-0 text-[#65616f] text-[10px] text-center mr-3 select-none max-compact:w-[25px]
        max-compact:mr-2 max-nav:text-[8px] max-nav:w-[17px] max-nav:mr-[6px] max-mobile:w-[30px]
        max-mobile:text-[9px] max-mobile:mr-[9px] max-narrow:w-[22px]"
      >
        {String(number).padStart(2, "0")}
      </span>
      {children}
    </div>
  );
}

function DeveloperVisual() {
  return (
    <div
      className="px-0 max-mobile:mx-auto relative pt-10 pb-[65px] min-w-0
        max-mobile:w-[min(420px,_calc(100%_-_16px))] max-mobile:pt-[25px] max-mobile:pb-[65px]
        motion-safe:animate-editor-enter"
      aria-label="Illustrative code editor showing a developer profile with a placeholder name"
    >
      <div
        className="absolute inset-y-0 -inset-x-5
        [background-image:linear-gradient(#82709b0b_1px,_transparent_1px),_linear-gradient(90deg,_#82709b0b_1px,_transparent_1px)]
        [background-size:30px_30px] [mask-image:radial-gradient(ellipse,_black,_transparent_73%)]"
        aria-hidden="true"
      />
      <div
        className="relative w-full bg-[#121218] border border-[#32303f] rounded-xl
        shadow-[0_25px_70px_#0006,_0_0_65px_#8b5cf607] [transform:rotate(-2deg)] overflow-hidden"
      >
        <div
          className="px-[18px] py-[15px] max-nav:px-3 max-nav:py-[13px] flex items-center justify-between bg-[#19181f]
          border-b border-b-[#2b2935] text-[#9690a2] font-mono text-[10px] max-nav:[&_>_span]:text-[9px]"
        >
          <div
            className="flex gap-[5px] [&_i]:w-[7px] [&_i]:h-[7px] [&_i]:rounded-full [&_i]:bg-[#e27876]
            [&_i:nth-child(2)]:bg-[#c6aa67] [&_i:nth-child(3)]:bg-[#7ca98b]"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </div>
          <span>developer.js</span>
          <Braces size={15} aria-hidden="true" />
        </div>
        <div
          className="px-3 max-nav:px-[7px] max-mobile:py-[19px] pt-[23px] pb-[25px] font-mono text-[11px] leading-[2.05]
          text-[#cac5d6] max-compact:text-[10px] max-nav:text-[9px] max-mobile:text-[10px]
          max-mobile:leading-[1.9] max-narrow:text-[9px]"
        >
          <CodeLine number={1}>
            <span className="text-[#7c7989]">// A little about me</span>
          </CodeLine>
          <CodeLine number={2}>
            <span>
              <b>const</b> developer <em>=</em> {"{"}
            </span>
          </CodeLine>
          <CodeLine number={3}>
            <span>
              {" "}
              name: <i>'{profile.name}'</i>,
            </span>
          </CodeLine>
          <CodeLine number={4}>
            <span>
              {" "}
              focus: <i>'Full-stack', 'Mobile'</i>,
            </span>
          </CodeLine>
          <CodeLine number={5}>
            <span> interests: [</span>
          </CodeLine>
          <CodeLine number={6}>
            <span>
              {" "}
              <i>'Thoughtful interfaces'</i>,
            </span>
          </CodeLine>
          <CodeLine number={7}>
            <span>
              {" "}
              <i>'Reliable systems'</i>,
            </span>
          </CodeLine>
          <CodeLine number={8}>
            <span>
              {" "}
              <i>'Real-world problems'</i>
            </span>
          </CodeLine>
          <CodeLine number={9}>
            <span> ]</span>
          </CodeLine>
          <CodeLine number={10}>
            <span>{"}"};</span>
          </CodeLine>
          <CodeLine number={11}>
            <span />
          </CodeLine>
          <CodeLine number={12}>
            <span>
              <b>export default</b> developer;
            </span>
          </CodeLine>
        </div>
        <div
          className="px-4 py-[9px] flex justify-between border-t border-t-[#282632] font-mono text-[8px] text-[#a19aaf]
          [&_>_span:first-child]:flex [&_>_span:first-child]:items-center [&_>_span:first-child]:gap-[5px]"
        >
          <span>
            <span className="bg-[#c7b476] w-[5px] h-[5px] rounded-full" />{" "}
            JavaScript
          </span>
          <span>
            UTF-8 <span className="ml-[15px]">⑂ main</span>
          </span>
        </div>
      </div>
      <div
        className="py-[15px] max-nav:px-3 max-nav:py-[11px] max-mobile:px-[14px] max-mobile:py-3 absolute flex
        items-center gap-3 pr-5 pl-[14px] bottom-[47px] right-[-17px] bg-[#19171f] border border-[#3b324a]
        rounded-[9px] shadow-[0_12px_30px_#0005] [transform:rotate(1.5deg)] [&_strong]:block
        [&_strong]:text-[10px] [&_strong]:font-medium [&_strong]:text-[#ded9e7] [&_div_>_span]:block
        [&_div_>_span]:text-[9px] [&_div_>_span]:text-[#9991a8] [&_div_>_span]:mt-[5px]
        max-compact:right-[-4px] max-nav:gap-[9px] max-nav:bottom-[53px] max-nav:[&_strong]:text-[9px]
        max-nav:[&_div_>_span]:text-[8px] max-mobile:right-[-8px] max-mobile:bottom-[42px]
        max-mobile:[&_strong]:text-[10px] max-mobile:[&_div_>_span]:text-[9px]"
      >
        <span
          className="text-[#b396f7] bg-[#a78bfa14] border border-[#a78bfa22] rounded-lg w-[39px] h-[39px] grid
          place-items-center max-nav:w-[30px] max-nav:h-[30px] max-mobile:w-[35px] max-mobile:h-[35px]"
        >
          <Layers3 size={21} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <div>
          <strong>From interface to infrastructure.</strong>
          <span>One connected experience.</span>
        </div>
      </div>
      <div className="absolute bottom-[9px] left-[12px] flex items-center gap-[9px] font-mono text-[9px] text-[#898192]">
        <Terminal size={13} aria-hidden="true" />
        <span>think. build. learn. repeat.</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-[25px] relative overflow-clip [&::before]:content-[''] [&::before]:absolute
        [&::before]:w-175 [&::before]:h-150 [&::before]:right-[-300px] [&::before]:top-[-230px]
        [&::before]:[background:radial-gradient(ellipse,_#6d3bbd0d,_transparent_70%)]
        [&::before]:pointer-events-none"
      aria-labelledby="hero-title"
    >
      <div
        className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)]"
      >
        <div
          className="px-0 grid grid-cols-[1.14fr_1fr] items-center gap-11 pt-24 pb-17 wide:pt-30 wide:pb-[90px]
          max-compact:gap-[30px] max-nav:gap-[25px] max-nav:pt-[74px] max-nav:pb-[55px] max-mobile:grid-cols-1
          max-mobile:gap-5 max-mobile:pt-[55px] max-mobile:pb-6"
        >
          <div className="motion-safe:animate-enter">
            <p
              className="eyebrow font-mono flex items-center gap-3 text-[#b6a0f4] text-[10px] font-medium tracking-[2px]
              leading-[1.6] [&_>_span:first-child:not(.label-line)]:text-[#9790a1] max-mobile:text-[9px]
              max-mobile:tracking-[1.5px] mb-[25px] max-mobile:mb-[23px]"
            >
              <span className="label-line inline-block w-[22px] h-[1px] bg-[#a78bfa]" />{" "}
              FULL-STACK DEVELOPER
            </p>
            <h1
              className="mx-0 my-0 text-[clamp(40px,_4.6vw,_61px)] leading-[1.13] tracking-[-2.65px] font-semibold
              [&_>_span:not(.accent-period)]:text-violet max-compact:text-[48px] max-compact:tracking-[-2px]
              max-nav:text-[42px] max-mobile:max-w-[530px] max-mobile:text-[clamp(40px,_8vw,_55px)]
              max-mobile:tracking-[-1.9px]"
              id="hero-title"
            >
              Building useful
              <br className="max-mobile:hidden" /> products from
              <br className="max-mobile:hidden" /> <span>frontend</span> to
              backend
              <span className="text-violet">.</span>
            </h1>
            <p
              className="mt-[25px] max-w-[450px] text-[14px] text-[#a1a1aa] leading-[1.9] max-nav:text-[13px]
              max-mobile:max-w-[480px] max-mobile:mt-[23px] max-mobile:text-[13px]"
            >
              Responsive interfaces. Reliable APIs. Database-driven
              applications. I’m focused on connecting the pieces to create
              better digital experiences.
            </p>
            <div className="flex flex-wrap gap-3 mt-[30px] max-mobile:mt-[25px] max-narrow:gap-[9px]">
              <a
                href="#projects"
                className="px-5 py-3 max-narrow:px-[15px] min-h-[45px] rounded-[7px] inline-flex justify-center items-center
                gap-[17px] text-[12px] font-semibold
                [transition:background_180ms,_border-color_180ms,_transform_180ms]
                hover:[transform:translateY(-2px)] max-narrow:gap-3 bg-[#8050df] text-white border border-[#9966f5]
                shadow-[0_4px_16px_#8b5cf615] hover:bg-accent hover:border-[#b494fc]"
              >
                View Projects <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="px-5 py-3 max-narrow:px-[15px] min-h-[45px] rounded-[7px] inline-flex justify-center items-center
                gap-[17px] text-[12px] font-semibold
                [transition:background_180ms,_border-color_180ms,_transform_180ms]
                hover:[transform:translateY(-2px)] max-narrow:gap-3 bg-[#15151b] border border-[#34343f]
                text-[#e0dfe6] hover:bg-[#20202a] hover:border-[#666070]"
              >
                Contact Me <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div
              className="flex items-center gap-[18px] mt-[26px] max-mobile:mt-5 max-narrow:gap-[10px]
              max-narrow:[&_.social-link]:text-[11px]"
            >
              <SocialLink href={profile.github} icon={Github} label="GitHub" />
              <span className="h-[13px] w-[1px] bg-[#34343e]" />
              <SocialLink
                href={profile.linkedin}
                icon={Linkedin}
                label="LinkedIn"
              />
            </div>
          </div>
          <DeveloperVisual />
        </div>
        <div
          className="flex items-center justify-between pt-6 pb-7 text-[#92929f] text-[10px] [&_.mono]:text-[9px]
          [&_.mono]:tracking-[1.2px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-3 [&_a]:min-h-8
          [&_a:hover]:text-[#c4b5fd] max-mobile:border-t max-mobile:border-t-[#22212b] max-mobile:gap-[15px]
          max-mobile:pt-[15px] max-mobile:pb-[19px] max-mobile:[&_.mono]:text-[7px]
          max-mobile:[&_.mono]:leading-[1.8] max-mobile:[&_.mono]:max-w-[135px] max-mobile:[&_a]:text-[9px]
          max-mobile:[&_a]:gap-2"
        >
          <span className="mono font-mono">
            CURIOUS MIND. PRACTICAL SOLUTIONS.
          </span>
          <a href="#about">
            A little more about me <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
