import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { profile } from "../data/profile";
import SocialLink from "./SocialLink";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section section-anchor contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-content">
            <p className="eyebrow">
              <span>05 /</span> LET’S CONNECT
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
                className="button button-primary contact-button"
                href={`mailto:${profile.email}`}
              >
                Say hello <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <div className="contact-placeholder">
                <Mail size={18} aria-hidden="true" />
                <span>
                  [Your email address]
                  <small>Add your email in src/data/profile.js</small>
                </span>
              </div>
            )}
            <div className="contact-socials">
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
          <div className="contact-decoration" aria-hidden="true">
            <span>{"{"}</span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
