import ProjectExplorer from "@/components/ProjectExplorer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.14),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(139,92,246,0.12),transparent)]"
        />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Disponible per a nous projectes
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Hola, soc{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              desenvolupador
            </span>{" "}
            i construeixo productes digitals.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Aquest és el meu portafolis interactiu. Explora els projectes i
            filtra&apos;ls pel tipus de feina: frontend, backend, full stack,
            mobile, devops i més.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projectes"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Veure projectes
            </a>
            <a
              href="#contacte"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <section id="projectes" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Projectes
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Filtra per tipus de projecte o cerca per tecnologia. Els resultats
            s&apos;actualitzen a l&apos;instant.
          </p>
        </div>
        <div className="mt-8">
          <ProjectExplorer projects={projects} />
        </div>
      </section>

      <section
        id="sobre-mi"
        className="mx-auto mt-24 max-w-6xl scroll-mt-20 px-4 sm:px-6"
      >
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Sobre mi
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            Soc estudiant de Desenvolupament d&apos;Aplicacions Multiplataforma
            i m&apos;apassiona construir aplicacions completes, des de la
            interfície fins a la base de dades i el desplegament. Gaudeixo
            aprenent noves tecnologies i aplicant-les a projectes reals.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            <Stat value={`${projects.length}+`} label="Projectes" />
            <Stat value="6" label="Tipus de projecte" />
            <Stat value="2023" label="Començant a programar" />
          </dl>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-bold text-slate-900 dark:text-white">
        {value}
      </dt>
      <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        {label}
      </dd>
    </div>
  );
}
