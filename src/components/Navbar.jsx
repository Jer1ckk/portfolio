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
    <header className="site-header">
      <div className="container nav-inner">
        <a
          href="#home"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label={`${profile.name}, home`}
        >
          <span className="logo-symbol">
            <CodeXml size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span>
            {profile.name}
            <span className="logo-dot">.</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={`main-navigation ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {sections.map((section) => {
            const id = section.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {section}
              </a>
            );
          })}
        </nav>
        <div className="nav-actions">
          <SocialLink
            href={profile.github}
            icon={Github}
            label="GitHub"
            className="nav-github"
          />
          <button
            className="icon-button menu-toggle"
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
