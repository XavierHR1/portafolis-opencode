import { categoryById, type CategoryId } from "@/data/types";

export default function CategoryBadge({ id }: { id: CategoryId }) {
  const category = categoryById(id);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        color: category.color,
        backgroundColor: `${category.color}1a`,
        border: `1px solid ${category.color}33`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: category.color }}
      />
      {category.label}
    </span>
  );
}
