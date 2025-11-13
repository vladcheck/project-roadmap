import Button from "../Button/Button";
import { FiltersProps } from "./types";

export default function StatusFilters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="status-filters">
      <h2>Показать технологии по статусу</h2>
      <div className="row">
        <Button
          onClick={() => setFilters({ ...filters, status: undefined })}
          text="Все"
        />
        <Button
          onClick={() => setFilters({ ...filters, status: "not-started" })}
          text="Не начатые"
        />
        <Button
          onClick={() => setFilters({ ...filters, status: "in-progress" })}
          text=" В процессе изучения"
        />
        <Button
          onClick={() => setFilters({ ...filters, status: "completed" })}
          text="Изученные"
        />
        <Button
          onClick={() => setFilters({ ...filters, status: "cancelled" })}
          text="Отмененные"
        />
      </div>
    </div>
  );
}
