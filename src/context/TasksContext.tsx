import { createContext } from "react";

interface Task {
  id: string;
  title: string;
  createdAt: string | Date;
  category: string;
  isDone: boolean;
}

const tasks: Task[] = [];

export const TasksContext = createContext<Task[]>(tasks);
