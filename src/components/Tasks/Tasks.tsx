import { TaskList } from "./TaskList/TaskList";
import { useContext } from "react";
import { AddTaskAndMobileMenuContext } from "../../context/AddTaskAndMobileMenuContext";
import { TasksContext } from "../../context/TasksContext";

import "./Tasks.css";

interface Props {
  grandGrandGrandFather: (value: string) => void;
}

export const Tasks = ({ grandGrandGrandFather }: Props) => {
  const { setAddTaskIsOpen } = useContext(AddTaskAndMobileMenuContext);
  const tasks = useContext(TasksContext);

  const sumOfTasksDone = tasks
    .map((task) => task.isDone)
    .reduce((prev, curr) => prev + curr, 0);

  const showAddTask = () => {
    setAddTaskIsOpen(true);
  };

  const grandGrandFather = (value: string) => {
    grandGrandGrandFather(value);
  };

  return (
    <main className="Tasks">
      <h2 className="Tasks__title">zadania</h2>
      <TaskList grandGrandFather={grandGrandFather} />
      <h2 className="Tasks__title">skończone</h2>
      <div className="Tasks__quantity-done-tasks">
        <span>{sumOfTasksDone}</span>
      </div>
      <button className="Tasks__add-task-button" onClick={showAddTask}>
        +
      </button>
    </main>
  );
};
