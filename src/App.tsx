import { TasksView } from "./views/TasksView";
import { MenuView } from "./views/MenuView";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <MenuView />
      <TasksView />
    </div>
  );
};
