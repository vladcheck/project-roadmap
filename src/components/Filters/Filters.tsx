import { FilterStatus } from "../../types";

interface FiltersProps {
  filters: { status: FilterStatus };
  setFilters: (status: { status: FilterStatus }) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="filters-sectoin">
      <h2>Показать технологии по статусу</h2>
      <div className="filters row">
        <button onClick={() => setFilters({ ...filters, status: null })}>
          Все
        </button>
        <button
          onClick={() => setFilters({ ...filters, status: "not-started" })}
        >
          Не начатые
        </button>
        <button
          onClick={() => setFilters({ ...filters, status: "in-progress" })}
        >
          В процессе изучения
        </button>
        <button onClick={() => setFilters({ ...filters, status: "completed" })}>
          Изученные
        </button>
        <button onClick={() => setFilters({ ...filters, status: "cancelled" })}>
          Отмененные
        </button>
      </div>
    </div>
  );
}
