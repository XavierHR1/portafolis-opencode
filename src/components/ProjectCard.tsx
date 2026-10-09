import Link from "next/link";
import CategoryBadge from "./CategoryBadge";
import type { Project } from "@/data/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <CategoryBadge id={project.category} />
          <span className="text-xs font-medium text-slate-400">
            {project.year}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-slate-100 dark:group-hover:text-sky-400">
          <Link href={`/projectes/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              +{project.technologies.length - 4}
            </li>
          )}
        </ul>
      </div>

      <div className="flex items-center gap-3 border-t border-slate-100 px-6 py-4 text-sm font-medium dark:border-slate-800">
        <Link
          href={`/projectes/${project.slug}`}
          className="text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
        >
          Veure detall →
        </Link>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Codi
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
