// ─── About Section ────────────────────────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF — Professional Summary + inferred profile

import SectionReveal from "@/components/SectionReveal";

const ABOUT_CONTENT = {
  label: "About Me",
  heading: "Product intent.\nPlatform delivery.",
  summary: `I'm a product and journey professional at TD Insurance with 6+ years of progressive experience — from claims operations and vendor management to leading complex platform and digital servicing initiatives. My career has been built at the intersection of product thinking, delivery rigour, and cross-functional alignment.

Right now I'm focused on Guidewire PolicyCenter initiatives in the SPARK programme, where I own high-level requirements, shape product scope, and partner with BAs and platform teams to turn product intent into implementation-ready stories. I'm equally comfortable in a whiteboard session on roadmap sequencing, a delivery review with executives, or deep in a backlog shaping trade-off.`,

  philosophy: {
    heading: "How I work",
    description:
      "The best platform products are built by people who understand the business deeply, translate that understanding into crisp requirements, and stay accountable to delivery outcomes — not just documentation. That's the standard I hold myself to.",
  },

  pillars: [
    {
      icon: "🎯",
      title: "Own the intent",
      description:
        "Requirements without ownership drift. I hold the product intent through the full delivery cycle — from initial definition through BA handoff to acceptance — making sure what gets built is what was meant.",
    },
    {
      icon: "🔄",
      title: "Drive delivery",
      description:
        "Cross-pod coordination, release readiness, sequencing decisions, risk management — I stay in the delivery conversation, not just the discovery one. Outcomes matter more than artefacts.",
    },
    {
      icon: "🤝",
      title: "Align the room",
      description:
        "Product, technology, operations, data, and regulatory stakeholders all have different lenses. My job is to hold those perspectives together — building alignment that lasts past the kickoff meeting.",
    },
    {
      icon: "📐",
      title: "Be precise",
      description:
        "Ambiguous requirements are expensive. I invest in getting the detail right upfront — acceptance criteria, scope boundaries, edge cases — because precision at definition time pays off at delivery time.",
    },
  ],

  funFacts: [
    { label: "Years at TD Insurance", value: "6+" },
    { label: "Roles progressed through", value: "4" },
    { label: "Platform: Guidewire", value: "✓" },
    { label: "TDI All Star", value: "2022" },
  ],
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white dark:bg-slate-950/50"
      aria-labelledby="about-heading"
    >
      <div className="container-wide section-padding">

        <SectionReveal className="text-center mb-16">
          <p className="section-label mb-3">{ABOUT_CONTENT.label}</p>
          <h2 id="about-heading" className="section-heading whitespace-pre-line">
            {ABOUT_CONTENT.heading}
          </h2>
        </SectionReveal>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          {/* Left: Bio */}
          <SectionReveal direction="left">
            <div className="space-y-5">
              {ABOUT_CONTENT.summary.split("\n\n").map((para, i) => (
                <p key={i} className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {ABOUT_CONTENT.funFacts.map(({ label, value }) => (
                <div key={label} className="rounded-2xl bg-slate-50 dark:bg-slate-900/60
                             border border-slate-100 dark:border-slate-800
                             p-4 text-center">
                  <p className="text-2xl font-bold gradient-text mb-1">{value}</p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right: Philosophy card */}
          <SectionReveal direction="right" delay={150}>
            <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100/60
                            dark:from-brand-950/40 dark:to-brand-900/20
                            border border-brand-100 dark:border-brand-900/50
                            p-8 lg:p-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {ABOUT_CONTENT.philosophy.heading}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {ABOUT_CONTENT.philosophy.description}
              </p>
              <div className="mt-8 text-6xl font-serif text-brand-200 dark:text-brand-900/80 leading-none" aria-hidden="true">
                "
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ABOUT_CONTENT.pillars.map(({ icon, title, description }, i) => (
            <SectionReveal key={title} delay={i * 80}>
              <div className="group card card-hover p-6 h-full
                             hover:border-brand-200 dark:hover:border-brand-800
                             hover:bg-brand-50/50 dark:hover:bg-brand-950/20">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl
                               bg-brand-50 dark:bg-brand-950/50 text-xl
                               group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50
                               transition-colors duration-200" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
