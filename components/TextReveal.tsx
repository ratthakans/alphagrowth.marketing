"use client";

import { useEffect, useRef, useState } from "react";

// Reveals children line-by-line with a mask + slide-up, on view.
export default function TextReveal({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight - 20) {
      // visible at mount → reveal on next frame (so the transition still plays)
      requestAnimationFrame(() => setShown(true));
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span
            className={`block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              shown ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
            } ${lineClassName}`}
            style={{ transitionDelay: `${delay + i * 120}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}
