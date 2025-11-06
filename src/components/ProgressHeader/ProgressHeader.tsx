import "./ProgressHeader.css";

export default function ProgressHeader({
  totalCount,
  completedCount,
}: {
  totalCount: number;
  completedCount: number;
}) {
  const percentage = Math.round(
    completedCount > 0 ? (completedCount * 100) / totalCount : 0
  );

  return (
    <div className="progress-header">
      <div className="row">
        <label htmlFor="">Всего технологий:</label>
        <span className="total-tech-count">{totalCount}</span>
      </div>
      <div className="progress-container row">
        <label className="percentage-label" htmlFor="learning-progress">
          Изучено: {percentage}%
        </label>
        <progress
          aria-busy="false"
          id="learning-progress"
          role="progressbar"
          max={100}
          value={percentage}
        ></progress>
      </div>
    </div>
  );
}
