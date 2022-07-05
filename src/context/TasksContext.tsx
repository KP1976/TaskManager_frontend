import { createContext } from "react";
import { SingleTask } from "../interfaces/TaskInterface";

export const TasksContext = createContext({
  tasks: [
    {
      id: "",
      title: "",
      createdAt: new Date(),
      category: "",
      isDone: 0 | 1,
    },
  ],
  setTasks: (tasks: SingleTask[]) => {},
});
