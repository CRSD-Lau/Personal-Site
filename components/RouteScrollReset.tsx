"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const restoreFrame = window.requestAnimationFrame(() => {
      if (previousScrollBehavior) {
        root.style.scrollBehavior = previousScrollBehavior;
      } else {
        root.style.removeProperty("scroll-behavior");
      }
    });

    return () => {
      window.cancelAnimationFrame(restoreFrame);

      if (previousScrollBehavior) {
        root.style.scrollBehavior = previousScrollBehavior;
      } else {
        root.style.removeProperty("scroll-behavior");
      }
    };
  }, [pathname]);

  return null;
}
