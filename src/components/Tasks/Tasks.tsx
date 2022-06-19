import { TaskList } from "./TaskList/TaskList";
import { useContext } from "react";
import { AddTaskAndMobileMenuContext } from "../../context/AddTaskAndMobileMenuContext";

import "./Tasks.css";

export const Tasks = () => {
  const { setAddTaskIsOpen } = useContext(AddTaskAndMobileMenuContext);

  const showAddTask = () => {
    setAddTaskIsOpen(true);
  };

  return (
    <main className="Tasks">
      <h2 className="Tasks__title">zadania</h2>
      <TaskList />
      <h2 className="Tasks__title">skończone</h2>
      <div className="Tasks__quantity-done-tasks">
        <span>36</span>
      </div>
      <button className="Tasks__add-task-button" onClick={showAddTask}>
        +
      </button>
    </main>
  );
};
