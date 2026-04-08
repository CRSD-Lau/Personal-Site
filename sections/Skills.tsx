// ─── Skills / Expertise Section ───────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF — Core Product & Delivery Skills + Technical Skills

import SectionReveal from "@/components/SectionReveal";

const SKILLS_DATA = {
  label: "Expertise",
  heading: "What I bring to the table",
  subheading:
    "A rare combination of product ownership depth, platform domain knowledge, and hands-on technical capability — built across six years in insurance.",

  categories: [
    {
      name: "Product & Delivery",
      icon: "🎯",
      color: "from-brand-500 to-brand-700",
      bgColor: "bg-brand-50 dark:bg-brand-950/40",
      borderColor: "border-brand-100 dark:border-brand-900/50",
      skills: [
        { name: "Product Ownership & Backlog Shaping", level: 93 },
        { name: "Requirements Engineering & Acceptance", level: 94 },
        { name: "Cross-Pod Delivery Leadership", level: 91 },
        { name: "Scope & Risk Management", level: 89 },
        { name: "Roadmap Planning & Prioritization", level: 88 },
      ],
    },
    {
      name: "Platforms & Tools",
      icon: "🛠️",
      color: "from-teal-500 to-brand-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/40",
      borderColor: "border-teal-100 dark:border-teal-900/50",
      skills: [
        { name: "Guidewire PolicyCenter", level: 92 },
        { name: "Guidewire ClaimCenter / BillingCenter", level: 84 },
        { name: "Jira & Confluence (Atlassian Suite)", level: 95 },
        { name: "Tableau", level: 82 },
        { name: "Microsoft 365", level: 96 },
      ],
    },
    {
      name: "Technical & Data",
      icon: "💻",
      color: "from-brand-600 to-teal-700",
      bgColor: "bg-slate-50 dark:bg-slate-900/40",
      borderColor: "border-slate-200 dark:border-slate-700/50",
      skills: [
        { name: "VBA & Automation", level: 88 },
        { name: "Python", level: 78 },
        { name: "SQL (MySQL, SQL Server, Azure SQL)", level: 83 },
        { name: "Java / C# / C++", level: 72 },
        { name: "Excel & Access (Advanced)", level: 92 },
      ],
    },
    {
      name: "Collaboration & Leadership",
      icon: "🤝",
      color: "from-slate-500 to-slate-700",
      bgColor: "bg-slate-50 dark:bg-slate-900/40",
      borderColor: "border-slate-200 dark:border-slate-700/50",
      skills: [
        { name: "Stakeholder & Executive Communication", level: 94 },
        { name: "Agile Delivery Leadership", level: 91 },
        { name: "Risk Marketplace Governance", level: 86 },
        { name: "Cross-functional Alignment", level: 93 },
        { name: "Delivery Risk & Sequencing", level: 89 },
      ],
    },
  ],

  // All capabilities tag cloud — from resume skills sections
  allSkillTags: [
    "Product Ownership",
    "Backlog Shaping",
    "Requirements Engineering",
    "Acceptance Criteria",
    "Cross-Pod Delivery",
    "Agile / Scrum",
    "Jira & Confluence",
    "Guidewire PolicyCenter",
    "Guidewire ClaimCenter",
    "Guidewire BillingCenter",
    "Scope Management",
    "Risk Management",
    "Stakeholder Alignment",
    "Executive Communication",
    "Release Readiness",
    "Roadmap Planning",
    "VBA Automation",
    "Python",
    "SQL",
    "Tableau",
    "Microsoft 365",
    "Data Reconciliation",
    "Insurance Domain",
    "Digital Servicing",
    "Claims Operations",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-white dark:bg-slate-950/50"
      aria-labelledby="skills-heading"
    >
      <div className="container-wide section-padding">

        <SectionReveal className="text-center mb-16">
          <p className="section-label mb-3">{SKILLS_DATA.label}</p>
          <h2 id="skills-heading" className="section-heading mb-4">
            {SKILLS_DATA.heading}
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {SKILLS_DATA.subheading}
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {SKILLS_DATA.categories.map((category, catIndex) => (
            <SectionReveal key={category.name} delay={catIndex * 80}>
              <div className={`rounded-3xl ${category.bgColor} border ${category.borderColor} p-6 lg:p-8 h-full`}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 rounded-xl bg-gradient-to-br ${category.color}
                                flex items-center justify-center text-lg shadow-soft`}
                    aria-hidden="true"
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4" role="list" aria-label={`${category.name} skills`}>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={category.color}
                      delay={catIndex * 80 + skillIndex * 60}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Capability tag cloud */}
        <SectionReveal>
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/50
                          border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-5">
              All Capabilities
            </h3>
            <div className="flex flex-wrap gap-2.5" role="list" aria-label="Full capabilities list">
              {SKILLS_DATA.allSkillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl px-3.5 py-2 text-sm font-medium
                             bg-white dark:bg-slate-800
                             border border-slate-200 dark:border-slate-700
                             text-slate-700 dark:text-slate-300
                             hover:border-brand-300 dark:hover:border-brand-700
                             hover:text-brand-700 dark:hover:text-brand-400
                             hover:bg-brand-50 dark:hover:bg-brand-950/30
                             transition-all duration-200 cursor-default shadow-soft-sm"
                  role="listitem"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function SkillBar({
  name, level, gradient, delay,
}: {
  name: string; level: number; gradient: string; delay: number;
}) {
  return (
    <div role="listitem">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-500">{level}%</span>
      </div>
      <div
        className="h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-700/50 overflow-hidden"
        role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          style={{ width: `${level}%`, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay + 200}ms` }}
        />
      </div>
    </div>
  );
}
