// ─── Working Style / Values Section ──────────────────────────────────────────
// SOURCE: Neil_Mitchell_L10_Resume.PDF — inferred from career narrative + interests

import SectionReveal from "@/components/SectionReveal";

const WORKING_STYLE = {
  label: "How I Work",
  heading: "Values I bring\nto every room.",
  subheading:
    "Six years at one organisation, across four different roles, hasn't happened by accident. Here's how I approach the work.",

  values: [
    {
      trait: "Delivery-Focused",
      icon: "🚀",
      description:
        "I don't just shape product intent — I stay accountable to delivery. Cross-pod coordination, release readiness, sequencing, risk — I stay in the conversation until the work ships and the outcome is real.",
      color: "from-brand-500 to-brand-700",
      bg: "from-brand-50 to-brand-100/60 dark:from-brand-950/30 dark:to-brand-900/20",
      border: "border-brand-100 dark:border-brand-900/50",
    },
    {
      trait: "Analytically Grounded",
      icon: "📊",
      description:
        "From designing VBA automation pipelines to shaping product requirements for AI-driven features, I bring a technical and data-literate lens to every problem. Good decisions need good evidence.",
      color: "from-teal-500 to-brand-600",
      bg: "from-teal-50 to-brand-50 dark:from-teal-950/30 dark:to-brand-950/30",
      border: "border-teal-100 dark:border-teal-900/50",
    },
    {
      trait: "Collaborative",
      icon: "🤝",
      description:
        "Platform delivery at scale means coordinating across product, technology, operations, data, and regulatory stakeholders. I invest in relationships and build alignment that lasts past the kickoff meeting.",
      color: "from-brand-600 to-teal-700",
      bg: "from-brand-50 to-teal-50 dark:from-brand-950/30 dark:to-teal-950/30",
      border: "border-brand-100 dark:border-brand-900/50",
    },
    {
      trait: "Precise",
      icon: "📐",
      description:
        "Ambiguous requirements are expensive. I write crisp product definitions, tight acceptance criteria, and clear scope boundaries — because the investment in precision upfront pays off significantly at delivery.",
      color: "from-brand-400 to-teal-600",
      bg: "from-brand-50 to-teal-50 dark:from-brand-950/30 dark:to-teal-950/30",
      border: "border-brand-100 dark:border-brand-900/50",
    },
    {
      trait: "Growth-Minded",
      icon: "🌱",
      description:
        "I've progressed through four distinct roles at TD — from claims operations to platform product ownership. I approach each transition as a chance to build new domain depth while carrying forward everything I've learned.",
      color: "from-teal-500 to-brand-600",
      bg: "from-teal-50 to-brand-50 dark:from-teal-950/30 dark:to-brand-950/30",
      border: "border-teal-100 dark:border-teal-900/50",
    },
    {
      trait: "Community-Oriented",
      icon: "❤️",
      description:
        "Beyond the professional work, I'm motivated by mentorship, disability and inclusion advocacy, and community volunteering. I believe in bringing that same human care to how I engage with the teams around me.",
      color: "from-slate-500 to-slate-700",
      bg: "from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50",
      border: "border-slate-200 dark:border-slate-700/50",
    },
  ],

  // SOURCE: Placeholder — replace with a real colleague quote if available
  quote: {
    text: "Neil brings a rare combination of technical depth and product clarity. He understands the platform, owns the intent, and keeps delivery on track — all at the same time. That's hard to find.",
    author: "Colleague — TD Insurance",  // ← Update with a real source if you have one
  },
};

export default function WorkingStyle() {
  return (
    <section
      id="working-style"
      className="py-24 lg:py-32 bg-white dark:bg-slate-950/50"
      aria-labelledby="working-style-heading"
    >
      <div className="container-wide section-padding">

        <SectionReveal className="text-center mb-16">
          <p className="section-label mb-3">{WORKING_STYLE.label}</p>
          <h2 id="working-style-heading" className="section-heading mb-4 whitespace-pre-line">
            {WORKING_STYLE.heading}
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {WORKING_STYLE.subheading}
          </p>
        </SectionReveal>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {WORKING_STYLE.values.map(({ trait, icon, description, color, bg, border }, i) => (
            <SectionReveal key={trait} delay={i * 80}>
              <div className={`group rounded-3xl bg-gradient-to-br ${bg} border ${border}
                              p-6 h-full transition-all duration-300
                              hover:shadow-soft-lg hover:-translate-y-0.5`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl
                                  bg-gradient-to-br ${color} text-lg text-white shadow-soft
                                  group-hover:scale-105 transition-transform duration-200`}
                    aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{trait}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Testimonial */}
        <SectionReveal>
          <blockquote className="relative rounded-3xl bg-gradient-to-br from-brand-50 to-teal-50
                                 dark:from-brand-950/40 dark:to-teal-950/30
                                 border border-brand-100 dark:border-brand-900/50
                                 p-8 lg:p-12 text-center mx-auto max-w-3xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2
                            flex h-10 w-10 items-center justify-center rounded-full
                            bg-gradient-to-br from-brand-500 to-brand-700
                            text-white text-xl font-serif shadow-soft"
              aria-hidden="true">
              "
            </div>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6 italic">
              "{WORKING_STYLE.quote.text}"
            </p>
            <footer>
              <cite className="text-sm font-semibold text-brand-600 dark:text-brand-400 not-italic">
                — {WORKING_STYLE.quote.author}
              </cite>
            </footer>
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}
