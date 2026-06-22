import Link from "next/link";
import Image from "next/image";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { MorphingLogo } from "@/components/MorphingLogo";
import { HomeStats } from "@/components/HomeStats";
import { client } from "@/sanity/lib/client";
import { projectsQuery, homepageQuery, siteSettingsQuery } from "@/sanity/lib/queries";

// 因為需要使用 Sanity Fetch，首頁必須加入 Revalidate 或設定為動態渲染
// 這裡我們設定 60 秒重新驗證一次，確保資料更新
export const revalidate = 60;

export default async function Home() {
  const allProjects = await client.fetch(projectsQuery);
  const homepage = await client.fetch(homepageQuery);
  const siteSettings = await client.fetch(siteSettingsQuery);

  const latestProjects = allProjects.slice(0, 5);

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
            src={homepage?.aboutImage || "/images/portfolio-photo-2.webp"}
            alt="芝瑜的個人照片"
            fill
            sizes="(max-width: 760px) 86vw, 38vw"
            priority
          />
        </Reveal>
        <div className="about-copy">
          <Reveal type="text"><p className="section-index">ABOUT</p></Reveal>
          <Reveal type="text">
            <h1 style={{ whiteSpace: "pre-line" }}>
              {homepage?.aboutTitle || "Digital Product Designer"}
            </h1>
          </Reveal>
          <Reveal type="fade-up">
            <p>
              {homepage?.aboutDescription || "I'm a designer focusing on digital products and user experiences."}
            </p>
          </Reveal>
          <Reveal type="fade-up">
            <a className="text-link" href={`mailto:${siteSettings?.email || "trista10418063@gmail.com"}`} data-text="LET'S TALK ↗&#xFE0E;">
              <span>LET&apos;S TALK ↗&#xFE0E;</span>
            </a>
          </Reveal>
        </div>
      </section>

      <HomeStats stats={homepage?.stats || [
        { _key: "1", label: "YEARS OF EXPERIENCE", isNumber: true, numberValue: 5, numberSuffix: "+", isSolid: false },
        { _key: "2", label: "PROJECTS DELIVERED", isNumber: true, numberValue: 30, numberSuffix: "+", isSolid: true },
        { _key: "3", label: "CLIENTS GLOBALLY", isNumber: true, numberValue: 15, numberSuffix: "+", isSolid: false },
      ]} />

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
