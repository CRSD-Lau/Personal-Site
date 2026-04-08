// ─── Footer ───────────────────────────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF

const FOOTER_DATA = {
  name: "Neil Mitchell",
  tagline: "Journey Specialist — Product & Regulatory · TD Insurance",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/neil-mitchell-a6038b171",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:neil.mitchell@tdinsurance.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      ),
    },
  ],
  year: new Date().getFullYear(),
};

export default function Footer() {
  return (
    <footer
      className="border-t border-slate-200 dark:border-slate-800
                 bg-white dark:bg-slate-950/80 py-12"
      role="contentinfo"
    >
      <div className="container-wide section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{FOOTER_DATA.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500">{FOOTER_DATA.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-1 md:gap-0" role="list">
              {FOOTER_DATA.nav.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}
                    className="px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-500
                               hover:text-slate-900 dark:hover:text-slate-100
                               transition-colors duration-200 rounded-lg
                               hover:bg-slate-100 dark:hover:bg-slate-800">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2">
              {FOOTER_DATA.social.map(({ label, href, icon }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center h-8 w-8 rounded-lg
                             text-slate-400 dark:text-slate-600
                             hover:text-brand-500 dark:hover:text-brand-400
                             hover:bg-slate-100 dark:hover:bg-slate-800
                             transition-all duration-200"
                  aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              © {FOOTER_DATA.year} {FOOTER_DATA.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
