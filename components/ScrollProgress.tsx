"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    // Absolute top of the nav band — sits right at the boundary below the status-bar spacer
    <div
      className="absolute top-0 left-0 right-0 h-0.5"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-brand-500 to-violet-500 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
