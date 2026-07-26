export interface ImpactMetric {
  value: string;
  label: string;
  context: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    value: "80,000+",
    label: "Invoices processed",
    context: "Quarterly accounts receivable cycle managed in vendor operations.",
  },
  {
    value: "$55MM+",
    label: "Quarterly AR activity",
    context: "Accounts receivable work coordinated across a large operational process.",
  },
  {
    value: "7+",
    label: "Years at TD",
    context: "Progression through claims, operations, digital, product, and AI/ML work.",
  },
  {
    value: "11",
    label: "Product initiatives delivered",
    context:
      "Led initiatives from discovery through delivery across Digital Service Performance and SPARK.",
  },
];

export const impactStories = [
  {
    id: "current-focus",
    marker: "Now",
    title: "Applied AI/ML engineering delivery",
    description:
      "Coordinating planning, dependencies, implementation, validation, and production-readiness work for initiatives supporting TD Insurance.",
    points: [
      "Practical plans across technical and business workstreams",
      "Visible risks, decisions, dependencies, and milestones",
      "Clear reporting supported by AI-assisted workflows",
    ],
  },
  {
    id: "automation",
    marker: "Built",
    title: "Operational automation",
    description:
      "Designed VBA workflows for large-scale aggregation and reconciliation, improving the consistency and flow of vendor operations.",
    points: [
      "More than 80,000 invoices in a quarterly cycle",
      "Accounts receivable activity valued at more than $55 million",
      "Stronger visibility and fewer manual reconciliation steps",
    ],
  },
  {
    id: "recognition",
    marker: "2022",
    title: "TDI All Star recognition",
    description:
      "Recognised for contributions across vendor operations, including dependable execution, useful reporting, and trusted working relationships.",
    points: [
      "Operational ownership",
      "Cross-business communication",
      "Practical process improvement",
    ],
  },
] as const;
