import { useContext } from "react";
import { TaskDone } from "./TaskDone/TaskDone";
import { TasksContext } from "../../../context/TasksContext";

import "./TasksDoneList.css";

// const fakeTasksDone: TaskDoneInterface[] = [
//   {
//     id: 1,
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Dokończyć aplikację To-Do",
//   },
//   {
//     id: 2,
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Wyjść z psem na spacer",
//   },
//   {
//     id: 3,
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Zjeść obiad",
//   },
//   {
//     id: 4,
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Obejrzeć film",
//   },
//   {
//     id: 5,
//     createdAt: "20.03.2022, 12:26:17",
//     title: "Zrobić zakupy",
//   },
// ];

export const TasksDoneList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <ul className="TasksDoneList">
      {tasks
        .filter((task) => task.isDone)
        .map((taskdone) => (
          <TaskDone {...taskdone} key={taskdone.id} />
        ))}
    </ul>
  );
};
