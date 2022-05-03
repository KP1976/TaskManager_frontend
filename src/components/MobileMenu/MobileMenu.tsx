import { TasksDoneList } from "./TasksDoneList/TasksDoneList";

import "./MobileMenu.css";

export const MobileMenu = () => (
  <div className="MobileMenu">
    <h2 className="MobileMenu__title">zadania zrobione</h2>
    <TasksDoneList />
  </div>
);
