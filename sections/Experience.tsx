// ─── Experience Section ───────────────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF — Work Experience (all four roles)

import SectionReveal from "@/components/SectionReveal";

const EXPERIENCE_DATA = {
  label: "Experience",
  heading: "Career at TD Insurance",
  subheading:
    "Six years of progressive growth — from claims operations to platform product ownership — all within Canada's largest direct-to-consumer insurer.",

  roles: [
    {
      // ── Current role ─────────────────────────────────────────────────────
      company: "TD Insurance",
      role: "Journey Specialist — Product & Regulatory",
      programme: "Strategic Product & Regulatory Knowledge (SPARK)",
      period: "Aug 2025 — Present",
      type: "Full-time",
      isCurrent: true,
      location: "Saint John, NB",
      logo: "TD",
      color: "from-brand-500 to-brand-700",
      description:
        "Owning high-level product requirements and feature definition for core Guidewire PolicyCenter initiatives within the SPARK programme. Leading scope, sequencing, and prioritization across multiple delivery pods while managing trade-offs across product, technology, and data stakeholders.",
      achievements: [
        "Own product requirements and feature definition for AI RSP and DASH (Detailed Automobile Search History) initiatives on Guidewire PolicyCenter",
        "Shape product scope, sequencing, and prioritization to support delivery milestones across multiple pods",
        "Partner with BAs and platform teams to translate product intent into implementation-ready stories",
        "Drive product trade-offs and risk management across product, technology, and data stakeholders",
        "Contribute to roadmap planning and cross-initiative alignment for core platform capabilities",
      ],
      tags: ["Guidewire PolicyCenter", "Product Ownership", "SPARK", "Requirements", "Roadmap"],
    },
    {
      // ── Previous role ────────────────────────────────────────────────────
      company: "TD Insurance",
      role: "Journey Specialist — Digital Service Performance",
      programme: "Digital Service Performance (MyInsurance)",
      period: "Feb 2024 — Aug 2025",
      type: "Full-time",
      isCurrent: false,
      location: "Saint John, NB",
      logo: "TD",
      color: "from-teal-500 to-brand-600",
      description:
        "Led product requirements and feature definition for customer servicing journeys within the MyInsurance platform. Drove backlog refinement, cross-pod coordination, and release readiness while building deep domain expertise in digital servicing operations.",
      achievements: [
        "Owned high-level product requirements and feature definition for the MyInsurance customer servicing platform",
        "Led backlog refinement and story shaping to translate product intent into BA-authored detailed requirements",
        "Drove cross-pod coordination and release readiness for MyInsurance platform enhancements",
        "Partnered with technology and operations to manage delivery risk and sequencing across digital initiatives",
        "Built deep domain expertise in digital servicing operations and MyInsurance platform capabilities",
      ],
      tags: ["MyInsurance", "Digital Servicing", "Backlog Refinement", "Cross-pod Delivery", "Release Readiness"],
    },
    {
      // ── Earlier role ─────────────────────────────────────────────────────
      company: "TD Insurance",
      role: "Vendor Analyst II",
      programme: "Claims Operations Support (VMO)",
      period: "Apr 2020 — Feb 2024",
      type: "Full-time",
      isCurrent: false,
      location: "Saint John, NB",
      logo: "TD",
      color: "from-brand-600 to-teal-700",
      description:
        "Managed enterprise-scale Accounts Receivable operations and delivered automation solutions that materially improved operational efficiency. Recognised with a TDI All Star award for delivery excellence and stakeholder leadership.",
      achievements: [
        "Managed enterprise Accounts Receivable on a quarterly cadence — 80,000+ invoices totalling $55MM+ in outstanding payments",
        "Designed and implemented VBA automation pipelines for data aggregation and reconciliation, reducing cycle time and vendor escalations",
        "Led weekly progress and delivery reviews with stakeholders across multiple business lines",
        "Recognised as TDI All Star Recipient (2022) for delivery excellence and stakeholder leadership",
      ],
      tags: ["VBA Automation", "Accounts Receivable", "Stakeholder Management", "TDI All Star 2022"],
    },
    {
      // ── First role ───────────────────────────────────────────────────────
      company: "TD Insurance",
      role: "Claims Advisor",
      programme: "Claims Response Office (CRO)",
      period: "Apr 2019 — Apr 2020",
      type: "Full-time",
      isCurrent: false,
      location: "Saint John, NB",
      logo: "TD",
      color: "from-slate-500 to-slate-700",
      description:
        "Entry point into TD Insurance — handling inbound FNOL and outbound accident benefits calls, opening exposures, and preparing claims for adjuster contact. Built foundational knowledge of claims intake, accident benefits processes, and operational workflow.",
      achievements: [
        "Handled inbound FNOL and outbound accident benefits calls, opening exposures and preparing claims for initial adjuster contact",
        "Built foundational knowledge of claims intake workflows, accident benefits processes, and operational handoff to adjusting teams",
      ],
      tags: ["Claims", "FNOL", "Accident Benefits", "Guidewire ClaimCenter"],
    },
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 mesh-bg"
      aria-labelledby="experience-heading"
    >
      <div className="container-wide section-padding">

        <SectionReveal className="text-center mb-16">
          <p className="section-label mb-3">{EXPERIENCE_DATA.label}</p>
          <h2 id="experience-heading" className="section-heading mb-4">
            {EXPERIENCE_DATA.heading}
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {EXPERIENCE_DATA.subheading}
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b
                       from-brand-200 via-brand-200/50 to-transparent
                       dark:from-brand-800 dark:via-brand-800/30
                       hidden lg:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCE_DATA.roles.map((role, index) => (
              <SectionReveal key={`${role.role}-${index}`} delay={index * 80}>
                <div className="relative lg:pl-24 group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-5 top-8 h-6 w-6 rounded-full
                                bg-gradient-to-br ${role.color}
                                border-2 border-white dark:border-slate-900
                                shadow-soft hidden lg:flex items-center justify-center
                                text-white text-xs font-bold
                                group-hover:scale-110 transition-transform duration-200`}
                    aria-hidden="true"
                  >
                    {role.isCurrent && (
                      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full
                                       bg-emerald-400 border-2 border-white dark:border-slate-900" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="card card-hover p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">

                      {/* Logo */}
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center
                                    rounded-2xl bg-gradient-to-br ${role.color}
                                    text-white font-bold text-xs shadow-soft`}
                        aria-hidden="true"
                      >
                        {role.logo}
                      </div>

                      {/* Role info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                            {role.role}
                          </h3>
                          {role.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5
                                             bg-emerald-50 dark:bg-emerald-950/50
                                             text-emerald-600 dark:text-emerald-400
                                             text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                              Current
                            </span>
                          )}
                        </div>
                        {/* Programme / team name */}
                        <p className="text-xs font-medium text-brand-500 dark:text-brand-500 italic mb-1">
                          {role.programme}
                        </p>
                        <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-1">
                          {role.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-500">
                          <span>{role.period}</span>
                          <span aria-hidden="true">·</span>
                          <span>{role.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{role.type}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                      {role.description}
                    </p>

                    <ul className="space-y-2 mb-5" role="list" aria-label={`Key responsibilities for ${role.role}`}>
                      {role.achievements.map((item, idx) => (
                        <li key={`${role.role}-${idx}`} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500 dark:text-brand-400"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2" role="list">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg px-2.5 py-1 text-xs font-medium
                                     bg-slate-100 dark:bg-slate-800
                                     text-slate-600 dark:text-slate-400"
                          role="listitem"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
