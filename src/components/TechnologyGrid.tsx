import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

type TechnologyGridProps = {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
};

const TechnologyGrid = ({
  technologies,
  selectedTechnologies,
  onAdd,
}: TechnologyGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isSelected={isSelected}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default TechnologyGrid;
