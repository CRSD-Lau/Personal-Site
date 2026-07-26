export const deliveryStages = [
  {
    index: "01",
    title: "Business Objective",
    description: "Start with the outcome, the people it serves, and the decision to be made.",
  },
  {
    index: "02",
    title: "Clarify Scope",
    description: "Turn broad intent into boundaries, ownership, and a practical next step.",
  },
  {
    index: "03",
    title: "Coordinate Teams",
    description: "Connect engineering and business work without losing the context between them.",
  },
  {
    index: "04",
    title: "Manage Risk and Dependencies",
    description: "Make blockers, trade-offs, and required decisions visible early.",
  },
  {
    index: "05",
    title: "Validate Readiness",
    description: "Confirm testing, integration, monitoring, and handoff expectations.",
  },
  {
    index: "06",
    title: "Support Delivery",
    description: "Keep progress visible through implementation and operational transition.",
  },
] as const;

export const workingPrinciples = [
  {
    title: "Create clarity",
    description:
      "Turn broad objectives into practical plans, clear ownership, and visible next steps.",
  },
  {
    title: "Maintain flow",
    description:
      "Track priorities, blockers, dependencies, and decisions across the Kanban system.",
  },
  {
    title: "Connect context",
    description:
      "Help technical and business partners understand the constraints shaping each other’s work.",
  },
  {
    title: "Surface risk early",
    description:
      "Bring emerging issues forward while there is still time to make a useful decision.",
  },
  {
    title: "Communicate precisely",
    description:
      "Give each audience the detail it needs, with a clear signal on decisions and next steps.",
  },
] as const;
