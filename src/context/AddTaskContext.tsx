import { createContext } from "react";

export const AddTaskContext = createContext({
  addTaskIsOpen: false,
  setAddTaskIsOpen: (open: boolean) => {},
});
