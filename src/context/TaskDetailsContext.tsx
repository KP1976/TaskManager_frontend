import { createContext } from "react";

export const TaskDetailsContext = createContext({
  taskDetails: {
    id: "",
    title: "",
    category: "",
    createdAt: new Date(),
  },
  setTaskDetails: (taskDetails: {
    id: string;
    title: string;
    category: string;
    createdAt: Date;
  }) => {},
});
