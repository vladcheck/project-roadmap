import TechList from "../components/TechList/TechList";
import useLocalStorage from "../hooks/useLocalStorage";
import useTechnologies from "../hooks/useTechnologies";
import { TechFilters } from "../types";

export default function TechnologyListPage() {
  const { technologies, setTechnologies } = useTechnologies();
  const [filters] = useLocalStorage<TechFilters>("filters", {});

  return (
    <main>
      <TechList
        technologies={technologies}
        setTechnologies={setTechnologies}
        filters={filters}
      />
    </main>
  );
}
