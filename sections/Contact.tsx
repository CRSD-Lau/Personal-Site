"use client";

// ─── Contact Section ──────────────────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF — contact details
// NOTE: neil_mitchell89@hotmail.com is a corporate email.
//       Consider using a personal email for a public-facing website if preferred.

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

const CONTACT_DATA = {
  label: "Contact",
  heading: "Let's connect.",
  subheading:
    "Whether it's a new opportunity, a product conversation, or just a mutual interest in insurance platforms — I'd love to hear from you.",

  // ─── SOURCE: Resume — neil_mitchell89@hotmail.com | 506-639-9083 ─────────
  email: "neil_mitchell89@hotmail.com",
  linkedin: "https://www.linkedin.com/in/neil-mitchell-a6038b171",
  resume: "/resume.pdf",  // Place your PDF at /public/resume.pdf

  links: [
    {
      label: "Email me",
      value: "neil_mitchell89@hotmail.com",
      href: "mailto:neil_mitchell89@hotmail.com",
      description: "Best for detailed conversations",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      ),
      color: "from-brand-500 to-brand-700",
    },
    {
      label: "LinkedIn",
      value: "neil-mitchell-a6038b171",
      href: "https://www.linkedin.com/in/neil-mitchell-a6038b171",
      description: "Connect professionally",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: "from-teal-500 to-brand-600",
    },
    {
      // ─── RESUME DOWNLOAD ────────────────────────────────────────────────
      // Place your PDF at: /public/resume.pdf
      // To change the button label: edit `label` below.
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
      description: "Full career history",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      ),
      color: "from-brand-600 to-teal-700",
      download: true,
    },
  ],

  availability: {
    status: "open",
    message: "Open to connecting on new opportunities.",
  },
};

type FormState = { name: string; email: string; message: string };
type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // ── Form submission ──────────────────────────────────────────────────────
  // Replace the setTimeout below with your real form handler:
  // Option A — Formspree:  fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", ... })
  // Option B — Next.js API: fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1200)); // ← replace this
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 mesh-bg"
      aria-labelledby="contact-heading"
    >
      <div className="container-wide section-padding">

        <SectionReveal className="text-center mb-16">
          <p className="section-label mb-3">{CONTACT_DATA.label}</p>
          <h2 id="contact-heading" className="section-heading mb-4">
            {CONTACT_DATA.heading}
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            {CONTACT_DATA.subheading}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2
                          bg-emerald-50 dark:bg-emerald-950/50
                          border border-emerald-200 dark:border-emerald-800
                          text-sm font-medium text-emerald-700 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            {CONTACT_DATA.availability.message}
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

          {/* Left: links */}
          <SectionReveal direction="left">
            <div className="space-y-4">
              {CONTACT_DATA.links.map(({ label, value, href, description, icon, color, download }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  download={download}
                  className="group flex items-center gap-4 rounded-2xl card card-hover p-5
                             hover:border-brand-200 dark:hover:border-brand-800"
                  aria-label={`${label}: ${value}`}
                >
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl
                                  bg-gradient-to-br ${color} text-white shadow-soft
                                  group-hover:scale-105 transition-transform duration-200`}
                    aria-hidden="true">
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
                    <p className="text-sm text-brand-500 dark:text-brand-400 font-medium truncate">{value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{description}</p>
                  </div>
                  <svg className="flex-shrink-0 text-slate-400 group-hover:text-brand-500
                                 group-hover:translate-x-0.5 transition-all duration-200"
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </SectionReveal>

          {/* Right: form */}
          <SectionReveal direction="right" delay={150}>
            <div className="card p-6 lg:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">
                Send a message
              </h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50
                                  flex items-center justify-center text-2xl">✓</div>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">Message sent!</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Thanks for reaching out. I'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
                    <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange}
                      required autoComplete="name" placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                                 bg-white dark:bg-slate-900/50 px-4 py-3 text-sm
                                 text-slate-900 dark:text-slate-100
                                 placeholder-slate-400 dark:placeholder-slate-600
                                 focus:outline-none focus:ring-2 focus:ring-brand-500/50
                                 focus:border-brand-400 dark:focus:border-brand-600
                                 transition-colors duration-200" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                    <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange}
                      required autoComplete="email" placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                                 bg-white dark:bg-slate-900/50 px-4 py-3 text-sm
                                 text-slate-900 dark:text-slate-100
                                 placeholder-slate-400 dark:placeholder-slate-600
                                 focus:outline-none focus:ring-2 focus:ring-brand-500/50
                                 focus:border-brand-400 dark:focus:border-brand-600
                                 transition-colors duration-200" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                    <textarea id="contact-message" name="message" value={form.message} onChange={handleChange}
                      required rows={4} placeholder="Tell me about the opportunity or project..."
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                                 bg-white dark:bg-slate-900/50 px-4 py-3 text-sm
                                 text-slate-900 dark:text-slate-100
                                 placeholder-slate-400 dark:placeholder-slate-600
                                 focus:outline-none focus:ring-2 focus:ring-brand-500/50
                                 focus:border-brand-400 dark:focus:border-brand-600
                                 transition-colors duration-200 resize-none" />
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="btn-primary w-full justify-center" aria-busy={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-400 dark:text-slate-600">
                    Or email me directly at{" "}
                    <a href={`mailto:${CONTACT_DATA.email}`} className="text-brand-500 dark:text-brand-400 hover:underline">
                      {CONTACT_DATA.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
