import type { Technology } from "../types/technology";

type StackPanelProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackPanel = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackPanelProps) => {
  return (
    <aside className="lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5">
          <h2 className="text-xl font-black text-slate-950">Your Stack</h2>
          <p className="mt-1 text-sm text-slate-400">
            {selectedTechnologies.length === 0
              ? "No technologies selected yet."
              : `${selectedTechnologies.length} ${
                  selectedTechnologies.length === 1
                    ? "Technology"
                    : "Technologies"
                } Selected`}
          </p>
        </div>

        <div className="p-4">
          {selectedTechnologies.length === 0 ? (
            <div className="grid min-h-32 place-items-center rounded-xl border border-dashed border-slate-200 p-6 text-center">
              <p className="text-sm text-slate-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                >
                  <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-8 w-8 shrink-0 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-black text-slate-900">
                      {technology.name}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(technology.id)}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-base text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                    aria-label={`Remove ${technology.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={onRemoveAll}
                className="w-full rounded-xl border border-red-200 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default StackPanel;
