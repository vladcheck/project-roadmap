export default function Statistics({
  stats,
}: {
  stats: {
    cancelled: number;
    completed: number;
    inProgress: number;
    notStarted: number;
  };
}) {
  return (
    <div className="statistics">
      <div className="row">
        <label htmlFor="notStarted">Не начато:</label>
        <span>{stats.notStarted}</span>
      </div>
      <div className="row">
        <label htmlFor="inProgress">Изучается:</label>
        <span>{stats.inProgress}</span>
      </div>
      <div className="row">
        <label htmlFor="">Изучено:</label>
        <span>{stats.completed}</span>
      </div>
      <div className="row">
        <label htmlFor="cancelled">Не будет изучено:</label>
        <span>{stats.cancelled}</span>
      </div>
    </div>
  );
}
