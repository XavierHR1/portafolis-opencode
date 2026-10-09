import Link from "next/link";

const navItems = [
  { href: "/#projectes", label: "Projectes" },
  { href: "/#sobre-mi", label: "Sobre mi" },
  { href: "/#contacte", label: "Contacte" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 text-sm font-bold text-white">
            P
          </span>
          <span className="text-slate-900 dark:text-slate-100">
            Portafolis
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
