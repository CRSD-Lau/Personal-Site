import { currentExperience } from "./experience";

export const siteUrl = "https://neilmitchell.ca";

export const siteMetadata = {
  name: "Neil Mitchell",
  title: "Neil Mitchell | Applied AI/ML Project Manager",
  description:
    "Project Manager II leading applied AI/ML engineering initiatives from planning through production readiness.",
  socialDescription: "Project and delivery leadership for applied AI/ML engineering initiatives.",
  locale: "en_CA",
  socialImage: {
    path: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: "Neil Mitchell, Project Manager II, Applied AI/ML Engineering",
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Approach", href: "#approach" },
  { label: "Expertise", href: "#expertise" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "Neil Mitchell",
  initials: "NM",
  roleTitle: currentExperience.title,
  headline: `${currentExperience.title}, ${currentExperience.functionalArea}`,
  functionalArea: `${currentExperience.functionalArea}${
    currentExperience.division ? `, ${currentExperience.division}` : ""
  }`,
  organizationContext: currentExperience.organization,
  supportingContext: `Supporting ${currentExperience.supportingOrganization}`,
  location: currentExperience.location,
  status: "Open to professional conversations and knowledge sharing.",
  positioning: "I lead applied AI/ML projects from planning through production readiness.",
  currentRoleSummary:
    "I manage delivery plans and production readiness across applied AI/ML engineering projects.",
  introduction:
    "At TD, I plan and coordinate applied AI/ML engineering work that supports TD Insurance. Seven years in insurance operations and digital platforms help me spot dependencies early and keep projects moving.",
  aboutHeading: "Applied AI/ML delivery grounded in insurance experience.",
  about: [
    "My career at TD has moved through claims, vendor operations, digital servicing, product and regulatory work, and now applied AI/ML engineering. Each chapter has added a practical view of how customer needs, operations, data, technology, and implementation decisions connect.",
    "Today, I create structure around complicated engineering work. That means keeping priorities visible, clarifying ownership, coordinating dependencies, surfacing risk, and helping technical and business partners make the decisions that move work forward.",
  ],
  progression: [
    "Claims",
    "Vendor Operations",
    "Digital Services",
    "Product and Regulatory",
    "Applied AI/ML Engineering",
  ],
  facts: [
    { value: "7+", label: "Years at TD" },
    { value: "5", label: "Career roles" },
    { value: "2022", label: "TDI All Star" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/neil-mitchell-a6038b171",
    email: "neil_mitchell89@hotmail.com",
  },
  resume: {
    available: true,
    lastUpdated: "July 2026",
    notice: "View current résumé",
  },
  contact: {
    heading: "Let’s connect.",
    description:
      "I am open to thoughtful conversations about applied AI/ML delivery, insurance technology, project leadership, and practical uses of AI in engineering workflows.",
    topics: [
      "Applied AI/ML Delivery",
      "Insurance Technology",
      "Project Leadership",
      "AI-assisted Engineering Workflows",
    ],
  },
} as const;
