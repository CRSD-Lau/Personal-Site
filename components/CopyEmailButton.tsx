"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

interface CopyEmailButtonProps {
  email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      className="contact-action contact-action--copy"
      onClick={copyEmail}
      aria-live="polite"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span>{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}
