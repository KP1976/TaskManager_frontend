import {MenuView} from "./views/MenuView";
import {TasksView} from "./views/TasksView";
import {AddTaskView} from "./views/AddTaskView";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <MenuView/>
      <TasksView/>
      <AddTaskView/>
    </div>
  );
};
