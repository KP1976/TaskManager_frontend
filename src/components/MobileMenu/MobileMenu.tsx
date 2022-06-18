import { TasksDoneList } from "./TasksDoneList/TasksDoneList";

import "./MobileMenu.css";

interface Props {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: Props) => {
  return (
    <div className={isOpen ? "MobileMenu show" : "MobileMenu"}>
      <h2 className="MobileMenu__title">zadania zrobione</h2>
      <TasksDoneList />
    </div>
  );
};
