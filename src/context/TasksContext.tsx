import { createContext } from "react";

interface Task {
  id: string;
  title: string;
  createdAt: Date;
  category: string;
  isDone: boolean;
}

export const TasksContext = createContext<Task[]>([]);
