import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryBadge from "@/components/CategoryBadge";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projecte no trobat" };
  return {
    title: `${project.title} · Portafolis`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/#projectes"
        className="text-sm font-medium text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
      >
        ← Tornar als projectes
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CategoryBadge id={project.category} />
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {project.year}
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Veure demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Codi font
          </a>
        )}
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Descripció
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Tecnologies
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Etiquetes
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Projectes similars
          </h2>
          <ul className="mt-4 grid gap-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/projectes/${item.slug}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors hover:border-sky-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-sky-600 dark:hover:bg-slate-900"
                >
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    {item.title}
                  </span>
                  <span className="text-slate-400">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
