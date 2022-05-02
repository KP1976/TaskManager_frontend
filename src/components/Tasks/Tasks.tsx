import "./Tasks.css";
import {TaskList} from "./TaskList/TaskList";

export const Tasks = () => (
  <main className="Tasks">
    <h2 className="Tasks__title">zadania</h2>
    <TaskList/>
  </main>
);
