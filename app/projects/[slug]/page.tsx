import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.intro,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const sameTypeProjects = projects.filter(
    (item) =>
      item.slug !== project.slug &&
      item.types.some((type) => project.types.includes(type)),
  );
  const sameTagProjects = projects.filter(
    (item) =>
      item.slug !== project.slug &&
      !sameTypeProjects.some((related) => related.slug === item.slug) &&
      item.tags.some((tag) => project.tags.includes(tag)),
  );
  const relatedProjects = [...sameTypeProjects, ...sameTagProjects].slice(0, 2);

  return (
    <main className="project-detail page-shell">
      <header className="project-detail-header">
        <p className="eyebrow">
          PROJECT / {project.year} · {project.types.join(" · ")}
        </p>
        <h1>{project.name}</h1>
      </header>

      <section className="project-detail-summary">
        <div className="project-detail-intro">
          <p>{project.intro}</p>
          <div className="project-detail-actions">
            <a href={project.url} target="_blank" rel="noreferrer">
              VISIT WEBSITE ↗
            </a>
            <CopyLinkButton />
          </div>
        </div>

        <dl>
          <div>
            <dt>CLIENT</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>DATE</dt>
            <dd>{project.date}</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>{project.roles.join("、")}</dd>
          </div>
          <div>
            <dt>TAG</dt>
            <dd className="project-tags">
              {project.tags.map((tag) => (
                <Link href={`/projects?tag=${encodeURIComponent(tag)}`} key={tag}>
                  {tag}
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <div className="project-detail-image">
        <Image
          src={project.image}
          alt={`${project.name} 專案網站畫面`}
          fill
          sizes="(max-width: 760px) 100vw, 96vw"
          priority
        />
      </div>

      <div className="all-projects-link">
        <Link className="pill-link" href="/projects">
          ALL PROJECTS <span>↗</span>
        </Link>
      </div>

      <section className="next-projects">
        <div className="section-heading">
          <div>
            <p className="section-index">RELATED WORK</p>
            <h2>Next Projects</h2>
          </div>
        </div>
        <ProjectGrid projects={relatedProjects} />
      </section>
    </main>
  );
}
