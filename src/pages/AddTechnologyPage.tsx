import { useRef } from "react";
import Row from "../components/Row/Row";
import { Status, Tech } from "../types";
import translate from "../utils/i18n";
import "./AddTechnologyPage.css";
import { v4 as uuidv4 } from "uuid";
import useTechnologies from "../hooks/useTechnologies";

export default function AddTechnologyPage() {
  const { addTechnology } = useTechnologies();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <main>
      <form id="add-technology-form" ref={formRef}>
        <h2>Добавить технологию</h2>
        <Row>
          <label htmlFor="technology-name">Название</label>
          <div className="input-container required">
            <input
              type="text"
              name="name"
              id="technology-name"
              placeholder="Название"
              minLength={2}
              maxLength={100}
              required
              aria-required="true"
            />
          </div>
        </Row>
        <Row>
          <label htmlFor="technology-status">Статус</label>
          <div className="input-container required">
            <select
              name="status"
              id="technology-status"
              required
              aria-required="true"
            >
              {(
                [
                  "cancelled",
                  "completed",
                  "in-progress",
                  "not-started",
                ] satisfies Status[]
              ).map((status) => (
                <option value={status} key={status}>
                  {translate(status)}
                </option>
              ))}
            </select>
          </div>
        </Row>
        <Row>
          <label htmlFor="technology-description">Описание</label>
          <div className="input-container">
            <textarea
              aria-required="false"
              id="technology-description"
              name="description"
              rows={2}
              cols={40}
              maxLength={1000}
            />
          </div>
        </Row>
        <Row>
          <label htmlFor="technology-notes">Заметки</label>
          <div className="input-container">
            <textarea
              aria-required="false"
              id="technology-notes"
              name="notes"
              rows={2}
              cols={40}
              maxLength={1000}
            />
          </div>
        </Row>
        <Row>
          <label htmlFor="technology-due-date">Дедлайн</label>
          <div className="input-container">
            <input
              type="date"
              id="technology-due-date"
              name="dueDate"
              aria-required="false"
            />
          </div>
        </Row>
        <Row>
          <button
            type="submit"
            onClick={(e) => {
              if (formRef.current?.checkValidity()) {
                e.preventDefault();
                const values: Record<string, string> = {};
                for (const input of formRef.current.elements) {
                  if (input.nodeName !== "BUTTON") {
                    // @ts-ignore
                    values[input.name] = input.value || "";
                  }
                }
                console.log(values);
                addTechnology({ ...values, id: uuidv4() } as Tech);
              }
            }}
          >
            Создать
          </button>
        </Row>
      </form>
    </main>
  );
}
