import { TaskDone } from "./TaskDone/TaskDone";
import "./TasksDoneList.css";

export const TasksDoneList = () => (
  <ul className="tasks-done-list">
    <TaskDone />
  </ul>
);
