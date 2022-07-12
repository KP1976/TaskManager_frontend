import { CategoryIcon } from "./CategoryIcon/CategoryIcon";
import { Icons } from "./Icons/Icons";
import { formatedDate } from "../../../../utils/formatedDate";
import { AddTaskAndMobileMenuContext } from "../../../../context/AddTaskAndMobileMenuContext";

import "./Task.css";
import { useContext } from "react";

interface Props {
  id: string;
  title: string;
  createdAt: Date;
  category: string;
  grandFather: (value: string) => void;
}

export const Task = (props: Props) => {
  const { id, category, title, createdAt, grandFather } = props;
  const { setAddTaskIsOpen } = useContext(AddTaskAndMobileMenuContext);

  const parent = (value: string) => {
    grandFather(value);
  };

  const handleClick = () => {
    console.log(`kliknąłęś taska o identyfikatorze: ${id}`);
    setAddTaskIsOpen(false);
  };

  return (
    <li className="Task" data-task-id={id} onClick={handleClick}>
      <CategoryIcon category={category} color={"white"} />
      <div className="Task__texts">
        <h3 className="Task__title">{title}</h3>
        <span className="Task__date">{formatedDate(createdAt)}</span>
      </div>
      <Icons taskId={id} parent={parent} title={title} />
    </li>
  );
};
