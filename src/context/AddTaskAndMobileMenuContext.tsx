import { createContext } from "react";

export const AddTaskAndMobileMenuContext = createContext({
  addTaskIsOpen: false,
  setAddTaskIsOpen: (open: boolean) => {
    console.log(open);
  },
  mobileMenuIsOpen: false,
  setMobileMenuIsOpen: (open: boolean) => {
    console.log(open);
  },
});
