import { ArrowUp, CodeXml } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a href="#home" className="wordmark">
            <CodeXml size={21} aria-hidden="true" />
            <span>
              {profile.name}
              <span className="logo-dot">.</span>
            </span>
          </a>
          <p>Built with care. Always learning.</p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
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
          <span className="mono footer-stack">REACT / TAILWIND / COFFEE</span>
        </div>
      </div>
    </footer>
  );
}
