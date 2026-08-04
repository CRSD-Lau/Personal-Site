export type ProjectMetric = {
  value: string;
  label: string;
  context: string;
};

export type ProjectStage = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  cardSummary: string;
  problem: {
    heading: string;
    description: string;
  };
  date: string;
  role: string;
  technologies: readonly string[];
  preview: {
    src: string;
    alt: string;
    width: number;
    height: number;
    credit: string;
  };
  metrics: readonly ProjectMetric[];
  stages: readonly ProjectStage[];
  transferableSkills: readonly string[];
  licenseLabel: string;
  audit: {
    date: string;
    isoDate: string;
    commit: string;
    baselineCode: number;
    currentCode: number;
    methodology: string;
  };
  links: {
    repository: string;
    releases: string;
    license: string;
    compliance: string;
    upstream: string;
  };
  attribution: string;
  responsibleUse: string;
};

export const projects: readonly Project[] = [
  {
    slug: "deep-live-cam",
    title: "Deep Live Cam Studio",
    eyebrow: "Independent open-source case study",
    summary:
      "A Windows-focused desktop product evolved from an upstream face-processing project into a more reproducible, hardware-aware release experience for local creative workflows.",
    cardSummary:
      "A Windows desktop release, validation, and governance case study for local AI-assisted media workflows.",
    problem: {
      heading: "A capable project still needed a dependable Windows release.",
      description:
        "The project needed a desktop workflow that could be installed, validated against the intended accelerator, connected to local capture and output, and explained honestly across separate hardware profiles. The delivery problem was to make those capabilities reproducible without obscuring the project's upstream origin.",
    },
    date: "2026",
    role: "Independent product, release, and engineering work",
    technologies: ["Python", "PySide6", "ONNX Runtime", "CUDA", "DirectML", "OBS"],
    preview: {
      src: "/works/deep-live-cam/social-preview.png",
      alt: "Deep Live Cam Studio preview showing a dark desktop interface illustration with CUDA, DirectML, and OBS Live Output labels.",
      width: 1280,
      height: 640,
      credit: "Original project artwork by Neil Mitchell",
    },
    metrics: [
      {
        value: "158",
        label: "authored post-fork commits",
        context: "Since the exact upstream merge base in May 2026.",
      },
      {
        value: "20",
        label: "merged pull requests",
        context: "Release, quality, security, and product work merged into the project.",
      },
      {
        value: "510",
        label: "automated tests",
        context: "Passing source-suite result in the audited repository snapshot.",
      },
      {
        value: "CUDA + DirectML",
        label: "Windows release profiles",
        context: "Separate accelerator distributions with provider-specific validation.",
      },
    ],
    stages: [
      {
        title: "Product direction",
        description:
          "Shape a Windows desktop experience around local capture, preview, rendering, and virtual-camera output.",
      },
      {
        title: "Release profiles",
        description:
          "Keep NVIDIA CUDA and AMD or Intel DirectML distributions separate and reproducible.",
      },
      {
        title: "Evidence gates",
        description:
          "Validate the requested provider in a real ONNX session and pair automation with hardware checks.",
      },
      {
        title: "Release integrity",
        description:
          "Publish hashes, corresponding source, dependency evidence, and focused release verification.",
      },
      {
        title: "Responsible use",
        description:
          "Keep models out of release assets and make consent, licence notes, and checksums visible before download.",
      },
    ],
    transferableSkills: [
      "Delivery planning and dependency management",
      "Release readiness and operational risk controls",
      "Technical evidence translated for practical decisions",
      "Governance, attribution, and open-source stewardship",
    ],
    licenseLabel: "AGPL-3.0",
    audit: {
      date: "August 3, 2026",
      isoDate: "2026-08-03",
      commit: "71bb632",
      baselineCode: 5704,
      currentCode: 14483,
      methodology:
        "Clean application code is measured from tracked Git snapshots and excludes tests, tooling, documentation, licences, binaries, models, and local environments.",
    },
    links: {
      repository: "https://github.com/CRSD-Lau/deep-live-cam",
      releases: "https://github.com/CRSD-Lau/deep-live-cam/releases/latest",
      license:
        "https://github.com/CRSD-Lau/deep-live-cam/blob/windows-obs-virtualcam-runtime/LICENSE",
      compliance:
        "https://github.com/CRSD-Lau/deep-live-cam/blob/windows-obs-virtualcam-runtime/COMPLIANCE.md",
      upstream: "https://github.com/hacksider/Deep-Live-Cam",
    },
    attribution:
      "Deep Live Cam Studio is a Windows-focused derivative of the original Deep-Live-Cam project. Upstream history and contributors remain part of the project record.",
    responsibleUse:
      "Use face-swap software only with consent and for lawful purposes. This case study describes independent technical work and is not legal advice.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
