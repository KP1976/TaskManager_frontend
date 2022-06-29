import { createContext } from "react";

interface Task {
  id: string;
  title: string;
  createdAt: Date;
  category: string;
  isDone: number;
}

export const TasksContext = createContext<Task[]>([]);
