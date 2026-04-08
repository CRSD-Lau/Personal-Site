"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

// ─── CUSTOMIZE: Nav links map to section IDs in each section file ──────────
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── CUSTOMIZE: Your name/logo text ───────────────────────────────────────
const SITE_NAME = "Neil Mitchell";
const SITE_INITIALS = "NM";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // ── Detect scroll position for header shadow/blur ─────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Intersection observer to highlight active nav link ────────────────
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ── Close mobile menu on nav click ────────────────────────────────────
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileOpen(false);
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  // ── Prevent body scroll when mobile menu is open ──────────────────────
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-soft-sm"
            : "bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
        role="banner"
      >
        <nav
          className={`container-wide section-padding flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label={`${SITE_NAME} — back to top`}
          >
            {/* Avatar/Logo mark — profile photo on mobile, initials on desktop */}
            <span
              className="sm:flex hidden h-9 w-9 items-center justify-center rounded-xl
                         bg-gradient-to-br from-brand-500 to-violet-600
                         text-sm font-bold text-white shadow-soft
                         group-hover:shadow-brand-glow transition-shadow duration-300"
              aria-hidden="true"
            >
              {SITE_INITIALS}
            </span>
            <span
              className="sm:hidden flex h-9 w-9 overflow-hidden rounded-xl shadow-soft
                         ring-2 ring-brand-500/40 group-hover:ring-brand-500/70 transition-all duration-300"
              aria-hidden="true"
            >
              <Image
                src="/profile.jpg"
                alt={SITE_NAME}
                width={36}
                height={36}
                className="object-cover object-top w-full h-full"
              />
            </span>
            <span className="hidden sm:block text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      activeSection === href.slice(1)
                        ? "text-brand-500 dark:text-brand-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                    }`}
                  aria-current={activeSection === href.slice(1) ? "page" : undefined}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4
                                 rounded-full bg-brand-500 dark:bg-brand-400"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: dark mode toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile: dark mode toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="flex items-center justify-center h-9 w-9 rounded-xl
                         text-slate-600 dark:text-slate-400
                         hover:bg-slate-100 dark:hover:bg-slate-800
                         transition-colors duration-200"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                // X icon
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                // Hamburger icon
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 glass shadow-soft-xl
                      flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                      transition-all duration-200
                      ${
                        activeSection === href.slice(1)
                          ? "bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                      }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary w-full justify-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
