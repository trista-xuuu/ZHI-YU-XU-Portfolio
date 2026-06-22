"use client";

import { useEffect, useRef } from "react";

export function MorphingLogo() {
  const logoRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let frame = 0;
    let cachedWidthPerPixel = 4.4; // Initial safe fallback
    let hasMeasured = false;

    const render = () => {
      const mobile = window.innerWidth <= 760;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const distance = Math.max(window.innerHeight * 0.68, 420);
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const clientWidth = document.documentElement.clientWidth;
      const containerWidth = Math.min(
        clientWidth - (mobile ? 32 : 64),
        1600,
      );
      
      if (!hasMeasured) {
        const oldSize = logo.style.fontSize;
        const oldSpacing = logo.style.letterSpacing;
        
        // Temporarily set to 100px to measure exactly
        logo.style.fontSize = "100px";
        logo.style.letterSpacing = "-6.5px";
        const rect = logo.getBoundingClientRect();
        
        if (rect.width > 0) {
          cachedWidthPerPixel = rect.width / 100;
          hasMeasured = true;
        }
        
        logo.style.fontSize = oldSize;
        logo.style.letterSpacing = oldSpacing;
      }

      const startY = mobile ? 132 : window.innerHeight * 0.31;
      const widthPerPixel = cachedWidthPerPixel;
      // Size close to container size (98%)
      const fittedSize = (containerWidth * 0.98) / widthPerPixel;
      const startSize = fittedSize;
      const targetX = mobile ? 30 : 52;
      const targetY = mobile ? 31 : 37;
      const targetSize = mobile ? 11 : 14;
      
      // Restore the exact original left-alignment so it shrinks perfectly into the logo
      const startX = mobile ? 16 : 32;
      const startSpacing = startSize * -0.065;
      const targetSpacing = targetSize * 0.12;
      const currentProgress = reduceMotion ? (progress > 0 ? 1 : 0) : eased;

      logo.style.left = `${startX + (targetX - startX) * currentProgress}px`;
      logo.style.transform = `none`;
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
    document.fonts.ready.then(() => {
      hasMeasured = false; // Re-measure with custom font
      requestRender();
    });
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", () => {
      hasMeasured = false; // Re-measure if screen resizes or orientation changes
      requestRender();
    });

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
