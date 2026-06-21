"use client";

import { useEffect, useRef } from "react";

export function MorphingLogo() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let frame = 0;

    const render = () => {
      const mobile = window.innerWidth <= 760;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const distance = Math.max(window.innerHeight * 0.68, 420);
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const startX = mobile ? 16 : 32;
      const startY = mobile ? 132 : window.innerHeight * 0.31;
      const containerWidth = Math.min(
        window.innerWidth - (mobile ? 32 : 64),
        1600,
      );
      const startSize = mobile
        ? Math.min(window.innerWidth * 0.205, 80)
        : containerWidth / 4.3;
      const targetX = mobile ? 30 : 52;
      const targetY = mobile ? 31 : 37;
      const targetSize = mobile ? 11 : 14;
      const startSpacing = startSize * -0.065;
      const targetSpacing = targetSize * 0.12;
      const currentProgress = reduceMotion ? (progress > 0 ? 1 : 0) : eased;

      logo.style.left = `${startX + (targetX - startX) * currentProgress}px`;
      logo.style.top = `${startY + (targetY - startY) * currentProgress}px`;
      logo.style.fontSize = `${startSize + (targetSize - startSize) * currentProgress}px`;
      logo.style.letterSpacing = `${
        startSpacing + (targetSpacing - startSpacing) * currentProgress
      }px`;
      logo.style.opacity = progress > 0.94 ? `${Math.max(0, 1 - (progress - 0.94) / 0.06)}` : "1";
      document.documentElement.style.setProperty("--logo-progress", String(progress));
    };

    const requestRender = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      document.documentElement.style.removeProperty("--logo-progress");
    };
  }, []);

  return (
    <div ref={logoRef} className="morphing-logo" aria-label="ZHI YU XU">
      ZHI YU XU
    </div>
  );
}
