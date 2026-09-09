import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#0A66C2" />
      <circle cx="7.15" cy="8" r="1.35" fill="white" />
      <path d="M5.95 10.4h2.4V18h-2.4z" fill="white" />
      <path
        d="M10.25 10.4h2.3v1.04c.64-.83 1.55-1.29 2.8-1.29 2.42 0 3.35 1.57 3.35 4.08V18h-2.4v-3.45c0-1.23-.22-2.25-1.62-2.25-1.48 0-1.98 1.04-1.98 2.62V18h-2.45z"
        fill="white"
      />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
      <path d="M14 3v6h6M8 13h8M8 17h6" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.769-.244.769-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.79-1.508-3.79-1.508-.511-1.3-1.25-1.646-1.25-1.646-1.022-.699.078-.684.078-.684 1.13.08 1.724 1.16 1.724 1.16 1.004 1.72 2.634 1.223 3.275.935.102-.728.393-1.224.715-1.506-2.499-.284-5.126-1.25-5.126-5.565 0-1.23.44-2.233 1.16-3.021-.117-.285-.503-1.429.11-2.977 0 0 .945-.302 3.095 1.154a10.79 10.79 0 0 1 2.813-.378c.956.005 1.918.129 2.816.378 2.148-1.456 3.091-1.154 3.091-1.154.615 1.548.229 2.692.113 2.977.722.788 1.157 1.792 1.157 3.021 0 4.326-2.631 5.278-5.138 5.557.404.349.764 1.04.764 2.097 0 1.514-.014 2.736-.014 3.108 0 .301.203.652.775.541A11.251 11.251 0 0 0 12 .75Z" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 12.6A9 9 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
