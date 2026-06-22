import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { Reveal } from "@/components/Reveal";
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
        <Reveal type="text">
          <p className="eyebrow">
            PROJECT / {project.year} · {project.types.join(" · ")}
          </p>
        </Reveal>
        <Reveal type="text">
          <h1>{project.name}</h1>
        </Reveal>
      </header>

      <section className="project-detail-summary">
        <Reveal type="fade-up" className="project-detail-intro">
          <p>{project.intro}</p>
          <div className="project-detail-actions">
            <a href={project.url} target="_blank" rel="noreferrer" className="pill-link is-solid" data-text="VISIT WEBSITE ↗&#xFE0E;">
              <span>VISIT WEBSITE ↗&#xFE0E;</span>
            </a>
            <CopyLinkButton />
          </div>
        </Reveal>

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

      <Reveal type="image" className="project-detail-image">
        <Image
          src={project.image}
          alt={`${project.name} 專案網站畫面`}
          fill
          sizes="(max-width: 760px) 100vw, 96vw"
          priority
        />
      </Reveal>

      <div className="all-projects-link">
        <Link className="pill-link" href="/projects" data-text="ALL PROJECTS">
          <span>ALL PROJECTS</span>
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
