import "./Tasks.css";
import {TaskList} from "./TaskList/TaskList";

export const Tasks = () => (
  <main className="Tasks">
    <h2 className="Tasks__title">zadania</h2>
    <TaskList/>
    <h2 className="Tasks__title">skończone</h2>
    <div className="Tasks__quantity-done-tasks">
      <span>36</span>
    </div>
  </main>
);
