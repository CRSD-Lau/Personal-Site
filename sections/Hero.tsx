"use client";

// ─── Hero Section ─────────────────────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF
// PHOTO:  Place headshot at /public/profile.jpg (already wired below).
// RESUME: Place PDF at /public/resume.pdf to enable the download button.

import { useEffect, useRef } from "react";
import Image from "next/image";

const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Neil Mitchell",
  headline: "Journey Specialist — Product & Regulatory\nat TD Insurance",
  tagline: "Shaping product intent into platform reality.",
  bio: "I'm a product and journey professional at TD Insurance with 6+ years of progressive experience across claims, operations, digital servicing, and platform delivery. I specialise in defining high-level requirements, leading cross-pod coordination, and driving complex Guidewire-based initiatives from intent to implementation.",
  cta_primary: { label: "View My Work", href: "#experience" },
  // ─── RESUME DOWNLOAD ──────────────────────────────────────────────────────
  // Place your PDF at: /public/resume.pdf
  // Filename expected: resume.pdf
  // To change button text: edit the `label` field below.
  cta_secondary: { label: "Download Resume", href: "/resume.pdf" },
  status: { dot: "bg-emerald-400", text: "Open to new conversations" },
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
      // ─── NOTE: Consider using a personal email for public websites ─────
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
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.15}px)`;
      el.style.opacity = `${1 - y / 600}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg"
      aria-label="Introduction"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full
                        bg-gradient-to-br from-brand-400/20 to-brand-600/15
                        blur-3xl dark:from-brand-500/15 dark:to-brand-700/10" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full
                        bg-gradient-to-tr from-brand-300/15 to-brand-500/10
                        blur-3xl dark:from-brand-600/10 dark:to-brand-800/8" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b8640' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div ref={heroRef} className="container-wide section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-32">

          {/* Left: text content */}
          <div className="flex flex-col gap-6 max-w-xl">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 w-fit rounded-full px-4 py-1.5
                           bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50
                           shadow-soft-sm backdrop-blur-sm text-sm font-medium text-slate-600 dark:text-slate-400
                           animate-fade-in">
              <span className={`h-2 w-2 rounded-full ${HERO_CONTENT.status.dot} animate-pulse`} aria-hidden="true" />
              {HERO_CONTENT.status.text}
            </div>

            {/* Name */}
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <p className="text-base font-medium text-brand-600 dark:text-brand-400 mb-1">
                {HERO_CONTENT.greeting}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                {HERO_CONTENT.name}
              </h1>
            </div>

            {/* Headline */}
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                {HERO_CONTENT.headline}
              </h2>
            </div>

            {/* Tagline */}
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "280ms", animationFillMode: "forwards" }}>
              <p className="text-lg font-medium gradient-text">
                {HERO_CONTENT.tagline}
              </p>
            </div>

            {/* Bio */}
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "360ms", animationFillMode: "forwards" }}>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {HERO_CONTENT.bio}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up opacity-0" style={{ animationDelay: "440ms", animationFillMode: "forwards" }}>
              <a
                href={HERO_CONTENT.cta_primary.href}
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(HERO_CONTENT.cta_primary.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {HERO_CONTENT.cta_primary.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href={HERO_CONTENT.cta_secondary.href} className="btn-secondary" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {HERO_CONTENT.cta_secondary.label}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 animate-fade-up opacity-0" style={{ animationDelay: "520ms", animationFillMode: "forwards" }}>
              {HERO_CONTENT.social.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center h-10 w-10 rounded-xl
                             text-slate-500 dark:text-slate-400
                             border border-slate-200 dark:border-slate-700
                             hover:text-brand-600 dark:hover:text-brand-400
                             hover:border-brand-300 dark:hover:border-brand-700
                             hover:bg-brand-50 dark:hover:bg-brand-950/30
                             transition-all duration-200"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: profile photo */}
          <div
            className="hidden lg:flex justify-center items-center relative
                       animate-fade-in opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            aria-hidden="true"
          >
            <div className="absolute h-[420px] w-[420px] rounded-full
                            border-2 border-dashed border-brand-200 dark:border-brand-900/50
                            animate-[spin_40s_linear_infinite]" />
            <div className="absolute h-[340px] w-[340px] rounded-full
                            border border-brand-300/50 dark:border-brand-800/50
                            animate-[spin_25s_linear_infinite_reverse]" />

            {/* PHOTO: /public/profile.jpg — replace by overwriting that file */}
            <div className="relative z-10 h-72 w-72 rounded-full
                            shadow-soft-xl border-4 border-white dark:border-slate-800
                            overflow-hidden bg-brand-50 dark:bg-brand-950/50
                            animate-float">
              <Image
                src="/profile.jpg"
                alt="Neil Mitchell — Journey Specialist, Product & Regulatory, TD Insurance"
                fill
                className="object-cover object-top"
                sizes="288px"
                priority
              />
            </div>

            {/* Floating badge — top */}
            <div className="absolute top-8 right-4 rounded-2xl px-3.5 py-2
                            bg-white dark:bg-slate-800 shadow-soft
                            border border-slate-100 dark:border-slate-700
                            text-xs font-semibold text-slate-700 dark:text-slate-300
                            flex items-center gap-2 z-20">
              <span className="text-base">🛡️</span> Guidewire Expert
            </div>

            {/* Floating badge — bottom */}
            <div className="absolute bottom-8 left-4 rounded-2xl px-3.5 py-2
                            bg-white dark:bg-slate-800 shadow-soft
                            border border-slate-100 dark:border-slate-700
                            text-xs font-semibold text-slate-700 dark:text-slate-300
                            flex items-center gap-2 z-20">
              <span className="text-base">🏦</span> TD Insurance · 6+ Years
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-500">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500
                            animate-[bounce_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
