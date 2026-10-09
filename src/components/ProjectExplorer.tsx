"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { CATEGORIES, type CategoryId, type Project } from "@/data/types";

type Filter = CategoryId | "tots";

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("tots");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["tots", projects.length]]);
    for (const category of CATEGORIES) {
      map.set(
        category.id,
        projects.filter((p) => p.category === category.id).length,
      );
    }
    return map;
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => active === "tots" || p.category === active)
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return b.year - a.year;
      });
  }, [projects, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label="Filtra els projectes per tipus"
          className="flex flex-wrap gap-2"
        >
          <FilterButton
            active={active === "tots"}
            onClick={() => setActive("tots")}
            label="Tots"
            count={counts.get("tots") ?? 0}
          />
          {CATEGORIES.map((category) => (
            <FilterButton
              key={category.id}
              active={active === category.id}
              onClick={() => setActive(category.id)}
              label={category.label}
              count={counts.get(category.id) ?? 0}
              color={category.color}
            />
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per nom, tag o tecnologia..."
            aria-label="Cerca projectes"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        {filtered.length}{" "}
        {filtered.length === 1 ? "projecte" : "projectes"}
        {active !== "tots" && (
          <>
            {" "}
            a <span className="font-medium text-slate-700 dark:text-slate-200">
              {CATEGORIES.find((c) => c.id === active)?.label}
            </span>
          </>
        )}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          No s&apos;ha trobat cap projecte amb aquests filtres.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  count,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  color?: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-transparent text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
      }`}
      style={
        active
          ? {
              backgroundColor: color ?? "#0ea5e9",
              boxShadow: `0 4px 14px ${color ?? "#0ea5e9"}40`,
            }
          : undefined
      }
    >
      {label}
      <span
        className={`rounded-full px-1.5 text-xs ${
          active
            ? "bg-white/25"
            : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
