import { useState } from "react";
import { AddTaskContext } from "./Context/AddTaskContext";
import { MenuView } from "./views/MenuView";
import { TasksView } from "./views/TasksView";
import { AddTaskView } from "./views/AddTaskView";

import "./App.css";

export const App = () => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);

  return (
    <AddTaskContext.Provider value={{ addTaskIsOpen, setAddTaskIsOpen }}>
      <div className="App">
        <MenuView />
        <TasksView />
        <AddTaskView open={addTaskIsOpen} />
      </div>
    </AddTaskContext.Provider>
  );
};
