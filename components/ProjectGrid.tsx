import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Reveal key={project.slug}>
          <Link
            className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
            href={`/projects/${project.slug}`}
          >
            <div className="project-image">
              <Image
                src={project.image}
                alt={`${project.name} 專案網站畫面`}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 760px) 100vw, 94vw"
                    : "(max-width: 760px) 100vw, 47vw"
                }
              />
              <div className="project-overlay">
                <span>VIEW PROJECT</span>
                <span>↗</span>
              </div>
            </div>
            <div className="project-meta">
              <div>
                <h3>{project.name}</h3>
                <p>{project.types.join(" · ")}</p>
              </div>
              <span>{project.year}</span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
