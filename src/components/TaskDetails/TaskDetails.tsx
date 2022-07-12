import "./TaskDetails.css";

export const TaskDetails = () => {
  return (
    <div className="TaskDetails">
      <h2 className="TaskDetails__title">szczegóły zadania</h2>
      <h3 className="TaskDetails__subtitle">Nazwa zadania</h3>
      <p className="TaskDetails__task-title">Wyjść z psem na spacer</p>
      <h3 className="TaskDetails__subtitle">Typ zadania</h3>
      <p className="TaskDetails__task-category">
        <span className="TaskDetails__task-category-dot TaskDetails__task-category-dot--orange"></span>
        <span className="TaskDetails__task-category-name">Rekreacja</span>
      </p>
      <h3 className="TaskDetails__subtitle">Data utworzenia zadania</h3>
      <p className="TaskDetails__task-category">20 listopada 2020</p>
      <h3 className="TaskDetails__subtitle">Godzina utworzenia zadania</h3>
      <p className="TaskDetails__task-category">18:35</p>
      <button className="TaskDetails__modify-button">modyfikuj zadanie</button>
    </div>
  );
};
