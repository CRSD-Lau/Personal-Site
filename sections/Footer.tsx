import { LinkedInIcon } from "@/components/Icons";
import { navigation, profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__layout">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p>{profile.headline}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__meta">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Neil Mitchell on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <p>© {new Date().getFullYear()} Neil Mitchell</p>
        </div>
      </div>
    </footer>
  );
}
