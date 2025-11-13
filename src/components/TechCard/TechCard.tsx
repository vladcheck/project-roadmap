import { Status, Tech } from "../../types";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./style.css";

const t: { [key: string]: string } = {
  completed: "Изучена",
  cancelled: "Не будет изучена",
  "in-progress": "Изучается",
  "not-started": "Не начата",
};

function translateStatus(status: Status): string {
  return t[status] ?? status;
}

export default function TechCard({
  id,
  setStatus,
  status,
  title,
  description,
  notes = "",
}: Tech & {
  setStatus: (id: string) => void;
}) {
  return (
    <div aria-label="Технология" className={`tech-card ${status}`}>
      <div className="tech-card-actions">
        <Button
          role="button"
          aria-label="Редактировать технологию"
          className="edit-tech-button action"
          text="Редактировать технологию"
          icon={
            <Icon src="/icons/icons8-crayon-48.webp" alt="edit" size={20} />
          }
        />
        <Button
          role="button"
          aria-label="Удалить технологию"
          className="delete-tech-button action"
          text="Удалить технологию"
          icon={
            <Icon src="/icons/icons8-cross-50.webp" alt="delete" size={20} />
          }
        />
      </div>
      <div
        className="tech-info"
        onClick={() => {
          setStatus(id);
        }}
      >
        <h6 className="title">{title}</h6>
        <p className="description">{description}</p>
        <span className="status">Статус: {translateStatus(status)}</span>
        <br />
        {notes ? (
          <small aria-label="notes" className="notes">
            <i>{notes}</i>
          </small>
        ) : null}
      </div>
    </div>
  );
}
