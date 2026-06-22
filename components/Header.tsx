"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header({ email }: { email?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [logoSettled, setLogoSettled] = useState(pathname !== "/");

  useEffect(() => {
    setOpen(false);
    if (pathname !== "/") {
      setLogoSettled(true);
      return;
    }

    const updateLogo = () => {
      const distance = Math.max(window.innerHeight * 0.68, 420);
      setLogoSettled(window.scrollY / distance >= 0.92);
    };

    updateLogo();
    window.addEventListener("scroll", updateLogo, { passive: true });
    window.addEventListener("resize", updateLogo);

    return () => {
      window.removeEventListener("scroll", updateLogo);
      window.removeEventListener("resize", updateLogo);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <Link
        className={`brand ${pathname === "/" && !logoSettled ? "brand-hidden" : ""}`}
        href="/"
        aria-label="ZHI YU XU 首頁"
      >
        ZHI YU XU
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "CLOSE" : "MENU"}</span>
        <i aria-hidden="true" />
      </button>
      <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"}>
        <Link className={pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>
        <Link className={pathname === "/projects" ? "active" : ""} href="/projects">
          Projects
        </Link>
        <a href={`mailto:${email || "trista10418063@gmail.com"}`}>Contact ↗&#xFE0E;</a>
      </nav>
    </header>
  );
}
