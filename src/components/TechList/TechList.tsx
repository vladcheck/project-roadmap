import { FilterStatus, Status, Tech } from "../../types";
import { getNextStatus } from "../../utils/status";
import { getTechnologiesByValue, sortById } from "../../utils/tech";
import TechCard from "../TechCard/TechCard";
import "./style.css";

export default function TechList({
  technologies,
  setTechnologies,
  filters,
}: {
  technologies: Tech[];
  setTechnologies: (arg0: Tech[]) => void;
  filters: { status: FilterStatus };
}) {
  const filteredTechnologies = filters.status
    ? getTechnologiesByValue<Status>(technologies, "status", filters.status)
    : technologies;

  return (
    <div className="tech-list">
      <span className="found-count">
        Результаты: {filteredTechnologies.length}
      </span>
      <div className="technologies">
        {filteredTechnologies.map((t) => (
          <TechCard
            setStatus={(id: string) => {
              const tech = technologies.filter((t) => t.id === id)[0];
              tech.status = getNextStatus(tech.status);
              setTechnologies(
                sortById([...technologies.filter((t) => t.id !== id), tech])
              );
            }}
            id={t.id}
            key={t.id}
            title={t.title}
            description={t.description}
            status={t.status}
          />
        ))}
      </div>
    </div>
  );
}
