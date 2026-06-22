import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects",
  description: "徐芝瑜的網站企劃與 UIUX 設計作品。",
};

export default async function ProjectsPage() {
  const allProjects = await client.fetch(projectsQuery);
  const projectYears = allProjects.map((project: any) => project.year);
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
        <ProjectsExplorer projects={allProjects} />
      </Suspense>
    </main>
  );
}
