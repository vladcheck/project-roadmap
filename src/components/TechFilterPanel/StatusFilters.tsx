import Button from "../Button/Button";
import { FiltersProps } from "./types";
import "./style.css";

export default function StatusFilters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="status-filters">
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
  );
}
