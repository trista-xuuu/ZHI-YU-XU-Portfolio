import Link from "next/link";
import Image from "next/image";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { MorphingLogo } from "@/components/MorphingLogo";
import { projects } from "@/data/projects";

export default function Home() {
  const latestProjects = [...projects]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .slice(0, 5);

  return (
    <main>
      <section className="hero page-shell">
        <p className="eyebrow">PORTFOLIO · 2020—2026</p>
        <MorphingLogo />
        <div className="hero-bottom">
          <span className="scroll-cue" aria-hidden="true">
            <span>SCROLL</span>
            <span className="scroll-arrow">↓</span>
          </span>
        </div>
      </section>

      <Reveal>
        <section className="about page-shell" id="about">
          <div className="about-image">
            <Image
              src="/images/me.webp"
              alt="芝瑜的個人照片"
              fill
              sizes="(max-width: 760px) 100vw, 46vw"
              priority
            />
          </div>
          <div className="about-copy">
            <p className="section-index">01 / ABOUT</p>
            <h2>
              Grows together,
              <br />
              Goes together.
            </h2>
            <p>
              Hi! 我是芝瑜，曾任職五年半的網站 UIUX 設計與企劃，熱衷於挑戰自我可能性，
              並與團隊共同成長。因喜愛規劃分析、串聯角色、推動執行，目前正朝 PM 之路邁進。
            </p>
            <a className="text-link" href="mailto:trista10418063@gmail.com">
              LET&apos;S TALK ↗
            </a>
          </div>
        </section>
      </Reveal>

      <section className="work-section page-shell">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="section-index">02 / SELECTED WORK</p>
              <h2>New Projects</h2>
            </div>
          </div>
        </Reveal>
        <ProjectGrid projects={latestProjects} />
        <div className="work-footer">
          <Link className="pill-link" href="/projects">
            瀏覽所有作品 <span>↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
