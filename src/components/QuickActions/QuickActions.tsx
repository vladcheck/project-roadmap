import Button from "../Button/Button";
import Icon from "../Icon/Icon";
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
          icon={
            <Icon
              src="/icons/icons8-done-48.png"
              alt="set all technologies as completed"
            />
          }
          text="Отметить все как выполненные"
        />
        <Button
          onClick={resetAll}
          icon={
            <Icon src="/icons/icons8-reset-64.png" alt="reset all statuses" />
          }
          text="Сбросить все статусы"
        />
        <Button
          onClick={setRandomTechToInProgress}
          icon={
            <Icon
              src="/icons/icons8-dice-80.png"
              alt="set random technology's status as 'in-progress'"
            />
          }
          text="Случайный выбор следующей технологии"
        />
        <Button
          onClick={exportTechnologies}
          icon={
            <Icon
              src="/icons/icons8-json-download-64.png"
              alt="download as json"
            />
          }
          text="Экспортировать"
        />
      </div>
    </div>
  );
}
