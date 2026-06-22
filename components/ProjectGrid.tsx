import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={project.slug}>
          <Link
            className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
            href={`/projects/${project.slug}`}
          >
            <Reveal type="image" className="project-image">
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
                <div className="project-overlay-content">
                  <span>VIEW PROJECT</span>
                  <span>↗&#xFE0E;</span>
                </div>
              </div>
            </Reveal>
            <Reveal type="fade-up" className="project-meta">
              <div>
                <h5>{project.name}</h5>
                <p>{project.types.join(" · ")}</p>
              </div>
              <span>{project.year}</span>
            </Reveal>
          </Link>
        </div>
      ))}
    </div>
  );
}
