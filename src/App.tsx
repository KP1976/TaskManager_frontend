import { useEffect, useState } from "react";
import { AddTaskAndMobileMenuContext } from "./context/AddTaskAndMobileMenuContext";
import { TasksContext } from "./context/TasksContext";
import { ModifyTaskContext } from "./context/ModifyTaskContext";
import { TaskDetailsContext } from "./context/TaskDetailsContext";
import { MenuView } from "./views/MenuView";
import { TasksView } from "./views/TasksView";
import { AddTaskView } from "./views/AddTaskView";
import { DesktopView } from "./views/DesktopView";
import { SingleTask } from "./interfaces/TaskInterface";

import "./App.css";

export const App = () => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isModifyTask, setIsModifyTask] = useState(false);
  const [tasks, setTasks] = useState<SingleTask[]>([]);
  const [taskDetails, setTaskDetails] = useState({
    id: "",
    title: "",
    category: "",
    createdAt: new Date(),
  });
  const [modifyTask, setModifyTask] = useState({ id: "", title: "" });

  useEffect(() => {
    void (async () => {
      const response = await fetch("http://localhost:3001/api/tasks/");
      const data = (await response.json()) as SingleTask[];
      const filteredData = data.filter((task) => !task.isDone);

      setTasks(data);
      setTaskDetails(filteredData[0]);
    })();
  }, []);

  return (
    <ModifyTaskContext.Provider value={{ modifyTask, setModifyTask }}>
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
            <h1 className="desktop-main-title">
              Aplikacja do&nbsp;zarządzania&nbsp;zadaniami
            </h1>
            <TaskDetailsContext.Provider
              value={{ taskDetails, setTaskDetails }}
            >
              <MenuView open={mobileMenuIsOpen} />
              <TasksView />
              <AddTaskView open={addTaskIsOpen} />
              <DesktopView />
            </TaskDetailsContext.Provider>
          </div>
        </AddTaskAndMobileMenuContext.Provider>
      </TasksContext.Provider>
    </ModifyTaskContext.Provider>
  );
};
