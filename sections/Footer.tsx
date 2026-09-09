import { navigation, profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__layout">
        <div className="site-footer__identity">
          <p className="site-footer__name">{profile.name}</p>
          <p>{profile.headline}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href === "#works" ? "/works" : `/${item.href}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="/privacy">Privacy</a>
            </li>
          </ul>
        </nav>

        <div className="site-footer__meta">
          <p>© {new Date().getFullYear()} Neil Mitchell</p>
        </div>
      </div>
    </footer>
  );
}
