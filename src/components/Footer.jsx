import { ArrowUp, CodeXml } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="px-0 border-t border-t-[#24232c] pt-[35px] pb-[23px]">
      <div
        className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)]"
      >
        <div
          className="flex justify-between items-center gap-6 pb-[26px] [&_.wordmark]:text-[13px]
          [&_.wordmark_>_svg]:text-[#b094e9] [&_>_p]:text-[11px] [&_>_p]:text-[#a1a1aa] max-mobile:flex-wrap
          max-mobile:gap-3 max-mobile:[&_>_p]:[order:3] max-mobile:[&_>_p]:w-full
          max-mobile:[&_>_p]:text-[10px] max-mobile:[&_.wordmark]:text-[12px]"
        >
          <a
            href="#home"
            className="wordmark inline-flex items-center gap-[11px] text-[15px] font-semibold tracking-[-0.4px]
            whitespace-nowrap max-mobile:text-[14px]"
          >
            <CodeXml size={21} aria-hidden="true" />
            <span>
              {profile.name}
              <span className="text-violet">.</span>
            </span>
          </a>
          <p>Built with care. Always learning.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-[10px] text-[10px] text-[#b3adbf] min-h-9 hover:text-[#c4b5fd]
            max-mobile:text-[9px]"
          >
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
