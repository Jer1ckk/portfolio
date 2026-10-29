import { ArrowUpRight } from "lucide-react";

export default function SocialLink({
  href,
  icon: Icon,
  label,
  className = "",
  showArrow = false,
}) {
  if (!href) {
    return (
      <span
        className={`social-link unavailable ${className}`}
        title={`Add your ${label} URL in src/data/profile.js`}
      >
        <Icon size={17} aria-hidden="true" />
        <span>
          {label}
          <span className="placeholder-label"> · add link</span>
        </span>
      </span>
    );
  }
  return (
    <a
      className={`social-link ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={17} aria-hidden="true" />
      <span>{label}</span>
      {showArrow && <ArrowUpRight size={16} aria-hidden="true" />}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
