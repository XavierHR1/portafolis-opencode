export type CategoryId =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "devops"
  | "disseny"
  | "altres";

export interface Category {
  id: CategoryId;
  label: string;
  color: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: CategoryId;
  tags: string[];
  technologies: string[];
  year: number;
  featured?: boolean;
  repo?: string;
  demo?: string;
}

export const CATEGORIES: Category[] = [
  { id: "frontend", label: "Frontend", color: "#38bdf8" },
  { id: "backend", label: "Backend", color: "#a78bfa" },
  { id: "fullstack", label: "Full Stack", color: "#34d399" },
  { id: "mobile", label: "Mobile", color: "#fbbf24" },
  { id: "devops", label: "DevOps", color: "#fb7185" },
  { id: "disseny", label: "Disseny / UI", color: "#f472b6" },
  { id: "altres", label: "Altres", color: "#94a3b8" },
];

export const categoryById = (id: CategoryId): Category =>
  CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];
