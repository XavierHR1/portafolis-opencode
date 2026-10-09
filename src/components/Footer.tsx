import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="contacte"
      className="mt-24 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Portafolis
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Recull de projectes de desenvolupament frontend, backend, mobile i
            devops.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Contacte
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a
                className="transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                href="mailto:hola@exemple.com"
              >
                hola@exemple.com
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                href="https://github.com/exemple"
                target="_blank"
                rel="noreferrer"
              >
                github.com/exemple
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Enllaços
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link
                className="transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                href="/#projectes"
              >
                Projectes
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                href="/#sobre-mi"
              >
                Sobre mi
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        © {currentYear} Portafolis interactiu. Fet amb Next.js i
        Tailwind CSS.
      </div>
    </footer>
  );
}
