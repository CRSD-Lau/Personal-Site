"use client";

// ─── Impact / Achievements Section ────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF — real metrics and initiatives

import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const IMPACT_DATA = {
  label: "Impact",
  heading: "Work that\ndelivers results.",
  subheading:
    "Six years of progressive impact at TD Insurance — from automating enterprise operations to owning product delivery on core Guidewire platforms.",

  stats: [
    {
      prefix: "",
      value: 80,
      suffix: "K+",
      label: "Invoices processed",
      description: "Per quarterly AR cycle managed as Vendor Analyst II",
      icon: "📄",
      color: "from-brand-500 to-brand-700",
    },
    {
      prefix: "$",
      value: 55,
      suffix: "MM+",
      label: "Payments managed",
      description: "Outstanding AR managed on quarterly cadence",
      icon: "💰",
      color: "from-teal-500 to-brand-600",
    },
    {
      prefix: "",
      value: 6,
      suffix: "+",
      label: "Years at TD",
      description: "Consistent progression from claims to platform product",
      icon: "🏦",
      color: "from-brand-600 to-teal-700",
    },
    {
      prefix: "",
      value: 4,
      suffix: " Roles",
      label: "Career progression",
      description: "Claims → Operations → Digital → Platform Product",
      icon: "📈",
      color: "from-slate-500 to-slate-700",
    },
  ],

  initiatives: [
    {
      title: "Guidewire PolicyCenter — SPARK Programme",
      category: "Platform Product Ownership",
      description:
        "Currently owning product requirements for Guidewire PolicyCenter initiatives including AI RSP and DASH (Detailed Automobile Search History). Responsible for defining product intent, shaping scope and sequencing across multiple delivery pods, and partnering with BAs to translate requirements into implementation-ready stories.",
      outcomes: [
        "Owning product definition for AI RSP and DASH on Guidewire PolicyCenter",
        "Driving cross-initiative alignment and roadmap planning for core platform capabilities",
        "Managing delivery trade-offs across product, technology, and data stakeholders",
        "Translating high-level product intent into BA-authored detailed requirements",
      ],
      tags: ["Guidewire PolicyCenter", "Product Ownership", "SPARK", "AI RSP", "DASH"],
      icon: "🛡️",
      gradient: "from-brand-500/10 to-brand-700/10 dark:from-brand-500/20 dark:to-brand-700/20",
      border: "border-brand-100 dark:border-brand-900/50",
    },
    {
      title: "MyInsurance Platform — Digital Service Performance",
      category: "Digital Journey Ownership",
      description:
        "Led product requirements and feature definition for the MyInsurance customer servicing platform. Drove backlog refinement, cross-pod coordination, and release readiness across digital servicing journeys — building deep domain expertise in how TD customers manage their policies online.",
      outcomes: [
        "Owned product requirements for the full MyInsurance customer servicing platform",
        "Led backlog refinement translating product intent into detailed BA requirements",
        "Drove cross-pod coordination and release readiness for platform enhancements",
        "Managed delivery risk and sequencing in partnership with technology and operations",
      ],
      tags: ["MyInsurance", "Digital Servicing", "Release Readiness", "Backlog Refinement"],
      icon: "📱",
      gradient: "from-teal-500/10 to-brand-600/10 dark:from-teal-500/20 dark:to-brand-600/20",
      border: "border-teal-100 dark:border-teal-900/50",
    },
    {
      title: "VBA Automation Pipeline — Claims Operations",
      category: "Process Automation",
      description:
        "Designed and implemented VBA automation pipelines for enterprise-scale data aggregation and reconciliation within the Claims VMO function. The solution materially improved cycle time and accuracy on an $55MM+ quarterly AR process while substantially reducing vendor escalations.",
      outcomes: [
        "Automated data aggregation and reconciliation for 80,000+ quarterly invoices",
        "Improved cycle time and accuracy across the $55MM+ quarterly AR process",
        "Substantially reduced vendor escalations through proactive data quality controls",
        "Earned TDI All Star Recipient recognition (2022) for this and broader delivery contributions",
      ],
      tags: ["VBA", "Automation", "Process Improvement", "AR", "TDI All Star 2022"],
      icon: "⚙️",
      gradient: "from-brand-500/10 to-teal-500/10 dark:from-brand-500/20 dark:to-teal-500/20",
      border: "border-brand-100 dark:border-brand-900/50",
    },
    {
      title: "TDI All Star Recipient — 2022",
      category: "Recognition",
      description:
        "Recognised as a TDI All Star in 2022 for delivery excellence and stakeholder leadership across the Vendor Management Office. This recognition reflects consistent high performance in managing complex operational processes and building trusted relationships across business lines.",
      outcomes: [
        "TDI All Star Recipient — 2022",
        "Recognised for delivery excellence in a high-volume, high-stakes operational environment",
        "Acknowledged for stakeholder leadership across multiple business lines",
        "Demonstrated consistent above-and-beyond performance in complex delivery context",
      ],
      tags: ["TDI All Star", "Recognition", "Delivery Excellence", "2022"],
      icon: "⭐",
      gradient: "from-slate-400/10 to-slate-600/10 dark:from-slate-400/20 dark:to-slate-600/20",
      border: "border-slate-200 dark:border-slate-700/50",
    },
  ],
};

export default function Impact() {
  return (
    <section
      id="impact"
      className="py-24 lg:py-32 mesh-bg"
      aria-labelledby="impact-heading"
    >
      <div className="container-wide section-padding">

        <SectionReveal className="text-center mb-16">
          <p className="section-label mb-3">{IMPACT_DATA.label}</p>
          <h2 id="impact-heading" className="section-heading mb-4 whitespace-pre-line">
            {IMPACT_DATA.heading}
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {IMPACT_DATA.subheading}
          </p>
        </SectionReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {IMPACT_DATA.stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 80}>
              <div className="card card-hover p-5 lg:p-7 text-center group h-full">
                <div className="mb-3 flex justify-center text-2xl" aria-hidden="true">{stat.icon}</div>
                <p
                  className={`text-3xl sm:text-4xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  aria-label={`${stat.prefix}${stat.value}${stat.suffix} — ${stat.label}`}
                >
                  {stat.prefix}
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-snug hidden sm:block">{stat.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Initiative cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {IMPACT_DATA.initiatives.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 80}>
              <article
                className={`rounded-3xl bg-gradient-to-br ${item.gradient}
                            border ${item.border} p-6 lg:p-8 h-full
                            hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center
                                 rounded-2xl bg-white dark:bg-slate-900/60 shadow-soft text-2xl"
                    aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-5" role="list" aria-label={`Outcomes for ${item.title}`}>
                  {item.outcomes.map((outcome, idx) => (
                    <li key={`${item.title}-${idx}`} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <span className="mt-0.5 text-brand-600 dark:text-brand-400 font-bold" aria-hidden="true">→</span>
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2" role="list">
                  {item.tags.map((tag) => (
                    <span key={tag}
                      className="rounded-lg px-2.5 py-1 text-xs font-medium
                                 bg-white/70 dark:bg-slate-900/60
                                 border border-white/80 dark:border-slate-700/50
                                 text-slate-600 dark:text-slate-400"
                      role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
