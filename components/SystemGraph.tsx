import Image from "next/image";
import { profile } from "@/data/profile";

export default function SystemGraph() {
  return (
    <figure className="system-graph" aria-labelledby="system-graph-caption">
      <div className="system-graph__header">
        <span className="system-graph__brand">Career focus</span>
        <span className="system-graph__header-value">Project &amp; delivery leadership</span>
      </div>

      <div className="system-graph__field">
        <div className="system-graph__portrait">
          <Image
            src="/profile.webp"
            alt="Portrait of Neil Mitchell"
            fill
            sizes="(max-width: 768px) 220px, 320px"
            className="system-graph__image"
          />
        </div>

        <div className="system-graph__summary">
          <p>Current role</p>
          <strong>{profile.headline}</strong>
          <span>{profile.currentRoleSummary}</span>
        </div>
      </div>

      <figcaption id="system-graph-caption" className="system-graph__caption">
        <span>Organisation</span>
        <strong>{profile.organizationContext}</strong>
        <span>{profile.supportingContext}</span>
      </figcaption>
    </figure>
  );
}
