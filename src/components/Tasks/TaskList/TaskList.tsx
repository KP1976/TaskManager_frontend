import {Task} from "./Task/Task";

import "./TaskList.css";

interface Task {
  id: number;
  category: string;
  createdAt: string;
  title: string;
  isDone: boolean;
}

const fakeTasks: Task[] = [
  {
    id: 1,
    category: "technologia",
    createdAt: "20.03.2022, 12:26:17",
    title: "Dokończyć aplikację To-Do",
    isDone: false,
  },
  {
    id: 2,
    category: "rekreacja",
    createdAt: "20.03.2022, 12:26:17",
    title: "Wyjść z psem na spacer",
    isDone: false,
  },
  {
    id: 3,
    category: "jedzenie",
    createdAt: "20.03.2022, 12:26:17",
    title: "Zjeść obiad",
    isDone: false,
  },
  {
    id: 4,
    category: "osobiste",
    createdAt: "20.03.2022, 12:26:17",
    title: "Obejrzeć film",
    isDone: false,
  },
];

export const TaskList = () => (
  <ul className="TaskList">
    {fakeTasks.map((task) => (
      <Task {...task} key={task.id}/>
    ))}
  </ul>
);
