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

type StatItem = {
  _key: string;
  label: string;
  isNumber: boolean;
  numberValue?: number;
  numberSuffix?: string;
  unit?: string;
  textValue?: string;
  isSolid: boolean;
};

export function HomeStats({ stats }: { stats: StatItem[] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="home-stats page-shell">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Reveal type="fade-up" delay={index * 0.1} key={stat._key}>
            <div className={`stat-card ${stat.isSolid ? "is-solid" : "is-hollow"}`}>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">
                {stat.isNumber ? (
                  <>
                    <span><AnimatedNumber value={stat.numberValue || 0} />{stat.numberSuffix}</span>
                    {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                  </>
                ) : (
                  <>{stat.textValue}</>
                )}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
