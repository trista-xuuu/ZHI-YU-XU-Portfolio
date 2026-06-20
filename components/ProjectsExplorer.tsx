"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Project, ProjectType } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";

const types: ProjectType[] = ["官方網站", "旅遊網站", "企業網站", "系統開發", "ESG 網站"];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [year, setYear] = useState<number | "all">("all");
  const [type, setType] = useState<ProjectType | "all">("all");
  const [filterDocked, setFilterDocked] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const filtersRef = useRef<HTMLElement>(null);
  const selectedTag = searchParams.get("tag");
  const years = useMemo(
    () => [...new Set(projects.map((project) => project.year))].sort((a, b) => b - a),
    [projects],
  );

  useEffect(() => {
    const filters = filtersRef.current;
    if (!filters) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFilterDocked(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
        if (entry.isIntersecting) setFilterPanelOpen(false);
      },
      { threshold: 0 },
    );

    observer.observe(filters);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (year === "all" || project.year === year) &&
          (type === "all" || project.types.includes(type)) &&
          (!selectedTag || project.tags.includes(selectedTag)),
      ),
    [projects, selectedTag, type, year],
  );

  return (
    <>
      <section ref={filtersRef} className="filters" aria-label="作品篩選">
        <FilterSelects
          years={years}
          year={year}
          type={type}
          onYearChange={setYear}
          onTypeChange={setType}
        />
        <div className="filter-result">
          <div className="filter-count">
            <span>{String(filteredProjects.length).padStart(2, "0")}</span>
            <span>PROJECTS</span>
          </div>
          {selectedTag && <strong>TAG / {selectedTag}</strong>}
          {(year !== "all" || type !== "all" || selectedTag) && (
            <button
              type="button"
              onClick={() => {
                setYear("all");
                setType("all");
                router.replace("/projects", { scroll: false });
              }}
            >
              CLEAR ×
            </button>
          )}
        </div>
      </section>

      {filteredProjects.length > 0 ? (
        <ProjectGrid projects={filteredProjects} />
      ) : (
        <div className="empty-state">
          <p>目前沒有符合條件的作品。</p>
          <button
            type="button"
            onClick={() => {
              setYear("all");
              setType("all");
            }}
          >
            清除篩選
          </button>
        </div>
      )}

      {filterDocked && (
        <div className={filterPanelOpen ? "filter-dock is-open" : "filter-dock"}>
          {filterPanelOpen && (
            <div className="filter-dock-panel">
              <div className="filter-dock-heading">
                <span>FILTER PROJECTS</span>
                <button
                  type="button"
                  aria-label="關閉篩選面板"
                  onClick={() => setFilterPanelOpen(false)}
                >
                  ×
                </button>
              </div>
              <FilterSelects
                years={years}
                year={year}
                type={type}
                onYearChange={setYear}
                onTypeChange={setType}
                compact
              />
            </div>
          )}
          <button
            className="filter-dock-button"
            type="button"
            aria-label={filterPanelOpen ? "關閉作品篩選" : "開啟作品篩選"}
            aria-expanded={filterPanelOpen}
            onClick={() => setFilterPanelOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M7 12H17M10 17H14" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

function FilterSelects({
  years,
  year,
  type,
  onYearChange,
  onTypeChange,
  compact = false,
}: {
  years: number[];
  year: number | "all";
  type: ProjectType | "all";
  onYearChange: (value: number | "all") => void;
  onTypeChange: (value: ProjectType | "all") => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "filter-selects is-compact" : "filter-selects"}>
      <label>
        <span>YEAR</span>
        <div className="select-wrap">
          <select
            value={year}
            onChange={(event) =>
              onYearChange(event.target.value === "all" ? "all" : Number(event.target.value))
            }
          >
            <option value="all">All years</option>
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6L8 10L12 6" />
          </svg>
        </div>
      </label>
      <label>
        <span>TYPE</span>
        <div className="select-wrap">
          <select
            value={type}
            onChange={(event) => onTypeChange(event.target.value as ProjectType | "all")}
          >
            <option value="all">All types</option>
            {types.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6L8 10L12 6" />
          </svg>
        </div>
      </label>
    </div>
  );
}
