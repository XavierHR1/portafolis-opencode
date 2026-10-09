import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <span className="text-6xl font-bold text-slate-200 dark:text-slate-800">
        404
      </span>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
        Pàgina no trobada
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        El recurs que busques no existeix o s&apos;ha mogut.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Tornar a l&apos;inici
      </Link>
    </div>
  );
}
