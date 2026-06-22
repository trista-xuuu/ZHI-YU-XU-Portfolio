"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 預留一段時間讓全站畫面載入與字體就緒
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loaded ? "is-loaded" : ""}`}>
      <div className="preloader-bg"></div>
    </div>
  );
}
