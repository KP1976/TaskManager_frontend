import { useState } from "react";
import { AddTaskContext } from "./context/AddTaskContext";
import { MenuView } from "./views/MenuView";
import { TasksView } from "./views/TasksView";
import { AddTaskView } from "./views/AddTaskView";

import "./App.css";

export const App = () => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <AddTaskContext.Provider
      value={{
        addTaskIsOpen,
        setAddTaskIsOpen,
        mobileMenuIsOpen,
        setMobileMenuIsOpen,
      }}
    >
      <div className="App">
        <MenuView open={mobileMenuIsOpen} />
        <TasksView />
        <AddTaskView open={addTaskIsOpen} />
      </div>
    </AddTaskContext.Provider>
  );
};
