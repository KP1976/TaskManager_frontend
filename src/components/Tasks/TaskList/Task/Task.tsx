import { CategoryIcon } from "./CategoryIcon/CategoryIcon";
import { Icons } from "./Icons/Icons";

import "./Task.css";

interface Props {
  id: string;
  title: string;
  createdAt: Date;
  category: string;
  isDone: boolean;
  grandFather: (value: string) => void;
}

export const Task = (props: Props) => {
  const { id, category, title, createdAt, grandFather } = props;
  const formatedDate = new Date(createdAt);

  const parent = (value: string) => {
    grandFather(value);
  };

  const date =
    ("0" + String(formatedDate.getDate())).slice(-2) +
    "." +
    ("0" + String(formatedDate.getMonth() + 1)).slice(-2) +
    "." +
    String(formatedDate.getFullYear()) +
    ", " +
    ("0" + String(formatedDate.getHours())).slice(-2) +
    ":" +
    ("0" + String(formatedDate.getMinutes())).slice(-2) +
    ":" +
    ("0" + String(formatedDate.getSeconds())).slice(-2);

  return (
    <li className="Task" data-task-id={id}>
      <CategoryIcon category={category} />
      <div className="Task__texts">
        <h3 className="Task__title">{title}</h3>
        <span className="Task__date">{date}</span>
      </div>
      <Icons taskId={id} parent={parent} />
    </li>
  );
};
