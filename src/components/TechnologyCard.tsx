import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isSelected: boolean;
  onAdd: (technology: Technology) => void;
};

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-slate-100 text-slate-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-orange-50 text-orange-600",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-blue-50 text-blue-600",
  Modern: "bg-blue-50 text-blue-600",
  Containers: "bg-blue-50 text-blue-600",
};

const TechnologyCard = ({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-slate-50 p-2.5">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
            badgeColors[technology.badge] ?? "bg-slate-100 text-slate-500"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-xl font-black tracking-tight text-slate-950">
          {technology.name}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
          {technology.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
              {technology.category}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {technology.difficulty}
            </span>
          </div>

          <span className="shrink-0 text-sm font-black text-slate-800">
            <span className="text-amber-500">★</span> {technology.rating}
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isSelected}
          className={`w-full rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            isSelected
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;
