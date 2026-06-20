import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "徐芝瑜的網站企劃與 UIUX 設計作品。",
};

export default function ProjectsPage() {
  const projectYears = projects.map((project) => project.year);
  const earliestYear = Math.min(...projectYears);
  const latestYear = Math.max(...projectYears);

  return (
    <main className="projects-page page-shell">
      <header className="projects-hero">
        <p className="eyebrow">
          {earliestYear}—{latestYear}
        </p>
        <h1>Projects</h1>
      </header>
      <Suspense fallback={<div className="projects-loading">Loading projects…</div>}>
        <ProjectsExplorer projects={projects} />
      </Suspense>
    </main>
  );
}
