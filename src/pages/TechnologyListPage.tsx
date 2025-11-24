import TechList from "../components/TechList/TechList";
import useLocalStorage from "../hooks/useLocalStorage";
import { TechFilters } from "../types";

export default function TechnologyListPage() {
  const [filters] = useLocalStorage<TechFilters>("filters", {});

  return (
    <main>
      <TechList filters={filters} />
    </main>
  );
}
