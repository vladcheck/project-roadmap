import { Status } from "../../types";
import "./style.css";

function translateStatus(status: Status): string {
  switch (status) {
    case "completed":
      return "Выполнена";
    case "cancelled":
      return "Отменена";
    case "in-progress":
      return "Выполняется";
    case "not-started":
      return "Не начата";
  }
}

export default function TechCard({
  id,
  setStatus,
  status,
  title,
  description,
}: {
  id: string;
  setStatus: (id: string) => void;
  status: Status;
  title: string;
  description: string;
}) {
  return (
    <div
      aria-label="Технология"
      className={`tech-card ${status}`}
      onClick={() => {
        setStatus(id);
      }}
    >
      <div className="tech-card-actions">
        <button className="delete-tech-button">x</button>
        <button className="edit-tech-button">edit</button>
      </div>
      <h6 className="title">{title}</h6>
      <p className="description">{description}</p>
      <span className="status">Статус: {translateStatus(status)}</span>
    </div>
  );
}
