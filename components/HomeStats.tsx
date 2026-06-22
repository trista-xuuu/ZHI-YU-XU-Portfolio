"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

function AnimatedNumber({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          let startTimestamp: number | null = null;
          const duration = 2000;
          const startValue = 0;

          const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = Math.round(startValue + (value - startValue) * easeOutQuart(progress));
            
            if (nodeRef.current) {
              nodeRef.current.textContent = currentVal.toString();
            }

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return <span ref={nodeRef}>0</span>;
}

export function HomeStats() {
  return (
    <section className="home-stats page-shell">
      <div className="stats-grid">
        <Reveal type="fade-up" delay={0}>
          <div className="stat-card is-hollow">
            <p className="stat-label">UIUX & Planner</p>
            <p className="stat-value">
              <span><AnimatedNumber value={5} />+</span><span className="stat-unit">years</span>
            </p>
          </div>
        </Reveal>
        <Reveal type="fade-up" delay={0.1}>
          <div className="stat-card is-hollow">
            <p className="stat-label">Published</p>
            <p className="stat-value">
              <AnimatedNumber value={15} /><span className="stat-unit">Projects</span>
            </p>
          </div>
        </Reveal>
        <Reveal type="fade-up" delay={0.2}>
          <div className="stat-card is-solid">
            <p className="stat-label">Awards</p>
            <p className="stat-value">Red dot Best of the Best</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
