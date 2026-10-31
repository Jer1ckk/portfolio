import { useEffect, useState } from "react";
import { CodeXml, Menu, X } from "lucide-react";
import { Github } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

const sections = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -45% 0px", threshold: [0, 0.1, 0.3] },
    );
    sections.forEach((section) => {
      const node = document.getElementById(section.toLowerCase());
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#0b0b0ff2] border-b border-b-[#202027] [backdrop-filter:blur(14px)]">
      <div
        className="container mx-auto w-[min(1160px,_calc(100%_-_96px))] max-compact:w-[calc(100%_-_64px)]
        max-mobile:w-[calc(100%_-_40px)] h-[83px] flex items-center justify-between gap-6 max-nav:h-18
        max-mobile:gap-3"
      >
        <a
          href="#home"
          className="wordmark inline-flex items-center gap-[11px] text-[15px] font-semibold tracking-[-0.4px]
            whitespace-nowrap max-mobile:text-[14px]"
          onClick={() => setOpen(false)}
          aria-label={`${profile.name}, home`}
        >
          <span
            className="grid place-items-center w-[33px] h-[33px] text-[#ad8cfb] border border-[#3c2c57] rounded-lg
            bg-[#191324]"
          >
            <CodeXml size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span>
            {profile.name}
            <span className="text-violet">.</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={`flex items-center gap-[27px] max-compact:gap-5
            max-nav:absolute max-nav:top-[72px] max-nav:inset-x-0 max-nav:px-8 max-nav:py-5
            max-nav:bg-[#121117] max-nav:border-b max-nav:border-[#3b3049] max-nav:shadow-[0_20px_30px_#0004]
            ${open ? "max-nav:grid max-nav:grid-cols-2 max-nav:gap-[7px_20px]" : "max-nav:hidden"}`}
          aria-label="Main navigation"
        >
          {sections.map((section) => {
            const id = section.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative inline-flex items-center h-11 text-[12px] transition-colors duration-180
                  hover:text-[#f5f5f7] max-nav:px-3 max-nav:h-[45px] max-nav:rounded-[5px]
                  ${
                    active === id
                      ? "text-[#f5f5f7] after:content-[''] after:absolute after:size-1 after:rounded-full after:bg-violet after:left-[calc(50%_-_2px)] after:bottom-0 max-nav:text-[#c4b5fd] max-nav:bg-[#21192d] max-nav:after:hidden"
                      : "text-[#a1a1aa]"
                  }`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {section}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 max-mobile:gap-[10px]">
          <SocialLink
            href={profile.github}
            icon={Github}
            label="GitHub"
            className="px-[11px] py-[6px] max-mobile:px-[9px] max-mobile:py-[6px] max-narrow:px-0 max-narrow:py-0 border
              border-[#30303b] rounded-[7px] [&_.placeholder-label]:hidden max-mobile:text-[10px]
              max-mobile:[&_svg]:w-[14px] max-narrow:border-0 max-narrow:[&_>_span]:hidden"
          />
          <button
            className="w-10 h-10 hidden items-center justify-center bg-[#18181f] border border-[#31313e] rounded-lg
              hover:bg-[#22212c] max-nav:inline-flex"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
