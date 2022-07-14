import { TaskList } from "./TaskList/TaskList";
import { useContext } from "react";
import { AddTaskAndMobileMenuContext } from "../../context/AddTaskAndMobileMenuContext";
import { TasksContext } from "../../context/TasksContext";

import "./Tasks.css";
import { AddTaskButton } from "./AddTaskButton/AddTaskButton";

interface Props {
  grandGrandGrandFather: (value: string) => void;
}

export const Tasks = ({ grandGrandGrandFather }: Props) => {
  const { addTaskIsOpen, setAddTaskIsOpen } = useContext(
    AddTaskAndMobileMenuContext
  );
  const { tasks } = useContext(TasksContext);

  const sumOfTasksDone = tasks
    .map((task) => task.isDone)
    .reduce((prev, curr) => prev + curr, 0);

  const showAddTask = () => {
    setAddTaskIsOpen(!addTaskIsOpen);
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
      <AddTaskButton showAddTask={showAddTask} />
    </main>
  );
};
