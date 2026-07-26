"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
}

function parseMetric(value: string) {
  const match = value.match(/^([^0-9]*)([\d,]+)(.*)$/);

  if (!match) {
    return { end: 0, prefix: "", suffix: value };
  }

  return {
    prefix: match[1],
    end: Number(match[2].replaceAll(",", "")),
    suffix: match[3],
  };
}

const numberFormatter = new Intl.NumberFormat("en-CA");

export default function AnimatedCounter({
  value,
  duration = 1600,
  delay = 0,
}: AnimatedCounterProps) {
  const { end, prefix, suffix } = useMemo(() => parseMetric(value), [value]);
  const [count, setCount] = useState(end);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!counter || reduceMotion || !("IntersectionObserver" in window)) {
      setCount(end);
      return;
    }

    let animationFrame = 0;
    let delayTimer = 0;
    setCount(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const animate = () => {
          const startedAt = performance.now();

          const update = (currentTime: number) => {
            const progress = Math.min((currentTime - startedAt) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.round(easedProgress * end));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(update);
            }
          };

          animationFrame = requestAnimationFrame(update);
        };

        if (delay > 0) {
          delayTimer = window.setTimeout(animate, delay);
        } else {
          animate();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(delayTimer);
    };
  }, [delay, duration, end]);

  return (
    <span ref={counterRef} role="text" aria-label={value}>
      <span aria-hidden="true">
        {prefix}
        {numberFormatter.format(count)}
        {suffix}
      </span>
    </span>
  );
}
