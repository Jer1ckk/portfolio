import { Bike, BriefcaseBusiness, Leaf, Search } from "lucide-react";

// Decorative editorial artwork, intentionally not represented as a real screenshot.
export default function ProjectArtwork({ type, title }) {
  return (
    <div
      className={`project-artwork artwork-${type}`}
      role="img"
      aria-label={`Illustrative artwork for ${title}; not an application screenshot`}
    >
      <div className="artwork-grid" aria-hidden="true" />
      {type === "market" && (
        <div className="market-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="market-emblem">
            <Leaf size={48} strokeWidth={1.2} />
          </div>
          <span className="artwork-wordmark">
            kase<span>app</span>
            <i>market module</i>
          </span>
          <span className="artwork-node node-one" />
          <span className="artwork-node node-two" />
          <span className="artwork-node node-three" />
        </div>
      )}
      {type === "bike" && (
        <div className="bike-art" aria-hidden="true">
          <div className="bike-orbit" />
          <span className="velo-word">
            velo<span>↗</span>
          </span>
          <Bike className="bike-drawing" size={145} strokeWidth={0.85} />
          <span className="bike-tag">A different way to move.</span>
        </div>
      )}
      {type === "jobs" && (
        <div className="jobs-art" aria-hidden="true">
          <div className="job-mini-card back-card">
            <span className="mini-company" />
            <span className="mini-line" />
            <span className="mini-line short" />
          </div>
          <div className="job-mini-card front-card">
            <span className="job-icon">
              <BriefcaseBusiness size={20} strokeWidth={1.5} />
            </span>
            <div>
              <span className="mini-line" />
              <span className="mini-line short" />
            </div>
            <span className="job-arrow">↗</span>
          </div>
          <div className="search-illustration">
            <Search size={13} />
            <span>Find your next opportunity</span>
          </div>
          <span className="finder-word">
            mhob<span>finder</span>
            <span className="finder-dot">.</span>
          </span>
        </div>
      )}
      <span className="artwork-label">ILLUSTRATIVE PREVIEW</span>
    </div>
  );
}
