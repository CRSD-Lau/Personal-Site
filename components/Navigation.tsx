"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/profile";
import DarkModeToggle from "./DarkModeToggle";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
          )[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -78% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#hero">
          <span className="wordmark__portrait" aria-hidden="true">
            <Image src="/profile.webp" alt="" fill sizes="44px" />
          </span>
          <span className="wordmark__text">
            <strong>{profile.name}</strong>
            <small>Project &amp; Delivery Leadership</small>
          </span>
          <span className="sr-only">, back to top</span>
        </a>

        <ul className="site-nav__links" role="list">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeSection === sectionId ? "location" : undefined}
                  onClick={() => setActiveSection(sectionId)}
                >
                  <span aria-hidden="true">
                    {String(navigation.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="site-nav__actions">
          <DarkModeToggle />
          <a className="nav-contact" href="#contact">
            Connect
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          <ul role="list">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href.slice(1));
                    closeMenu();
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p>{profile.status}</p>
        </nav>
      )}
    </header>
  );
}
