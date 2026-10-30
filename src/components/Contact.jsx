import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[90px] max-nav:py-20 max-mobile:py-[65px] border-t border-t-[#202027] scroll-mt-[25px]"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)]">
        <div className="px-[66px] py-[62px] max-nav:px-[45px] max-nav:py-[45px] max-mobile:px-[25px] max-mobile:py-[35px]
          relative overflow-hidden border border-[#3a2c4d] rounded-[14px] bg-[#15111d]
          [&_h2]:text-[clamp(30px,_3.5vw,_43px)] [&_h2]:leading-[1.25] [&_h2]:font-medium
          [&_h2]:tracking-[-1.3px] [&_h2]:mt-[22px] [&_h2_>_span]:text-[#b39ae8] [&_p:not(.eyebrow)]:mt-[18px]
          [&_p:not(.eyebrow)]:text-[#aca4b7] [&_p:not(.eyebrow)]:text-[13px] [&_p:not(.eyebrow)]:leading-[1.9]
          [&_p:not(.eyebrow)]:max-w-[425px] max-mobile:rounded-[11px] max-mobile:[&_h2]:text-[31px]
          max-mobile:[&_h2]:tracking-[-1px] max-mobile:[&_p:not(.eyebrow)]:text-[12px]">
          <div className="absolute [background:radial-gradient(ellipse,_#6a3c9a24,_transparent_72%)] w-[750px] h-150
            top-[-170px] right-[-220px] pointer-events-none" aria-hidden="true" />
          <div className="relative z-1">
            <p className="eyebrow font-mono flex items-center gap-3 text-[#b6a0f4] text-[11px] font-medium tracking-[1.9px]
              leading-[1.6] [&_>_span:first-child:not(.label-line)]:text-[#9790a1] max-mobile:text-[9px]
              max-mobile:tracking-[1.5px]">
              <span>06 /</span> LET’S CONNECT
            </p>
            <h2 id="contact-title">
              Have something in mind?
              <br />
              <span>Let’s build it together.</span>
            </h2>
            <p>
              Have an opportunity, a project idea, or just want to talk about
              development? I’d be happy to hear from you.
            </p>
            {profile.email ? (
              <a
                className="px-5 py-3 max-narrow:px-[15px] min-h-[45px] rounded-[7px] inline-flex justify-center items-center
                  gap-[17px] text-[12px] font-semibold
                  [transition:background_180ms,_border-color_180ms,_transform_180ms]
                  hover:[transform:translateY(-2px)] max-narrow:gap-3 bg-[#8050df] text-white border border-[#9966f5]
                  shadow-[0_4px_16px_#8b5cf615] hover:bg-accent hover:border-[#b494fc] mt-[25px]"
                href={`mailto:${profile.email}`}
              >
                Say hello <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <div className="px-4 py-[13px] inline-flex items-center gap-3 mt-[25px] rounded-[7px] border border-[#5a466f]
                border-dashed text-[#ceb9ed] bg-[#221a2e] text-[13px] [&_small]:block [&_small]:font-mono
                [&_small]:text-[8px] [&_small]:text-[#b4a4c6] [&_small]:mt-[5px] max-mobile:text-[12px]
                max-mobile:[&_small]:text-[7px]">
                <Mail size={18} aria-hidden="true" />
                <span>
                  [Your email address]
                  <small>Add your email in src/data/profile.js</small>
                </span>
              </div>
            )}
            <div className="flex gap-[25px] mt-[22px] max-mobile:gap-[22px]">
              <SocialLink
                href={profile.github}
                icon={Github}
                label="GitHub"
                showArrow
              />
              <SocialLink
                href={profile.linkedin}
                icon={Linkedin}
                label="LinkedIn"
                showArrow
              />
            </div>
          </div>
          <div className="absolute right-[50px] top-[50%] [transform:translateY(-50%)_rotate(9deg)] flex gap-5
            text-[#a482d126] font-mono text-[185px] leading-[1] font-light select-none max-nav:right-[20px]
            max-nav:text-[150px] max-nav:opacity-[0.7] max-mobile:right-[-25px] max-mobile:top-auto
            max-mobile:bottom-[-15px] max-mobile:[transform:rotate(8deg)] max-mobile:text-[110px]
            max-mobile:opacity-[0.45]" aria-hidden="true">
            <span>{"{"}</span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
