import Image from "next/image";
import { profile } from "@/data/profile";

export default function SystemGraph() {
  return (
    <figure className="portrait-scene" aria-labelledby="system-graph-caption">
      <div className="portrait-scene__orbits" aria-hidden="true">
        <svg viewBox="0 0 600 660" fill="none">
          <ellipse cx="307" cy="331" rx="282" ry="218" transform="rotate(-40 307 331)" />
          <ellipse cx="307" cy="331" rx="275" ry="236" transform="rotate(28 307 331)" />
          <circle cx="307" cy="331" r="264" />
          <path
            className="portrait-scene__path"
            d="M80 480 C-5 285 120 83 333 67 C505 59 604 237 550 401"
          />
          <circle className="portrait-scene__point" cx="80" cy="480" r="5" />
          <circle className="portrait-scene__point" cx="550" cy="401" r="5" />
        </svg>
      </div>
      <div className="portrait-scene__image">
        <Image
          src="/profile.webp"
          alt="Portrait of Neil Mitchell"
          fill
          sizes="(max-width: 560px) 280px, (max-width: 900px) 380px, 460px"
          preload
          fetchPriority="high"
        />
      </div>
      <span className="portrait-scene__label portrait-scene__label--context">Business context</span>
      <span className="portrait-scene__label portrait-scene__label--delivery">
        Technical delivery
      </span>
      <figcaption id="system-graph-caption" className="portrait-scene__caption">
        <span className="portrait-scene__monogram" aria-hidden="true">
          nm<span>.</span>
        </span>
        <span>
          <strong>{profile.name}</strong>
          <small>People. Perspective. Progress.</small>
        </span>
        <span className="portrait-scene__arrow" aria-hidden="true">
          ↗
        </span>
      </figcaption>
    </figure>
  );
}
