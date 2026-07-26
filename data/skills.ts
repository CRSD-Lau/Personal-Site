export type CapabilityLevel =
  "Core delivery strength" | "Platform experience" | "Technical literacy";

export interface CapabilityGroup {
  id: string;
  index: string;
  name: string;
  level: CapabilityLevel;
  summary: string;
  capabilities: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "ai-ml-delivery",
    index: "01",
    name: "Applied AI/ML Delivery",
    level: "Core delivery strength",
    summary:
      "Creating the structure that helps engineering work move from definition toward reliable implementation.",
    capabilities: [
      "Applied AI/ML Engineering Delivery",
      "Model Implementation Coordination",
      "Technical Planning",
      "Production Readiness",
      "Validation Coordination",
      "Risk and Dependency Management",
      "AI-assisted Workflows",
    ],
  },
  {
    id: "project-leadership",
    index: "02",
    name: "Project and Delivery Leadership",
    level: "Core delivery strength",
    summary:
      "Keeping ownership, decisions, priorities, and progress clear across technical and business teams.",
    capabilities: [
      "Project Management",
      "Kanban",
      "Prioritisation",
      "Roadmap Planning",
      "Milestone Planning",
      "Cross-functional Coordination",
      "Executive Communication",
    ],
  },
  {
    id: "insurance-platforms",
    index: "03",
    name: "Insurance and Platform Experience",
    level: "Platform experience",
    summary:
      "A practical view of insurance operations and the platforms that support customer and employee journeys.",
    capabilities: [
      "TD Insurance",
      "Digital Insurance Servicing",
      "Guidewire PolicyCenter",
      "Guidewire ClaimCenter",
      "Guidewire BillingCenter",
      "Claims Operations",
      "Vendor Management",
      "Product and Regulatory Work",
    ],
  },
  {
    id: "tools-technical",
    index: "04",
    name: "Tools and Technical Literacy",
    level: "Technical literacy",
    summary:
      "Enough technical fluency to ask useful questions, follow implementation detail, and improve the flow of work.",
    capabilities: [
      "Jira",
      "Confluence",
      "GitHub",
      "GitHub Copilot",
      "Microsoft 365",
      "Tableau",
      "Python",
      "SQL",
      "VBA",
      "Data Analysis",
      "Automation",
      "AI/ML Concepts",
    ],
  },
];
