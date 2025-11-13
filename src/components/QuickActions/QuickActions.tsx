import Button from "../Button/Button";
import "./style.css";

export default function QuickActions({
  setAllToCompleted,
  resetAll,
  setRandomTechToInProgress,
  exportTechnologies,
}: {
  setAllToCompleted: () => void;
  resetAll: () => void;
  setRandomTechToInProgress: () => void;
  exportTechnologies: () => void;
}) {
  return (
    <div className="quick-actions-section">
      <h2>Быстрые действия</h2>
      <div className="quick-actions">
        <Button
          onClick={setAllToCompleted}
          text="Отметить все как выполненные"
        />
        <Button onClick={resetAll} text="Сбросить все статусы" />
        <Button
          onClick={setRandomTechToInProgress}
          text="Случайный выбор следующей технологии"
        />
        <Button onClick={exportTechnologies} text="Экспортировать" />
      </div>
    </div>
  );
}
