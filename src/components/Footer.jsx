import { ArrowUp, CodeXml } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="px-0 border-t border-t-[#24232c] pt-[35px] pb-[23px]">
      <div className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)]">
        <div className="flex justify-between items-center gap-6 pb-[26px] [&_.wordmark]:text-[13px]
          [&_.wordmark_>_svg]:text-[#b094e9] [&_>_p]:text-[11px] [&_>_p]:text-[#a1a1aa] max-mobile:flex-wrap
          max-mobile:gap-3 max-mobile:[&_>_p]:[order:3] max-mobile:[&_>_p]:w-full
          max-mobile:[&_>_p]:text-[10px] max-mobile:[&_.wordmark]:text-[12px]">
          <a href="#home" className="wordmark inline-flex items-center gap-[11px] text-[15px] font-semibold tracking-[-0.4px]
            whitespace-nowrap max-mobile:text-[14px]">
            <CodeXml size={21} aria-hidden="true" />
            <span>
              {profile.name}
              <span className="text-violet">.</span>
            </span>
          </a>
          <p>Built with care. Always learning.</p>
          <a href="#home" className="inline-flex items-center gap-[10px] text-[10px] text-[#b3adbf] min-h-9 hover:text-[#c4b5fd]
            max-mobile:text-[9px]">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="border-t border-t-[#22212a] pt-[19px] flex justify-between items-center gap-6 text-[#94909e]
          text-[9px] [&_>_div]:flex [&_>_div]:gap-5 [&_.social-link]:text-[10px] [&_.social-link_svg]:w-[13px]
          [&_.placeholder-label]:text-[8px] max-mobile:items-start max-mobile:flex-col max-mobile:gap-3
          max-mobile:text-[9px] max-mobile:pt-[22px]">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <div>
            <SocialLink href={profile.github} icon={Github} label="GitHub" />
            <SocialLink
              href={profile.linkedin}
              icon={Linkedin}
              label="LinkedIn"
            />
          </div>
          <span className="mono font-mono text-[8px] tracking-[0.9px] max-nav:hidden">REACT / TAILWIND / COFFEE</span>
        </div>
      </div>
    </footer>
  );
}
