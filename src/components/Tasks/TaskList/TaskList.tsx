import { useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { Task } from "./Task/Task";

import "./TaskList.css";

interface Props {
  grandGrandFather: (value: string) => void;
}

// const fakeTasks: TaskInterface[] = [
//   {
//     id: 1,
//     category: "technologia",
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Dokończyć aplikację To-Do",
//     isDone: false,
//   },
//   {
//     id: 2,
//     category: "rekreacja",
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Wyjść z psem na spacer",
//     isDone: false,
//   },
//   {
//     id: 3,
//     category: "jedzenie",
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Zjeść obiad",
//     isDone: false,
//   },
//   {
//     id: 4,
//     category: "osobiste",
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Obejrzeć film",
//     isDone: false,
//   },
// ];

export const TaskList = ({ grandGrandFather }: Props) => {
  const tasks = useContext(TasksContext);

  const grandFather = (value: string) => {
    grandGrandFather(value);
  };

  return (
    <ul className="TaskList">
      {tasks
        .filter((task) => !task.isDone)
        .map((task) => (
          <Task {...task} key={task.id} grandFather={grandFather} />
        ))}
    </ul>
  );
};
