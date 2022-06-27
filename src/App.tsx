import { useEffect, useState } from "react";
import { AddTaskAndMobileMenuContext } from "./context/AddTaskAndMobileMenuContext";
import { TasksContext } from "./context/TasksContext";
import { TaskIdToDeleteContext } from "./context/TaskIdToDeleteContext";
import { MenuView } from "./views/MenuView";
import { TasksView } from "./views/TasksView";
import { AddTaskView } from "./views/AddTaskView";

import "./App.css";

interface Task {
  id: string;
  title: string;
  createdAt: Date;
  category: string;
  isDone: boolean;
}

export const App = () => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await fetch("http://localhost:3001/api/tasks/");
      const data = (await response.json()) as Task[];

      setTasks(data);
    })();
  }, []);

  return (
    <TasksContext.Provider value={tasks}>
      <AddTaskAndMobileMenuContext.Provider
        value={{
          addTaskIsOpen,
          setAddTaskIsOpen,
          mobileMenuIsOpen,
          setMobileMenuIsOpen,
        }}
      >
        <div className="App">
          <MenuView open={mobileMenuIsOpen} />
          <TaskIdToDeleteContext.Provider value={""}>
            <TasksView />
          </TaskIdToDeleteContext.Provider>
          <AddTaskView open={addTaskIsOpen} />
        </div>
      </AddTaskAndMobileMenuContext.Provider>
    </TasksContext.Provider>
  );
};
