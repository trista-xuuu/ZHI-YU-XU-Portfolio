"use client";

import { useEffect, useRef, useState } from "react";

export type RevealType = "fade-up" | "image" | "text";

export function Reveal({ children, type = "fade-up", className = "" }: { children: React.ReactNode, type?: RevealType, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal reveal-${type} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
