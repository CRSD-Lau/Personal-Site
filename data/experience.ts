export interface Experience {
  id: string;
  title: string;
  functionalArea?: string;
  division?: string;
  organization: string;
  supportingOrganization?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  employmentType: string;
  chapter: string;
  shortSummary: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

const experience: Experience[] = [
  {
    id: "project-manager-ai2-2026",
    title: "Project Manager II",
    functionalArea: "Applied AI/ML Engineering",
    organization: "AI2, TD Bank Group",
    supportingOrganization: "TD Insurance",
    startDate: "2026-07",
    current: true,
    location: "Saint John, New Brunswick",
    employmentType: "Full-time",
    chapter: "Applied AI/ML Engineering",
    shortSummary:
      "Planning and coordinating applied AI/ML engineering work that supports TD Insurance.",
    summary:
      "Leading the planning and execution of applied AI and machine-learning engineering work that supports TD Insurance. I coordinate priorities, risks, dependencies, technical work, and partner decisions so capabilities can move from definition through implementation and production readiness.",
    responsibilities: [
      "Lead planning and execution for applied AI/ML engineering work supporting TD Insurance.",
      "Coordinate priorities, dependencies, risks, decisions, and milestones across engineering and business workstreams.",
      "Manage work through a Kanban model, maintaining clear ownership and visibility across active priorities.",
      "Partner with engineers, senior leaders, product partners, data specialists, and business teams to turn objectives into actionable plans.",
      "Support implementation, integration, testing, validation, production readiness, monitoring, and operational handoff.",
    ],
    skills: [
      "Applied AI/ML",
      "AI Engineering Delivery",
      "Project Management",
      "Kanban",
      "Risk Management",
      "Production Readiness",
    ],
  },
  {
    id: "journey-specialist-product-regulatory-2025",
    title: "Senior Product Analyst",
    functionalArea: "Strategic Product & Regulatory Knowledge",
    organization: "GIJ, TD Insurance",
    startDate: "2025-08",
    endDate: "2026-07",
    current: false,
    location: "Saint John, New Brunswick",
    employmentType: "Full-time",
    chapter: "Product and Regulatory",
    shortSummary: "Shaped product and regulatory work for Guidewire PolicyCenter capabilities.",
    summary:
      "Shaped high-level requirements and feature definitions for Guidewire PolicyCenter work within the SPARK programme. Coordinated scope, sequencing, acceptance criteria, and readiness across multiple teams while helping partners make clear trade-offs.",
    responsibilities: [
      "Defined product intent and high-level requirements for AI RSP and DASH capabilities.",
      "Clarified scope, sequencing, acceptance criteria, and ownership across several workstreams.",
      "Partnered with business analysts and platform teams to prepare implementation-ready stories.",
      "Coordinated product, technology, and data decisions while surfacing risks early.",
      "Contributed to roadmap planning and readiness for core platform capabilities.",
    ],
    skills: [
      "Guidewire PolicyCenter",
      "Feature Definition",
      "Acceptance Criteria",
      "Scope Management",
      "Delivery Readiness",
    ],
  },
  {
    id: "journey-specialist-digital-service-2024",
    title: "Senior Product Analyst",
    functionalArea: "Digital Service Performance",
    organization: "GIJ, TD Insurance",
    startDate: "2024-02",
    endDate: "2025-08",
    current: false,
    location: "Saint John, New Brunswick",
    employmentType: "Full-time",
    chapter: "Digital Services",
    shortSummary: "Guided customer-servicing work across the MyInsurance digital platform.",
    summary:
      "Led feature definition and backlog preparation for customer-servicing journeys in MyInsurance. Brought business, technology, and operations partners together around sequencing, readiness, and practical decisions.",
    responsibilities: [
      "Owned high-level requirements and feature definitions for MyInsurance servicing journeys.",
      "Led backlog refinement and story shaping with business analysts.",
      "Coordinated work across teams and prepared enhancements for release.",
      "Managed sequencing and risk with technology and operations partners.",
      "Built deep knowledge of digital insurance servicing and customer workflows.",
    ],
    skills: [
      "MyInsurance",
      "Digital Servicing",
      "Backlog Refinement",
      "Cross-team Coordination",
      "Release Readiness",
    ],
  },
  {
    id: "vendor-analyst-2020",
    title: "Vendor Analyst II",
    functionalArea: "Vendor Management Office",
    organization: "CFLVS, TD Insurance",
    startDate: "2020-04",
    endDate: "2024-02",
    current: false,
    location: "Saint John, New Brunswick",
    employmentType: "Full-time",
    chapter: "Vendor Operations",
    shortSummary: "Managed large accounts receivable operations and built practical automation.",
    summary:
      "Managed a quarterly accounts receivable process covering more than 80,000 invoices and over $55 million in activity. Built VBA automation for aggregation and reconciliation, improving the flow and accuracy of operational work.",
    responsibilities: [
      "Managed enterprise accounts receivable work on a quarterly cadence.",
      "Built VBA automation for data aggregation and reconciliation.",
      "Improved cycle time, accuracy, and visibility across vendor operations.",
      "Led weekly progress reviews with partners across several business lines.",
      "Received TDI All Star recognition in 2022.",
    ],
    skills: [
      "Vendor Management",
      "VBA Automation",
      "Accounts Receivable",
      "Data Reconciliation",
      "Operational Reporting",
    ],
  },
  {
    id: "claims-advisor-2019",
    title: "Claims Advisor",
    functionalArea: "Claims Response Office",
    organization: "CFLVS, TD Insurance",
    startDate: "2019-04",
    endDate: "2020-04",
    current: false,
    location: "Saint John, New Brunswick",
    employmentType: "Full-time",
    chapter: "Claims",
    shortSummary:
      "Built a foundation in claims intake, accident benefits, and operational handoff.",
    summary:
      "Handled first notice of loss and accident-benefits calls, opened exposures, and prepared claims for adjuster contact. This role established a practical understanding of insurance operations, customer needs, and the quality of a clear handoff.",
    responsibilities: [
      "Handled inbound first notice of loss and outbound accident-benefits calls.",
      "Opened exposures and prepared claims for initial adjuster contact.",
      "Learned claims intake, accident-benefits processes, and operational workflows.",
    ],
    skills: [
      "Claims",
      "First Notice of Loss",
      "Accident Benefits",
      "Guidewire ClaimCenter",
      "Operational Handoff",
    ],
  },
];

export const sortedExperience = [...experience].sort((a, b) =>
  b.startDate.localeCompare(a.startDate),
);

const currentRoles = sortedExperience.filter((role) => role.current);

if (currentRoles.length !== 1) {
  throw new Error(`Expected exactly one current role, found ${currentRoles.length}.`);
}

export const currentExperience = currentRoles[0];

export function formatExperiencePeriod(role: Experience): string {
  const format = (value: string) => {
    const [year, month] = value.split("-");
    return new Intl.DateTimeFormat("en-CA", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)));
  };

  return `${format(role.startDate)} to ${role.current ? "Present" : format(role.endDate!)}`;
}
