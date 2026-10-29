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

function DeveloperVisual() {
  return (
    <div
      className="developer-visual"
      aria-label="Illustrative code editor showing a developer profile with a placeholder name"
    >
      <div className="visual-grid" aria-hidden="true" />
      <div className="code-window">
        <div className="editor-toolbar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>developer.js</span>
          <Braces size={15} aria-hidden="true" />
        </div>
        <div className="editor-content">
          <div className="code-line">
            <span className="line-number">01</span>
            <span className="code-comment">// A little about me</span>
          </div>
          <div className="code-line">
            <span className="line-number">02</span>
            <span>
              <b>const</b> developer <em>=</em> {"{"}
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">03</span>
            <span>
              {" "}
              name: <i>'{profile.name}'</i>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">04</span>
            <span>
              {" "}
              focus: <i>'Full-stack', 'Mobile'</i>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">05</span>
            <span> interests: [</span>
          </div>
          <div className="code-line">
            <span className="line-number">06</span>
            <span>
              {" "}
              <i>'Thoughtful interfaces'</i>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">07</span>
            <span>
              {" "}
              <i>'Reliable systems'</i>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">08</span>
            <span>
              {" "}
              <i>'Real-world problems'</i>
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">09</span>
            <span> ]</span>
          </div>
          <div className="code-line">
            <span className="line-number">10</span>
            <span>{"}"};</span>
          </div>
          <div className="code-line">
            <span className="line-number">11</span>
            <span />
          </div>
          <div className="code-line">
            <span className="line-number">12</span>
            <span>
              <b>export default</b> developer;
            </span>
          </div>
        </div>
        <div className="editor-status">
          <span>
            <span className="tiny-dot" /> JavaScript
          </span>
          <span>
            UTF-8 <span className="status-branch">⑂ main</span>
          </span>
        </div>
      </div>
      <div className="floating-note">
        <span className="floating-icon">
          <Layers3 size={21} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <div>
          <strong>From interface to infrastructure.</strong>
          <span>One connected experience.</span>
        </div>
      </div>
      <div className="visual-caption">
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
      className="hero section-anchor"
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-label">
              <span className="label-line" /> FULL-STACK DEVELOPER
            </p>
            <h1 id="hero-title">
              Building useful
              <br className="desktop-break" /> products from
              <br className="desktop-break" /> <span>frontend</span> to backend
              <span className="accent-period">.</span>
            </h1>
            <p className="hero-description">
              Responsive interfaces. Reliable APIs. Database-driven
              applications. I’m focused on connecting the pieces to create
              better digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                View Projects <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials">
              <SocialLink href={profile.github} icon={Github} label="GitHub" />
              <span className="social-divider" />
              <SocialLink
                href={profile.linkedin}
                icon={Linkedin}
                label="LinkedIn"
              />
            </div>
          </div>
          <DeveloperVisual />
        </div>
        <div className="hero-bottom">
          <span className="mono">CURIOUS MIND. PRACTICAL SOLUTIONS.</span>
          <a href="#about">
            A little more about me <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
