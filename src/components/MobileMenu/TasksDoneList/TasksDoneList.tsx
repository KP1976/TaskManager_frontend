import { TaskDone } from "./TaskDone/TaskDone";
import "./TasksDoneList.css";

interface TaskDoneInterface {
  id: number;
  createdAt: string;
  title: string;
}

const fakeTasksDone: TaskDoneInterface[] = [
  {
    id: 1,
    createdAt: "20.03.2022, 12:26:17",
    title: "Dokończyć aplikację To-Do",
  },
  {
    id: 2,
    createdAt: "20.03.2022, 12:26:17",
    title: "Wyjść z psem na spacer",
  },
  {
    id: 3,
    createdAt: "20.03.2022, 12:26:17",
    title: "Zjeść obiad",
  },
  {
    id: 4,
    createdAt: "20.03.2022, 12:26:17",
    title: "Obejrzeć film",
  },
  {
    id: 5,
    createdAt: "20.03.2022, 12:26:17",
    title: "Zrobić zakupy",
  },
];

export const TasksDoneList = () => (
  <ul className="TasksDoneList">
    {fakeTasksDone.map((taskdone) => (
      <TaskDone {...taskdone} key={taskdone.id} />
    ))}
  </ul>
);
