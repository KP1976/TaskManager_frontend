import { useEffect, useState } from "react";
import { AddTaskAndMobileMenuContext } from "./context/AddTaskAndMobileMenuContext";
import { TasksContext } from "./context/TasksContext";
import { MenuView } from "./views/MenuView";
import { TasksView } from "./views/TasksView";
import { AddTaskView } from "./views/AddTaskView";
import { SingleTask } from "./interfaces/TaskInterface";

import "./App.css";

export const App = () => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isModifyTask, setIsModifyTask] = useState(false);
  const [tasks, setTasks] = useState<SingleTask[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await fetch("http://localhost:3001/api/tasks/");
      const data = (await response.json()) as SingleTask[];

      setTasks(data);
    })();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <AddTaskAndMobileMenuContext.Provider
        value={{
          addTaskIsOpen,
          setAddTaskIsOpen,
          mobileMenuIsOpen,
          setMobileMenuIsOpen,
          isModifyTask,
          setIsModifyTask,
        }}
      >
        <div className="App">
          <MenuView open={mobileMenuIsOpen} />
          <TasksView />
          <AddTaskView open={addTaskIsOpen} />
        </div>
      </AddTaskAndMobileMenuContext.Provider>
    </TasksContext.Provider>
  );
};
