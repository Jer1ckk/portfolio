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
        className={`social-link inline-flex items-center gap-2 text-[12px] text-[#92929f] min-h-[34px] [transition:color_180ms] ${className}`}
        title={`Add your ${label} URL in src/data/profile.js`}
      >
        <Icon size={17} aria-hidden="true" />
        <span>
          {label}
          <span className="placeholder-label text-[10px] text-[#96919e]"> · add link</span>
        </span>
      </span>
    );
  }
  return (
    <a
      className={`social-link inline-flex items-center gap-2 text-[12px] text-[#b1b1bd] min-h-[34px] [transition:color_180ms] hover:text-[#c4b5fd] ${className}`}
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
