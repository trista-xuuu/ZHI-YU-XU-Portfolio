import Link from "next/link";
import Image from "next/image";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { MorphingLogo } from "@/components/MorphingLogo";
import { HomeStats } from "@/components/HomeStats";
import { projects } from "@/data/projects";

export default function Home() {
  const latestProjects = [...projects]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .slice(0, 5);

  return (
    <main>
      <MorphingLogo />
      <section className="hero page-shell">
        <p className="eyebrow">PORTFOLIO · 2020—2026</p>
        <div className="hero-bottom">
          <span className="scroll-cue" aria-hidden="true">
            <span>SCROLL</span>
            <span className="scroll-arrow">↓</span>
          </span>
        </div>
      </section>

      <section className="about page-shell" id="about">
        <Reveal type="image" className="about-image">
          <Image
            src="/images/portfolio-photo-2.webp"
            alt="芝瑜的個人照片"
            fill
            sizes="(max-width: 760px) 86vw, 38vw"
            priority
          />
        </Reveal>
        <div className="about-copy">
          <Reveal type="text"><p className="section-index">ABOUT</p></Reveal>
          <Reveal type="text">
            <h1>
              Grows together,
              <br />
              Goes together.
            </h1>
          </Reveal>
          <Reveal type="fade-up">
            <p>
              Hi! 我是芝瑜，曾任職五年半的網站 UIUX 設計與企劃，熱衷於挑戰自我可能性，
              並與團隊共同成長。因喜愛規劃分析、串聯角色、推動執行，目前正朝 PM 之路邁進。
            </p>
          </Reveal>
          <Reveal type="fade-up">
            <a className="text-link" href="mailto:trista10418063@gmail.com" data-text="LET'S TALK ↗&#xFE0E;">
              <span>LET&apos;S TALK ↗&#xFE0E;</span>
            </a>
          </Reveal>
        </div>
      </section>

      <HomeStats />

      <section className="work-section page-shell">
        <div className="section-heading">
          <div>
            <Reveal type="text"><p className="section-index">PROJECTS</p></Reveal>
            <Reveal type="text"><h2>Latest Published</h2></Reveal>
          </div>
        </div>
        <ProjectGrid projects={latestProjects} />
        <div className="work-footer">
          <Link className="pill-link" href="/projects" data-text="ALL PROJECTS">
            <span>ALL PROJECTS</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
